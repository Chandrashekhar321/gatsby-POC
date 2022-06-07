import { combineReducers } from "redux";
import eventReducer from "./events/eventReducer";

const initialState = { count: 0 }

const counterReducer = (state=initialState, action) => {
    if (action.type === `INCREMENT`) {
      return {...state,
         count: state.count + 1
      }
    }
    if (action.type === `RESET`) {
      return Object.assign({}, state, {
        count: 0,
      })
    }
    return state
  }
  

const rootReducer = combineReducers({
    counter: counterReducer,
    events: eventReducer
})
export default rootReducer;