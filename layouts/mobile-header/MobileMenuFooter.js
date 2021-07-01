import React from 'react';

const MobileMenuFooter = () => {
  return (
    <div className='mobileMenuFooter__container'>
      <ul className='mobileMenuFooter__container__items'>
        <li className='mobileMenuFooter__container__items--item'>anmelden</li>
        <li className='mobileMenuFooter__container__items--item'>registrieren</li>
        <li className='mobileMenuFooter__container__items--item'>wishlist</li>
        <li className='mobileMenuFooter__container__items--item'>sprache</li>
      </ul>
      <div className='mobileMenuFooter__container__footer'>
        <p className='mobileMenuFooter__container__footer--text'>
          shop@dasparfum-beauty.de
        </p>
        <p className='mobileMenuFooter__container__footer--text'>
          +49 (0)6173 9938000
        </p>
      </div>
    </div>
  );
};

export default MobileMenuFooter;
