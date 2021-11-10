import * as actions from '../constants/actions';
import type { Dispatch, Action } from 'monarc';
import type { Grid } from '../utils/board';

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

export function loadPreset(dispatch: Dispatch<Action>, preset: Grid): void {
  dispatch({ type: actions.LOAD_PRESET, preset });
}
