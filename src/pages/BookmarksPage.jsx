import React from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// import components
import BookmarksHalf from '../components/BookmarkHalf/BookmarkHalf';
import CardDetails from '../components/CardDetails/CardDetails';
import CardCreate from '../components/CardCreate/CardCreate';


const BookmarksPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  const dispatch = useDispatch();
  const loadCreateHandler = () => {
    dispatch({
      type: 'TOGGLE_CARD_CREATE',
      payload: {
        value: !menu.showCardCreate,
      }
    });
  }
  return (
    <div className="wrapper-bookmarks">
      <div className={`wrapper-qp bookmarks ${menu.showCard ? "blur" : ""}`}>
        <BookmarksHalf poems/>
        <BookmarksHalf quotes/>
      </div>
      {/* <div className="wrap-btn" onClick={() => loadCreateHandler()}>
        <button type="button">
          Create new content
        </button> 
      </div>
      <CardCreate /> */}
      <CardDetails bookmarks />
    </div>
  );
};


export default BookmarksPage;