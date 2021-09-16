import React, { useState, useEffect } from 'react'
import SearchForm from '../Components/SearchForm';
import News from '../Components/News';
import Buttons from '../Components/Buttons';

const Home = () => {
    return (
        <div>
            <SearchForm> </SearchForm>
            <Buttons />
            <News></News>
        </div>
    )
}

export default Home
