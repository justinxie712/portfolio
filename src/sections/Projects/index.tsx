import FadeIn from "../../components/Animations/FadeIn";
import Carousel from "../../components/Carousel";
import "./style.scss";
import { Project } from "../../types";

const projects: Project[] = [
  {
    title: "Melodex",
    image: "melodex.png",
    summary:
      "A music data visualizer prototype that allows users to search for songs and visualize their performance metrics.",
    tech: ["React", "TypeScript", "Sass"],
    demo_url: "https://justinxie712.github.io/melodex-app/",
    source_url: "https://github.com/justinxie712/melodex-app",
  },
  {
    title: "Spreadsheet",
    image: "spreadsheet.png",
    summary:
      "A responsive spreadsheet clone with cell formatting, formula support, and data persistence capabilities.",
    tech: ["React", "JavaScript", "CSS"],
    demo_url: "https://2195298.playcode.io",
    source_url: "https://playcode.io/2195298",
  },
  {
    title: "Tic-Tac-Toe",
    image: "tic-tac-toe.png",
    summary:
      "A spin on the classic game of Tic-Tac-Toe with a clean and stylish interface that is fun for all ages.",
    tech: ["React", "JavaScript", "CSS"],
    demo_url: "https://2211631.playcode.io/",
    source_url: "https://playcode.io/2211631",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">Projects</h1>
      <FadeIn className="projects__content">
        <Carousel projects={projects} />
      </FadeIn>
    </section>
  );
};
export default Projects;
