const initState = {
  isOpen: false,
  title: "Quotem Menu",
  logo: "Q",
  showCard: false,
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
    default:
      return {...state};
  }
}

export default menuReducer; 