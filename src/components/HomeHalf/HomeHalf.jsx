import React from "react";
import {useSelector} from 'react-redux';
import {Arrow} from '../../style/Icon';

const HomeHalf = (props) => {

  // getting back the data from redux
  const {poems, quotes} = useSelector((store) => store);
  const { variants } = props;
  
  // console.log(poems.randomPoem, quotes.randomQuotes);
  const randomPoem = poems.randomPoem;
  const randomQuote = quotes.randomQuotes;
  
	return (
		<div className={`${variants === "poems" ? "poem" : "quote"} wrapper-half`}>
      {variants === "poems" && (
        <>
          <h2 className="big-tl pm">Poem</h2>
          {randomPoem.map((poem, index)=> {
            return (
              <div className="poem" key={`wrap-${index}`}>
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
          })}
          <div className="change-page pm">
            <div className="container"></div>
            <h5>More Poems</h5>
          </div>
        </>
        
      )}  
      {variants === "quote" && (
        <>
          <h2 className="big-tl qt">Quote</h2>
          <div className="quote">
            <div className="author-wrap">
              <h4>{randomQuote.author}</h4>
              <Arrow />
            </div>
            <div>
            {randomQuote.tags?.map((tag, index)=> {
              const tagsLength = randomQuote.tags.length;
              return (
                !tagsLength > 1 ? (
                  <h2 className={index === 0 ? "first" : ""} key={index}>{tag}{index === 0 ? ", " : ""}</h2>
                ) : (
                  <h2 key={index}>_{tag}</h2>
                )
              )
            })}
            </div>
            <h3>
              {randomQuote.content}
            </h3>
          </div>
          <div className="change-page qt">
            <div className="container"></div>
            <h5>More Quotes</h5>
          </div>
        </>
      )}  
		</div>
	);
}

export default HomeHalf;