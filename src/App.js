
import './App.css';
import About from './components/About';
import CustomCursor from './components/CustomCursor';

import Header from './components/Header';
import Ican from './components/Ican';

import Working from './components/Working';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Ican />
      <Working />
     <CustomCursor />
    
    </div>
  );
}

export default App;
