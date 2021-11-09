import GridSize from '../components/grid-size';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  if (store.sizeX === 0) {
    return (
      <GridSize />
    );
  }

  return (
    <p>Grid size: {store.sizeX} × {store.sizeY}</p>
  );
};

export default Game;
