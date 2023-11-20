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
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </nav>
            
            <h1>Jack Stendeback's {keyWords} Portfolio</h1>
            <img src={profilePicture} alt="Jack Stendeback in a suit." />
            <p>
                An in depth look into my life as a Software Developer!
            </p>
        </header>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <h2>Contact Me!</h2>
            <form action="/submit_form_url" method="POST" className="contact-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />

                <button type="submit">Send</button>
            </form>
        </footer>
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
                <Projects {...PORTFOLIO_PROJECTS[4]} />
                <Projects {...PORTFOLIO_PROJECTS[5]} />
                </ul>
            </section>
            <Footer />
          </main>
        </div>
    );
}

export default Portfolio;