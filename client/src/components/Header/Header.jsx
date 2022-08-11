import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 px-0 py-2'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>Project MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
