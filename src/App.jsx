import Header from './components/Header.jsx';
import { PORTFOLIO_PROJECTS } from './data.js';

function Footer() {
    return (
        <footer className="footer" id="footer">
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

            <section id="resume">
                <h2><a href="assets/JackStendeback-resume.pdf" download="Jack Stendeback Software Developer Resume" target="_blank">Resume</a></h2>
            </section>

            <section id="contact-links">
            <ul>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
            </ul>
            </section>
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
                <h2 id="projects">My Projects</h2>
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