import { updateGridSize } from '../actions/game-actions';
import { FunctionComponent, useState } from 'react';
import Input from './grid-size/input';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

const GridSize: FunctionComponent = () => {
  const [ sizeX, setX ] = useState(2);
  const [ sizeY, setY ] = useState(2);

  const dispatch = useDispatch();

  const onSubmit = () => {
    updateGridSize(dispatch, sizeX, sizeY);
  };

  return (
    <form>
      <div className="row align-items-center">
        <Input value={sizeX} onChange={setX}>Width</Input>
        <Input value={sizeY} onChange={setY}>Height</Input>
      </div>

      <div className="row">
        <button type="button" onClick={onSubmit}>Create grid</button>
      </div>
    </form>
  );
};

export default GridSize;
