const initState = {
  randomQuotes: [],
  searched: [],
  authorList: [],
}

const quotesReducer = (state=initState, action) => {
  switch(action.type){
    case "FETCH_RANDOM_QUOTES":
      return {...state, popular: action.payload.randomQuotes};
    case "FETCH_SEARCHED_QUOTES":
      return {...state, searched: action.payload.searched};
    case "FETCH_AUTHOR_LIST":
      return {...state, authorList: action.payload.authorList};
    case "CLEAR_SEARCHED":
      return {...state, searched: [], authorList: []};
    default:
      return {...state};
  }
}

export default quotesReducer;