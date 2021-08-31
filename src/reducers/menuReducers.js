const initState = {
  isOpen: false,
  title: "Quotem Menu",
  logo: "Q",
  showCard: false,
  showCardCreate: false,
  valueSaved: null,
  noResults: false,
  isLoading: true,
  isQuote: false,
  isPoem: false,
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
    case "TOGGLE_CARD_CREATE":
      return {...state, showCardCreate: action.payload.value};
    case "FETCH_VALUE_SEARCHED":
      return {...state, valueSaved: action.payload.value};
    case "TOGGLE_LOADER_SEARCHPAGE":
      return {...state, isLoading: action.payload.value};
    case "TOGGLE_RESULTS":
      return {...state, noResults: action.payload.value};
    case "TOGGLE_QUOTE":
      return {...state, isQuote: true, isPoem: false};
    case "TOGGLE_POEM":
      return {...state, isPoem: true, isQuote: false};
    default:
      return {...state};
  }
}

export default menuReducer; 