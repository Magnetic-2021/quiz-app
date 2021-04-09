import { GithubOutlined } from "@ant-design/icons";
import "../../Components/About/About.css";
const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <p className="app-about">
        Knowledge Bomb is a general knowledge quiz designed to test the user's
        skills against the clock. Answer 10 questions before the timer
        ends and the bomb explodes.
      </p>
      <p className="app-about">
        The questions could be either multiple choice or true or false. The more answers you get right, the more time you have and the higher your score. But run out of time and it is game over!
      </p>

      <h2 className="team-header">Meet the team</h2>
      <p className="app-about">
        Knowledge Bomb was created and built by Steve, Gemcila, Jennifer and Phil as our final project for Code Nation's 12-week immersive coding bootcamp. <a href="https://wearecodenation.com/event/master-coding/" target="_blank" rel="noreferrer">Click here</a> for more information or give our GitHub profiles a visit below.
      </p>
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
            <p className="team-name">Gemcila Samini <br/>Gino Charlton</p>
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
