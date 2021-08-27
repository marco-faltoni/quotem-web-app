import React from "react";

export const Arrow = (props) => {
  return (
    <svg width={props.size || "70"} height={props.size || "9"} viewBox="0 0 82 12  " fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75.779 11.1776L75.955 11.352L76.1309 11.1776L81.176 6.17756L81.3551 6L81.176 5.82243L76.1309 0.822426L75.955 0.648015L75.779 0.822426L74.7599 1.83243L74.5807 2.00999L74.7599 2.18756L77.6337 5.03571L0.999999 5.03571L0.749999 5.03571L0.75 5.28571L0.75 6.71429L0.75 6.96429L1 6.96429L77.6337 6.96428L74.7599 9.81243L74.5807 9.99L74.7599 10.1676L75.779 11.1776Z" fill={props.fill || "#17181A"}/>
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
    <svg width={props.size || "42"} height={props.size || "8"} viewBox="0 0 42 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2V0H42V2H0Z" fill={props.fill || "#2E3A59"}/>
      <path d="M10 8V6H42V8H10Z" fill={props.fill || "#2E3A59"}/>
    </svg>
  )
}

export default HamburgerMenu;
