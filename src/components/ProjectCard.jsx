import Modal from "./Modal";

const ProjectCard = ({
  id,
  title,
  languages,
  description,
  desktopOnly = false,
}) => {
  const closeModal = (modalContainer, content) => {
    modalContainer.classList.remove("show");
    content.style.position = "static";
  };
  const openModal = (id) => {
    const modalContainer = document.getElementById(id);
    modalContainer.classList.add("show");
    modalContainer.scrollIntoView();
    const content = document.getElementById("content");
    content.style.position = "fixed";
    modalContainer.addEventListener("click", () => {
      closeModal(modalContainer, content);
    });
    const navbar = document.getElementById("navbar");
    navbar.addEventListener("click", () => {
      closeModal(modalContainer, content);
    });
  };
  return (
    <div>
      <h4>{title}</h4>
      <p className="languageList">[ {languages} ]</p>
      <p>{description}</p>
      <p className="deviceTag">Desktop</p>
      {desktopOnly ? <></> : <p className="deviceTag">Mobile</p>}
      <button onClick={() => openModal(id)}>See more info</button>
    </div>
  );
};

export default ProjectCard;
