import type { FunctionComponent } from 'react';

// --------------------------------------------------------------------

const style = {
  backgroundColor: 'rgba(0,0,0,.2)',
  display:         'initial'
};

interface Props {
  open: boolean;
  title: string;
  confirm: string;
  onClose: () => void;
  onConfirm: () => void;
}

// --------------------------------------------------------------------

const Modal: FunctionComponent<Props> = ({
  open, title, confirm, children, onConfirm, onClose
}) => {
  if (open === false) {
    return null;
  }

  return (
    <div className="modal show" style={style} tabIndex={-1}
      aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close"aria-label="Close"
              onClick={onClose} />
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary-outline"
              onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-secondary"
              onClick={onConfirm}>
              {confirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
