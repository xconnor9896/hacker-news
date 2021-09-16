import React, { useReducer, useContext, useEffect } from 'react';
import { reducer } from './reducer';

const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

// state object that holds values for context
// used by reducer
const initState = {
    hits: [],
    page: 0,
    query: "ruby",
    nbPages: 0, // updated during API fetch
    loading: true
};

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchHits = async (url) => {
        // sets loading = true
        dispatch({ type: 'SET_LOADING' });
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: 'SET_HITS', payload: data });
        } catch (error) {
            console.error(error);
        }
    }

    const removeArticle = (id) => {
        dispatch({type: "REMOVE_ARTICLE", payload: id});
    }

    const handleSearch = (query) => {
        dispatch({ type: "HANDLE_SEARCH", payload: query});
    }

    const handlePage = (value) => {
        dispatch({type: "HANDLE_PAGE", payload: value});
    }

    useEffect(() => {
        fetchHits(`${API_ENDPOINT}query=${state.query}&page=${state.page}&`);
    }, [state.query, state.page])

    return (<ArticleContext.Provider value={{...state, removeArticle, handleSearch, handlePage}}>
        {children}
    </ArticleContext.Provider>)
}

export const useArticleContext = () => {
    return useContext(ArticleContext);
}