import edit from "./editTask";
import dataInStorage from "./localStorage";


// 💻 let's render some tasks on screen
export default function renderTasks(data){
    // const {data, taskDiv} = dataInStorage();
    //   // Clear existing tasks before re-rendering
    //     taskDiv.innerHTML = '';
    

    const taskDiv = document.querySelector(".render-task");
    taskDiv.innerHTML = '';
    
    data.forEach((task, index, )=> { 
        // const index = data.indexOf(task);
        const div = document.createElement("div");
        div.classList.add("render-task");
        taskDiv.appendChild(div);

        const context = document.createElement("p");
        context.textContent = `${task.title} ${task.desc} ${task.date} ${task.prioty}`
        div.appendChild(context);
        
        // edit Btn
        const editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        editBtn.addEventListener("click", () =>{
            edit(context,task,data,index)
        })
        div.appendChild(editBtn); 

        // delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";


        deleteBtn.addEventListener("click" , (e) => {
            const taskElement = e.target.parentElement; //we got the parent dev
            // const taskContext = taskElement.querySelector('p').textContent //we got the task context
            
            // find the exact task by matching properties
            const taskIndex = data.findIndex(t => 
                t => t.title === task.title && t.desc === task.desc && t.date === task.date && t.prioty === task.prioty)
            if(taskIndex !== -1) {
                data.splice(taskIndex, 1);
                localStorage.setItem("data", JSON.stringify(data))
                div.remove()
            }
        })


        div.appendChild(deleteBtn);
        
        // create checkBox for the Task
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.classList.add("checkbox");
        const delInput = document.createElement("del");
        
        checkBox.addEventListener("click", (e) =>{
            checkBox;
            if(checkBox.checked === true ){
                context.innerHTML = `<del>${task.title} ${task.desc} ${task.date} ${task.desc} </del>`;
                context.appendChild(delInput);
                
                
            } else if ( checkBox.checked === false) {
                console.log(checkBox.checked);
                context.removeChild(delInput);
                context.textContent = `${task.title} ${task.desc} ${task.date} ${task.desc}`;
            };
            localStorage.setItem("data",JSON.stringify(data));
            checkBox.checked === true ? false : true
        })
        div.prepend(checkBox)
    })
}
