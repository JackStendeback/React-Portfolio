import WellnessWizard from './assets/WellnessWizard.jpeg';
import ORMECommerce from './assets/ORM-ECommerce.jpeg';
import PokemonGuesser from './assets/PokemonGuesser.jpeg';
import JavascriptQuiz from './assets/JavascriptQuiz.jpeg';
import BettorsBible from './assets/BettorsBible.jpeg';
import WeatherApp from './assets/WeatherApp.jpeg';

export const PORTFOLIO_PROJECTS = [
    {
    image: BettorsBible,
    title: `Bettor's Bible`,
    description:
      `A Full Stack MERN application that allows the user to compare betting odds between different casinos to find the best odds.`,
    liveURL: '#',
    },
    {
      image: WellnessWizard,
      title: 'Wellness Wizard',
      description:
        `A fitness application that's focused on balance. This isn't magic, this is the new YOU.`,
      liveURL: 'https://wellness-wizard-c98198b06502.herokuapp.com/',
    },
    {
      image: ORMECommerce,
      title: 'ORM-ECommerce Backend',
      description:
        `A backend ECommerce site focused on 'GET', 'POST', 'PUT', and 'DELETE' requests. `,
      liveURL: 'https://drive.google.com/file/d/1tujTycHkxzXNDO1jREM4o34A1q3lKQBJ/view',
    },
    {
      image: PokemonGuesser,
      title: 'Pokemon-Generation-Guesser',
      description:
        `A passion project motivated by my inability to correctly remember when specific Pokemon were introduced`,
      liveURL: 'https://www.pokemonguesser.com',
    },
    {
      image: JavascriptQuiz,
      title: 'Interactive Javascript Quiz',
      description:
        'A quiz to help refine your knowledge in regards to front-end web development!',
      liveURL: 'https://jackstendeback.github.io/Stendeback-Javascript-Quiz/',
    },
    {
        image: WeatherApp,
        title: 'Weather App',
        description:
          'A weather dashboard that shows up to date weather data, along with a five day forecast and search history',
        liveURL: 'https://jackstendeback.github.io/Stendeback-Weather-Application',
    },
  ];