import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/RADtransparentHD.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div id='home-top' style={{ height: '1px' }}></div>

      <div className="header__wrapper container">
        <div className="header__image">
          <img src={ME} alt="Emanuel Botros" />
        </div>

        <div className="header__info">
          <h5>Hello! My Name Is</h5>
          <h1>Emanuel Botros</h1>
          <h5 className="text-light">
            Security+ | M.S. Cybersecurity (In Progress) | B.S. in IT | <br />Focus in Cybersecurity, Networking & Systems | UCF Alumni
          </h5>

          <CTA />
          <HeaderSocials />
        </div>
      </div>

      <a href="#footer" className='scroll__down'>Scroll To The Bottom</a>
    </header>
  );
};

export default Header;
