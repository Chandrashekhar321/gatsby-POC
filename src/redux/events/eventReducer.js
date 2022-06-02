const initialState = {
    loading: false,
    events: [],
    error: ''
}

const eventReducer = (state=initialState, action)=> {
    switch(action.type) {
        case 'FETCH_EVENTS_REQUEST':
            return {
              ...state,
              loading: true
            }
        case 'FETCH_EVENTS_SUCCESS':
            return {
                loading: false,
                events: action.payload,
                error: ''
            }
        case 'FETCH_EVENTS_ERROR':
            return {
                loading: false,
                events: [],
                error: action.payload
            }
        default:
            return state
    }
}
export default eventReducer