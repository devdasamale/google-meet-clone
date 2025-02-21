const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={` fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={`w-[370px] bg-blue-50 rounded-4xl shadow p-8 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
