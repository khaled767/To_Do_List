
// calendar.js
function calender() {
    const monthYearElement = document.getElementById("monthYear");
    const datesElement = document.getElementById("dates");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentDate = new Date();

    const updateCalendar = () => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const firstDay = new Date(currentYear, currentMonth,1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        console.log(firstDay, lastDay)

        monthYearElement.textContent = `${currentDate.toLocaleString("default", {
            month: "long",
        })} ${currentYear}`;

        datesElement.innerHTML = "";

        // Fill empty days before the 1st
        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("date", "inactive"); // optional
            datesElement.appendChild(emptyDiv);
        }

        for (let day = 1; day <= lastDay; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.classList.add("date")
            
        
        // ✅ highlight Today's day
        const today = new Date()
        if (
            day   === today.getDate()  &&
            currentMonth === today.getMonth() &&
            currentYear  === today.getFullYear()
        ) {
            dayElement.classList.add("active")
        }

            datesElement.appendChild(dayElement);
        }
    };

    updateCalendar();

    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });
}

export default calender; // ✅ Correct
