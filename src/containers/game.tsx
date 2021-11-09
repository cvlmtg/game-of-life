import Instructions from '../components/instructions';
import Game from '../components/game';

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
  return (
    <div className="card w-50 mx-auto mt-3 mb-5">
      <div className="card-body">
        <h1 className="card-title text-center">Conway&apos;s Game of Life</h1>
        <Instructions store={store} />
        <Game store={store} />
      </div>
    </div>
  );
};

export default createContainer(GameContainer, gameReducer);
