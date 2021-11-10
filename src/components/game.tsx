import { FunctionComponent, Fragment } from 'react';
import Grid from '../components/grid';
import Buttons from './game/buttons';
import Presets from './game/presets';

import type { State } from '../records/game-records';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  const grid = store.grid;

  return (
    <Fragment>
      <div className="text-center">
        <p>
          Generation nr. {store.generation}
        </p>
        <Grid content={grid} />
      </div>

      <Presets />
      <hr />

      <Buttons store={store} />
    </Fragment>
  );
};

export default Game;
