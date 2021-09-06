//* Dependencies
import React, { Fragment } from 'react';

//* Custom components
import Footer from './Footer';
import Header from './Header';

//* Exported component
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className='container'>
        <div className='content'>{children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
