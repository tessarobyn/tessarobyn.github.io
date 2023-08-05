import React from "react";
import ReactDOM from "react-dom/client";
import Grid from "./components/Grid.jsx";

const projects = {
  colorPicker: {
    title: "Color Picker",
    languages: "HTML, CSS, JavaScript, HTML5 Canvas",
    description:
      "This is a widget written in JavaScript that can be added to a website easily.",
    desktopOnly: true,
  },
  artPortfolio: {
    title: "Art Portfolio",
    languages: "HTML, CSS, JavaScript",
    description:
      "I built this website so I would be able to add my artwork to it and use category pages to organise different pieces of art.",
  },

  lastLeft: {
    title: "Last Left",
    languages: "HTML, CSS, JavaScript",
    description:
      "'Last Left' is a web-based game. It is an improved remake of the first game I built in Python.",
  },
  iceCreamCatch: {
    title: "Ice Cream Catch",
    languages: "HTML, CSS, JavaScript, HTML5 Canvas",
    description:
      "'Ice Cream Catch' is a simple web-based game, which can be used on devices with or without a touchscreen. It allowed me to experiment with HTML5 canvas.",
  },
  liftOff: {
    title: "Lift Off",
    languages: "C#, Unity",
    description:
      "'Lift Off' is a web-based game, currently designed for any device with a keyboard. It is one of the first games I made in Unity.",
    desktopOnly: true,
  },
};

ReactDOM.createRoot(document.getElementById("gameGridContainer")).render(
  <Grid cards={[projects.lastLeft, projects.liftOff, projects.iceCreamCatch]} />
);

ReactDOM.createRoot(document.getElementById("websiteGridContainer")).render(
  <Grid
    cards={[
      projects.colorPicker,
      projects.artPortfolio,
      projects.lastLeft,
      projects.iceCreamCatch,
    ]}
  />
);
