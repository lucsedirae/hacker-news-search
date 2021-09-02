import React, { Fragment, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';

const Search = () => {
  const { query, setQuery, results, setResults, setHistory, history } =
    useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    setHistory([query, ...history]);
    // await axios
    //   .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    //   .then((res) => {
    //     setResults(res.data.hits);
    //     console.log(`Raw: ${res.data}`);
    //   });
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

        {/* {console.log(`Results: ${results}`)} */}
      </div>
    </Fragment>
  );
};
export default Search;
