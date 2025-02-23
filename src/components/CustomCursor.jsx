import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../style/cursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseEnter = (e) => {
      if (e.target.hasAttribute("data-ignore-cursor")) {
        return;
      }
      setHovered(true);
    };

    const handleMouseLeave = () => setHovered(false);

    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);

    window.addEventListener("mousemove", moveCursor);

    gsap.ticker.add(() => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      gsap.set(cursorRef.current, {
        x: pos.current.x,
        y: pos.current.y,
      });
    });

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
      window.removeEventListener("mousemove", moveCursor);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "cursor-hover" : ""}`}
      ref={cursorRef}
    />
  );
}

export default CustomCursor;
