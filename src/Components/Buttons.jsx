import React from 'react'
import { useArticleContext } from '../util/context'

const Buttons = () => {
    const {loading, page, nbPages, handlePage} = useArticleContext();
    return (
        <div className="btn-container">
            <button disabled={loading} className="btn" onClick={() => handlePage("dec")}>Prev</button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button disabled={loading} className="btn" onClick={() => handlePage("inc")}>Next</button>
        </div>
    )
}

export default Buttons
