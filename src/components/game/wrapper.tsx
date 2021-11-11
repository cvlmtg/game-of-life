import { FunctionComponent } from 'react';
import Board from '../board';
import Draw from '../draw';

import { drawCell } from '../../actions/game-actions';
import type { Grid } from '../../utils/board';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

interface Props {
  running: boolean;
  grid: Grid;
}

// --------------------------------------------------------------------

const Wrapper: FunctionComponent<Props> = ({ running, grid }) => {
  const dispatch = useDispatch();
  const size     = grid.length;

  const onChange = (x: number, y: number) => {
    drawCell(dispatch, x, y);
  };

  if (running === false) {
    return (
      <Draw className="d-inline-block mx-auto"
        size={size} onChange={onChange}>
        <Board content={grid} />
      </Draw>
    );
  }

  return (
    <div className="d-inline-block mx-auto">
      <Board content={grid} />
    </div>
  );
};

export default Wrapper;
