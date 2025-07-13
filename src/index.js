import "./style.css"
import form from "./form"
import calendar from "./calendar"
import render from "./render"

form();
calendar();
render()

const date = new Date()
const year = date.getFullYear();      // 2025
const month = date.getMonth();        // 0 = Jan, 1 = Feb, ..., 5 = June
  
  const firstDay = new Date(year, month, 1).getDay();  // Which day the month starts on
  const lastDate = new Date(year, month + 1, 0).getDate(); 
  console.log(`the first day ${firstDay} && last day ${lastDate}`)
  console.log(year, month, date)