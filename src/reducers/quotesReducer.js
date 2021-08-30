const initState = {
  randomQuotes: [],
  searched: [],
  authorList: [],
  selectedQuote: [],
  filters:[
    {
      value: "author",
      checked: true,
    },
    {
      value: "tag",
      checked: false,
    }
  ],
  valueInput: "author",
  isLoading: true
}

const quotesReducer = (state=initState, action) => {
  switch(action.type){
    case "FETCH_RANDOM_QUOTES":
      return {...state, randomQuotes: action.payload.randomQuotes, isLoading: false};
    case "FETCH_SEARCHED_QUOTES":
      return {...state, searched: action.payload.randomList};
    case "FETCH_AUTHOR_QUOTES":
      return {...state, authorList: action.payload.authorQuotes};
    case "FETCH_SELECTED_QUOTE":
        return {...state, selectedQuote: [action.payload.value]};
    case "TOGGLE_LOADER_QUOTE":
      return {...state, isLoading: true};
    case "TOGGLE_RADIO_QUOTES":
      return {
        ...state, 
        filters: state.filters.map((item) => {
          return {
            ...item,
            checked: !item.checked,
          }
        }),
        valueInput: action.payload.value
      };
    case "CLEAR_SEARCHED":
      return {...state, searched: [], authorList: []};
    default:
      return {...state};
  }
}

export default quotesReducer;