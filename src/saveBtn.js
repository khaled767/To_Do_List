
import clear from"./clear"

export default function savingData(title,desc,dateTime,priority,savebtn){
    
    let dataArray;
    // pushing data object into arry so we Don't lsoe information
    if(localStorage.note != null ){
        dataArray = JSON.parse(localStorage.note)
    }
    else{
         dataArray = [];    
    }
    savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload
        e.preventDefault;


        // bring the values
        const titleValue         = title.value.trim();
        const descValue          = desc.value.trim();
        const date          = dateTime.value ? new Date(dateTime.value).toDateString() : null;
        const priorityValue      = priority.value;

        const errors = []
        

        // Saving data inside LocalStorage with transfer it to stringify
        if(!titleValue) errors.push("title is Required");
        if(!descValue)  errors.push("the Description is Required");
        if(!date)       errors.push("Date is required");
        if(titleValue.length > 20) errors.push("the Title Can't be more then 10 Characters");
        if(descValue.length > 120) errors.push("Descripton Can't be more then 120 Characters");

        const errorBox = document.querySelector(".error-box")
        errorBox.innerHTML = ""
        if(errors.length > 0) {
            errors.forEach(msg => {
            const p = document.createElement("p");
            p.textContent = msg;
            p.style.color = "red";
            errorBox.appendChild(p);    
            });
            return false;
        } else {
            // clear all the fileds
            clear(title, desc, dateTime, priority)

                            
            const data = {titleValue, descValue, date, priorityValue};
            dataArray.push(data)
            console.log(dataArray)
                
            localStorage.setItem("note", JSON.stringify(dataArray));
            
            // bring and read data from localStorage
            const saveData = JSON.parse(localStorage.getItem(titleValue));

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
