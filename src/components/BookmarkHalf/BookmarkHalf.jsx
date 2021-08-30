import React, {useState, useEffect} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';


const BookmarksHalf = (props) => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  const { poems, quotes } = props;
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("QuotemLocalStorage");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let arrayPoems = [];
  let arrayQuotes = [];

  name.filter((item) => {
    if (Array.isArray(item.content) ) {
      arrayPoems.push(item)
    }
    if (Array.isArray(item.title) ) {
      arrayQuotes.push(item)
    }
  });
  console.log(arrayQuotes);

  // const loadDetailsHandler = (item) => {
  //   document.body.style.overflow = 'hidden';
  //   if (randomPoems) {
  //     dispatch({
  //       type: 'FETCH_SELECTED_POEM',
  //       payload: {
  //         value: item,
  //       }
  //     });
  //   } else if (randomQuotes){
  //     dispatch({
  //       type: 'FETCH_SELECTED_QUOTE',
  //       payload: {
  //         value: item,
  //       }
  //     });
  //   }
  //   dispatch({
  //     type: 'TOGGLE_CARD',
  //     payload: {
  //       value: !menu.showCard,
  //     }
  //   });
  // }

  return (
    <div className={`wrapper-half bookmarks ${poems ? "poem" : "quote"}`}>
      {poems && (
        <>
        <h2 className="big-tl pm">Saved Poems</h2>
        {arrayPoems.length > 0 ? (
          <div className="wrapper-cards bookmarks-poem">
            {arrayPoems.map((item, index) => {
              return (
                <div key={index} className="card-wrapper">
                  <div className="card-info">
                    <h3>{item.title}</h3>
                    <h4>{item.author}</h4>
                  </div>
                  <div className="card-content">
                    <h5>
                      {item.content?.map((line, index)=> {
                        return (
                          <React.Fragment key={index}>
                            <span>{line}</span>
                            <br />
                          </React.Fragment>
                        )
                      })}
                    </h5>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <h3>No Poems Saved. Go to <span>search page</span> and bookmark some poems.</h3>
        )}
        </>
      )}
      {quotes && (
        <>
        <h2 className="big-tl qt">Saved Quotes</h2>
        {arrayQuotes.length > 0 ? (
          <div className="wrapper-cards">
            {arrayQuotes.map((item, index) => {
              return (
                <div key={index} className="card-wrapper">
                  <div className="card-info">
                    {item.title?.map((tag, index)=> {
                      const tagsLength = item.title.length;
                      return (
                        tagsLength <= 1 ? 
                          <h3 key={index}>{tag.replace(/-/g," ")}</h3> 
                        : 
                          <h3 className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</h3>
                      )
                    })}
                    <h4>{item.author}</h4>
                  </div>
                  <div className="card-content">
                    <h5>
                      {item.content}
                    </h5>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <h3>No Quote Saved. Go to <span>search page</span> and bookmark some quotes.</h3>
        )}
        </>
      )}
    </div>
  );
};


export default BookmarksHalf;