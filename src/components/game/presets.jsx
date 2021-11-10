import { FunctionComponent, Fragment, useState } from 'react';
import Pagination from '../pagination';
import Modal from '../modal';
import Grid from '../grid';

import { loadPreset } from '../../actions/game-actions';
import presets from '../../utils/presets';
import { useDispatch } from 'monarc';

// --------------------------------------------------------------------

const Presets: FunctionComponent = () => {
  const [ open, setOpen ] = useState(false);
  const [ page, setPage ] = useState(0);

  const onClose   = () => setOpen(false);
  const onOpen    = () => setOpen(true);
  const total     = presets.length;
  const preset    = presets[page];
  const dispatch  = useDispatch();
  const onConfirm = () => {
    loadPreset(dispatch, preset);
    setOpen(false);
  };

  return (
    <Fragment>
      <button className="btn btn-link" onClick={onOpen}>
        Import preset
      </button>
      <Modal open={open} title="Import a preset" confirm="import"
        onClose={onClose} onConfirm={onConfirm}>
        <Grid content={preset} />
        <Pagination page={page} total={total} onChange={setPage} />
      </Modal>
    </Fragment>
  );
};

export default Presets;
