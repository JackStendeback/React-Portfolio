import profilePicture from '../assets/portfolio-pic.jpg'

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
                    <li><a href="#header">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#footer">Contacts</a></li>
                </ul>
            </nav>
            
            <h1><a href="https://www.linkedin.com/in/jack-stendeback/" target="_blank" id="name-hover">Jack Stendeback's {keyWords} Portfolio</a></h1>
            <img src={profilePicture} alt="Jack Stendeback in a suit." />
            <p>
                An in depth look into my life as a Software Developer!
            </p>
        </header>
    );
}