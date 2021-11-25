import { FunctionComponent, Fragment } from 'react';
import Presets from './game/presets';
import Wrapper from './game/wrapper';
import Footer from './game/footer';
import Clear from './game/clear';

import type { State } from '../records/game-records';
import { useSimulation } from '../utils/hooks';
import { hasCells } from '../utils/board';

// --------------------------------------------------------------------

interface Props {
  store: State;
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  const { grid, tick } = store;

  const empty = hasCells(grid) === false;

  const [ running, onToggle ] = useSimulation(grid, tick);

  return (
    <Fragment>
      <div className="text-center">
        <p>
          Tick nr. {store.tick}
        </p>
        <Wrapper running={running} grid={grid} />
      </div>

      <Presets />
      <Clear />
      <hr />

      <Footer empty={empty} running={running} onToggle={onToggle} />
    </Fragment>
  );
};

export default Game;
