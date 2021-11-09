import Select, { RSSValue, RSSOption } from 'react-smart-select';
import { updateGridSize } from '../actions/game-actions';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

const options = [
  { label: '8 × 8', value: 8 },
  { label: '24 × 24', value: 24 },
  { label: '64 × 64', value: 64 }
];

// --------------------------------------------------------------------

const GridSize: FunctionComponent = () => {
  const [ size, setSize ] = useState<RSSValue>();

  const disabled = size === undefined;
  const dispatch = useDispatch();
  const onSubmit = () => {
    const selected = size as RSSOption;

    if (selected) {
      updateGridSize(dispatch, selected.value);
    }
  };

  return (
    <div className="card w-50 mx-auto my-3 align-items-center">
      <form className="card-body">
        <p className="lead">Select the grid size</p>

        <div className="row align-items-center">
          <div className="col">
            <Select value={size} options={options} onChange={setSize} />
          </div>

          <div className="col">
            <button type="button" className="btn btn-primary"
              disabled={disabled} onClick={onSubmit}>
              Create grid
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GridSize;
