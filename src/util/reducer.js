export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": {
            return { ...state, loading: true };
        }
        case "SET_HITS": {
            return {
                ...state,
                loading: false,
                nbPages: action.payload.nbPages,
                hits: action.payload.hits
            }
        }
        case "REMOVE_ARTICLE": {
            const newHits = state.hits.filter((hit) => hit.objectID !== action.payload)
            return {
                ...state,
                hits: newHits
            }
        }
        case "HANDLE_SEARCH": {
            return {
                ...state,
                query: action.payload,
                page: 0
            }
        }
        case "HANDLE_PAGE" : {
            let newPage = state.page;
            if(action.payload === 'inc') {
                newPage = state.page + 1;
                if(newPage + 1 > state.nbPages) {
                    newPage = 0;
                }
            }
            if(action.payload === 'dec') {
                newPage = state.page - 1;
                if(newPage < 0) {
                    newPage = state.nbPages - 1
                }
            }
            return {
                ...state,
                page: newPage
            }
        }
    }
}