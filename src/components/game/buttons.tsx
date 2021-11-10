import {
  FunctionComponent, Fragment, useCallback, useEffect, useState
} from 'react';

import { nextGeneration, resetGame } from '../../actions/game-actions';
import { Dispatch, Action, useDispatch } from 'monarc';
import { hasCells } from '../../utils/board';

import type { State } from '../../records/game-records';

// --------------------------------------------------------------------

function useSimulation(dispatch: Dispatch<Action>, empty: boolean): [ boolean, OnToggle ] {
  const [ running, setRunning ] = useState(false);

  const onInterval = useCallback(() => {
    nextGeneration(dispatch);
  }, [ dispatch ]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (empty) {
      setRunning(false);
      return undefined;
    }

    // XXX un'animazione troppo veloce rende l'esperienza
    // abbastanza confusa. introduciamo quindi un ritardo
    // artificiale (con un sistema abbastanza crudo, ma
    // per il momento ci accontentiamo)

    if (running) {
      timer = setInterval(onInterval, 250);

      return () => {
        clearInterval(timer);
      };
    }

    return undefined;
  }, [ empty, running, onInterval ]);

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

  const [ running, onToggle ] = useSimulation(dispatch, empty);

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
