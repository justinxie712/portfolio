import FadeIn from "../../components/Animations/FadeIn";
import HoverExpand from "../../components/Animations/HoverExpand";
import "./style.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "justin.xie712@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <FadeIn className="contact__container">
        <HoverExpand>
          <a href="https://github.com/justinxie712" target="_blank">
            <FaGithub className="contact__icon" size={40} />
          </a>
        </HoverExpand>
        <HoverExpand>
          <a href="#" onClick={handleEmailClick}>
            <SiGmail className="contact__icon" size={40} />
          </a>
        </HoverExpand>
        <HoverExpand>
          <a href="https://www.linkedin.com/in/justin-xie712/" target="_blank">
            <FaLinkedin className="contact__icon" size={40} />
          </a>
        </HoverExpand>
      </FadeIn>
    </section>
  );
};
export default Contact;
