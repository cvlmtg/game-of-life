import type { FunctionComponent } from 'react';
import type { Row, Cell } from '../../utils/board';
import GridCell from './cell';

// --------------------------------------------------------------------

interface Props {
  content: Row
}

// --------------------------------------------------------------------

const GridRow: FunctionComponent<Props> = ({ content }) => {
  return (
    <tr>
      {content.map((cell: Cell, index: number) => (
        <GridCell key={index} content={cell} />
      ))}
    </tr>
  );
};

export default GridRow;
