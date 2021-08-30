import axios from 'axios';

const PoemsEndPoint = "https://poetrydb.org/";
const QuotesEndPoint = "https://api.quotable.io/quotes?";
const poemsRandomList = "https://poetrydb.org/random,linecount/20;";
const quotesRandomList = "https://api.quotable.io/quotes?sortBy=dateAdded&order=desc";
const poemAuthorsURL = "https://poetrydb.org/author";
const quoteAuthorURL = "https://api.quotable.io/authors?sortBy=quoteCount&order=desc";

function getRandomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const fetchSearch = (type, text, val) => async (dispatch) => {
  const authorPoemURL = PoemsEndPoint+"author/";
  const titleURL = PoemsEndPoint+"title/";
  const linesURL = PoemsEndPoint+"lines/";
  const authorQuoteRL = QuotesEndPoint+"author=";
  const tagURL = QuotesEndPoint+"tags=";
  let fetchURL;

  if (type === "poem") {
    if (val === "author") {
      fetchURL = authorPoemURL+text;
    } else if (val === "title") {
      fetchURL = titleURL+text;
    } else {
      fetchURL = linesURL+text;
    }
  } else {
    if (val === "author") {
      fetchURL = authorQuoteRL+text;
    } else {
      fetchURL = tagURL+text;
    }
  }

  try {
    const resFetch = await axios.get(fetchURL);
    console.log(resFetch);


    
    if (type === "poem") {
      if (resFetch.data.reason) {
        dispatch({
          type: 'TOGGLE_RESULTS',
          payload: {
            value: true,
          }
        });
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: false,
          }
        });
      } else {
        dispatch({
          type: 'FETCH_SEARCHED_POEMS',
          payload: {
            randomList: resFetch.data,
          }
        })
        dispatch({
          type: 'FETCH_VALUE_SEARCHED',
          payload: {
            value: text,
          }
        })
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: false,
          }
        }); 
      }

    } else {
      if (resFetch.data.count === 0) {
        dispatch({
          type: 'TOGGLE_RESULTS',
          payload: {
            value: true,
          }
        });
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: false,
          }
        });
      } else {  
        dispatch({
          type: 'FETCH_SEARCHED_QUOTES',
          payload: {
            randomList: resFetch.data.results,
          }
        })
        dispatch({
          type: 'FETCH_VALUE_SEARCHED',
          payload: {
            value: text,
          }
        })
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: false,
          }
        }); 
      }
    }
    
  } catch (e) {
    console.log("fetchData error:", e);
  }
}

export const fetchRandomList = (type, val) => async (dispatch) => {
  let fetchURL;
  if (type === "poem") {
    const casualNr = getRandomBetween(4, val ? 8 : 10);
    fetchURL = poemsRandomList+casualNr;
  } else {
    fetchURL = quotesRandomList;
  }
  
  try {
    const resFetch = await axios.get(fetchURL);
    // console.log(resFetch);
    // let resFiltered;
    // console.log(resFetch.data);

    if (type === "poem") {
      dispatch({
        type: 'FETCH_SEARCHED_POEMS',
        payload: {
          randomList: resFetch.data,
        }
      })
    } else {
      dispatch({
        type: 'FETCH_SEARCHED_QUOTES',
        payload: {
          randomList: resFetch.data.results,
        }
      })
    }

    
  } catch (e) {
    console.log("fetchData error:", e);
  }
}

export const fetchAuhtorClicked = (type, val) => async (dispatch) => {
  const authorQuoteRL = QuotesEndPoint+"author=";
  let fetchURL;
  if (type === "poem") {
    fetchURL = poemAuthorsURL+`/${val}`;
  } else {
    fetchURL = authorQuoteRL+val;
  }
  
  try {
    const resFetch = await axios.get(fetchURL);
    // console.log(resFetch);
    let resFiltered;

    if (type === "poem") {
      dispatch({
        type: 'FETCH_SEARCHED_POEMS',
        payload: {
          randomList: resFetch.data,
        }
      })
    } else {
      dispatch({
        type: 'FETCH_SEARCHED_QUOTES',
        payload: {
          randomList: resFetch.data.results,
        }
      })
    }
    dispatch({
      type: 'FETCH_VALUE_SEARCHED',
      payload: {
        value: val,
      }
    })
    dispatch({
      type: 'TOGGLE_LOADER_SEARCHPAGE',
      payload: {
        value: false,
      }
    });
    dispatch({
      type: 'TOGGLE_RESULTS',
      payload: {
        value: false,
      }
    });
  } catch (e) {
    console.log("fetchData error:", e);
  }
}

export const fetchAuthors = (type) => async (dispatch) => {
  let fetchURL;
  if (type === "poem") {
    fetchURL = poemAuthorsURL;
  } else {
    fetchURL = quoteAuthorURL;
  }
  
  try {
    const resFetch = await axios.get(fetchURL);
    // console.log(resFetch);
    let resFiltered;

    if (type === "poem") {
      let randomArray = shuffle(resFetch.data.authors);
      resFiltered = randomArray.filter((el, index) => {
        return (
          index < 20
        )
      })
      dispatch({
        type: 'FETCH_AUTHOR_POEMS',
        payload: {
          authorPoems: resFiltered,
        }
      })
    } else {
      dispatch({
        type: 'FETCH_AUTHOR_QUOTES',
        payload: {
          authorQuotes: resFetch.data.results,
        }
      })
    }
    
  } catch (e) {
    console.log("fetchData error:", e);
  }
}

function shuffle(array) {
  var currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}