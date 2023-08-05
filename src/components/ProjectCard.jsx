const ProjectCard = ({
  id,
  title,
  languages,
  description,
  desktopOnly = false,
}) => {
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
