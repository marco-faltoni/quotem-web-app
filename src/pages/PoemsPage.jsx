import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import CardDetails from '../components/CardDetails/CardDetails';
// Redux
import { useSelector} from 'react-redux';


const PoemsPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  return (
    <div className="wrapper-searchpage">
      <div className={`wrapper-qp searchpage ${menu.showCard ? "blur" : ""}`}>
        <SearchHalf search variants={"poems"}/>
        <SearchHalf results variants={"poems"}/>
      </div>
      <CardDetails randomPoems/>
    </div>
  );
};


export default PoemsPage;