import Arrows from "../components/Arrows.jsx";

export default function Empty() {
  return (
    <section id="empty">
      <div className="main-text-container">
        <h2 className="design">design</h2>
        <Arrows />
        <h2>products people actually want and need</h2>
      </div>
      <p className="sub-text">
        Hi, I can create modern and minimalist designs for you with current
        design concepts. You just tell your dreams and I will make them come
        true for you.
      </p>
    </section>
  );
}
