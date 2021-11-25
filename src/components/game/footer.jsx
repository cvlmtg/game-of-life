import { FunctionComponent, Fragment } from 'react';

import { resetGame, nextTick } from '../../actions/game-actions';
import { NEXT_STEP } from '../../constants/constants';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

interface Props {
  empty: boolean;
  running: boolean;
  onToggle: () => void;
}

// --------------------------------------------------------------------

const Footer: FunctionComponent<Props> = ({ empty, running, onToggle }) => {
  const dispatch = useDispatch();
  const onReset = () => {
    resetGame(dispatch);
  };
  const onNext = () => {
    nextTick(dispatch);
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
        onClick={onNext}>
        <span className="d-none d-md-inline">
          Next
        </span>
        <i className={NEXT_STEP} />
      </button>
      <button type="button" className="btn btn-secondary-outline ms-3"
        onClick={onReset}>
        Reset
      </button>
    </Fragment>
  );
};

export default Footer;
