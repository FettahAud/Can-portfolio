import { gsap } from "gsap";
import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const manageMouseMove = (e, el) => {
  const { clientX, clientY } = e;
  const { left, top, height, width } = el.getBoundingClientRect();
  const center = { x: left + width / 2, y: top + height / 2 };
  const distance = { x: clientX - center.x, y: clientY - center.y };

  const angle = Math.atan2(distance.y, distance.x);
  console.log(angle);
  animate(el, { rotate: `${angle - 2}rad` }, { duration: 0 });
};

export default function Arrows() {
  const arrow = useRef([]);
  const wrapper = useRef(null);
  useEffect(() => {
    // wrapper.current.addEventListener("mousemove", (e) =>
    //   manageMouseMove(e, wrapper.current)
    // );
    arrow.current.forEach((el) => {
      el.addEventListener("mousemove", (e) => manageMouseMove(e, el));
      el.addEventListener("mouseleave", () => {
        animate(el, { rotate: `0rad` }, { duration: 0.75, ease: "circOut" });
      });
    });
  }, []);

  return (
    <div ref={wrapper} className="arrows-wrapper">
      <motion.figure ref={(el) => arrow.current.push(el)}>
        <img className="arrow" src="/arrow.svg" alt="" />
      </motion.figure>
      <motion.figure ref={(el) => arrow.current.push(el)}>
        <img className="arrow" src="/arrow.svg" alt="" />
      </motion.figure>
      <motion.figure ref={(el) => arrow.current.push(el)}>
        <img className="arrow" src="/arrow.svg" alt="" />
      </motion.figure>
      <motion.figure ref={(el) => arrow.current.push(el)}>
        <img className="arrow" src="/arrow.svg" alt="" />
      </motion.figure>
      <motion.figure ref={(el) => arrow.current.push(el)}>
        <img className="arrow" src="/arrow.svg" alt="" />
      </motion.figure>
    </div>
  );
}
