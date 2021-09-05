//* Dependencies
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import { SearchContext } from './context/SearchContext';

//* Custom components
import History from './components/history/History';
import Home from './components/pages/Home';
import Layout from './components/layout/Layout';
import Search from './components/search/Search';

//* Exported component
function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);

  //* Stores state variables to be passed into context provider value attribute
  const providerValue = useMemo(
    () => ({ query, setQuery, results, setResults, history, setHistory }),
    [query, setQuery, results, setResults, history, setHistory]
  );

  return (
    <Router>
      <Layout>
          <ul className="center">
            <li>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/search'>
                Search
              </Link>
            </li>
            <li>
              <Link className='link' to='/history'>
                History
              </Link>
            </li>
          </ul>

          <SearchContext.Provider value={providerValue}>
            <Route path='/' exact component={Home} />
            <Route path='/search' exact component={Search} />
            <Route path='/history' exact component={History} />
          </SearchContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
