import axiosInstance from "../../services/AxiosInstance"

export const fetchEventsRequest = ()=> {
    return {
        type: 'FETCH_EVENTS_REQUEST'
    }
}

export const fetchEventsSuccess = (events)=> {
    return {
        type: 'FETCH_EVENTS_SUCCESS',
        payload: events
    }
}

export const fetchEventsError = (error)=> {
    return {
        type: 'FETCH_EVENTS_ERROR',
        payload: error
    }
}

export const fetchEvents = ()=> {
  return (dispatch)=> {
      dispatch(fetchEventsRequest())
      axiosInstance.get('events').then(response=> {
          const events = response.data
          dispatch(fetchEventsSuccess(events))
          console.log("-----thunk", response.data)
      }).catch(error=>{
          dispatch(fetchEventsError(error.message))
      })
  }
}

export const fetchLanguage = (locale) => {
    return (dispatch) => {
      axiosInstance.get('events', {params: {_locale: locale}})
        .then(resultData=>{
            console.log("lang===",resultData.data)
            dispatch(fetchEventsSuccess(resultData.data))
        }).catch(error=> {            
            console.log("lang=err==",error)
            dispatch(fetchEventsError(error))
        })
    }
}