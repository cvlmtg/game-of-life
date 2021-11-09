import {
  FunctionComponent, Fragment, useCallback, useEffect, useState
} from 'react';

import { nextGeneration, resetGame } from '../../actions/game-actions';
import { Dispatch, Action, useDispatch } from 'monarc';
import { hasCells } from '../../utils/board';

import type { State } from '../../records/game-records';

// --------------------------------------------------------------------

function useSimulation(dispatch: Dispatch<Action>): [ boolean, OnToggle ] {
  const [ running, setRunning ] = useState(false);

  const onInterval = useCallback(() => {
    nextGeneration(dispatch);
  }, [ dispatch ]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (running === true) {
      timer = setInterval(onInterval, 100);

      return () => {
        clearInterval(timer);
      };
    }

    return undefined;
  }, [ running, onInterval ]);

  if (running === true) {
    return [ true, () => setRunning(false) ];
  }

  return [ false, () => setRunning(true) ];
}

type OnToggle = () => void;

interface Props {
  store: State
}

// --------------------------------------------------------------------

const GameButtons: FunctionComponent<Props> = ({ store }) => {
  const dispatch = useDispatch();
  const onReset  = () => resetGame(dispatch);
  const empty    = hasCells(store.grid) === false;

  const [ running, onToggle ] = useSimulation(dispatch);

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

export default GameButtons;
