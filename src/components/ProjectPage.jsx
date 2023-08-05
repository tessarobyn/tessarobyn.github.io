import "../styles/projectPageStyle.css";

const ProjectPage = ({ project }) => {
  return (
    <div className="projectPage">
      <div className="projectContent">
        <div>
          <h1>{project.title}</h1>
          <p className="deviceTag">Desktop</p>
          {project.optimisedForMobile ? (
            <p className="deviceTag">Mobile</p>
          ) : (
            <></>
          )}
          <p className="languageList">[ {project.languages} ]</p>
          <p>{project.description}</p>
        </div>
        <div className="imageContainer">
          <img src="./src/img/projectImages/lastLeft1.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
