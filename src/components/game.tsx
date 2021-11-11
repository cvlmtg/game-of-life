import { FunctionComponent, Fragment } from 'react';
import Buttons from './game/buttons';
import Presets from './game/presets';
import Wrapper from './game/wrapper';

import type { State } from '../records/game-records';
import { useSimulation } from '../utils/hooks';
import { hasCells } from '../utils/board';

// --------------------------------------------------------------------

interface Props {
  store: State;
}

// --------------------------------------------------------------------

const Game: FunctionComponent<Props> = ({ store }) => {
  const grid  = store.grid;
  const size  = grid.length;
  const empty = hasCells(grid) === false;

  const [ running, onToggle ] = useSimulation(empty);

  return (
    <Fragment>
      <div className="text-center">
        <p>
          Generation nr. {store.generation}
        </p>
        <Wrapper running={running} grid={grid} size={size} />
      </div>

      <Presets />
      <hr />

      <Buttons empty={empty} running={running} onToggle={onToggle} />
    </Fragment>
  );
};

export default Game;
