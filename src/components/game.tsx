import { FunctionComponent, Fragment } from 'react';
import GridSize from '../components/grid-size';
import Grid from '../components/grid';

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

      <hr />

      <button type="button" className="btn btn-secondary">
        Start simulation
      </button>
    </Fragment>
  );
};

export default Game;
