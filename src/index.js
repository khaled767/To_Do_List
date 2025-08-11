import "./style.css"
import form     from "./form"
import calendar from "./calendar"
import render   from "./render"
import search   from "./search"
import dataInStorage from "./localStorage"



// ... existing imports ...
document.addEventListener('DOMContentLoaded', () => {
    const { data } = dataInStorage();
    render(data);
    form();
    calendar();
    // render(); // Make sure to call this after DOM is ready
    search()
});









// const date = new Date()
// const year = date.getFullYear();      // 2025
// const month = date.getMonth();        // 0 = Jan, 1 = Feb, ..., 5 = June
  
//   const firstDay = new Date(year, month, 1).getDay();  // Which day the month starts on
//   const lastDate = new Date(year, month + 1, 0).getDate(); 
//   console.log(`the first day ${firstDay} && last day ${lastDate}`)
//   console.log(year, month, date)

// 💡changing the <p> context to input;
  // const todayEvent = document.querySelector(".todayEvent");
  // const p = document.createElement("p");
  // p.textContent = "this is the old element";
  // todayEvent.prepend(p)

  // p.addEventListener("click", () =>{
  //   const input = document.createElement('input');
  //   input.type = "text";
  //   input.value = p.textContent
  //   p.replaceWith(input);

  //   // rechanging to <p>
  //   input.addEventListener("keyup", (e) =>{
  //     if(e.key === "Enter"){
  //       p.textContent = input.value;
  //       input.replaceWith(p);
  //     }
  //   })
  //   input.focus()
  // })