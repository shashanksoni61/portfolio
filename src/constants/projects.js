import img1 from '../img/project-dev-connector.jpg';
import img2 from '../img/project-forkify.jpg';
import img3 from '../img/project-trillo.jpg';
import img4 from '../img/project-nexter.jpg';
const projects = [
  {
    id: 1,
    img: img1,
    title: 'Dev Connector',
    url: 'https://de-v-connector.herokuapp.com/',
    github: 'https://github.com/shashanksoni61/DevConnector',
    description:
      'Dev Connector is an online platform, where developers can meet and share their profile in developer’s community',
    type: 'Full Stack',
    stack: ['React', 'MongoDB', 'NodeJS', 'Express'],
  },
  {
    id: 2,
    img: img2,
    title: 'Forkify',
    url: 'https://shashank-forkify.netlify.app/',
    github: 'https://github.com/shashanksoni61/forkify-project',
    description: `JavaScript Project where user can search recipes, and add recipes .`,
    type: 'Javascript',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 3,
    img: img3,
    title: 'Trillo - Hotel Booking',
    url: 'https://trillo-shashank.netlify.app/',
    github: 'https://github.com/shashanksoni61/Trillo-Css',
    type: 'CSS / Design',
    description: `Designed Based Project where I designed the front-end of the project.`,
    stack: ['HTML', 'CSS'],
  },
  {
    id: 4,
    img: img4,
    title: 'Nexter - House Booking',
    url: 'https://nexter-s-css.netlify.app/',
    github: 'https://github.com/shashanksoni61/DevConnector',
    type: 'CSS / Design',
    description: `Designed Based Project where I Designed the Front-end of the project.`,
    stack: ['HTML', 'CSS'],
  },
];

export default projects;
