//* Dependencies
import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

//* Exported component
const History = () => {
  const { history } = useContext(SearchContext);

  return (
    <Fragment>
      <h2>History Page</h2>
      <div className='container'>
        <ul>
          {history.length === 0 ? (
            <div>Your previous search results appear here</div>
          ) : (
            history.map((item) => (
              <li key={item.concat(Math.random())} className='list'>
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default History;
