import { createStore as reduxCreateStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducer";

//const store = createStore(rootReducer, applyMiddleware(thunk))
// preloadedState will be passed in by the plugin
// export default preloadedState => {
//     return createStore(rootReducer, preloadedState);
//   };

  
  const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk))
  export default createStore