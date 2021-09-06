//* Dependencies
import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

//* Exported component
const History = () => {
  const { history } = useContext(SearchContext);

  return (
    <Fragment>
      <h2 className='center'>History Page</h2>
        <h3 className="center block ">This session's search history:</h3>
        <ul className='center body-text'>
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
    </Fragment>
  );
};

export default History;
