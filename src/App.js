import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Ican from "./components/Ican";
import Working from "./components/Working";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowComponent(window.innerWidth > 480); 
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize); 

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="App">
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
