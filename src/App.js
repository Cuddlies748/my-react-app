import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Ican from "./components/Ican";
import Working from "./components/Working";
import CustomCursor from "./components/CustomCursor";
import AOS from "aos";


function App() {
  const scrollRef = useRef(null);
  const [showComponent, setShowComponent] = useState(window.innerWidth > 480);
  const locoScrollRef = useRef(null);
  const [bgColor, setBgColor] = useState("#ffffff"); // начальный фон

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Инициализация AOS с анимацией 1 секунда
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowComponent(window.innerWidth > 480);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.05,
    });

    locoScrollRef.current.on("scroll", (event) => {
      document.dispatchEvent(
        new CustomEvent("locoscroll", { detail: event.scroll })
      );

      // Изменяем фон при достижении 50% прокрутки
      const scrollProgress = event.scroll.y / (event.limit.y || 1);
      if (scrollProgress > 0.6) {
        setBgColor("maroon"); // Цвет при 50% скролла
      } else {
        setBgColor("black"); // Исходный цвет
      }
    });

    return () => {
      locoScrollRef.current.destroy();
    };
  }, []);

  return (
    <div
      className="App"
      ref={scrollRef}
      data-scroll-container
      style={{ backgroundColor: bgColor, transition: "background 0.5s ease" }}
    >
      
      <Header />
      <About />
      <Ican />
      <Working />
      <Contact />
      
      {showComponent && <CustomCursor />}
    </div>
  );
}

export default App;
