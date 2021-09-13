import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
    const [query, setQuery] = useState("google");
    const { articles, error, loading } = useFetch(`query=${query}`);

    return (<ArticleContext.Provider value={{ query, setQuery, loading, articles, error }}>
        {children}
    </ArticleContext.Provider>)
};

export const useArticleContext = () => {
    return useContext(ArticleContext);
}