import FadeIn from "../../components/Animations/FadeIn";
import Carousel from "../../components/Carousel";
import "./style.scss";
import { Project } from "../../types";
import { FC, useEffect } from "react";

const projects: Project[] = [
  {
    title: "Melodex",
    image: "melodex-app.png",
    summary:
      "Integrating Spotify's API, users can view a variety of audio metrics for selected songs.",
    tech: ["React", "TypeScript", "Sass"],
    source_url: "https://github.com/justinxie712/melodex-main",
  },
  {
    title: "Spreadsheet",
    image: "spreadsheet.png",
    summary:
      "A spreadsheet clone with support for a few common formula functions (SUM, AVERAGE, COUNT). ",
    tech: ["React", "JavaScript", "Sass"],
    demo_url: "https://2195298.playcode.io",
    source_url: "https://playcode.io/2195298",
  },
  {
    title: "Tic-Tac-Toe",
    image: "tic-tac-toe.png",
    summary:
      "A spin on the classic game of Tic-Tac-Toe with a clean and stylish interface that is fun for all ages.",
    tech: ["React", "JavaScript", "Sass"],
    demo_url: "https://2211631.playcode.io/",
    source_url: "https://playcode.io/2211631",
  },
];

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const imagePaths: string[] = [
  "melodex.png",
  "spreadsheet.png",
  "tic-tac-toe.png",
];

const Projects: FC = () => {
  useEffect(() => {
    imagePaths.forEach(preloadImage);
  }, []);

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
