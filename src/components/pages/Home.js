//* Dependencies
import React, { Fragment } from 'react';

//* Exported component
const Home = () => {
  return (
    <Fragment>
      <p className='center body-text'>
        Welcome to the Hacker News search app. To get started click on "Search".
        Results will display below the search field. Click on "History" to see a
        list of previous search criteria from this session.
      </p>
    </Fragment>
  );
};

export default Home;
