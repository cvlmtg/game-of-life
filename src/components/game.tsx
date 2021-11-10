import { FunctionComponent, Fragment } from 'react';
import GridSize from '../components/grid-size';
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
  if (store.size === 0) {
    return (
      <GridSize />
    );
  }

  return (
    <Fragment>
      <div className="text-center">
        <Grid store={store} />
      </div>

      <Presets />
      <hr />

      <Buttons store={store} />
    </Fragment>
  );
};

export default Game;
