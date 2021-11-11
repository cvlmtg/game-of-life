import { FunctionComponent, MouseEvent, useState, useCallback } from 'react';

// --------------------------------------------------------------------

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

function coords(evt: MouseEvent<HTMLDivElement>, rect: Rect, size: number): [ number, number ] {
  const x = Math.floor((evt.clientX - rect.left) * size / rect.width);
  const y = Math.floor((evt.clientY - rect.top) * size / rect.height);

  return [ x, y ];
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

  const onMove = useCallback((evt: MouseEvent<HTMLDivElement>) => {
    const [ x, y ] = coords(evt, state, size);

    if (x !== state.lastX || y !== state.lastY) {
      onChange(x, y);
    }

    setState({ ...state, lastX: x, lastY: y });
  }, [ state, size, onChange ]);

  const onDown = useCallback((evt: MouseEvent<HTMLDivElement>) => {
    const rect     = evt.currentTarget.getBoundingClientRect();
    const [ x, y ] = coords(evt, rect, size);

    onChange(x, y);
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

  const onUp = useCallback(() => {
    setState(init);
  }, []);

  const move = state.drawing ? onMove : undefined;

  return (
    <div className={className} onMouseMove={move}
      onMouseDown={onDown} onMouseUp={onUp}>
      {children}
    </div>
  );
};

export default Draw;
