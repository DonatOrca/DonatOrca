import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  header?: string,
  id?: string
}

const Modal = ({ children, header, id }: Props) => {
  return (
    <>
      <div className="modal fade" id={id} tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            { header &&
              <div className="modal-header">
                <h5>{header}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            }
            <div className="modal-body p-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;