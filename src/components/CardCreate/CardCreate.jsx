import React, {useState} from "react";
// Redux
import { useSelector} from 'react-redux';


const CardCreate = (props) => {
  // getting back the data from redux
  const { menu} = useSelector((store) => store);
  // const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [textAreaInput, setTextAreaInput] = useState('');
  const [selectValue, setSelectValue] = useState('poems');

  // const exitHandler = () => {
  //   document.body.style.overflow = 'auto';
  //   dispatch({
  //     type: 'TOGGLE_CARD',
  //     payload: {
  //       value: !menu.showCard,
  //     }
  //   });
  // };

  const submitSearch = (e) => {
    e.preventDefault();
    if (titleInput === "" || authorInput === "" || textAreaInput === "") {
      alert('Write something!')
    } else { 
      // if (poemInput) {
      //   dispatch(fetchSearch("poem", textInput, valueInput));
      // } else if (quoteInput){
      //   if (valueInput === "author") {
      //     // setTextInput(textInput.split(' ').join('-'));
      //     console.log(textInput);
      //   }
      //   dispatch(fetchSearch("quote", textInput, valueInput));
      // }
    }
    setTitleInput('');
  }

  return (
    <div className={`wrap-card-detail create ${menu.showCardCreate ? "show" : ""}`}>
      <div className={`wrap-animation ${menu.showCardCreate ? "show" : ""}`}>
        <form onSubmit={submitSearch} className="form-create">
          <div className="card-info-create">
            <label htmlFor="title">
              Write a Title:
              <input id="title" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} type="text" placeholder={`create a title...`}/>
            </label>
            <label htmlFor="author">
              Write the Author:
              <input id="author" value={authorInput} onChange={(e) => setAuthorInput(e.target.value)} type="text" placeholder={`who is the author?...`}/>
            </label>
            <label htmlFor="select">
              Select a Category:
              <select id="select" onChange={(e) => setSelectValue(e.target.value)}>
                <option value="poems">Poems</option>
                <option value="quotes">Quotes</option>
              </select>
            </label>
          </div>
          <div className="card-content-create">
            {selectValue === "poems" ? (
              <label htmlFor="textArea">
                Content:
                <textarea id="textArea" maxlength="100" required placeholder={`write something...`} value={textAreaInput} onChange={(e) => setTextAreaInput(e.target.value)} rows="1" cols="50">
                </textarea>
              </label>
            ) : (
              <label htmlFor="textArea">
              Content Quote:
                <textarea id="textArea" maxlength="100" required placeholder={`write something...`} value={textAreaInput} onChange={(e) => setTextAreaInput(e.target.value)} rows="1" cols="10">
                </textarea>
              </label>
            )}

          </div>
        </form>
      </div>
    </div>
  );
};


export default CardCreate;