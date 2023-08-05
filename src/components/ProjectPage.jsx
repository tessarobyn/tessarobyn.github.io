import "../styles/projectPageStyle.css";

const ProjectPage = ({ project }) => {
  return (
    <div className="projectPage">
      <h1>{project.title}</h1>
      <p className="deviceTag">Desktop</p>
      {project.desktopOnly ? <></> : <p className="deviceTag">Mobile</p>}
      <p className="languageList">[ {project.languages} ]</p>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
