import type { FunctionComponent } from 'react';
import type { Cell } from '../../utils/board';

import { ALIVE, ICON_ALIVE, ICON_DEAD } from '../../constants/constants';

// --------------------------------------------------------------------

interface Props {
  content: Cell;
}

// --------------------------------------------------------------------

const BoardCell: FunctionComponent<Props> = ({ content }) => {
  const icon = content === ALIVE ? ICON_ALIVE : ICON_DEAD;

  return (
    <td>
      <i className={icon} />
    </td>
  );
};

export default BoardCell;
