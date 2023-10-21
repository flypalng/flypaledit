import Abouthelp from 'lib/components/sections/about/Abouthelp';
import AboutTemp from 'lib/components/sections/about/AboutTemp';
import AboutTempltr from 'lib/components/sections/about/AboutTempltr';

const Fade = require('react-reveal/Fade');

function About() {
  return (
    <Fade bottom>
      <AboutTempltr />
      <AboutTemp />
      <Abouthelp />
    </Fade>
  );
}

export default About;
