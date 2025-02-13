import React from "react";
import "../style/header.css"; 
import v1 from '../videos/v1.mp4'; // Убедитесь, что указали правильное расширение

function Header() {
  return (
    <div className="header">
      <video autoPlay muted loop className="background-video">
        <source src={v1} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      {/* Вставляем видео как фон */}
      {/* Добавьте контент поверх видео */}
      <div className="content">
        <h1 className="cont_h1">Eshboyev Jasur</h1>
        <p className="cont_p">PROGRAMMER  -  STUDEND</p>
      </div>
    </div>
  );
}

export default Header;