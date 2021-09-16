import React from 'react'
import { useArticleContext } from '../util/context'

const News = () => {
    const { loading, hits, removeArticle } = useArticleContext();
    if (loading) {
        return <div className="loading">Loading...</div>
    }
    return (
        <section className="articles">
            {hits.map((story) => {
                const {objectID: id, title, author, points, num_comments: comments, url} = story;

                return <article key={id} className="article">
                    <h4 className="title">{title}</h4>
                    <p className="info">{points} points by <span>{author}</span> \\{comments} comments</p>
                    <div>
                        <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">Read More</a>
                        <button className="remove-btn" onClick={() => removeArticle(id)}>
                            Remove
                        </button>
                    </div>
                </article>
            })}
        </section>
    )
}

export default News
