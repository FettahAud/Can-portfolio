export default function Bar() {
  return (
    <div className="bar">
      <img src="/smile-bg.svg" alt="bg is missing" />
      <div className="items-wrapper">
        {Array(10)
          .fill()
          .map((_, i) => (
            <>
              <span key={i}>smile</span>
              <div className="dot"></div>
            </>
          ))}
      </div>
    </div>
  );
}
