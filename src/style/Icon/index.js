import React from "react";

export const Arrow = (props) => {
  return (
    <svg width={props.size || "59"} height={props.size || "1"} viewBox="0 0 59 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1" x2="59" y2="1" stroke="#2E3A59" strokeWidth="2"/>
    </svg>
  );
};


export const ReloadIcon = (props) => {
  console.log(props);
	return (
    <svg className={props.className} onClick={props.onClick} width={props.size || "64"} height={props.size || "64"}viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.9866 10.6666C20.8965 10.6515 11.6444 19.1359 10.7013 30.1858C9.75822 41.2357 17.4388 51.1654 28.371 53.0297C39.3033 54.894 49.8407 48.0712 52.6133 37.3333H47.0639C44.3514 45.0057 36.312 49.4197 28.3825 47.5906C20.453 45.7614 15.1597 38.2717 16.0821 30.1864C17.0045 22.1011 23.8489 15.9961 31.9866 16C36.2254 16.0062 40.2836 17.7167 43.2479 20.7467L34.6666 29.3333H53.3333V10.6666L47.0639 16.9333C43.0739 12.919 37.6466 10.6632 31.9866 10.6666Z" fill="#17181A"/>
    </svg>
	);
};

export const HamburgerMenu = (props) =>{
  return (
    <svg className={props.className} onClick={props.onClick} width={props.size || "42"} height={props.size || "8"} viewBox="0 0 42 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2V0H42V2H0Z" fill={props.fill || "#2E3A59"}/>
      <path d="M10 8V6H42V8H10Z" fill={props.fill || "#2E3A59"}/>
    </svg>
  )
}

export const SearchIcon = (props) =>{
  return (
    <svg className={props.className} onClick={props.onClick} width={props.size || "35"} height={props.size || "40"} viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.40294 27.4346L15.8375 14L2.40294 0.565417L0.162525 2.80425L11.3599 14L0.162525 25.1957L2.40294 27.4346Z" fill="#17181A"/>
    </svg>
  )
}

export const CloseIcon = (props) =>{
  return (
    <svg className={props.className} onClick={props.onClick} width={props.size || "27"} height={props.size || "27"} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.04462" y1="25.7422" x2="25.4697" y2="1.31713" stroke="#17181A" strokeWidth="2"/>
      <line x1="1.89471" y1="1.40957" x2="26.3198" y2="25.8346" stroke="#17181A" strokeWidth="2"/>
    </svg>
  )
}

export default HamburgerMenu;
