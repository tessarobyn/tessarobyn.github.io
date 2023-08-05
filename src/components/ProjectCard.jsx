import { Link } from "react-router-dom";

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
      <Link to={"/" + id} className="link">
        <button>See more info</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
