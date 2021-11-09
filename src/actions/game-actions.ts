import * as actions from '../constants/actions';
import type { Dispatch, Action } from 'monarc';

// --------------------------------------------------------------------

export function updateGridSize(dispatch: Dispatch<Action>, size: number): void {
  dispatch({ type: actions.UPDATE_GRID_SIZE, size });
}
