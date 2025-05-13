import FadeIn from "../../components/Animations/FadeIn";
import "./style.scss";
import { FaReact, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
    { icon: <FaSass size={50} />, name: "Sass" },
    { icon: <FaHtml5 size={50} />, name: "HTML" },
    { icon: <FaCss3Alt size={50} />, name: "CSS" },
  ];

  return (
    <section id="about" className="about">
      <h1>About</h1>
      <FadeIn className="about__content">
        <div className="about__profile-container">
          <img
            src={`${import.meta.env.BASE_URL}profilepic.jpeg`}
            alt="Profile"
            className="about__profile-image"
          />
        </div>
        <div className="about__text">
          <p>{`I'm a front-end developer who loves to learn and build things that look great and feel smooth to use. I specialize in React and TypeScript/JavaScript, and I’m always looking for ways to make the web a little faster, a little cleaner, and a lot more user-friendly and accessible. When I’m not glued to my laptop, I’m probably at the gym, exploring a new city, dancing with friends at a concert, or at a golf course somewhere.`}</p>
        </div>
        <div className="about__skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="about__skill-item">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
export default About;
