import Item from './instructions/item';

import type { Grid, Row, Cell } from '../utils/board';
import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';

import { DEAD } from '../constants/constants';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

function drawn(grid: Grid) {
  return grid.some((row: Row) => row.some((cell: Cell) => cell !== DEAD));
}

// --------------------------------------------------------------------

const Instructions: FunctionComponent<Props> = ({ store }) => {
  const init       = store.size === 0;
  const grid       = store.size !== 0;
  const draw       = drawn(store.grid);
  const simulation = store.generation !== 0;

  return (
    <ul className="my-5">
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
