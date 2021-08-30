import React, {useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {fetchSearch} from '../../actions/search';


const SearchInput = (props) => {
  // getting back the data from redux
  const {poems, quotes} = useSelector((store) => store);

  const { poemInput, quoteInput } = props;
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState('');
  const [valueInput, setValueInput] = useState(poemInput ? poems.valueInput : quotes.valueInput);

  const inputHandler = (e) => {
    setTextInput(e.target.value.toLowerCase());
  }
  const checkBoxHandler = (e) => {
    setValueInput(e.target.value);
    if (poemInput) {
      dispatch({
        type: 'TOGGLE_RADIO_POEMS',
        payload: {
          value: e.target.value,
        }
      });
    } else if (quoteInput){
      dispatch({
        type: 'TOGGLE_RADIO_QUOTES',
        payload: {
          value: e.target.value,
        }
      });
    }
    
  }
  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput === "") {
      alert('Write something!')
    } else { 
      dispatch({
        type: 'TOGGLE_LOADER_SEARCHPAGE',
        payload: {
          value: true,
        }
      });
      if (poemInput) {
        dispatch(fetchSearch("poem", textInput, valueInput));
      } else if (quoteInput){
        if (valueInput === "author") {
          // setTextInput(textInput.split(' ').join('-'));
          console.log(textInput);
        }
        dispatch(fetchSearch("quote", textInput, valueInput));
      }
    }
    setTextInput('');
  }

  const clearSearch = () => {
    // dispatch({type: "CLEAR_SEARCHED"});
  }


  return (
    <div className={`input-wrapper`}>
      <form onSubmit={submitSearch} className="search">
        <input value={textInput} onChange={inputHandler} type="text" placeholder={`search for ${valueInput}...`}/>
        <button type='submit'>
          search
        </button>
      </form>
      <div className="wrapper-radios">
        {poemInput && (
          poems.filters.map((el, index) => {
            return (
              <label key={index} className="container">
                <input onChange={checkBoxHandler} value={el.value} type="radio" checked={el.checked} name="radio" />
                <span className="checkmark"></span>
                {el.value}
              </label>
            )
          })
        )}
        {quoteInput && (
          quotes.filters.map((el, index) => {
            return (
              <label key={index} className="container">
                <input  onChange={checkBoxHandler} value={el.value} type="radio" checked={el.checked} name="radio" />
                <span className="checkmark"></span>
                {el.value}
              </label>
            )
          })
        )}

      </div>
    </div>
  );
};


export default SearchInput;