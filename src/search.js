import dataInStorage from "./localStorage";
import renderTasks from "./render"

export default function searchBox() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", () => {
        
         const {data} = dataInStorage();
            const sValue = searchInput.value.trim().toLowerCase();
            const filtered = data.filter(task => 
                task.title.toLowerCase().includes(sValue));
                console.log(typeof(filtered))
                renderTasks(filtered);
    });
}
