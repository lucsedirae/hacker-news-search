import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='brand center'>Hacker News Search</h1>
      <main className='container'>
        <div className='container'>
        </div>
      {children}
      </main>
    </div>
  );
};

export default Layout;
