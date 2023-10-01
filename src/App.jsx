import "./App.scss";
import MainText from "./components/MainText.jsx";

function Header() {
  return (
    <div id="header">
      <div className="cv">
        <a href="">Download Cv</a>
      </div>
      <div className="logo-wrapper">
        <img src="./Logo.svg" alt="Logo" />
      </div>
      <div className="hire">
        <a href="">Hire me</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <MainText />
      <div className="social-text-wrapper">
        <img src="./social-text/social.svg" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="main">
      <div className="bg-wrapper">
        <img className="bg" src="./Mesh.svg" />
      </div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
