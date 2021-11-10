import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import { Grid, iterate } from '../utils/board';
import { DEAD } from '../constants/constants';
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

function nextGeneration(state: State): State {
  const updated = iterate(state.grid);

  return state.withMutations((mutable) => {
    mutable.set('generation', state.generation + 1);
    mutable.set('grid', updated);
  });
}

function resetGame(state: State): State {
  return state.withMutations((mutable) => {
    mutable.delete('generation');
    mutable.delete('grid');
    mutable.delete('size');
  });
}

// --------------------------------------------------------------------

export default function reduce(state: State, action: Action): State {
  switch (action.type) {
    case actions.UPDATE_GRID_SIZE:
      return updateGridSize(state, action);

    case actions.NEXT_GENERATION:
      return nextGeneration(state);

    case actions.RESET_GAME:
      return resetGame(state);

    default:
      return state;
  }
}
