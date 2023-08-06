import "../styles/projectPageStyle.css";
import Carousel from "./Carousel";
import Footer from "./Footer";

const ProjectPage = ({ project }) => {
  return (
    <div className="projectPage">
      <div className="projectPageHead">
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
            <p>
              <a href={project.github} target="_blank">
                view repo on GitHub
              </a>
            </p>
            <p>
              <a href={project.website} target="_blank">
                go to website
              </a>
            </p>
          </div>
          <Carousel images={project.images} />
        </div>
      </div>

      <div>
        <p>{project.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
