import { React, useEffect } from 'react';
import './style.css';
import H from '../images/home.JPG'; // Image remains the same
import { BsArrowUpRightCircleFill } from "react-icons/bs"; // Remove this icon as well
import About from '../About/About';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
  useEffect(() => {
    document.title = "Navaraj Poudel";
  }, []);

  return (
    <>
      <div className='Home' id='home'>
        <div className='home-details' data-aos="fade-right" data-aos-duration="1000">
          <p>
            <strong>Hello, I am Navaraj!</strong><br /> 
            A cybersecurity enthusiast,
                dedicated to securing systems
              with innovation and precision. <br/>
              <h2>
              "Creating secure pathways in a connected world."
</h2>
          </p>
        </div>

        <div className="homeimages" data-aos="zoom-in" data-aos-duration="100">
          <img src={H} alt="Navaraj" />
        </div>
      </div>
      

      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
