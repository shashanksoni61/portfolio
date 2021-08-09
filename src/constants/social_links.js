import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

import { ImMail } from 'react-icons/im';
const data = [
  {
    id: 1,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/shashank-soni-697470128',
  },
  {
    id: 2,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: 'https://www.github.com/shashanksoni61',
  },
  {
    id: 3,
    icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
    url: 'https://www.instagram.com/thisisshashanksoni',
  },

  {
    id: 5,
    icon: <ImMail className='social-icon'></ImMail>,
    url: 'shashanksoni61@gmail.com',
  },
];

export default data;
