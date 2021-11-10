import Instructions from '../components/instructions';
import Game from '../components/game';
import Size from '../components/size';

import gameReducer from '../reducers/game-reducer';
import { createContainer } from 'monarc';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const GameContainer: FunctionComponent<Props> = ({ store }) => {
  const Component = store.size === 0 ? Size : Game;

  return (
    <div className="card w-50 mx-auto mt-3 mb-5">
      <div className="card-body">
        <h1 className="card-title text-center">Conway&apos;s Game of Life</h1>
        <Instructions store={store} />
        <Component store={store} />
      </div>
    </div>
  );
};

export default createContainer(GameContainer, gameReducer);
