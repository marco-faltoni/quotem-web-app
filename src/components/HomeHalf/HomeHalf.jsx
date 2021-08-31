import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Arrow} from '../../style/Icon';
import Loader from '../Loader';
// actions
import {fetchPoem, fetchQuote} from '../../actions/index';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { sentece, senteceT, letter, letterT, opacity, opacityFast, slideToRight,slideToRightMbl, slideToLeftBig, slideToLeft, slideToLeftMbl } from "./animation";

const HomeHalf = (props) => {
  // getting back the data from redux
  const {poems, quotes} = useSelector((store) => store);
  const [rotation, setRotation] = useState(false);
  const { variants } = props;
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  // check if mobile or not
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  let isMobile = (width < 1024);

  // console.log(poems.randomPoem, quotes.randomQuotes);
  const randomPoem = poems.randomPoem;
  const randomQuote = quotes.randomQuotes;

  const reloadData = (val) => {
    val === "poem" ? dispatch(fetchPoem(isMobile ? true : false)) : dispatch(fetchQuote());
    val === "poem" ? dispatch({type: 'TOGGLE_LOADER_POEM'}) : dispatch({type: 'TOGGLE_LOADER_QUOTE'});
  };

  const saveToLocalHandle = (tit, aut, cont, id) => {
    let store = JSON.parse(localStorage.getItem("QuotemLocalStorage"));
    let savedItem = {
      title: tit,
      author: aut,
      content: cont,
      uniqueID: id ? id : tit
    }
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
  };
  
	return (
		<motion.div variants={opacityFast} initial="hidden" animate="visible" className={`${variants === "poems" ? "poem" : "quote"} wrapper-half`}>
      {variants === "poems" && (
        <>
          <motion.h2  
            variants={isMobile ? slideToLeftMbl : slideToRight} 
            initial="hidden" 
            animate="visible"    
            className={`big-tl pm ${rotation ? "rotate" : ""}`}
          >Poem
          </motion.h2>
          <motion.div variants={senteceT} initial="hidden" animate="visible"  className="reload-page pm" onClick={() => reloadData("poem")}>
            <motion.div variants={slideToLeft} initial="hidden" animate="visible" className="container"></motion.div>
            <motion.h5 variants={letterT} initial="hidden" animate="visible">Get a new Poems</motion.h5>
          </motion.div>
          {poems.isLoading ? (
            <motion.div variants={opacityFast} initial="hidden" animate="visible"  className="ld-wrap">
              <Loader />
            </motion.div>
          ) : (
            randomPoem.map((poem, index)=> {
              return (
                <div className="poem-wrap" key={`wrap-${index}`}>
                  <motion.h3 
                    className="poetry-text"
                    variants={sentece}
                    initial="hidden"
                    animate="visible"
                  >
                    {poem.lines.map((line, index)=> {
                      return (
                        <React.Fragment key={index}>
                          <motion.span
                          variants={letter}
                          >
                            {line}
                          </motion.span>
                          <br />
                        </React.Fragment>
                      )
                    })}
                  </motion.h3>
                  <motion.h2
                    variants={letter}
                    initial="hidden"
                    animate="visible"
                    id="title-home"
                  >
                    {poem.title}
                  </motion.h2>
                  <motion.div 
                    className="author-wrap"
                    variants={sentece}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h4
                      variants={letter}
                      initial="hidden"
                      animate="visible"
                    >
                      {poem.author}
                    </motion.h4>
                    <motion.div
                      variants={opacity} initial="hidden" animate="visible" className="book-m"
                      onClick={() => saveToLocalHandle(poem.title, poem.author, poem.lines)}
                    >
                      <Arrow />
                      <h5>add poem to your bookmarks</h5>
                    </motion.div>
                    
                  </motion.div>
                  
                </div>
              )
            })
          )}
          
          <motion.div 
            className="change-page pm"
            variants={senteceT}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="container"
              variants={slideToRight} 
              initial="hidden"
              animate="visible"
            ></motion.div>
            <Link to={`/poems`} >
              <motion.h5
                variants={letterT}
                initial="hidden"
                animate="visible"
                
              >Go to Poems
              </motion.h5>
            </Link>
          </motion.div>
        </>
        
      )}  
      {variants === "quote" && (
        <>
          <motion.h2 
            variants={isMobile ? slideToRightMbl : slideToLeftBig} 
            initial="hidden" 
            animate="visible" 
            className="big-tl qt"
          >Quote
          </motion.h2>
          <motion.div 
            className={`quote-wrap ${quotes.isLoading ? "load-wr" : ""}`}
            variants={sentece}
            initial="hidden"
            animate="visible"
          >
            {quotes.isLoading ? (
              <motion.div variants={opacityFast} initial="hidden" animate="visible"  className="ld-wrap">
                <Loader />
              </motion.div>
            ) : (
              <>
              <motion.div 
                className="author-wrap"
                variants={sentece}
                initial="hidden"
                animate="visible"
              >
                <motion.h4
                  variants={letter}
                  initial="hidden"
                  animate="visible"
                >
                  {randomQuote.author}
                </motion.h4>
                <motion.div
                  variants={opacity} initial="hidden" animate="visible" className="book-m"
                  onClick={() => saveToLocalHandle(randomQuote.tags, randomQuote.author, randomQuote.content, randomQuote._id)}
                >
                  <Arrow />
                  <h5>add quote to your bookmarks</h5>
                </motion.div>
              </motion.div>
              <div>
                {randomQuote.tags?.map((tag, index)=> {
                  const tagsLength = randomQuote.tags.length;
                  return (
                    tagsLength <= 1 ? (
                      <motion.h2 variants={letter} initial="hidden" animate="visible" key={index}>{tag.replace(/-/g," ")}</motion.h2>
                      
                    ) : (
                      <motion.h2 variants={letter} initial="hidden" animate="visible" className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</motion.h2>
                    )
                  )
                })}
              </div>
              <motion.h3
                className="poetry-text"
                variants={letter}
                initial="hidden"
                animate="visible"
              >
                {randomQuote.content}
              </motion.h3>
              </>
            )}
          </motion.div>
          <motion.div variants={senteceT} initial="hidden" animate="visible"  className="reload-page qt" onClick={() => reloadData("quote")}>
            <motion.div variants={slideToRight} initial="hidden" animate="visible" className="container"></motion.div>
            <motion.h5 variants={letterT} initial="hidden" animate="visible" >Get a new Quote</motion.h5>
          </motion.div>
          <motion.div 
            className="change-page qt"
            variants={senteceT}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="container"
              variants={slideToLeft} 
              initial="hidden"
              animate="visible"
            ></motion.div>
            <Link to={`/quotes`} >
              <motion.h5
                variants={letterT}
                initial="hidden"
                animate="visible"
              >Go to Quotes
              </motion.h5>
            </Link>
          </motion.div>
        </>
      )}  
		</motion.div>
	);
}

export default HomeHalf;