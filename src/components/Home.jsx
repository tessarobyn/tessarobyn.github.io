import Grid from "./Grid.jsx";
import SvgDivider from "./svgDivider.jsx";

const Home = ({ projects }) => {
  return (
    <>
      <div className="games" id="games">
        <SvgDivider className={"gamesSvg"} id={"gamesSvg"} />
        <h2>Games</h2>
        <p>
          I was drawn to games development because I enjoy art and programming
          and I can use both these skills when creating games. I have programmed
          games in Python, in HTML, CSS and JavaScript and in C# with Unity.
        </p>
        <Grid
          cards={[projects.lastLeft, projects.liftOff, projects.iceCreamCatch]}
        />
      </div>
      <div className="websites" id="websites">
        <SvgDivider className={"websitesSvg"} id={"websitesSvg"} />
        <h2>Websites</h2>
        <p>
          All of the websites I have built are currently frontend websites. I
          have built a range of web apps, including a couple of games.
        </p>
        <Grid
          cards={[
            projects.colorPicker,
            projects.artPortfolio,
            projects.lastLeft,
            projects.iceCreamCatch,
          ]}
        />
      </div>
    </>
  );
};

export default Home;
