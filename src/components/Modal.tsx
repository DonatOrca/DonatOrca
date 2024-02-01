import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  id: string
}

const Modal = ({ children, id }: Props) => {
  return (
    <>
      <div className="modal fade" id={id} tabIndex={-1} aria-hidden="true">
      <div className="text-center"><i>Click anywhere outside to close</i></div>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
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