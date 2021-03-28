import { GithubOutlined } from "@ant-design/icons";
import "../../Components/About/About.css";
const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <p className="appAbout">
        Knowledge Bomb is a general knowledge quiz designed to test the users
        skills against the clock. You have to solve the quiz before the timer
        ends and the bomb explodes...! There are three levels to test yourself
        against the fuse, easy, medium and hard.
      </p>

      <h2 className="teamHeader">Meet the team</h2>
      <div className="team-container">
        <div className="team-member">
          <a href="https://github.com/boothscript" className="team-link">
            <GithubOutlined className="team-icon" />
            <p className="team-name">Steve Booth</p>
          </a>
        </div>

        <div className="team-member">
          <a href="https://github.com/ggemcila" className="team-link">
            <GithubOutlined className="team-icon" />
            <p className="team-name">Gemcila Samini Gino Charlton</p>
          </a>
        </div>

        <div className="team-member">
          <a href="https://github.com/phiddle" className="team-link">
            <GithubOutlined className="team-icon" />
            <p className="team-name">Philip Edwards</p>
          </a>
        </div>

        <div className="team-member">
          <a href="https://github.com/jennifer-carey" className="team-link">
            <GithubOutlined className="team-icon" />
            <p className="team-name">Jennifer Carey</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
