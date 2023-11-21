import profilePicture from '../assets/portfolio-pic.jpg'
import IntroParagraph from './AboutMeParagraph.jsx';
import AboutMeParagraph from './AboutMeParagraph.jsx';

const portfolioDescriptions = ['Full Stack', 'React', 'Web Development', 'MERN'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }


export default function Header() {
    const keyWords = portfolioDescriptions[genRandomInt(2)]

    return (
        <header id="header">
            <nav>
                <ul>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#main-projects">Portfolio</a></li>
                    <li><a href="#footer">Contacts</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            
            <h1><a href="https://www.linkedin.com/in/jack-stendeback/" target="_blank" id="name-hover">Jack Stendeback's {keyWords} Portfolio</a></h1>
            <img src={profilePicture} alt="Jack Stendeback in a suit." />
            <AboutMeParagraph>
                <IntroParagraph />
            </AboutMeParagraph>
        </header>
    );
}