import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';

import Results from './Results';

const Search = () => {
  const { query, setQuery, setResults, setHistory, history } =
    useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        setResults(res.data.hits);
      });
    setHistory([query, ...history]);
  };

  return (
    <Fragment>
      <h2>Search Page</h2>
      <div className='container'>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Search for news...'
          onChange={handleChange}
        />

        <button onClick={handleSubmit} type='submit'>
          Submit
        </button>
        <Results />
      </div>
    </Fragment>
  );
};
export default Search;
