import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Certificates } from '../components/sections/Certificates';
import { Contact } from '../components/sections/Contact';
import Navbar from '../components/Navbar';


export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};