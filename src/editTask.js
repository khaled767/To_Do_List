// edit function
function editTask(context,task, data, index) {
    // step 1: Create an input Elemnet
    const input = document.createElement('input');
    input.type = "text"
    input.value = context.textContent;

    // step 2: Replace the <p> with <input>
    context.replaceWith(input);
    input.focus();

    let finished = false // make a flag variable so finishEdit works once

    // step 3: When user finishes typing (blur or press enter)
    input.addEventListener("blur", () => {
        if(!finished)
            finishEdit();  // ✅ only the first one runs
    })
    
    input.addEventListener("keydown", (e) =>{
        if(e.key === "Enter" && !finished){
            finishEdit()
        }
    });

    function finishEdit() {
        finished = true;   // 🔐 Locks it from repeating
        const newValue = input.value.trim()
        if(newValue !== ''){
            console.log(index)
            data[index]= newValue;
            localStorage.data = JSON.stringify(data);
            context.textContent = newValue;
        }
        else{
            context.textContent = task;
            // return task
        }
        input.replaceWith(context);
    }
}
export default editTask


