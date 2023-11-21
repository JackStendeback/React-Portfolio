import Header from './components/Header.jsx';
import { PORTFOLIO_PROJECTS } from './data.js';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';

function Portfolio() {
    return (
        <div>
            <Header />
          <main>
            <section id="main-projects">
                <h2 id="projects">Portfolio Projects</h2>
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