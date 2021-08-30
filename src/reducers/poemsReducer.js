const initState = {
  randomPoem: [],
  searched: [],
  authorList: [],
  selectedPoem: [],
  filters:[
    {
      value: "author",
      checked: true,
    },
    {
      value: "title",
      checked: false,
    },
    {
      value: "lines",
      checked: false,
    },
  ],
  valueInput: "author",
  
}

const poemsReducer = (state=initState, action) => {
  switch(action.type){
    case "FETCH_RANDOM_POEM":
      return {...state, randomPoem: action.payload.randomPoem};
    case "FETCH_SEARCHED_POEMS":
      return {...state, searched: action.payload.randomList};
    case "FETCH_AUTHOR_POEMS":
      return {...state, authorList: action.payload.authorPoems};
    case "FETCH_SELECTED_POEM":
      return {...state, selectedPoem: [action.payload.value]};
    case "TOGGLE_RADIO_POEMS":
      return {
        ...state, 
        filters: state.filters.map((item) => {
          if (action.payload.value === item.value) {
            return {
              ...item,
              checked: !item.checked,
            }
          }
          return {
            ...item,
            checked: false,
          }
        }),
        valueInput: action.payload.value
      };
    case "CLEAR_SEARCHED":
      return {...state, 
        searched: [],
        authorPoems: [],};
    default:
      return {...state};
  }
}

export default poemsReducer;