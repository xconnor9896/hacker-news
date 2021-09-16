import React from 'react'
import { useArticleContext } from '../util/context';

const SearchForm = () => {
    const { query, handleSearch } = useArticleContext();
    return <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Search Hacker News</h2>
        <input
            type="text"
            className="form-input"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
        />
    </form>
}

export default SearchForm
