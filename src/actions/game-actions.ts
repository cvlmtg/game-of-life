import * as actions from '../constants/actions';
import type { Dispatch, Action } from 'monarc';

// --------------------------------------------------------------------

export function updateGridSize(dispatch: Dispatch<Action>, size: number): void {
  dispatch({ type: actions.UPDATE_GRID_SIZE, size });
}

export function nextGeneration(dispatch: Dispatch<Action>): void {
  dispatch({ type: actions.NEXT_GENERATION });
}

export function resetGame(dispatch: Dispatch<Action>): void {
  dispatch({ type: actions.RESET_GAME });
}
