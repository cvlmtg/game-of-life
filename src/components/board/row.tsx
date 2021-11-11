import type { FunctionComponent } from 'react';
import type { Row, Cell } from '../../utils/board';
import BoardCell from './cell';

// --------------------------------------------------------------------

interface Props {
  content: Row;
}

// --------------------------------------------------------------------

const BoardRow: FunctionComponent<Props> = ({ content }) => {
  return (
    <tr>
      {content.map((cell: Cell, index: number) => (
        <BoardCell key={index} content={cell} />
      ))}
    </tr>
  );
};

export default BoardRow;
