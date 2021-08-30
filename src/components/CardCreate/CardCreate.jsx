import React from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
import {CloseIcon} from '../../style/Icon';

const CardCreate = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const dispatch = useDispatch();
  const { randomPoems, randomQuotes } = props;

  const exitHandler = () => {
    document.body.style.overflow = 'auto';
    dispatch({
      type: 'TOGGLE_CARD',
      payload: {
        value: !menu.showCard,
      }
    });
  };

  return (
    <div className={`wrap-card-detail ${menu.showCard ? "show" : ""}`}>
      <div className={`wrap-animation ${menu.showCard ? "show" : ""}`}>
        <span>on Wokring</span>
      </div>
    </div>
  );
};


export default CardDetails;