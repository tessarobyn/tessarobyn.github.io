const Modal = ({ project, id }) => {
  return (
    <div className="modalContainer" id={id}>
      <div className="modal">{project.title}</div>
    </div>
  );
};

export default Modal;
