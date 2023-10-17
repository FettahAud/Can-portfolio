import "./App.scss";
import Header from "./components/Header";
import Main from "./Sections/Main.jsx";
import Empty from "./Sections/Empty.jsx";
import Bar from "./components/Bar.jsx";
import Counts from "./Sections/Counts.jsx";
import About from "./Sections/About.jsx";
import Blog from "./Sections/Blog.jsx";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
      <Empty />
      <Bar />
      <Counts />
      <About />
      <Blog />
    </div>
  );
}

export default App;
