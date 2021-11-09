import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

interface Props {
  completed: boolean;
  active: boolean;
}

// --------------------------------------------------------------------

const Label: FunctionComponent<Props> = ({ active, completed, children }) => {
  if (completed === true) {
    return (
      <span>{children}</span>
    );
  }

  if (active === true) {
    return (
      <strong>{children}</strong>
    );
  }

  return (
    <span className="text-muted">{children}</span>
  );
};

export default Label;
