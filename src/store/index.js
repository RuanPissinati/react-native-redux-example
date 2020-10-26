import { createStore } from 'redux'; 
const INITAL_STATE = {
  activeModule: null,
  activeLeason: null,
  modules: [
  {
    id: 1,
    title: "Curso A",
    leasons: [
      {id: 1, title: "Como fazer o curso a"},
      {id: 2, title: "Como fazer curso a mais rapido."}
    ]
  },
  {
    id: 2,
    title: "Curso B",
    leasons: [
      {id: 1, title: "Como fazer o curso a"},
      {id: 2, title: "Como fazer curso a mais rapido."}
    ]
  }
]}

function reducer(state = INITAL_STATE, action){
  console.log('REDUCER RUAN', action.module);
  if(action.type === "TOOGLE_LESSON"){
    return {...state, activeModule: action.module, activeLeason: action.leason }
  } else {
    return state;
  }
  
}

const store = createStore(reducer);
export default store;