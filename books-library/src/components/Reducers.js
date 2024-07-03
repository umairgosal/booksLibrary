    const initialState = {
        items: [],
        Loading: false,
        error: null,
    }
    const reducer = (state, action) => {
        switch(action.type){
            case 'progress': {
                return {
                    ...state,
                    loading: true,
                }
            }
            case 'fetched': {
                return {
                    ...state,
                    loading: false,
                    items: action.data,
                }
            }
            case 'error': {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
            }
            default: {
                return state
            }
        }
    }

    export {initialState, reducer}