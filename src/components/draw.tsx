import {
  FunctionComponent, MouseEvent, TouchEvent,
  useState, useEffect, useCallback
} from 'react';

// --------------------------------------------------------------------

type Evt = MouseEvent<HTMLElement> | TouchEvent<HTMLElement>;

interface Props {
  onChange: (x: number, y: number) => void;
  className?: string;
  size: number;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height:number;
}

function coords(evt: Evt, rect: Rect, size: number): [ number, number ] {
  const max = size - 1;
  let clientX;
  let clientY;

  if ('touches' in evt) {
    clientX = evt.touches[0].pageX;
    clientY = evt.touches[0].pageY;
  } else {
    clientX = evt.clientX;
    clientY = evt.clientY;
  }

  const x = Math.floor((clientX - rect.left) * size / rect.width);
  const y = Math.floor((clientY - rect.top) * size / rect.height);

  // su mobile l'evento move ci segue anche al di fuori
  // della griglia (al contrario che su desktop), quindi
  // dobbiamo stare attenti a non "sbordare"

  const maxX = Math.min(x, max);
  const maxY = Math.min(y, max);

  return [
    Math.max(maxX, 0),
    Math.max(maxY, 0)
  ];
}

const init = {
  drawing: false,
  left:    0,
  top:     0,
  width:   0,
  height:  0,
  lastX:   0,
  lastY:   0
};

// --------------------------------------------------------------------

const Draw: FunctionComponent<Props> = ({ className, size, children, onChange }) => {
  const [ state, setState ] = useState(init);

  const onMove = useCallback((evt: Evt) => {
    const [ x, y ] = coords(evt, state, size);

    if (x !== state.lastX || y !== state.lastY) {
      onChange(x, y);
    }

    setState({ ...state, lastX: x, lastY: y });
  }, [ state, size, onChange ]);

  const onStart = useCallback((evt: Evt) => {
    const rect = evt.currentTarget.getBoundingClientRect();
    let x = 0;
    let y = 0;

    if ('touches' in evt && evt.touches.length > 1) {
      return;
    }

    if (evt.type === 'mousedown') {
      [ x, y ] = coords(evt, rect, size);

      onChange(x, y);
    }

    setState({
      height:  rect.height,
      width:   rect.width,
      left:    rect.left,
      top:     rect.top,
      drawing: true,
      lastX:   x,
      lastY:   y
    });
  }, [ size, onChange ]);

  const onEnd = useCallback(() => {
    setState(init);
  }, []);

  // registriamo il mouseup su document, perché se rilasciamo
  // il mouse al di fuori della griglia, rimarremo "bloccati"
  // in modalità disegno

  useEffect(() => {
    document.addEventListener('mouseup', onEnd);

    return () => {
      document.removeEventListener('mouseup', onEnd);
    };
  }, [ onEnd ]);

  const move = state.drawing ? onMove : undefined;

  return (
    <div className={className} onMouseDown={onStart} onMouseMove={move}
      onTouchStart={onStart} onTouchMove={onMove}
      onTouchEnd={onEnd}>
      {children}
    </div>
  );
};

export default Draw;
