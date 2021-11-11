import { DEAD, ALIVE } from '../constants/constants';
import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import { Grid, iterate } from '../utils/board';
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

function loadPreset(state: State, action: Action): State {
  const grid = action.preset;
  const size = grid.length;

  return state.withMutations((mutable) => {
    mutable.delete('generation');
    mutable.set('grid', grid);
    mutable.set('size', size);
  });
}

function drawCell(state: State, action: Action): State {
  const { x, y } = action;
  const current  = state.grid;
  const cell     = current[y][x];
  const value    = cell === DEAD ? ALIVE : DEAD;

  const row  = Array.from(current[y], (old, i) => (i === x ? value : old));
  const grid = Array.from(current, (old, i) => (i === y ? row : old));

  return state.withMutations((mutable) => {
    mutable.delete('generation');
    mutable.set('grid', grid);
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

    case actions.LOAD_PRESET:
      return loadPreset(state, action);

    case actions.DRAW_CELL:
      return drawCell(state, action);

    default:
      return state;
  }
}
