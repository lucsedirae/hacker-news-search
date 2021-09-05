//* Dependencies
import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

//* Exported component
const Results = () => {
  const { results } = useContext(SearchContext);

  return (
    <Fragment>
      {results.length === 0 ? (
        <h2 className='center'>Your news here</h2>
      ) : (
        results.map((result) => (
          <div key={result.created_at_i}>
            <div className='news-card body-text'>
              <h3 className='block'>{result.title}</h3>
              <span className='block'>{result.created_at}</span>
              <a
                href={result.url}
                target='_blank'
                rel='noreferrer'
                className='block'
              >
                {result.url}
              </a>
              <h3 className='block'>Tags:</h3>
              {result._tags.map((tag) => (
                <span key={tag.concat(Math.random())} className='tag'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default Results;
