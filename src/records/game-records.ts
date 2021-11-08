import type { Board } from '../utils/board';
import { Record } from 'immutable';

// --------------------------------------------------------------------

interface StateInterface {
  cells:      Board,
  generation: number,
  sizeX:      number,
  sizeY:      number
};

// --------------------------------------------------------------------

export class State extends Record<StateInterface>({
  cells:      [],
  generation: 0,
  sizeX:      0,
  sizeY:      0
}) {};
