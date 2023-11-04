import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import Main from "./Sections/Main.jsx";
import Empty from "./Sections/Empty.jsx";
import Bar from "./components/Bar.jsx";
import Counts from "./Sections/Counts.jsx";
import About from "./Sections/About.jsx";
import Blog from "./Sections/Blog.jsx";
import Slogan from "./Sections/Slogan.jsx";
import Footer from "./Sections/Footer.jsx";
import { useLayoutEffect } from "react";
function App() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div id="app">
      <Header />
      <Main />
      <Empty />
      <Bar />
      <Counts />
      <About />
      <Blog />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
