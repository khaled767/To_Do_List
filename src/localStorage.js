
export default function dataInStorage() {
    let data;
    // localStorage.removeItem("data"); // ← يحذف كل المهام القديمة

    if (localStorage.data && localStorage.data !== '[]') {
        data = JSON.parse(localStorage.data);
    } else {
        data = [
            {title: "visit the museum", desc: "A great place for art lovers", date: "Wed Dec 10 2025", prioty: "Very-important"},
            {title: "swimming in ice pool",   desc: "Challenge the cold",date: "2024-02-01",   prioty: "Very-important"},
            {title: "learn coding", desc: "very wonnderful Job", date: "Wed Dec 10 2025", prioty: "Important"},
            {title: "go hiking",desc: "in the mountains",date: "Thu Jan 01 2026",prioty: "Important"},
            {title: "vacation",desc: "Camping in mountains",date: "Sun Oct 10 2025",prioty: "Very Important"},
            {title: "buisness",desc: "meeting with maneger",date: "Fri Aug 15 2024",prioty: "Normal"},
        ]

    }

    // localStorage.setItem("data", JSON.stringify(data));

    const taskDiv = document.querySelector(".render-task");

    return { data, taskDiv }; // ✅ Return both as an object

}