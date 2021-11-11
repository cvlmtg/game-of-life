import { useCallback, useEffect, useState, useMemo } from 'react';
import { nextGeneration } from '../actions/game-actions';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

type OnToggle = () => void;

// --------------------------------------------------------------------

export function useRandomId(): string {
  return useMemo(() => Math.random().toString(36).substring(2, 6) || '-', []);
}

export function useSimulation(empty: boolean): [ boolean, OnToggle ] {
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
