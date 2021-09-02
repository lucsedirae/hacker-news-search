import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Results = ({ results }) => {
  const { created_at_i, title } = results;

  return (
    <Fragment>
      {results.length === 0 ? (
        <h2>Your news here</h2>
      ) : (
        results.map((result) => (
          <div key={result.created_at_i}>
            <div className='container news-card'>
              <h3>{result.title}</h3>
              <span>{result.created_at}</span>
              <a href={result.url} target='_blank'>
                {result.url}
              </a>
              <h3>Tags:</h3>
              {result._tags.map((tag) => (
                <span key={tag}className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default Results;