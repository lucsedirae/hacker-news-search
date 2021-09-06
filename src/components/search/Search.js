//* Dependencies
import React, { Fragment, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../../context/SearchContext';

//* Custom components
import Results from './Results';

//* Exported component
const Search = () => {
  //* Imports state from context
  const { query, setQuery, setResults, setHistory, history } =
    useContext(SearchContext);

  //* Sets query value on input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //* Requests search results from API and adds query to history state
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
        <h2 className='center'>Search Page</h2>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Search for news...'
          onChange={handleChange}
        />

        <button onClick={handleSubmit} type='submit' className='btn'>
          Submit
        </button>
        <Results />
    </Fragment>
  );
};
export default Search;
