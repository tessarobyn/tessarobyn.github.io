import Footer from "./Footer.jsx";
import Grid from "./Grid.jsx";
import SvgDivider from "./svgDivider.jsx";

const Home = ({ projects }) => {
  return (
    <>
      <svg width="300" height="150">
        <g strokeWidth="2" fill="none">
          <g stroke="#961ffd">
            <path d="M0 50 L200 50"></path>
            <circle cx="210" cy="50" r="10"></circle>
          </g>
          <g stroke="#0088ff">
            <path d="M0 75 L150 75"></path>
            <circle cx="157.5" cy="75" r="7.5"></circle>
          </g>
          <g stroke="#11C6F8">
            <path d="M0 100 L100 100"></path>
            <circle cx="105" cy="100" r="5"></circle>
          </g>
        </g>
      </svg>
      <div className="introContainer">
        <div className="titleContainer">
          <div>
            <h1 className="title1">Tessa</h1>
            <h3>Aspiring developer</h3>
          </div>
        </div>
        <div className="laptopContainer">
          <div>
            <img className="laptopImg" src="./src/img/laptop.png" />
            <svg className="laptopSvg" width="300" height="600">
              <g strokeWidth="2" fill="none">
                <g id="1" stroke="#961ffd">
                  <path d="M20 90 L20 200"></path>
                  <circle cx="20" cy="205" r="5"></circle>
                </g>
                <g id="1" stroke="#0088ff">
                  <path d="M40 90 L40 375"></path>
                  <circle cx="40" cy="382.5" r="7.5"></circle>
                </g>
                <g id="2" stroke="#961ffd">
                  <path d="M60 90 L60 300"></path>
                  <circle cx="60" cy="307.5" r="7.5"></circle>
                </g>
                <g id="3" stroke="#11C6F8">
                  <path d="M80 90 L80 250"></path>
                  <circle cx="80" cy="255" r="5"></circle>
                </g>
                <g id="4" stroke="#0088ff">
                  <path d="M100 90 L100 400"></path>
                  <circle cx="100" cy="410" r="10"></circle>
                </g>
                <g id="5" stroke="#961ffd">
                  <path d="M120 90 L120 475"></path>
                  <circle cx="120" cy="482.5" r="7.5"></circle>
                </g>
                <g id="6" stroke="#0088ff">
                  <path d="M140 90 L140 275"></path>
                  <circle cx="140" cy="282.5" r="7.5"></circle>
                </g>
                <g id="7" stroke="#11C6F8">
                  <path d="M160 90 L160 350"></path>
                  <circle cx="160" cy="355" r="5"></circle>
                </g>
                <g id="8" stroke="#0088ff">
                  <path d="M180 90 L180 525"></path>
                  <circle cx="180" cy="535" r="10"></circle>
                </g>
                <g id="9" stroke="#961ffd">
                  <path d="M200 90 L200 550"></path>
                  <circle cx="200" cy="557.5" r="7.5"></circle>
                </g>
                <g id="10" stroke="#11C6F8">
                  <path d="M220 90 L220 400"></path>
                  <circle cx="220" cy="405" r="5"></circle>
                </g>
                <g id="11" stroke="#0088ff">
                  <path d="M240 90 L240 500"></path>
                  <circle cx="240" cy="507.5" r="7.5"></circle>
                </g>
                <g id="12" stroke="#11C6F8">
                  <path d="M260 90 L260 325"></path>
                  <circle cx="260" cy="335" r="10"></circle>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="languages" id="languages">
        <SvgDivider className={"languagesSvg"} id={"languagesSvg"} />
        <h2>Languages</h2>
        <p className="languageList">
          [ Python, HTML, CSS, JavaScript, C# with Unity ]
        </p>
        <p>
          My first programming language was{" "}
          <b className="highlighted">Python</b>, which I used to program my
          first game. However, I have also been experimenting with other
          languages and technologies, especially those that give me more freedom
          over the graphics of the program/app. This includes using{" "}
          <b className="highlighted">HTML</b>,<b className="highlighted">CSS</b>{" "}
          and <b className="highlighted">JavaScript</b> to build frontend
          websites and web-based games. I also had a go at{" "}
          <b className="highlighted">C#</b> and Unity for games development.
          <br />
          <br />
          Recently, I have been learning React and Express with the aim of
          building a full-stack web app. In addition to this, I've started
          delving into mobile development with Flutter.
        </p>
      </div>
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
      <Footer />
    </>
  );
};

export default Home;
