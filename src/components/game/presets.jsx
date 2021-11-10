import { FunctionComponent, Fragment, useState } from 'react';
import Modal from '../modal';

// --------------------------------------------------------------------

const Presets: FunctionComponent = () => {
  const [ open, setOpen ] = useState(false);

  const onClose   = () => setOpen(false);
  const onOpen    = () => setOpen(true);
  const onConfirm = () => {
    console.log('ok') // eslint-disable-line
  };

  return (
    <Fragment>
      <button className="btn btn-link" onClick={onOpen}>
        Import preset
      </button>
      <Modal open={open} title="Import a preset" confirm="import"
        onClose={onClose} onConfirm={onConfirm}>
        foo
      </Modal>
    </Fragment>
  );
};

export default Presets;
