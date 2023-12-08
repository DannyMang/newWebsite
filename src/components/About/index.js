import { useEffect, useState } from 'react'
import {
  faPython,
  faJava,
  faGithub,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious software developer and a machine learning enthusiast! My main research interests are in computer vision and generative AI! I am interested in how a computer perceives images, and how it is possible to almost replicate the ability of an actual human eye. After I finish my undergraduate studies, I plan on pursuing a Master's. A fun fact about me is that I also spend a good chunk of my time playing chess and volleyball!
          </p>
          <p align="LEFT">
            I am currently a second-year at San Jose State University. I am involved with Machine Learning Club, Association for Computing Machinery, and Vietnamese Student Association. I currently hold a treasurer position in Machine Learning Club. Go Spartans!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#000080" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="black" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
