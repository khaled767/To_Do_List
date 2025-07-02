// import { parse, setDate, yearsToDays } from "date-fns";
import save from "./saveBtn"
import cancel from "./cancelBtn"


export default function form() {
    const array = []
    const title       = document.querySelector('.title') ;
    const desc        = document.querySelector('.desc');
    const dateTime    = document.querySelector('.datetime');
    const priority    = document.querySelector('#priority');
    const savebtn     = document.querySelector('.submitbtn');
    const cancelbtn   = document.querySelector('.cancelbtn');
    console.log(cancelbtn)
// --------------------------------------------------------------------------------------------------------
    save(title,desc,dateTime,priority,savebtn)
    cancel(title,desc,dateTime,priority,cancelbtn)
    
}


