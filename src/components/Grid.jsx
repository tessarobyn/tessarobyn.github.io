import ProjectCard from "./ProjectCard";

const Grid = ({ cards }) => {
  return (
    <div className="projectsGrid">
      {cards.map((card, i) => {
        console.log(card);
        return (
          <ProjectCard
            title={card.title}
            languages={card.languages}
            description={card.description}
            desktopOnly={card.desktopOnly}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Grid;
