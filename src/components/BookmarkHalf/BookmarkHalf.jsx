import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'


const BookmarksHalf = (props) => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  const { poems, quotes } = props;
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
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("QuotemLocalStorage");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const dispatch = useDispatch();
  let arrayPoems = [];
  let arrayQuotes = [];

  if (name !== "") {
    name.filter((item) => {
      if (Array.isArray(item.content) ) {
        arrayPoems.push(item)
      }
      if (Array.isArray(item.title) ) {
        arrayQuotes.push(item)
      }
    });
  }

  // console.log(arrayQuotes);

  const loadDetailsHandler = (item) => {
    document.body.style.overflow = 'hidden';
    if (poems) {
      dispatch({
        type: 'FETCH_SELECTED_POEM',
        payload: {
          value: item,
        }
      });
      dispatch({
        type: 'TOGGLE_POEM',
      });
    } else if (quotes){
      dispatch({
        type: 'FETCH_SELECTED_QUOTE',
        payload: {
          value: item,
        }
      });
      dispatch({
        type: 'TOGGLE_QUOTE',
      });
    }
    dispatch({
      type: 'TOGGLE_CARD',
      payload: {
        value: !menu.showCard,
      }
    });
  }

  // SWIPER
  // array vuoti su cui pusho le slides per swiper
	const slidesIn = [];
  let getSlides;
  if (poems) {
    getSlides = arrayPoems;
    // ciclo le slides
    for (let i = 0; i < getSlides.length; i++) {
      slidesIn.push(
        <SwiperSlide key={`slide-${i}`} className={"slideIn" + getSlides[i].index} data-slider={i}>
          <div className="card-wrapper" onClick={() => loadDetailsHandler(getSlides[i])}>
            <div className="card-info">
              <h3>{getSlides[i].title}</h3>
              <h4>{getSlides[i].author}</h4>
            </div>
            <div className="card-content">
              <h5>
                {getSlides[i].content?.map((line, index)=> {
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
        </SwiperSlide>
      );
    }
  } else {
    getSlides = arrayQuotes
    // ciclo le slides
    for (let i = 0; i < getSlides.length; i++) {
      slidesIn.push(
        <SwiperSlide key={`slide-${i}`} className={"slideIn" + getSlides[i].index} data-slider={i}>
          <div className="card-wrapper" onClick={() => loadDetailsHandler(getSlides[i])}>
            <div className="card-info">
              {getSlides[i].title?.map((tag, index)=> {
                const tagsLength = getSlides[i].title.length;
                return (
                  !tagsLength > 1 ? (
                    <h3 className={index === 0 ? "first" : ""} key={index}>{tag.replace(/-/g," ")}{index === 0 ? ", " : ""}</h3>
                  ) : (
                    <h3 key={index}>{tag.replace(/-/g," ")}</h3>
                  )
                )
              })}
              <h4>{getSlides[i].author}</h4>
            </div>
            <div className="card-content">
              <h5>
                {getSlides[i].content}
              </h5>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  }

  return (
    <div className={`wrapper-half bookmarks ${poems ? "poem" : "quote"}`}>
      {poems && (
        <>
        <h2 className="big-tl pm">Saved Poems</h2>
        {arrayPoems.length > 0 ? (
          isMobile ? (
            <div className="wrapper-cards bookmarks-poem">
              <Swiper 
                pagination={{
                  "dynamicBullets": true
                }} 
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={30} 
                navigation={
                  false
                }
              >
                {slidesIn}
              </Swiper>
            </div>
            ) : (
            <div className="wrapper-cards bookmarks-poem">
              {arrayPoems.map((item, index) => {
                return (
                  <div key={index} className="card-wrapper" onClick={() => loadDetailsHandler(item)}>
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
          )
          
        ) : (
          <h3 className="no-results">No Poems Saved. Go to <Link to={`/poems`} ><span className="go-to">search page</span></Link> and bookmark some poems.</h3>
        )}
        </>
      )}
      {quotes && (
        <>
        <h2 className="big-tl qt">Saved Quotes</h2>
        {arrayQuotes.length > 0 ? (
          isMobile ? (
            <div className="wrapper-cards bookmarks-poem">
              <Swiper 
                pagination={{
                  "dynamicBullets": true
                }} 
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={30} 
                navigation={
                  false
                }
              >
                {slidesIn}
              </Swiper>
            </div>
          ) : (
            <div className="wrapper-cards">
              {arrayQuotes.map((item, index) => {
                return (
                  <div key={index} className="card-wrapper" onClick={() => loadDetailsHandler(item)}>
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
          )
        ) : (
          <h3 className="no-results">No Quote Saved. Go to <Link to={`/quotes`} ><span className="go-to">search page</span></Link> and bookmark some quotes.</h3>
        )}
        </>
      )}
    </div>
  );
};


export default BookmarksHalf;