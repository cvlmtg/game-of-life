import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import { DEAD } from '../constants/constants';
import type { Grid } from '../utils/board';
import type { Action } from 'monarc';

// --------------------------------------------------------------------

function updateGridSize(state: State, action: Action): State {
  const size: number = action.size;
  const grid: Grid   = [];

  for (let i = 0; i < size; i++) {
    const empty = new Array(size);
    const row   = empty.fill(DEAD);

    grid.push(row);
  }

  return state.withMutations((mutable) => {
    mutable.set('grid', grid);
    mutable.set('size', size);
  });
}

// --------------------------------------------------------------------

export default function reduce(state: State, action: Action): State {
  switch (action.type) {
    case actions.UPDATE_GRID_SIZE:
      return updateGridSize(state, action);

    default:
      return state;
  }
}
