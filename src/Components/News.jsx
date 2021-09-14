import React, { useState } from 'react'
import { useArticleContext } from '../util/context';

const News = () => {

    const {articles, loading} = useArticleContext;

    return (
        <div className="news">
            <button className="btn">Prev</button>
            <button className="btn">Next</button>
        <div className="buttonContainer">

        </div>

            <section className="stories">
                {articles.map((article) => {
                    const {hits, title, url, points, num_commnents,} = article;

                    
                })}
            </section>

        </div>
    )
}

export default News
