import edit from "./editTask"
// import deleteTask from "./deleteTasks"
// 💻 let's render some tasks on screen

export default function renderTasks(){
    let data = [];
    if(localStorage.data != undefined && localStorage.data !='[]'){
        data= JSON.parse(localStorage.data);
        // console.log(localStorage.data.length)
    }else {
    data = ["visit the museum","goes in a hiking","swimming in an ice pool","drive a helicopter","jump from Airplane"]; 
    }
    localStorage.setItem("data", JSON.stringify(data))
    const renderTask = document.querySelector(".render-task");
    

    data.forEach((task, index )=> { 
        // const index = data.indexOf(task);
        const div = document.createElement("div");
        div.classList.add("render-task");
        renderTask.appendChild(div);

        const context = document.createElement("p");
        context.textContent = task;
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
        deleteBtn.addEventListener("click" , () => {
            data.splice(index,1);
            localStorage.data = JSON.stringify(data)
            div.remove()
        })
        div.appendChild(deleteBtn);
    })
}

