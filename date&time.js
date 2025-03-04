const day = document.getElementById("day");
const month = document.getElementById("month");
const time = document.getElementById("time");
const clockTime_here = document.getElementById("clockTime");


let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const clock = setInterval(() => {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  const dayName = date.getDay();
  const h = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
const clockTime = date.toLocaleTimeString();



  clockTime_here.innerHTML = `${clockTime}`;
  day.innerHTML = `${dayNames[dayName]}, `;
  month.innerHTML = `${monthNames[m]} ${d}, ${y} `;
  time.innerHTML = `${h} Hour ${min} minutes ago`;
 
}, 1000);
