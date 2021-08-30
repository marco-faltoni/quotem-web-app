import React from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
import {CloseIcon} from '../../style/Icon';

const CardDetails = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const arrayLenght = poems.selectedPoem.length;
  const dispatch = useDispatch();
  const { randomPoems, randomQuotes } = props;

  const exitHandler = () => {
    document.body.style.overflow = 'auto';
    dispatch({
      type: 'TOGGLE_CARD',
      payload: {
        value: !menu.showCard,
      }
    });
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
                  <h5>add to your bookmarks</h5>
                </div>
                <div className="card-content">
                  <h5>
                    {item.lines.map((line, index)=> {
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
                  <h5>add to your bookmarks</h5>
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
      </div>
    </div>
  );
};


export default CardDetails;