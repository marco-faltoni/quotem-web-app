const initState = {
  isOpen: false,
  title: "Quotem Menu",
  logo: "Q",
  showCard: false,
  valueSaved: null,
  noResults: false,
  isLoading: true,
  list: [
    {
      text: "Poems",
      link: "/poems"
    },
    {
      text: "Quotes",
      link: "/quotes"
    },
    {
      text: "My Quotem Saved",
      link: "/bookmarks"
    },
  ],
}

const menuReducer = (state=initState, action) => {
  switch(action.type){
    case "TOGGLE_MENU":
      return {...state, isOpen: action.payload.isOpen};
    case "TOGGLE_CARD":
      return {...state, showCard: action.payload.value};
    case "FETCH_VALUE_SEARCHED":
      return {...state, valueSaved: action.payload.value};
    case "TOGGLE_LOADER_SEARCHPAGE":
      return {...state, isLoading: action.payload.value};
    case "TOGGLE_RESULTS":
      return {...state, noResults: action.payload.value};
    default:
      return {...state};
  }
}

export default menuReducer; 