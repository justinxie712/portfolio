import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./style.scss";
import { Project } from "../../types";

const Carousel = ({ projects }: { projects: Project[] }) => {
  const [index, setIndex] = useState<number>(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const current = projects[index];

  return (
    <div className="carousel" role="region" aria-label="Project carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="carousel__card"
        >
          <div className="carousel__project">
            <div className="carousel__image-container">
              <img
                src={`${import.meta.env.BASE_URL}${current.image}`}
                alt={current.title}
                className="carousel__image"
              />
            </div>
            <div className="carousel__project-details">
              <h2 className="carousel__title">{current.title}</h2>
              <p className="carousel__description">{current.summary}</p>
              <div className="carousel__tech-tags">
                {current.tech.map((tech) => (
                  <span key={tech} className="carousel__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="carousel__links">
                <a
                  href={current.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel__link"
                >
                  View Source
                </a>
                <a
                  href={current.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel__link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="carousel__nav">
        <button
          onClick={handlePrev}
          className="carousel__nav-button"
          aria-label="Previous project"
          type="button"
        >
          <MdChevronLeft size={24} aria-hidden="true" />
        </button>
        <div className="carousel__status" aria-live="polite">
          <span className="visually-hidden">
            {`Project ${index + 1} of ${projects.length}`}
          </span>
        </div>
        <button
          onClick={handleNext}
          className="carousel__nav-button"
          aria-label="Next project"
          type="button"
        >
          <MdChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
