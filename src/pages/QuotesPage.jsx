import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import CardDetails from '../components/CardDetails/CardDetails';
// Redux
import { useSelector} from 'react-redux';



const QuotesPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  return (
    <div className="wrapper-searchpage">
      <div className={`wrapper-qp searchpage ${menu.showCard ? "blur" : ""}`}>
        <SearchHalf search variants={"quote"}/>
        <SearchHalf results variants={"quote"}/>
      </div>
      <CardDetails randomQuotes />
    </div>
  );
};


export default QuotesPage;