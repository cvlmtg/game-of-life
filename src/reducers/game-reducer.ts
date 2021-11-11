import { DEAD, ALIVE } from '../constants/constants';
import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import { Grid, iterate } from '../utils/board';
import type { Action } from 'monarc';
import immer from 'immer';

// --------------------------------------------------------------------

function updateGridSize(state: State, action: Action): void {
  const size: number = action.size;
  const grid: Grid   = [];

  for (let i = 0; i < size; i++) {
    const empty = new Array(size);
    const row   = empty.fill(DEAD);

    grid.push(row);
  }

  state.grid = grid;
}

function nextGeneration(state: State): void {
  state.grid        = iterate(state.grid);
  state.generation += 1;
}

function resetGame(state: State): void {
  state.grid       = [];
  state.generation = 0;
}

function loadPreset(state: State, action: Action): void {
  state.grid       = action.preset;
  state.generation = 0;
}

function drawCell(state: State, action: Action): void {
  const { x, y } = action;
  const current  = state.grid;
  const cell     = current[y][x];

  state.grid[y][x] = cell === DEAD ? ALIVE : DEAD;
  state.generation = 0;
}

// --------------------------------------------------------------------

export default immer((state: State, action: Action): void => {
  switch (action.type) {
    case actions.UPDATE_GRID_SIZE:
      updateGridSize(state, action);
      break;

    case actions.NEXT_GENERATION:
      nextGeneration(state);
      break;

    case actions.RESET_GAME:
      resetGame(state);
      break;

    case actions.LOAD_PRESET:
      loadPreset(state, action);
      break;

    case actions.DRAW_CELL:
      drawCell(state, action);
      break;

    default:
      break;
  }
});
