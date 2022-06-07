const initialState = {
    loading: false,
    events: [],
    eventsError: ''
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
                ...state,
                loading: false,
                events: action.payload,
                eventsError: ''
            }
        case 'FETCH_EVENTS_ERROR':
            return {
                ...state,
                loading: false,
                events: [],
                eventsError: action.payload
            }
        default:
            return state
    }
}
export default eventReducer