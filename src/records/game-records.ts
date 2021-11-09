import type { Grid } from '../utils/board';
import { Record } from 'immutable';

// --------------------------------------------------------------------

interface StateInterface {
  generation: number;
  grid: Grid;
  size: number;
}

// --------------------------------------------------------------------

export class State extends Record<StateInterface>({
  grid:       [],
  generation: 0,
  size:       0
}) {}
