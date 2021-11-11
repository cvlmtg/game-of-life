import type { Grid } from '../utils/board';
import { immerable } from 'immer';

// --------------------------------------------------------------------

export class State {
  [immerable] = true;

  grid: Grid = [];

  tick = 0;
}
