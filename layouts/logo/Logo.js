import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='mobileHeader__container__logo'>
      <Link exact href={'/'}>
        <a href='/'>
          <Image src='/logo.png' alt='Das Parfum' width={308} height={75} layout='responsive'/>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
