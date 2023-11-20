import profilePicture from './assets/portfolio-pic.jpg'
import { PORTFOLIO_PROJECTS } from './data.js';

const portfolioDescriptions = ['Full Stack', 'React', 'Web Development', 'MERN'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }


function Header() {
    const keyWords = portfolioDescriptions[genRandomInt(2)]

    return (
        <header>
            <img src={profilePicture} alt="Jack Stendeback in a suit." />
            <h1>My {keyWords} Portfolio</h1>
            <p>
                An in depth look into my life as a Software Developer!
            </p>
        </header>
    );
}

// Add in links to the project repo's and the deployed applications once complete.
function Projects({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function Portfolio() {
    return (
        <div>
            <Header />
          <main>
            <section id="main-projects">
                <h2>My Projects</h2>
                <ul>
                <Projects {...PORTFOLIO_PROJECTS[0]} />
                <Projects {...PORTFOLIO_PROJECTS[1]} />
                <Projects {...PORTFOLIO_PROJECTS[2]} />
                <Projects {...PORTFOLIO_PROJECTS[3]} />
                </ul>
            </section>
          </main>
        </div>
    );
}

export default Portfolio;