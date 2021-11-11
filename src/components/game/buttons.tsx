import { FunctionComponent, Fragment } from 'react';

import { resetGame } from '../../actions/game-actions';
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
  const onReset  = () => {
    resetGame(dispatch);
  };

  if (running === true) {
    return (
      <button type="button" className="btn btn-secondary"
        disabled={empty} onClick={onToggle}>
        Stop simulation
      </button>
    );
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-secondary"
        disabled={empty} onClick={onToggle}>
        Start simulation
      </button>
      <button type="button" className="btn btn-secondary-outline ms-3"
        onClick={onReset}>
        Reset
      </button>
    </Fragment>
  );
};

export default Buttons;
