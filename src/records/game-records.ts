import type { Grid } from '../utils/board';
import { immerable } from 'immer';

// --------------------------------------------------------------------

export class State {
  [immerable] = true;

  grid: Grid = [];

  generation = 0;

  size = 0;
}
