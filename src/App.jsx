import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import MyWork from './Components/Mywork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



const App=()=>{

  return (

    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App;