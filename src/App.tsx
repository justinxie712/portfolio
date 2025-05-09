import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <div className="animated-bg">
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="shape"></div>
          ))}
      </div>

      <div>
        <Navbar />
        <main className="main-content">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
