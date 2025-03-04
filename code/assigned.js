document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  const assigned = document.getElementById("assigned").innerText;
  const convertedAss = parseInt(assigned);
  const total = document.getElementById("total").innerText;
  const convertedTotal = parseInt(total);
  const newAssigned = convertedAss - 1;
  const newTotal = convertedTotal + 1;
document.getElementById("assigned").innerText = newAssigned;
document.getElementById("total").innerText = newTotal;
});
