import gameReducer from '../reducers/game-reducer';
import { createContainer } from 'monarc';
import Game from '../components/game';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const GameContainer: FunctionComponent<Props> = ({ store }) => {
  return (
    <div className="p-3">
      <h1 className="text-center">Conway&apos;s Game of Life</h1>
      <Game store={store} />
    </div>
  );
};

export default createContainer(GameContainer, gameReducer);
