import dataInStorage from"./localStorage"
import clear from"./clear"
// import { sl } from "date-fns/locale"

// export default function savingData(title,desc,dateTime,priority,savebtn){
//     const {data} = dataInStorage()
//     savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload
//         e.preventDefault;


//         // bring the values
//         const titleValue         = title.value.trim();
//         const descValue          = desc.value.trim();
//         const date        = dateTime.value ? new Date(dateTime.value).toDateString() : null;
//         const priorityValue      = priority.value;

//         const errors = []


        
//         const errorTitle = document.querySelector(".error-title");
//         const errorDesc = document.querySelector(".error-desc");
//         const errorDate = document.querySelector(".error-date");

//         errorTitle.textContent = "";
//         errorDesc.textContent   = "";
//         errorDate.textContent   = "";
        

//         if(!titleValue) {
//             errorTitle.textContent = "Title is required"
//         } else if( titleValue.length > 20) {
//             errorTitle.textContent = "Title can't be more than 20 characters"
//         }

//         if(!descValue) {
//             errorDesc.textContent = "Description is required"
//         } else if( errorDesc.length > 120) {
//             errorTitle.textContent = "Description can't be more than 120 characters"
//         }

//         if(date === null) {
//             errorDate.textContent = " date is required";
//             return false;
        
//         } else {
            
//             clear(title, desc, dateTime, priority)

                            
//             const dataObject = [titleValue, descValue, date, priorityValue].join(" ");
//             data.push(dataObject);
//             console.log(data)
                
//             localStorage.setItem("data", JSON.stringify(data));
        
//         }
//         location.reload()
//     })
// }





// last Version I worked on it there

 function saveBtn() {
    const {data} = dataInStorage();

    const saveing = document.querySelector(".submitbtn")

    saveing.addEventListener("click", (e) =>{
        e.preventDefault();
        const titleInput = document.querySelector(".title");
        const descInput = document.querySelector(".desc");
        const dateInput = document.querySelector(".datetime");
        const prtyInput = document.querySelector("#priority");    

        const titleValue = document.querySelector(".title").value.trim();
        const descValue  = document.querySelector(".desc").value.trim();
        const dateValue  = document.querySelector(".datetime") ? new Date(dateInput.value).toDateString() : null;
        const prtyVAlue  = document.querySelector("#priority").value;
        
        // Get <small> element under each input
        const errorTitle = document.querySelector(".error-title");
        const errorDesc  = document.querySelector(".error-desc") ;
        const errorDate  = document.querySelector(".error-date") ;

        // Clear previous error messages
        errorTitle.textContent = "";
        errorDesc.textContent  = "";
        errorDate.textContent  = "";


        if(!titleValue) {
            errorTitle.textContent = "Title is required"
            return false
        } else if( titleValue.length > 20) {
            errorTitle.textContent = "Title can't be more than 20 characters"
            return false
        }

        if(!descValue) {
            errorDesc.textContent = "Description is required"
            return false
        } else if( errorDesc.length > 120) {
            errorTitle.textContent = "Description can't be more than 120 characters"
            return false
        }

        if (dateValue === null || dateValue === "Invalid Date") {
            errorDate.textContent = " date is required" 
            return false;

        } else {
        const task = {
            title : titleValue,
            desc  : descValue ,
            date  : dateValue ,
            prioty: prtyVAlue,
        };
            
        // data.push([task.title, task.desc, task.date, task.prioty].join(" "));
        data.push(task)

        localStorage.setItem("data", JSON.stringify(data));     
    
        clear(titleInput, descInput, dateInput, prtyInput);

    location.reload()
        }
    });

}

export default saveBtn







// ********************************************
// the first version

// export default function savingData(title,desc,dateTime,priority,savebtn){
//     const {data, taskDiv} = dataInStorage()
//     savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload
//         e.preventDefault;


//         // bring the values
//         const titleValue         = title.value.trim();
//         const descValue          = desc.value.trim();
//         const date          = dateTime.value ? new Date(dateTime.value).toDateString() : null;
//         const priorityValue      = priority.value;

//         const errors = []


        
//         const errorTitlte = document.querySelector(".error-title");
//         const errorDesc = document.querySelector(".error-desc");
//         const errorDate = document.querySelector(".error-date");

//         errorTitlte.textContent = "";
//         errorDesc.textContent   = "";
//         errorDate.textContent   = "";
        

//         //--- Saving data inside LocalStorage with transfer it to stringify
//         if(!titleValue) errors.push("title is Required");
//         if(!descValue)  errors.push("the Description is Required");
//         if(!date)       errors.push("Date is required");
//         if(titleValue.length > 20) errors.push("the Title Can't be more then 10 Characters");
//         if(descValue.length > 120) errors.push("Descripton Can't be more then 120 Characters");

//         const errorBox = document.querySelector(".error-box");
//         errorBox.innerHTML = ""
//         if(errors.length > 0) {
//             errors.forEach(msg => {
//             const p = document.createElement("p");
//             p.textContent = msg;
//             p.style.color = "#c71e1e";
//             errorBox.appendChild(p);    
            
//             });
//             return false; 
        
//         } else {

//             clear(title, desc, dateTime, priority)

                            
//             const dataObject = [titleValue, descValue, date, priorityValue].join(" ");
//             data.push(dataObject);
//             console.log(data)
                
//             localStorage.setItem("data", JSON.stringify(data));
//             // ---------------------------------------------------
            
//             // ---------------------------------------------------
            
//             // bring and read data from localStorage
//             // const saveData = JSON.parse(localStorage.getItem(data));
//             // console.log(saveData)

//             // 📆 Displaying data on Calender
//             // const calender = document.querySelector('.calender');
//             // for (let key in saveData) {
//             //     const p = document.createElement('p')
//             //     p.textContent = `${key} : ${saveData[key]}`
//             //     calender.appendChild(p);
//             // }
//         }
//         location.reload()
//     })
// }
