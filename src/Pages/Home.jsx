import React, { useState, useEffect } from 'react'
import SearchForm from '../Components/SearchForm';
import News from '../Components/News';

const Home = () => {
    return (
        <div>
            <SearchForm> </SearchForm>
            <News></News>
        </div>
    )
}

export default Home
