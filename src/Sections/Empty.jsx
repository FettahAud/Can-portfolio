import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrows from "../components/Arrows.jsx";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const splitText = (element) => {
  if (!element) {
    console.error(`Element not found`);
    return;
  }

  element.style.whiteSpace = "pre-wrap";
  element.style.overflow = "hidden";

  // split each letter into a span
  const splitText = element.innerText.split("");
  element.innerHTML = "";
  splitText.forEach((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    // span.style.position = "relative";
    element.appendChild(span);
  });

  return element;
};

const splitTextIntoWords = (text) => {
  const words = text.innerText.split(" ");

  words.map((word, index) => {
    text.innerHTML = text.innerHTML.replace(
      word,
      `<span key=${index}>${word}</span>`
    );
  });
  return text;
};

export default function Empty() {
  const tl = gsap.timeline();
  const textRef = useRef([]);

  useEffect(() => {
    if (textRef.current.length === 0) return;
    textRef.current.forEach((el) => {
      splitTextIntoWords(el);
      splitTextIntoWords(el);
      const words = el.querySelectorAll("span span");
      tl.from(
        words,
        {
          top: -words[0].offsetHeight,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#empty",
            markers: false,
            start: "top 60%",
            end: "50% 60%",
            scrub: true,
          },
        },
        "-=1.5"
      );
    });
  }, [textRef, tl]);
  return (
    <section id="empty">
      <div className="main-text-container">
        <h2 ref={(el) => textRef.current.push(el)} className="design">
          design
        </h2>
        <Arrows />
        <h2 ref={(el) => textRef.current.push(el)}>
          products people actually want and need
        </h2>
      </div>
      <p className="sub-text">
        Hi, I can create modern and minimalist designs for you with current
        design concepts. You just tell your dreams and I will make them come
        true for you.
      </p>
    </section>
  );
}
