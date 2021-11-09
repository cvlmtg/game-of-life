import gameReducer from '../reducers/game-reducer';
import { State } from '../records/game-records';
import { createContainer } from 'monarc';

import type { FunctionComponent } from 'react';

interface Props {
  store: State
}

// --------------------------------------------------------------------

const GameContainer: FunctionComponent<Props> = ({ store }) => {
  if (store.sizeX === 0) {
    return (
      <div>
        setup
      </div>
    );
  }

  return (
    <div>
      foo
    </div>
  );
};

export default createContainer(GameContainer, gameReducer);
