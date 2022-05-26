import img1 from '../img/project-dev-connector.jpg';
import img2 from '../img/project-forkify.jpg';
import img3 from '../img/project-trillo.jpg';
import img5 from '../img/contact-book.jpg';
import img6 from '../img/tech-space.jpg';
import img7 from '../img/tech-shop.jpg';

const projects = [
  {
    id: 1,
    img: img7,
    title: 'TechShop - React E-Commerce',
    url: 'https://techshop-shashank.herokuapp.com/',
    github: 'https://github.com/shashanksoni61/react-ecommerce',
    description:
      'eCommerce platform built with the MERN stack & Redux. Users can make purchases, review products, rate them.',
    type: 'Full Stack',
    stack: [
      'React',
      'Redux',
      'Razorpay API',
      'bootstrap',
      'Rest API',
      'MongoDB',
      'NodeJS',
      'Express',
    ],
  },
  {
    id: 2,
    img: img6,
    title: 'Tech Space - Blog',
    url: 'https://tech-space-blog.vercel.app/',
    github: 'https://github.com/shashanksoni61/TechSpace-blog',
    description: 'simple blog project using Next Js',
    type: 'Full Stack',
    stack: ['Next JS', 'Tailwind CSS', 'React-Markdown'],
  },
  {
    id: 3,
    img: img5,
    title: 'Contact-Book',
    url: 'https://contact-book-shashank61.herokuapp.com',
    github: 'https://github.com/shashanksoni61/Contact-Book',
    description: 'simple blog project using Next Js',
    type: 'Full Stack',
    stack: ['React', 'Mongo DB', 'Express', 'Node'],
  },
  {
    id: 4,
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
    id: 5,
    img: img2,
    title: 'Forkify',
    url: 'https://shashank-forkify.netlify.app/',
    github: 'https://github.com/shashanksoni61/forkify-project',
    description: `JavaScript Project where user can search recipes, and add recipes .`,
    type: 'Javascript',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 6,
    img: img3,
    title: 'Trillo - Hotel Booking',
    url: 'https://trillo-shashank.netlify.app/',
    github: 'https://github.com/shashanksoni61/Trillo-Css',
    type: 'CSS / Design',
    description: `Designed Based Project where I designed the front-end of the project.`,
    stack: ['HTML', 'CSS'],
  },
];

export default projects;
