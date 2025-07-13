import edit from "./editTask"
// 💻 let's render some tasks on screen

export default function renderTasks(){
    const tasks = [];
    const renderTask = document.querySelector(".render-task");
    const taskOne = document.createElement("div");
    taskOne.classList.add("task-one");
    renderTask.appendChild(taskOne);

    // adding Checking Box
    const checkBox = document.createElement('input');
    checkBox.setAttribute("type","checkbox");
    taskOne.appendChild(checkBox);

    // putting the task plan
    const context = document.createElement("p");
    context.setAttribute("id", "p1")
    const pOne = "Goes to Singapore at friday of 08/08/2026"
    context.textContent = pOne
    taskOne.appendChild(context);

    // edit & Delete Btn
    const editBtn = document.createElement('button')
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", ()=> {
        edit(context) });
    taskOne.appendChild(editBtn);


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener('click' , () => {
        // renderTask.removeChild(taskOne)

        const newE = JSON.parse(localStorage.getItem("tasks"));
        for(let i = 0; i < newE.length ; i ++){
            const y =newE.splice(newE[i],1);
            localStorage.removeItem("tasks")
            // console.log(y)
        }
        console.log(newE)
    })
    taskOne.appendChild(deleteBtn);
    
    // saving tasks inside to local storage
    tasks.push(pOne)
    localStorage.setItem("tasks",JSON.stringify(tasks));
}