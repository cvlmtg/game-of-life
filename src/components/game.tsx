import GridSize from '../components/grid-size';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  if (store.size === 0) {
    return (
      <GridSize />
    );
  }

  return (
    <p>Grid size: {store.size} × {store.size}</p>
  );
};

export default Game;
