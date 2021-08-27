import React from "react";

export const Arrow = (props) => {
  return (
    <svg width={props.size || "70"} height={props.size || "9"} viewBox="0 0 82 12  " fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75.779 11.1776L75.955 11.352L76.1309 11.1776L81.176 6.17756L81.3551 6L81.176 5.82243L76.1309 0.822426L75.955 0.648015L75.779 0.822426L74.7599 1.83243L74.5807 2.00999L74.7599 2.18756L77.6337 5.03571L0.999999 5.03571L0.749999 5.03571L0.75 5.28571L0.75 6.71429L0.75 6.96429L1 6.96429L77.6337 6.96428L74.7599 9.81243L74.5807 9.99L74.7599 10.1676L75.779 11.1776Z" fill={props.fill || "#17181A"}/>
    </svg>
  );
};


// export const CloseIcon = (props) => {
// 	return (
// 	<svg className={props.className} onClick={props.onClick} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<g id="search">
// 		<rect id="Rectangle 84" x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="white" stroke="#979797"/>
// 		<path id="close" d="M36 36L24.0005 24M36 24.0011L24 36L36 24.0011Z" stroke="#1F1F1F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
// 		</g>
// 	</svg>
// 	);
// };

export const HamburgerMenu = (props) =>{
  return (
    <svg width={props.size || "42"} height={props.size || "8"} viewBox="0 0 42 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2V0H42V2H0Z" fill={props.fill || "#2E3A59"}/>
      <path d="M10 8V6H42V8H10Z" fill={props.fill || "#2E3A59"}/>
    </svg>
  )
}

export default HamburgerMenu;
