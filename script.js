const enterDate = document.getElementById("enterDate");
let realDate = document.getElementsByTagName("td");
function date() {
  for (let i = 0; i < realDate.length; i++) {
    enterDate.value === realDate[i].innerText
      ? realDate[i].style.backgroundColor === "white"
        ? (realDate[i].style.backgroundColor = "green")
        : (realDate[i].style.backgroundColor = "white")
      : (realDate[i].style.backgroundColor = "white");
  }
}

function dateTwo() {
  if (event.key === "Enter") {
    for (let i = 0; i < realDate.length; i++) {
      enterDate.value === realDate[i].innerText
        ? realDate[i].style.backgroundColor === "white"
          ? (realDate[i].style.backgroundColor = "green")
          : (realDate[i].style.backgroundColor = "white")
        : (realDate[i].style.backgroundColor = "white");
    }
  }
}

function changeState() {
  const select = document.getElementById("month");

  let state = select.value;
  document.getElementById("mon").innerText = state;
}

function changeYear() {
  const currentYear = document.getElementById("year");

  let state = currentYear.value;
  document.getElementById("yr").innerText = state;
}
