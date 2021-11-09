import gameReducer from '../reducers/game-reducer';
import GridSize from '../components/grid-size';
import { createContainer } from 'monarc';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const GameContainer: FunctionComponent<Props> = ({ store }) => {
  if (store.sizeX === 0) {
    return (
      <GridSize />
    );
  }

  return (
    <div>
      <p>Grid size: {store.sizeX} × {store.sizeY}</p>
    </div>
  );
};

export default createContainer(GameContainer, gameReducer);
