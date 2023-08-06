import "../styles/projectPageStyle.css";
import Carousel from "./Carousel";
import Footer from "./Footer";

const ProjectPage = ({ project }) => {
  return (
    <>
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
          <Carousel images={project.images} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
