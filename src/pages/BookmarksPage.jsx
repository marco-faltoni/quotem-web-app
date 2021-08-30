import React from "react";
// Redux
import { useSelector} from 'react-redux';
// import components
import BookmarksHalf from '../components/BookmarkHalf/BookmarkHalf';
import CardCreate from '../components/CardDetails/CardDetails';


const BookmarksPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  return (
    <div className="wrapper-bookmarks">
      <div className={`wrapper-qp ${menu.showCard ? "blur" : ""}`}>
        <BookmarksHalf poems/>
        <BookmarksHalf quotes/>
      </div>
      <div className="wrap-btn">
        <button type="button">
          Create new content
        </button> 
      </div>
      <CardCreate />
    </div>
  );
};


export default BookmarksPage;