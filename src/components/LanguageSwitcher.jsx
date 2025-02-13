import React, { useState } from 'react';
import '../style/language.css'

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const [fade, setFade] = useState(false);

  const changeLanguage = () => {
    setFade(true);
    setTimeout(() => {
      const newLanguage = language === 'en' ? 'ru' : 'en';
      setLanguage(newLanguage);
      setFade(false);
    }, 500); // Длительность должна совпадать с длительностью CSS перехода
  };

  return (
    <div className='language_wrapp'>
      <button className='lang_btn' onClick={changeLanguage}>Изменить язык</button>
      <h1 className={`fade ${fade ? '' : 'fade-in'}`}>{language === 'en' ? 'Hello' : 'Привет'}</h1>
      <p className={`fade ${fade ? '' : 'fade-in'}`}>{language === 'en' ? 'This is a paragraph in English.' : 'Это абзац на русском языке.'}</p>
      {/* Добавьте другие элементы и их переводы здесь */}
    </div>
  );
};

export default LanguageSwitcher;