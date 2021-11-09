import type { State } from '../records/game-records';
import type { FunctionComponent } from 'react';
import type { Row } from '../utils/board';
import GridRow from './grid/row';

// --------------------------------------------------------------------

interface Props {
  store: State
}

// --------------------------------------------------------------------

const Grid: FunctionComponent<Props> = ({ store }) => {
  const grid = store.grid;

  return (
    <table className="mx-auto">
      <tbody>
        {grid.map((row: Row, index: number) => (
          <GridRow key={index} content={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
