import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style/cursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY + scrollY.current;
    };

    const handleScroll = (event) => {
      const newScrollY = event.detail.y;
      const scrollDiff = newScrollY - scrollY.current;

      // Обновляем позицию курсора при скролле, чтобы он не залипал
      mouse.current.y += scrollDiff;
      scrollY.current = newScrollY;
    };

    const updateCursor = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      gsap.to(cursorRef.current, {
        x: pos.current.x,
        y: pos.current.y,
        duration: 0.1,
        ease: "power2.out",
      });

      requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("locoscroll", handleScroll);

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("locoscroll", handleScroll);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}

export default CustomCursor;
