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
        </a>{' '}
        -{' '}
        <a
          href='https://twitter.com/jondeavers'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
      </footer>
    </Fragment>
  );
};

export default Footer;
