import { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { nextTick } from '../actions/game-actions';
import { Grid, hasCells, areEqual } from './board';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

type OnToggle = () => void;

// --------------------------------------------------------------------

export function useRandomId(): string {
  return useMemo(() => Math.random().toString(36).substring(2, 6) || '-', []);
}

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useSimulation(grid: Grid, tick: number): [ boolean, OnToggle ] {
  const [ running, setRunning ] = useState(false);

  const previous = usePrevious(grid);
  const dispatch = useDispatch();

  const onInterval = useCallback(() => {
    nextTick(dispatch);
  }, [ dispatch ]);

  useEffect(() => {
    const stable    = previous && tick ? areEqual(previous, grid) : false;
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
      timer = setInterval(onInterval, 250);

      return () => {
        clearInterval(timer);
      };
    }

    return undefined;
  }, [ previous, grid, tick, running, onInterval ]);

  if (running === true) {
    return [ true, () => setRunning(false) ];
  }

  return [ false, () => setRunning(true) ];
}
