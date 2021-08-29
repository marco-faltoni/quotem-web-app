import React from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';

const Card = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const { randomPoems, randomQuotes } = props;
  const dispatch = useDispatch();

  const loadDetailsHandler = (item) => {
    document.body.style.overflow = 'hidden';
    if (randomPoems) {
      dispatch({
        type: 'FETCH_SELECTED_POEM',
        payload: {
          value: item,
        }
      });
    } else if (randomQuotes){
      dispatch({
        type: 'FETCH_SELECTED_QUOTE',
        payload: {
          value: item,
        }
      });
    }
    dispatch({
      type: 'TOGGLE_CARD',
      payload: {
        value: !menu.showCard,
      }
    });
  }

  return (
    <>
      {randomPoems && (
        poems.searched?.map((item, index)=> {
          return (
            <div key={index} className="card-wrapper" onClick={() => loadDetailsHandler(item)}>
              <div className="card-info">
                <h3>{item.title}</h3>
                <h4>{item.author}</h4>
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
            </div>
          )
        })
      )}
      {randomQuotes && (
        quotes.searched?.map((item, index)=> {
          return (
            <div key={index} className="card-wrapper" onClick={() => loadDetailsHandler(item)}>
              <div className="card-info">
                {item.tags?.map((tag, index)=> {
                  const tagsLength = item.tags.length;
                  return (
                    !tagsLength > 1 ? (
                      <h3 className={index === 0 ? "first" : ""} key={index}>{tag}{index === 0 ? ", " : ""}</h3>
                    ) : (
                      <h3 key={index}>{tag}</h3>
                    )
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
        })
      )}
    </>
  );
};


export default Card;