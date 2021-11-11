import type { Grid, Row } from '../utils/board';
import type { FunctionComponent } from 'react';
import BoardRow from './board/row';

// --------------------------------------------------------------------

interface Props {
  content: Grid;
}

// --------------------------------------------------------------------

const Board: FunctionComponent<Props> = ({ content }) => {
  return (
    <table className="mx-auto">
      <tbody>
        {content.map((row: Row, index: number) => (
          <BoardRow key={index} content={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Board;
