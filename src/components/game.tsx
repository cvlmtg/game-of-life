import Buttons from './game/buttons';
import Presets from './game/presets';
import Wrapper from './game/wrapper';
import {
  FunctionComponent, Fragment, useCallback, useEffect, useState
} from 'react';

import { nextGeneration } from '../actions/game-actions';
import type { State } from '../records/game-records';
import { hasCells } from '../utils/board';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

function useSimulation(empty: boolean): [ boolean, OnToggle ] {
  const [ running, setRunning ] = useState(false);

  const dispatch = useDispatch();

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
  store: State;
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  const grid  = store.grid;
  const size  = grid.length;
  const empty = hasCells(grid) === false;

  const [ running, onToggle ] = useSimulation(empty);

  return (
    <Fragment>
      <div className="text-center">
        <p>
          Generation nr. {store.generation}
        </p>
        <Wrapper running={running} grid={grid} size={size} />
      </div>

      <Presets />
      <hr />

      <Buttons empty={empty} running={running} onToggle={onToggle} />
    </Fragment>
  );
};

export default Game;
