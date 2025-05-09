import FadeIn from "../../components/Animations/FadeIn";
import "./style.scss";
import { FaReact, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <FaSass size={50} />, name: "Sass" },
    { icon: <FaHtml5 size={50} />, name: "HTML" },
    { icon: <FaCss3Alt size={50} />, name: "CSS" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
  ];

  return (
    <section id="about" className="about">
      <h1>About</h1>
      <FadeIn className="about__content">
        <div className="about__profile-container">
          <img
            src={`${import.meta.env.BASE_URL}/profilepic.jpeg`}
            alt="Profile"
            className="about__profile-image"
          />
        </div>
        <div className="about__text">
          <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.`}</p>
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
