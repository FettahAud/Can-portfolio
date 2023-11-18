import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, forwardRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const NumbersRow = ({ count }) => {
  const numbers = useRef();
  const isInView = useInView(numbers, {
    margin: "0px 0px -100px 0px",
    // amount: "all",
  });
  const yInit = useSpring(count);
  const numbersEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let y = useSpring(0, { stiffness: 30, damping: 10, mass: 0.5 });

  const yValTarget = useTransform(yInit, [0, 9], [0, 90]);
  if (yValTarget.get() === 0) {
    yValTarget.set(100);
  }

  useEffect(() => {
    if (isInView) {
      y.set((numbers.current.clientHeight / 110) * -yValTarget.get() - 2);
    } else {
      y.set(0);
    }
  }, [isInView, y, yValTarget]);

  return (
    <motion.span style={{ y }} ref={numbers} className="count-inner-wrapper">
      {numbersEl.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </motion.span>
  );
};

const CountBlock = forwardRef(function CountBlock({ title, count, span }, ref) {
  const counts = count.toString().split("");

  return (
    <div className="count-block" ref={ref}>
      <h6>{title}</h6>
      <div className="footer-wrapper">
        <div className="count-wrapper">
          {counts.map((count, i) => (
            <NumbersRow count={count} key={i} />
          ))}
        </div>
        <span className="sign">{span}</span>
      </div>
    </div>
  );
});

export default function Counts() {
  const elements = useRef([]);

  return (
    <section id="counts">
      <CountBlock
        ref={(el) => elements.current.push(el)}
        title="Clients"
        count={100}
        span="+"
      />
      <CountBlock
        ref={(el) => elements.current.push(el)}
        title="Projects"
        count={300}
        span="+"
      />
      <CountBlock
        ref={(el) => elements.current.push(el)}
        title="Experince"
        count={5}
        span="Y"
      />
      <CountBlock
        ref={(el) => elements.current.push(el)}
        title="Happy Clients"
        count={100}
        span="%"
      />
    </section>
  );
}
