import Modal from "./Modal";

const ProjectCard = ({
  id,
  title,
  languages,
  description,
  desktopOnly = false,
}) => {
  const closeModal = (modalContainer, content, scrollY) => {
    modalContainer.classList.remove("show");
    content.style.position = "static";
    window.scrollTo(0, scrollY);
  };
  const openModal = (id) => {
    const scrollY = window.scrollY;
    const content = document.getElementById("content");
    content.style.position = "fixed";
    const modalContainer = document.getElementById(id);
    modalContainer.classList.add("show");
    const modalBg = document.getElementById("modalBg");
    modalBg.classList.add("show");
    window.scrollTo(0, 0);
    modalBg.addEventListener("click", () => {
      closeModal(modalContainer, content, scrollY);
    });
    const navbar = document.getElementById("navbar");
    navbar.addEventListener("click", () => {
      closeModal(modalContainer, content, scrollY);
    });
  };
  return (
    <div onClick={() => openModal(id)}>
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
