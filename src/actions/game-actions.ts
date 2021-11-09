import * as actions from '../constants/actions';
import type { Dispatch, Action } from 'monarc';

// --------------------------------------------------------------------

export function updateGridSize(dispatch: Dispatch<Action>, x: number, y: number): void {
  dispatch({ type: actions.UPDATE_GRID_SIZE, x, y });
}
