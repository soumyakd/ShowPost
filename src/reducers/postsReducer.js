const postInitialState = []

const postsReducer = (state = postInitialState, action) => {
    switch(action.type) {
        case 'ADD_POST': {
            return [].concat(action.payload)
        }

        default: {
            return [].concat(state)
        }
    }
}

export default postsReducer