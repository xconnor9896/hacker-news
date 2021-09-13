import React from 'react'
import { useArticleContext } from '../util/context';

const SearchForm = () => {
    const { query, setQuery, error } = useArticleContext();
    console.log(error);      // error has {show} and {msg}
    // Example output for error: {show: true, msg: "Movie not found!"}
    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <h2>Search Hacker News</h2>
            <input type="text" className="form-input" value={query} onChange={(e) => setQuery(e.target.value)} />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
        // add an error container later
    )
}

export default SearchForm