import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

const projects = {
  colorPicker: {
    id: "colorPicker",
    title: "Color Picker",
    languages: "HTML, CSS, JavaScript, HTML5 Canvas",
    description:
      "This is a widget written in JavaScript that can be added to a website easily.",
    desktopOnly: true,
  },
  artPortfolio: {
    id: "artPortfolio",
    title: "Art Portfolio",
    languages: "HTML, CSS, JavaScript",
    description:
      "I built this website so I would be able to add my artwork to it and use category pages to organise different pieces of art.",
  },

  lastLeft: {
    id: "lastLeft",
    title: "Last Left",
    languages: "HTML, CSS, JavaScript",
    description:
      "'Last Left' is a web-based game. It is an improved remake of the first game I built in Python.",
  },
  iceCreamCatch: {
    id: "iceCreamCatch",
    title: "Ice Cream Catch",
    languages: "HTML, CSS, JavaScript, HTML5 Canvas",
    description:
      "'Ice Cream Catch' is a simple web-based game, which can be used on devices with or without a touchscreen. It allowed me to experiment with HTML5 canvas.",
  },
  liftOff: {
    id: "liftOff",
    title: "Lift Off",
    languages: "C#, Unity",
    description:
      "'Lift Off' is a web-based game, currently designed for any device with a keyboard. It is one of the first games I made in Unity.",
    desktopOnly: true,
  },
};

const App = () => {
  const projectRoutes = [];
  Object.keys(projects).forEach((projectKey, i) => {
    projectRoutes.push(
      <Route
        key={i}
        path={"/" + projects[projectKey].id}
        element={<ProjectPage project={projects[projectKey]} />}
      />
    );
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home projects={projects} />}></Route>
        <>{projectRoutes}</>
      </Routes>
    </Router>
  );
};

export default App;
