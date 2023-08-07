import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Navbar from "./components/Navbar.jsx";

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
    images: [
      "colorPickerHome.png",
      "colorPickerFeatures.png",
      "colorPickerSetup.png",
      "colorPickerHelp.png",
    ],
    aim: "I wanted to build something that would allow me to play with HTML5 canvas and further my knowledge of JavaScript. Previously, I had only built games; I wanted to build something that was more useful and that I might be able to reuse in future projects.",
    successes:
      "In 'Last Left', I had one long JavaScript file that held all the code needed for the game. For this, I decided to break it down into separate files and export functions and classes so they could be used within the main script. This made the code more easy to navigate. One of the many challenges I faced in building this app was figuring out the logic for how to convert pixel locations into colours in different formats (e.g. hex, rgb, etc.). I decided the best way to do this was to use hsv values to calculate which colours should appear where, and then this could be converted into more common colour models.",
    possibleImprovements:
      "Currently, the color picker only works on devices with a mouse and keyboard. In the future, I would like to update it so it can be used on all devices. I will also need to update the website so it is responsive and can be viewed on devices with smaller screens, such as a mobile.",
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
    aim: "I wanted to build a web app that would serve some use to me in the future and I wanted to build something that interested me. It was also an opportunity to have a go at integrating a lot of SVG into a website, which proved to be quite challenging from a design perspective.",
    successes:
      "I am really happy with the outcome of this website and I think I was a good idea to add the ability to hover over the images to see more information.",
    possibleImprovements:
      "Although the design of the website turned out well, if I were to do this again, I would progam it completely differently and convert it into React, as I think it would be a good fit for this project and would make the code more reusable and accessable should I want to add more content.",
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
      "lastLeftGameplay.png",
      "lastLeftGameOver.png",
      "lastLeftRules.png",
    ],
    aim: "'Last Left' was the first website I built that used a substantial amount of JavaScript to control it. I decided to build this game specifically as I had already worked out the game logic and finer details when I built it in Python, meaning I could focus on learning how JavaScript works and how to apply it to a relatively simple game. Also, I found that implementing a game made it easier to learn how to use classes and objects in JavaScript, as there were classes such as 'Player' and 'Enemy'. The objects created from these were tangible and represented on the screen.",
    successes:
      "As this was my first attempt with JavaScript, I was very happy with the outcome. I felt a lot more confident using JavaScript and could appreciate how much of a difference it makes to websites. One of the most difficult parts of building this game was to create an algorithm that would randomly generate walls for each game, but I think it turned out well.",
    possibleImprovements:
      "As this game requires access to a keyboard, it cannot be played on a touchscreen device without an external keyboard. When I styled the game, I made sure it was responsive to all screen sizes, but I would need to add touchscreen support so it can be used on all devices. It may also be worth adding some kind of leaderboard, which would require a backend being added to the web app. My Python version of this game used SQL to read from, write to and update a leaderboard database, so I could create something similar for this.",
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
    images: [
      "iceCreamCatch.png",
      "iceCreamCatchGameplay.png",
      "iceCreamCatchGameOver.png",
      "iceCreamCatchRules.png",
    ],
    aim: "After using HTML5 canvas for the color picker, I decided to do another project using it. This is a lot more simple project, but I decided I wanted to learn how to make a web app suitable for all devices, including touchscreens. This was something I hadn't tried to acomplish yet, and therefore was the main aim of this project.",
    successes:
      "Although relatively simple, I think this game was increadibly effective and works really well on all devices. I also used localStorage to keep a high score on the device the game was played on.",
    possibleImprovements:
      "I think I could improve the UI as it is fairly rudimentary. Also, localStorage isn't the best way to retain data, so I could consider creating a database to store information in the future. This would also create the opportunity of a leaderboard, where players could compete against each other, even if they are not playing on the same device.",
  },
  liftOff: {
    id: "liftOff",
    title: "Lift Off",
    languages: "C#, Unity",
    description:
      "'Lift Off' is a web-based game, currently designed for any device with a keyboard. It is the first game I made in Unity.",
    optimisedForMobile: false,
    github: "https://github.com/tessarobyn/lift-off",
    website: "https://tessarobyn.github.io/lift-off/",
    images: [
      "liftOff.png",
      "liftOffGameplay.png",
      "liftOffGameOver.png",
      "liftOffRules.png",
    ],
    aim: "After building some games using JavaScript, I decided to have a go at Unity, which also involved programming in C#. I wanted to figure out how to use Unity and also learn a bit of C#.",
    successes:
      "I think overall the game was a success and works really well. I also learnt a lot about 3D modelling, Unity and C#.",
    possibleImprovements:
      "I would like to add support for mobile and other touchscreen devices as at the moment the game can only be played on devices with a keyboard. I would also like to maybe add sound to the game. I might also be interesting to add power-ups to the game to add a layer of complexity.",
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home projects={projects} />}></Route>
        <>{projectRoutes}</>
      </Routes>
    </Router>
  );
};

export default App;
