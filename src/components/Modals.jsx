import Modal from "./Modal";

const Modals = ({ projects }) => {
  const modals = [];
  Object.keys(projects).forEach((projectKey, i) => {
    modals.push(
      <Modal id={projectKey} project={projects[projectKey]} key={i}></Modal>
    );
  });
  return <>{modals}</>;
};

export default Modals;
