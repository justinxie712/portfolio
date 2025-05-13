export interface Project {
  title: string;
  image: string;
  summary: string;
  tech: string[];
  demo_url: string;
  source_url: string;
}

export interface CarouselProps {
  projects: Project[];
}
