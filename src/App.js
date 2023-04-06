import React from 'react';
import Navbar from './components/Navbar';
import Pricing from './components/pages/Pricing';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />
      break
    case "/pricing":
      page = <Pricing />
      break
    case "/about":
      page = <About />
      break

    default:
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  );
}

export default App;