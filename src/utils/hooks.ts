import { nextTick } from '../actions/game-actions';
import { Grid, hasCells, areEqual } from './board';
import { useEffect, useState } from 'react';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

type OnToggle = () => void;

// --------------------------------------------------------------------

export function useSimulation(prev: Grid, grid: Grid): [ boolean, OnToggle ] {
  const [ running, setRunning ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const stable    = running && prev.length !== 0 ? areEqual(prev, grid) : false;
    const populated = hasCells(grid);

    if (populated === false || stable === true) {
      setRunning(false);
      return undefined;
    }

    // XXX un'animazione troppo veloce rende l'esperienza
    // abbastanza confusa. introduciamo quindi un ritardo
    // artificiale (con un sistema abbastanza crudo, ma
    // per il momento ci accontentiamo)

    let timer: ReturnType<typeof setTimeout>;

    if (running) {
      timer = setInterval(() => nextTick(dispatch), 250);

      return () => {
        clearInterval(timer);
      };
    }

    return undefined;
  }, [ prev, grid, running, dispatch ]);

  if (running === true) {
    return [ true, () => setRunning(false) ];
  }

  return [ false, () => setRunning(true) ];
}
