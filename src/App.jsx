const portfolioDescriptions = ['Full Stack', 'React', 'Web Development'];

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
                An in depth look into my life as a Full Stack Web Developer!
            </p>
        </header>
    );
}

function Portfolio() {
    return (
        <div>
          <main>
            <h2>Time to get started!</h2>
          </main>
        </div>
    );
}

export default Portfolio;