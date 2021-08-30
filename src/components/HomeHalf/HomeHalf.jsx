import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Arrow} from '../../style/Icon';
import Loader from '../Loader';
// actions
import {fetchPoem, fetchQuote} from '../../actions/index';
import {Link} from 'react-router-dom';

const HomeHalf = (props) => {

  // getting back the data from redux
  const {poems, quotes} = useSelector((store) => store);
  const { variants } = props;
  const dispatch = useDispatch();

  let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
  // console.log(poems.randomPoem, quotes.randomQuotes);
  const randomPoem = poems.randomPoem;
  const randomQuote = quotes.randomQuotes;

  const reloadData = (val) => {
    val === "poem" ? dispatch(fetchPoem(isMobile ? true : false)) : dispatch(fetchQuote());
    val === "poem" ? dispatch({type: 'TOGGLE_LOADER_POEM'}) : dispatch({type: 'TOGGLE_LOADER_QUOTE'});
  };
  
	return (
		<div className={`${variants === "poems" ? "poem" : "quote"} wrapper-half`}>
      {variants === "poems" && (
        <>
          <h2 className="big-tl pm">Poem</h2>
          <div className="reload-page pm" onClick={() => reloadData("poem")}>
            <div className="container"></div>
            <h5>Get a new Poems</h5>
          </div>
          {poems.isLoading ? (
            <div className="ld-wrap">
              <Loader />
            </div>
          ) : (
            randomPoem.map((poem, index)=> {
              return (
                <div className="poem-wrap" key={`wrap-${index}`}>
                  <h3 className="poetry-text">
                    {poem.lines.map((line, index)=> {
                      return (
                        <React.Fragment key={index}>
                          <span>{line}</span>
                          <br />
                        </React.Fragment>
                      )
                    })}
                  </h3>
                  <h2>{poem.title}</h2>
                  <div className="author-wrap">
                    <h4>{poem.author}</h4>
                    <Arrow />
                  </div>
                  
                </div>
              )
            })
          )}
          
          <div className="change-page pm">
            <div className="container"></div>
            <Link to={`/poems`} >
              <h5>Go to Poems</h5>
            </Link>
          </div>
        </>
        
      )}  
      {variants === "quote" && (
        <>
          <h2 className="big-tl qt">Quote</h2>
          <div className={`quote-wrap ${quotes.isLoading ? "load-wr" : ""}`}>
            {quotes.isLoading ? (
              <div className="ld-wrap">
                <Loader />
              </div>
            ) : (
              <>
              <div className="author-wrap">
                <h4>{randomQuote.author}</h4>
                <Arrow />
              </div>
              <div>
                {randomQuote.tags?.map((tag, index)=> {
                  const tagsLength = randomQuote.tags.length;
                  return (
                    tagsLength <= 1 ? (
                      <h2 key={index}>{tag.replace(/-/g," ")}</h2>
                      
                    ) : (
                      <h2 className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</h2>
                    )
                  )
                })}
              </div>
              <h3>
                {randomQuote.content}
              </h3>
              </>
            )}
          </div>
          <div className="reload-page qt" onClick={() => reloadData("quote")}>
            <div className="container"></div>
            <h5>Get a new Quote</h5>
          </div>
          <div className="change-page qt">
            <div className="container"></div>
            <Link to={`/quotes`} >
              <h5>Go to Quotes</h5>
            </Link>
          </div>
        </>
      )}  
		</div>
	);
}

export default HomeHalf;