const initState = {
  randomAdvice: [],
}

const adviceReducer = (state=initState, action) => {
  switch(action.type){
    case "FETCH_RANDOM_ADVICE":
      return {...state, randomAdvice: action.payload.randomAdvice};
    default:
      return {...state};
  }
}

export default adviceReducer; 