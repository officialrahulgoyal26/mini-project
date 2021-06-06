import React from 'react';
import reactDom from 'react-dom';
import './index.css';
let currDate = new Date(2020,5,6,2);
currDate= currDate.getHours();
let greeting = "";
const cssStyle = {};
if (currDate>=1 && currDate<=12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if (currDate >=12 && currDate<=19){
  greeting ="Good Evening";
  cssStyle.color = "orange";
}else{
  greeting ="Good Night";
  cssStyle.color = "black";
}
reactDom.render(
  <>
  <div>
  <h1>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
  </div>
  </>,
   
  document.getElementById('root')
);