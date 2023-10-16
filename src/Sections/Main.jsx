import MainText from "../components/MainText.jsx";

export default function Main() {
  return (
    <div className="main">
      <div className="bg-wrapper">
        <img className="bg" src="./Mesh.svg" alt="" />
      </div>
      <MainText />
      <div className="social-text-wrapper">
        <img src="./social-text/social.svg" />
      </div>
    </div>
  );
}
