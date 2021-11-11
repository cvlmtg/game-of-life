import Item from './instructions/item';

import { hasCells } from '../utils/board';

import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  store: State;
}

// --------------------------------------------------------------------

const Instructions: FunctionComponent<Props> = ({ store }) => {
  const init       = store.grid.length === 0;
  const grid       = store.grid.length !== 0;
  const draw       = hasCells(store.grid);
  const simulation = draw && store.tick !== 0;

  return (
    <ul className="mt-3 mt-md-5 mb-3">
      <Item active={init} completed={grid}>
        Select the grid size
      </Item>
      <Item active={grid} completed={draw}>
        Draw on the grid
      </Item>
      <Item active={draw} completed={simulation}>
        Start the simulation
      </Item>
    </ul>
  );
};

export default Instructions;
