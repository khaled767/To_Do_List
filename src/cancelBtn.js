import clearFildes from"./clear"

export default function cancelBtn(title,desc, date, prio, cancel){
    cancel.addEventListener('click', () =>
        {clearFildes(title,desc,date,prio)}
)
    // cancel.addEventListener('click', (title,desc, date, prio, cancel) =>{
    //     title.value = "";
    //     desc.value  = "";
    //     date.value  = "";
    //     prio.value  = 2 ;
    // })
    
}