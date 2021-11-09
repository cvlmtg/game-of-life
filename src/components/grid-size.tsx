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
    <div className="card w-50 mx-auto my-3 align-items-center">
      <form className="card-body">
        <p className="lead">Select the grid size</p>

        <div className="row align-items-center">
          <Input value={sizeX} onChange={setX}>Width</Input>
          <Input value={sizeY} onChange={setY}>Height</Input>

          <div className="col">
            <button type="button" className="btn btn-primary"
              onClick={onSubmit}>
              Create grid
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GridSize;
