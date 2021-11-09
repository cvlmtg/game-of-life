import type { FunctionComponent } from 'react';
import Label from './label';

// --------------------------------------------------------------------

interface Props {
  completed: boolean;
  active: boolean;
}

// --------------------------------------------------------------------

const Item: FunctionComponent<Props> = ({ active, completed, children }) => {
  const icon = completed ? 'h5 text-secondary bi-check' : undefined;

  return (
    <li className="mb-1">
      <Label active={active} completed={completed}>
        {children}
      </Label>
      <i className={icon} />
    </li>
  );
};

export default Item;
