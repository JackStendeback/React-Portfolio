const portfolioDescriptions = ['Full Stack', 'React', 'Web Development', 'MERN'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }


function Header() {
    const keyWords = portfolioDescriptions[genRandomInt(2)]

    return (
        <header>
            <img src="src/assets/portfolio-pic.jpg" alt="Jack Stendeback in a suit." />
            <h1>My {keyWords} Portfolio</h1>
            <p>
                An in depth look into my life as a Software Developer!
            </p>
        </header>
    );
}

// Add in links to the project repo's and the deployed applications once complete.
function Projects(props) {
    return (
        <li>
            <img src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
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
                    <Projects/>
                    <Projects/>
                    <Projects/>
                    <Projects/>
                </ul>
            </section>
          </main>
        </div>
    );
}

export default Portfolio;