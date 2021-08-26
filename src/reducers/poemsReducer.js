const initState = {
  randomPoem: [],
  searched: [],
  authorPoems: [],
}

const poemsReducer = (state=initState, action) => {
  switch(action.type){
    case "FETCH_RANDOM_POEM":
      return {...state, randomPoem: action.payload.randomPoem};
    case "FETCH_SEARCHED_POEMS":
      return {...state, searched: action.payload.searched};
    case "FETCH_AUTHOR_POEMS":
      return {...state, authorPoems: action.payload.authorPoems};
    case "CLEAR_SEARCHED":
      return {...state, 
        searched: [],
        authorPoems: [],};
    default:
      return {...state};
  }
}

export default poemsReducer;