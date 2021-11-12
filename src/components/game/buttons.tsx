import { FunctionComponent, Fragment } from 'react';

import { resetGame, clearGrid } from '../../actions/game-actions';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

interface Props {
  empty: boolean;
  running: boolean;
  onToggle: () => void;
}

// --------------------------------------------------------------------

const Buttons: FunctionComponent<Props> = ({ empty, running, onToggle }) => {
  const dispatch = useDispatch();
  const onClear  = () => {
    clearGrid(dispatch);
  };
  const onReset = () => {
    resetGame(dispatch);
  };

  if (running === true) {
    return (
      <button type="button" className="btn btn-secondary"
        disabled={empty} onClick={onToggle}>
        Stop game
      </button>
    );
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-secondary"
        disabled={empty} onClick={onToggle}>
        Start game
      </button>
      <button type="button" className="btn btn-secondary-outline ms-3"
        onClick={onClear}>
        Clear
      </button>
      <button type="button" className="btn btn-secondary-outline ms-3"
        onClick={onReset}>
        Reset
      </button>
    </Fragment>
  );
};

export default Buttons;
