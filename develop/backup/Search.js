//* Dependencies
import React, { Fragment, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../../context/SearchContext';

//* Custom components
import Results from './Results';

//* Exported component
const Search = (props) => {
  const { results, setResults, query, setQuery } = useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);

    await axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        setResults(res.data.hits);
        console.log(`Raw: ${res.data}`);
      });
  };

  return (
    <Fragment>
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

        {console.log(`Results: ${results}`)}
      </div>

      <Results results={results} />
      {/* <Results /> */}
    </Fragment>
  );
};

export default Search;
