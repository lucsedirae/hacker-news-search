//* Dependencies
import React, { Fragment } from 'react';

//* Exported component
const Footer = () => {
  return (
    <Fragment>
      <footer className='body-text center footer'>
        © 2021 Jon Deavers -{' '}
        <a
          href='https://github.com/lucsedirae'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
      </footer>
    </Fragment>
  );
};

export default Footer;
