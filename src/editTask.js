// edit function

function editTask(context) {
    // contaxt.innerHTML = "";
    const input = document.createElement("input");
    input.value = context.textContent;
    context.replaceWith(input)
    // contaxt.textContent = context.textContent;

    input.addEventListener("blur", () =>{
        context.textContent = input.value;
        input.replaceWith(context)
    });
    input.focus()
}

export default editTask