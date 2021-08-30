import React, {useEffect, useState} from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'

SwiperCore.use([Pagination, Navigation]);

const Card = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const { randomPoems, randomQuotes } = props;
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

  const resultsHandler = () => {
    dispatch({
      type: 'TOGGLE_RESULTS',
      payload: {
        value: false,
      }
    });
  }

  // SWIPER
  // array vuoti su cui pusho le slides per swiper
	const slidesIn = [];
  let getSlides;
  if (randomPoems) {
    getSlides = poems.searched;
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
                {getSlides[i].lines.map((line, index)=> {
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
    getSlides = quotes.searched
    // ciclo le slides
    for (let i = 0; i < getSlides.length; i++) {
      slidesIn.push(
        <SwiperSlide key={`slide-${i}`} className={"slideIn" + getSlides[i].index} data-slider={i}>
          <div className="card-wrapper" onClick={() => loadDetailsHandler(getSlides[i])}>
            <div className="card-info">
              {getSlides[i].tags?.map((tag, index)=> {
                const tagsLength = getSlides[i].tags.length;
                return (
                  !tagsLength > 1 ? (
                    <h3 className={index === 0 ? "first" : ""} key={index}>{tag}{index === 0 ? ", " : ""}</h3>
                  ) : (
                    <h3 key={index}>{tag}</h3>
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
  console.log(slidesIn);
  

  return (
    <>
      {randomPoems && (
        menu.noResults ? (
          <h3>No poems found. Try a new research or <span className="go-back" onClick={() => resultsHandler()}>go back to previous research.</span></h3>
        ) : (
          isMobile ? (
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
          ) : (
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
          )
        )
      )}
      {randomQuotes && (
        menu.noResults ? (
          <h3>No quotes found. Try a new research or <span className="go-back" onClick={() => resultsHandler()}>go back to previous research.</span></h3>
        ) : (
          isMobile ? (
            <Swiper 
              pagination={{
                "dynamicBullets": true
              }} 
              className="mySwiper"
            >
              {slidesIn}
            </Swiper>
          ) : (
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
          )
        )
      )}
    </>
  );
};


export default Card;