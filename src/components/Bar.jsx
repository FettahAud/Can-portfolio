import { useScroll, useTransform, motion } from "framer-motion";

export default function Bar() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="bar">
      <img src="/smile-bg.svg" alt="bg is missing" />
      <motion.div style={{ x: x }} className="items-wrapper">
        {Array(10)
          .fill()
          .map((_, i) => (
            <>
              <span key={i}>smile</span>
              <div className="dot"></div>
            </>
          ))}
      </motion.div>
    </div>
  );
}
