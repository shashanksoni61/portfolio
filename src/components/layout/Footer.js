import socialLinks from '../../constants/social_links';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-links'>
        {socialLinks.map(link => {
          return (
            <a href={link.url} key={link.id} className='social-link'>
              {link.icon}
            </a>
          );
        })}
      </div>
      <div className='footer-text'>
        Built By <span> Shashank Soni</span>
      </div>
    </footer>
  );
};

export default Footer;
