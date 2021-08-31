import React, {useState, useEffect} from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
import {CloseIcon} from '../../style/Icon';

const CardDetails = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const arrayLenght = poems.selectedPoem.length;
  const [local, setLocal] = useState();
  const dispatch = useDispatch();
  const { randomPoems, randomQuotes, bookmarks } = props;

  useEffect(() => {
    const data = localStorage.getItem('QuotemLocalStorage')
    if(data){
      setLocal(JSON.parse(data))
    }
  }, []);

  const exitHandler = () => {
    document.body.style.overflow = 'auto';
    dispatch({
      type: 'TOGGLE_CARD',
      payload: {
        value: !menu.showCard,
      }
    });
  };

  const saveToLocalHandle = (tit, aut, cont, id) => {
    let store = JSON.parse(localStorage.getItem("QuotemLocalStorage"));
    let savedItem = {
      title: tit,
      author: aut,
      content: cont,
      uniqueID: id ? id : tit
    }
    // console.log(cart);
    let isInCart = false;
    if (store) {
      isInCart = store.some(item => item.uniqueID === (id ? id : tit));
    } else {
      store = [];
    }
    // console.log(isInCart);
    if (!isInCart) {
      store.push(savedItem);
      alert(`${id ? "quote" : "poem"} saved!`)
    } else {
      alert(`${id ? "quote" : "poem"} already saved!`)
    }
    localStorage.setItem('QuotemLocalStorage', JSON.stringify(store));
    // setLocal(store)
    exitHandler();
  };

  const removeToLocalHandle = (id, val) => {
    let store = JSON.parse(localStorage.getItem("QuotemLocalStorage"));
    let filtered = [];
    store.filter((item) => {
      if (item.uniqueID !== id) {
        filtered.push(item)
      }
    })
    // console.log(filtered);
    localStorage.setItem('QuotemLocalStorage', JSON.stringify(filtered));
    alert("removed from your bookmarks!");
    exitHandler();
    window.location.reload();
  };

  return (
    <div className={`wrap-card-detail ${menu.showCard ? "show" : ""}`}>
      <div className={`wrap-animation ${menu.showCard ? "show" : ""}`}>
        {randomPoems && arrayLenght > 0 && (
          poems.selectedPoem?.map((item, index)=> {
            return (
              <div key={index} className={`card-wrapper detail`}>
                <div className="card-info">
                  <div className="card-info-titles">
                    <h3>{item.title}</h3>
                    <h4>{item.author}</h4>
                  </div>
                  <h5 onClick={() => saveToLocalHandle(item.title, item.author, item.lines)}>
                    add to your bookmarks
                  </h5>
                </div>
                <div className="card-content">
                  <h5>
                    {item.lines?.map((line, index)=> {
                      return (
                        <React.Fragment key={index}>
                          <span>{line}</span>
                          <br />
                        </React.Fragment>
                      )
                    })}
                  </h5>
                </div>
                <CloseIcon className="close-card" onClick={() => exitHandler()} width="11" height="11" />
              </div>
            )
          })
        )}
        {randomQuotes && (
          quotes.selectedQuote?.map((item, index)=> {
            return (
              <div key={index} className="card-wrapper detail">
                <div className="card-info">
                  <div className="card-info-titles">
                    {item.tags?.map((tag, index)=> {
                      const tagsLength = item.tags.length;
                      return (
                        tagsLength <= 1 ? (
                          <h3 key={index}>{tag.replace(/-/g," ")}</h3>
                          
                        ) : (
                          <h3 className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</h3>
                        )
                      )
                    })}
                    <h4>{item.author}</h4>
                  </div>
                  <h5 onClick={() => saveToLocalHandle(item.tags, item.author, item.content, item._id)}>add to your bookmarks</h5>
                </div>
                <div className="card-content">
                  <h5 className="card-quote">
                    {item.content}
                  </h5>
                </div>
                <CloseIcon className="close-card" onClick={() => exitHandler()} width="11" height="11" />
              </div>
            )
          })
        )}
        {bookmarks && (
          menu.isPoem ? (
            poems.selectedPoem?.map((item, index)=> {
              return (
                <div key={index} className={`card-wrapper detail`}>
                  <div className="card-info">
                    <div className="card-info-titles">
                      <h3>{item.title}</h3>
                      <h4>{item.author}</h4>
                    </div>
                    <h5 onClick={() => removeToLocalHandle(item.uniqueID, "poem")} >
                      remove from your bookmarks
                    </h5>
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
                  <CloseIcon className="close-card" onClick={() => exitHandler()} width="11" height="11" />
                </div>
              )
            })
          ) : (
            quotes.selectedQuote?.map((item, index)=> {
              return (
                <div key={index} className="card-wrapper detail">
                  <div className="card-info">
                    <div className="card-info-titles">
                      {item.title?.map((tag, index)=> {
                        const tagsLength = item.title.length;
                        return (
                          tagsLength <= 1 ? (
                            <h3 key={index}>{tag.replace(/-/g," ")}</h3>
                            
                          ) : (
                            <h3 className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</h3>
                          )
                        )
                      })}
                      <h4>{item.author}</h4>
                    </div>
                    <h5 onClick={() => removeToLocalHandle(item.uniqueID, "quote")}>remove from your bookmarks</h5>
                  </div>
                  <div className="card-content">
                    <h5 className="card-quote">
                      {item.content}
                    </h5>
                  </div>
                  <CloseIcon className="close-card" onClick={() => exitHandler()} width="11" height="11" />
                </div>
              )
            })
          )
        )}
      </div>
    </div>
  );
};


export default CardDetails;