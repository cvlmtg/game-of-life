import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import type { Action } from 'monarc';

// --------------------------------------------------------------------

function updateGridSize(state: State, action: Action): State {
  return state.withMutations((mutable) => {
    mutable.set('sizeX', action.x);
    mutable.set('sizeY', action.y);
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
