//* Dependencies
import React, { Fragment } from 'react';

//* Custom components
import Footer from './Footer';
import Header from './Header';

//* Exported component
const Layout = ({ children }) => {
  return (
    <Fragment>
      <main className='container'>
        <Header />
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
