import { State } from '../records/game-records';

// --------------------------------------------------------------------

type Action = {
  type: string,
  [key: string]: any
}

// --------------------------------------------------------------------

export default function reduce(state: State, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
