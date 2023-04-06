import React from 'react';
import Navbar from './components/Navbar';
import Pricing from './components/pages/Pricing';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break

    default:
  }

  return (
    <>
      <Navbar/>
      {component}
    </>
  );
}

export default App;