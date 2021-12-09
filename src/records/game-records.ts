import type { Grid } from '../utils/board';
import { immerable } from 'immer';

// --------------------------------------------------------------------

export class State {
  [immerable] = true;

  prev: Grid = [];

  grid: Grid = [];

  tick = 0;
}
