
function loopData(){
    const div = document.createElement("div");
    div.classList.add("render-task");
    taskDiv.appendChild(div);

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
        console.log(data)
        localStorage.data = JSON.stringify(data)
        div.remove()
    })
    div.appendChild(deleteBtn);   
}