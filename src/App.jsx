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
    optimisedForMobile: false,
    github: "https://github.com/tessarobyn/color-picker",
    website: "https://tessarobyn.github.io/color-picker/",
    images: [],
    aim: "",
    successes: "",
    possibleImprovements: "",
  },
  artPortfolio: {
    id: "artPortfolio",
    title: "Art Portfolio",
    languages: "HTML, CSS, JavaScript",
    description:
      "I built this website so I would be able to add my artwork to it and use category pages to organise different pieces of art.",
    optimisedForMobile: true,
    github: "https://github.com/tessarobyn/art-portfolio",
    website: "https://tessarobyn.github.io/art-portfolio/",
    images: [],
    aim: "",
    successes: "",
    possibleImprovements: "",
  },

  lastLeft: {
    id: "lastLeft",
    title: "Last Left",
    languages: "HTML, CSS, JavaScript",
    description:
      "'Last Left' is a web-based game. It is an improved remake of the first game I built in Python.",
    optimisedForMobile: true,
    github: "https://github.com/tessarobyn/last-left-game",
    website: "https://tessarobyn.github.io/last-left-game/",
    images: [
      "lastLeftHome.png",
      "lastLeftRules.png",
      "lastLeftGameplay.png",
      "lastLeftGameOver.png",
    ],
    aim: "'Last Left' was the first website I built that used a substantial amount of JavaScript to control it. I decided to build this game specifically as I had already worked out the game logic and finer details when I built it in Python, meaning I could focus on learning how JavaScript works and how to apply it to a relatively simple game. Also, I found that implementing a game made it easier to learn how to use classes and objects in JavaScript, as there were classes such as 'Player' and 'Enemy'. The objects created from these were tangible and represented on the screen.",
    successes:
      "As this was my first attempt with JavaScript, I was very happy with the outcome. I felt a lot more confident using JavaScript and could appreciate how much of a difference it makes to websites. One of the most difficult parts of building this game was to create an algorithm that would randomly generate walls for each game, but I think it turned out well.",
    possibleImprovements:
      "As this game requires access to a keyboard, it cannot be played on a touchscreen device without an external keyboard. When I styled the game, I made sure it was responsive to all screen sizes, but I would need to add touchscreen support so it can be used on all devices.",
  },
  iceCreamCatch: {
    id: "iceCreamCatch",
    title: "Ice Cream Catch",
    languages: "HTML, CSS, JavaScript, HTML5 Canvas",
    description:
      "'Ice Cream Catch' is a simple web-based game, which can be used on devices with or without a touchscreen. It allowed me to experiment with HTML5 canvas.",
    optimisedForMobile: true,
    github: "https://github.com/tessarobyn/ice-cream-catch",
    website: "https://tessarobyn.github.io/ice-cream-catch/",
    images: [],
    aim: "",
    successes: "",
    possibleImprovements: "",
  },
  liftOff: {
    id: "liftOff",
    title: "Lift Off",
    languages: "C#, Unity",
    description:
      "'Lift Off' is a web-based game, currently designed for any device with a keyboard. It is one of the first games I made in Unity.",
    optimisedForMobile: false,
    github: "https://github.com/tessarobyn/lift-off",
    website: "https://tessarobyn.github.io/lift-off/",
    images: [],
    aim: "",
    successes: "",
    possibleImprovements: "",
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
