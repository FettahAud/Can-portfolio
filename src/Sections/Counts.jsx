function CountBlock({ title, count, span }) {
  return (
    <div className="count-block">
      <h6>{title}</h6>
      <span>{count}</span>
      <span>{span}</span>
    </div>
  );
}

export default function Counts() {
  return (
    <section id="counts">
      <CountBlock title="Clients" count={100} span="+" />
      <CountBlock title="Projects" count={300} span="+" />
      <CountBlock title="Experince" count={5} span="Y" />
      <CountBlock title="Happy Clients" count={100} span="%" />
    </section>
  );
}
