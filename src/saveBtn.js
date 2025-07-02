
import clear from"./clear"

export default function savingData(title,desc,dateTime,priority,savebtn){
    savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload
        e.preventDefault;


        // bring the values
        const titleValue         = title.value.trim();
        const descValue          = desc.value.trim();
        const date          = dateTime.value ? new Date(dateTime.value).toDateString() : null;
        const priorityValue      = priority.value;

        // ----------------  let's work on Dates  ---------------------

        const month = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMPER","OCTOBER","NOVEMBER","DECEMBER"]
        // const [year,mmonth,day] = 
        //         [date.getFullYear(), 
        //          date.getMonth(),
        //          date.getDay()

        // ]
        // console.log(year,month[mmonth], day)

        // ---------------------------------------------------------

        
        // clear all the fileds
        clear(title, desc, dateTime, priority)

        
        

        // Saving data inside LocalStorage with transfer it to stringify
        if(!titleValue || !descValue || !date
            || titleValue.length > 6 || descValue.length > 10)
        {
            alert("all fields must be field")
        }
        // else if( titleValue.length > 6 || descValue > 10){
        //     console.log("your exceeding the limits")
        // }
        else {
            const data = {titleValue, descValue, date, priorityValue};
           localStorage.setItem("newVal", JSON.stringify(data));
            console.log(titleValue.length)
            // bring and read data from localStorage
            const saveData = JSON.parse(localStorage.getItem('newVal'));

            // 📆 Displaying data on Calender
            const calender = document.querySelector('.calender');
            for (let key in saveData) {
                const p = document.createElement('p')
                p.textContent = `${key} : ${saveData[key]}`
                calender.appendChild(p);
            }
        }
    })
}