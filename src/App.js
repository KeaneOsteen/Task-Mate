import React from 'react';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';

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