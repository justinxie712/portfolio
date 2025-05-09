import { ReactTyped } from "react-typed";
import "./style.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>{"Hello there, I am Justin."}</h1>
      <ReactTyped
        className="caption"
        strings={["Front End / React Developer"]}
        typeSpeed={50}
      />
    </section>
  );
};
export default Home;
