import { createStore, combineReducers } from 'redux'


import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import update_person from "./actions/personActions";




const AllReducers = combineReducers({ game: gameReducer, person: personReducer })

const initialStates = {
  game : {name : "cricket"},
  person: {name: "sumit"}
}
const store = createStore(AllReducers, initialStates, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store