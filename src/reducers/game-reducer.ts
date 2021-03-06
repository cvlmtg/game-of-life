import { DEAD, ALIVE } from '../constants/constants';
import { State } from '../records/game-records';
import * as actions from '../constants/actions';
import { Grid, iterate } from '../utils/board';
import type { Action } from 'monarc';
import immer from 'immer';

// --------------------------------------------------------------------

function createGrid(state: State, size: number): void {
  const grid: Grid = [];

  for (let i = 0; i < size; i++) {
    const empty = new Array(size);
    const row   = empty.fill(DEAD);

    grid.push(row);
  }

  state.grid = grid;
  state.prev = [];
}

function nextTick(state: State): void {
  state.tick += 1;
  state.prev  = state.grid;
  state.grid  = iterate(state.grid);
}

function resetGame(state: State): void {
  state.grid = [];
  state.prev = [];
  state.tick = 0;
}

function loadPreset(state: State, action: Action): void {
  state.grid = action.preset;
  state.prev = [];
  state.tick = 0;
}

function drawCell(state: State, action: Action): void {
  const { x, y } = action;
  const current  = state.grid;
  const cell     = current[y][x];

  state.grid[y][x] = cell === DEAD ? ALIVE : DEAD;
  state.tick       = 0;
}

// --------------------------------------------------------------------

export default immer((state: State, action: Action): void => {
  switch (action.type) {
    case actions.UPDATE_GRID_SIZE:
      createGrid(state, action.size);
      break;

    case actions.CLEAR_GRID:
      createGrid(state, state.grid.length);
      break;

    case actions.NEXT_TICK:
      nextTick(state);
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
