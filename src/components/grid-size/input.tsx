import { FunctionComponent, ChangeEvent, Fragment } from 'react';
import { useRandomId } from '../../utils/hooks';

// --------------------------------------------------------------------

interface Props {
  onChange: (value: number) => void;
  value: number;
}

const MAX = 100;
const MIN = 2;

// --------------------------------------------------------------------

const InputSize: FunctionComponent<Props> = ({ value, children, onChange }) => {
  const id = useRandomId();

  const handler = (evt: ChangeEvent<HTMLInputElement>) => {
    const changed = Number(evt.target.value);

    if (changed >= MIN && changed <= MAX) {
      onChange(changed);
    }
  };

  return (
    <Fragment>
      <div className="col-auto">
        <label htmlFor={id} className="col-form-label">{children}</label>
      </div>
      <div className="col-auto">
        <input id={id} className="form-control" onChange={handler}
          type="number" min={MIN} max={MAX} value={value} />
      </div>
    </Fragment>
  );
};

export default InputSize;
