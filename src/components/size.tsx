import Select, { RSSValue, RSSOption } from 'react-smart-select';
import { FunctionComponent, Fragment, useState } from 'react';
import Presets from './game/presets';

import { updateGridSize } from '../actions/game-actions';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

const options = [
  { label: '8 × 8', value: 8 },
  { label: '12 × 12', value: 12 },
  { label: '16 × 16', value: 16 }
];

// --------------------------------------------------------------------

const Size: FunctionComponent = () => {
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
    <Fragment>
      <div className="text-center">
        <Select value={size} options={options} onChange={setSize} />
      </div>

      <Presets />
      <hr />

      <button type="button" className="btn btn-secondary"
        disabled={disabled} onClick={onSubmit}>
        Create grid
      </button>
    </Fragment>
  );
};

export default Size;
