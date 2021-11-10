import type { FunctionComponent } from 'react';
import type { Grid, Row } from '../utils/board';
import GridRow from './grid/row';

// --------------------------------------------------------------------

interface Props {
  content: Grid
}

// --------------------------------------------------------------------

const PetriDish: FunctionComponent<Props> = ({ content }) => {
  return (
    <table className="mx-auto">
      <tbody>
        {content.map((row: Row, index: number) => (
          <GridRow key={index} content={row} />
        ))}
      </tbody>
    </table>
  );
};

export default PetriDish;
