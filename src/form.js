import { parse, setDate, yearsToDays } from "date-fns";


export default function form() {
    const array = []
    const title       = document.querySelector('.title') ;
    const desc        = document.querySelector('.desc');
    const dateTime    = document.querySelector('.datetime');
    const priority    = document.querySelector('#priority');
    const savebtn     = document.querySelector('.submitbtn');
    const cancelbtn   = document.querySelector('.cancelbtn')

    // console.log(titleval);
    savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload
        e.preventDefault;

        // bring the values
        const titleValue         = title.value.trim();
        const descValue          = desc.value.trim();
        const dateValue          = new Date(dateTime.value).toDateString();
        const priorityValue      = priority.value;

        // clear all the fileds
        clearFildes(title, desc, dateTime, priority)

        if (!desc) console.error("desc input not found!")
        console.log(descValue)
        

        // Saving data inside LocalStorage with transfer it to stringify
        const data = {titleValue, descValue, dateValue, priorityValue};
        localStorage.setItem("newVal", JSON.stringify(data));
        
        // bring and read data from localStorage
        const saveData = JSON.parse(localStorage.getItem('newVal'));
        

        

        
        const calender = document.querySelector('.calender');
        for (let key in saveData) {
            const p = document.createElement('p')
            p.textContent = `${key} : ${saveData[key]}`
            calender.appendChild(p);
        }

    })
    
}

// localStorage.setItem("lastName", "smith");

// document.querySelector(".search").textContent = localStorage.getItem("lastName");

function clearFildes(title,des, date, prio){
    title.value = "";
    des.value   = "";
    date.value  = "";
    prio.value  = "";
}