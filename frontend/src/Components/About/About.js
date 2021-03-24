import { GithubOutlined } from "@ant-design/icons";

const About = () => {
    return (
        <div className="container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum repellat cupiditate error dignissimos harum ipsa sint facere maiores similique, deserunt optio tenetur eaque esse.</p>
            <h2>Meet the team</h2>
            <div className="team-container">
                <a href="https://github.com/boothscript" className="team-link">
                    <div className="team-member">
                        <GithubOutlined className="icon team-icon" />
                        <p className="team-name">Steve Booth</p>
                    </div>
                </a>
                <a href="https://github.com/ggemcila" className="team-link">
                    <div className="team-member">
                        <GithubOutlined className="icon team-icon" />
                        <p className="team-name">Gemcila Samini Gino Charlton</p>
                    </div>
                </a>
                <a href="https://github.com/phiddle" className="team-link">
                    <div className="team-member">
                        <GithubOutlined className="icon team-icon" />
                        <p className="team-name">Philip Edwards</p>
                    </div>
                </a>
                <a href="https://github.com/jennifer-carey" className="team-link">
                    <div className="team-member">
                        <GithubOutlined className="icon team-icon" />
                        <p className="team-name">Jennifer Carey</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default About;