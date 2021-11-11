import type { FunctionComponent } from 'react';
import type { Cell } from '../../utils/board';

import { ALIVE } from '../../constants/constants';

// --------------------------------------------------------------------

const ICON_ALIVE = 'bi-circle-fill';
const ICON_DEAD  = 'bi-circle';

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
