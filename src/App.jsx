import "./App.scss";
import Header from "./components/Header";
import Main from "./Sections/Main.jsx";
import Empty from "./Sections/Empty.jsx";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
      <Empty />
    </div>
  );
}

export default App;
