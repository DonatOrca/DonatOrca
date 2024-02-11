/* A modal component */
import { ReactNode } from "react";

/**
 * `visible` and `setVisible` are to be handled by a parent component (e.g. App)
 */
interface Props {
  children: ReactNode;
  header?: string;
  visible: boolean;
  setVisible(state: boolean): any;
}

const Modal = ({ children, header, visible, setVisible }: Props) => {
  // Bind escape to closing the modal
  window.addEventListener("keydown", (e) => {
    e.key === "Escape" && setVisible(false);
  });

  return (
    <div
      className={`fixed top-0 z-50 flex p-6 ${visible ? "block" : "hidden"} h-full w-full bg-gray-900 bg-opacity-60 px-4`}
    >
      <div className="relative mx-auto max-h-full w-[800px] overflow-hidden rounded-md bg-bgc shadow-xl">
        {/* Header */}
        <div className="flex w-full items-center justify-between rounded-t-md border-b-2 border-gray-600 px-4 py-2 text-xl">
          <h1 className="font-arial text-2xl font-semibold leading-10">
            {header}
          </h1>
          <button onClick={() => setVisible(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Contents */}
        {/* For some reason the very bottom gets cut off, so here's a hacky solution: apply some padding */}
        <div className="h-full overflow-y-auto pb-16">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
