import "./skills.scss";

const Skills = () => {
  return (
    <div className="main">
      <h1 class="skill-header">My Top Skills</h1>

      <div class="skills-wrapper">
        <div className="first">
          <div className="skill1">
            <img src="https://img.icons8.com/nolan/64/html-filetype.png" />
            <h3>Html</h3>
          </div>
          <div className="skill1">
            <img src="https://img.icons8.com/fluency/48/null/css3.png" />
            <h3>Css</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/arcade/64/null/javascript.png" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/48/null/bootstrap.png" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/48/null/git.png" />
            <h3>Github</h3>
          </div>
        </div>
        <div className="second">
          <div className="skill">
            <img src="https://img.icons8.com/color/48/null/react-native.png" />
            <h3>React JS</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/48/null/nodejs.png" />
            <h3>Node JS</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/fluency/48/null/express-js.png" />
            <h3>Express JS</h3>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/fluency/48/null/mysql-logo.png" />
            <h3>MySQL</h3>
          </div>
        </div>
      </div>
      {/* <div style={{ color: "white" }}>hello</div> */}
    </div>
  );
};

export default Skills;
