import axios from 'axios';

const PoemsEndPoint = "https://poetrydb.org";
const QuotesEndPoint = "https://api.quotable.io";
const AdviceEndPoint = "https://api.adviceslip.com";

function getRandomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// action creator
export const fetchPoemAndQuote = (val) => async (dispatch) => {
  const casualNr = getRandomBetween(4, val ? 8 : 10);
  const randomPoemURL = PoemsEndPoint+`/random,linecount/1;${casualNr}`;
  const randomQuoteURL = QuotesEndPoint+`/random`;

  try {
    const resFetchPoem = await axios.get(randomPoemURL);
    const resFetchQuote = await axios.get(randomQuoteURL);
    // console.log(resFetchPoem.data);
    // console.log(resFetchQuote.data);
    
    dispatch({
      type: 'FETCH_RANDOM_POEM',
      payload: {
        randomPoem: resFetchPoem.data,
      }
    })

    dispatch({
      type: 'FETCH_RANDOM_QUOTES',
      payload: {
        randomQuotes: resFetchQuote.data,
      }
    })
    
  } catch (e) {
    console.log("fetchData error:", e);
  }
}

export const fetchQuote = () => async (dispatch) => {
    const randomQuoteURL = QuotesEndPoint+`/random`;
    try {
      const resFetchQuote = await axios.get(randomQuoteURL);
      dispatch({
        type: 'FETCH_RANDOM_QUOTES',
        payload: {
          randomQuotes: resFetchQuote.data,
        }
      })
      
    } catch (e) {
      console.log("fetchData error:", e);
    }
}

export const fetchPoem = (val) => async (dispatch) => {
    const casualNr = getRandomBetween(4, val ? 8 : 10);
    const randomPoemURL = PoemsEndPoint+`/random,linecount/1;${casualNr}`;

    try {
      const resFetchPoem = await axios.get(randomPoemURL);
      dispatch({
        type: 'FETCH_RANDOM_POEM',
        payload: {
          randomPoem: resFetchPoem.data,
        }
      })
      
    } catch (e) {
      console.log("fetchData error:", e);
    }
}

export const fetchAdvice = () => async (dispatch) => {
    const randomAdviceURL = AdviceEndPoint+`/advice`;
    try {
      const resFetch = await axios.get(randomAdviceURL);
      // console.log(resFetch.data.slip.advice);
      dispatch({
        type: 'FETCH_RANDOM_ADVICE',
        payload: {
          randomAdvice: resFetch.data.slip,
        }
      })
    } catch (e) {
      console.log("fetchData error:", e, randomAdviceURL);
    }
}