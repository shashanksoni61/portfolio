import React from 'react';
import heroImg from '../../img/hero.svg';
import socialLinks from '../../constants/social_links';

const Hero = () => {
  return (
    <header className='hero'>
      <section className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>i'm Shashank</h1>
            <h4>Full Stack Web Developer</h4>
            <a
              href='https://drive.google.com/file/d/1Q-CwQ1iFaBNehyfDKsfPpvtCdpYmYEWr/view?usp=sharing'
              target='_blank'
              className='btn'
              rel='noopener noreferrer'
            >
              Resume
            </a>
            <div className='social-links'>
              {socialLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    target='_blank'
                    className='social-link'
                    rel='noopener noreferrer'
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        {
          <img
            src={heroImg}
            alt='portfolio'
            className='hero-img'
            placeholder='blurred'
          />
        }
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  );
};

export default Hero;
