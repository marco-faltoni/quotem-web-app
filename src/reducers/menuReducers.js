const initState = {
  isOpen: false,
  title: "Quotem Menu",
  logo: "Q",
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
    default:
      return {...state};
  }
}

export default menuReducer; 