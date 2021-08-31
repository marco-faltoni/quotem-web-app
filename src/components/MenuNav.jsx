import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {HamburgerMenu, CloseIcon} from '../style/Icon';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

const MenuNav = (props) => {
  const slideDown = {
    hidden: { opacity: 0, y: -100, x: "-50%"},
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: {
        delay: 2.2,
        duration: 1.8
      }
    }
  }

  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  const dispatch = useDispatch();
  
  const toggle = () => dispatch({
    type: 'TOGGLE_MENU',
    payload: {
      isOpen: !menu.isOpen,
    }
  });

  return (
    <div className="wrap-nav">
      <motion.div variants={slideDown} initial="hidden" animate="visible" className={`header ${menu.showCard ? "blur" : ""}`}>
        <span></span>
        <Link to={`/`} >
          <h1>Quotem</h1>
        </Link>
        <HamburgerMenu onClick={() => toggle()} />

      </motion.div>
      <div className={`menu ${menu.isOpen ? 'show' : ""} `}>
        <div className="wrap-text">
          <Link to={`/`} >
            <h2>{menu.logo}</h2>
          </Link>
          <CloseIcon className="closeMbl" onClick={() => toggle()} width="15" height="15" />
        </div>
        <div className="menu-links">
          <ul className="items">
            {menu.list.map((item, index) => (
              <li key={index}>
                <Link to={`${item.link}`} onClick={() => toggle()}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <CloseIcon className="close" onClick={() => toggle()} width="15" height="15" />
    </div>
    </div>
  );
}

export default MenuNav;