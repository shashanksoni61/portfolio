// import logo from '../../img/logo.svg';
const Navbar = () => {
  // const [show, setShow] = useState(false);
  // const showNav = () => {
  //   setShow(!show);
  // };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1>{`<Shashank />`}</h1>
          {/* <img src={logo} alt='' /> */}
          {/* <button className='toggle-btn' type='button' onClick={showNav}>
            <RiMenu3Fill />
          </button> */}
        </div>
        {/* <div className={`nav-links ${show ? 'display-flex' : 'display-none'}`}>
          <Link to='/'>
            <a href='#home' onClick={setShow}>
              Home
            </a>
          </Link>
          <Link to='/about'>
            <a href='#about'>About</a>
          </Link>
          <Link to='/projects'>
            <a href='#projects'>Projects</a>
          </Link>
          <Link to='/contact'>
            <a href='#contact'>Contact</a>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
