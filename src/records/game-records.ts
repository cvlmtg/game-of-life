import type { Board } from '../utils/board';
import { Record } from 'immutable';

// --------------------------------------------------------------------

interface StateInterface {
  cells: Board;
  generation: number;
  size: number;
}

// --------------------------------------------------------------------

export class State extends Record<StateInterface>({
  cells:      [],
  generation: 0,
  size:       0
}) {}
