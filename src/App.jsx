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



function Portfolio() {
    return (
        <div>
            <Header />
          <main>
            <h2>Let's get started!</h2>
          </main>
        </div>
    );
}

export default Portfolio;