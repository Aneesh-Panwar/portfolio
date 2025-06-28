// components/ModalContext.jsx
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

let DEV_MODE = false;

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);

  const showAlert = (message) =>
    new Promise((resolve) => {
      setModal({
        type: "alert",
        message,
        onConfirm: () => {
          setModal(null);
          resolve(true);
        },
      });
    });

  const showConfirm = (message,confirmation="") =>
    new Promise((resolve) => {
      setModal({
        type: "confirm",
        message,
        confirmation,
        onConfirm: () => {
          setModal(null);
          resolve(true);
        },
        onCancel: () => {
          setModal(null);
          resolve(false);
        },
      });
    });

  return (
    <ModalContext.Provider value={{ showAlert, showConfirm }}>
      {children}

    {DEV_MODE && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center font-jura bg-black/50">
        <div className="bg-zinc-900 rounded-md p-4 w-80 shadow-lg">
          <h2 className="font-semibold text-lg mb-1 ">Aneesh say's :) </h2><hr className="border-gray-700 border-1 w-18 my-4"/>
          <p className="text-gray-200 text-md mb-8">This is a test kfjlewfj fjaslkfj  modalhd jhf kshfkjkhal l af hfka  afuwifh hfkjsdfh iu!fjsdh soiufewiuf ufoiusd foudfjj oif</p>
          <p className="text-gray-200 text-md mb-8">This is a test kfjlewfj fjaslkfj </p>
          <hr className="border-gray-700 border-1 w-full my-4"/>
          <div className="flex justify-end gap-3">
            <button className="px-2 py-1 bg-zinc-200 text-gray-900 rounded hover:opacity-50 transition">
              Cancel
            </button>
            <button className="px-4 py-1 text-sm bg-black text-white rounded hover:opacity-50 transition">
              OK
            </button>
          </div>
        </div>
      </div>
    )}

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-jura bg-black/50">
          <div className="bg-zinc-900 rounded-md p-4 w-80 shadow-lg">
            <h2 className="font-semibold text-lg mb-1 ">Aneesh say's :) </h2><hr className="border-gray-700 border-1 w-18 my-4"/>
            <p className="text-gray-200 text-md mb-6">{modal.message}</p>
            {modal.confirmation && <p className="text-gray-200 text-md mb-6">{modal.confirmation}</p>}
            <hr className="border-gray-700 border-1 w-full my-4"/>
            <div className="flex justify-end gap-3">
              {modal.type === "confirm" && (
                <button
                  onClick={modal.onCancel}
                  className="px-2 py-1 bg-zinc-200 text-gray-900 rounded hover:opacity-50 transition"
                >
                  Cancel
                </button>
              )}
              <button
                onClick={modal.onConfirm}
                className="px-4 py-1 text-sm bg-black text-white rounded hover:opacity-50 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
