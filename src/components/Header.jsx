import React, { useEffect, useRef } from "react";
import "../style/header.css";

function Header() {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    function createStar() {
      if (!starsContainerRef.current) return;

      const star = document.createElement("div");
      star.classList.add("star");
      starsContainerRef.current.appendChild(star);

      const startX = Math.random() * window.innerWidth;
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;

      star.style.left = `${startX}px`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `-${delay}s`;

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    }

    const interval = setInterval(() => {
      for (let i = 0; i < 15; i++) createStar(); // Создаём 20 звёзд за раз
    }, 200); // Каждые 200 мс

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="stars-container" ref={starsContainerRef}></div>
      <div className="content">
        <h1 className="cont_h1">Эшбоев Жасур</h1>
        <p className="cont_p">PROGRAMMER - STUDENT</p>
      </div>
    </div>
  );
}

export default Header;
