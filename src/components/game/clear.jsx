import { FunctionComponent } from 'react';

import { clearGrid } from '../../actions/game-actions';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

const Clear: FunctionComponent = () => {
  const dispatch = useDispatch();
  const onClear  = () => {
    clearGrid(dispatch);
  };

  return (
    <button type="button" className="btn btn-link d-block"
      onClick={onClear}>
      Clear grid
    </button>
  );
};

export default Clear;
