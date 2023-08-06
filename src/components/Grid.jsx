import ProjectCard from "./ProjectCard";

const Grid = ({ cards }) => {
  return (
    <div className="projectsGrid">
      {cards.map((card, i) => {
        return (
          <ProjectCard
            id={card.id}
            title={card.title}
            languages={card.languages}
            description={card.description}
            optimisedForMobile={card.optimisedForMobile}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Grid;
