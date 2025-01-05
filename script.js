const resetNumber = document.querySelector("#reset");
const decreaseNumber = document.querySelector("#decrease");
const increaseNumber = document.querySelector("#increase");
const counterNumber = document.querySelector("#counter");

const colorChange = function () {
  if (parseInt(counterNumber.textContent) < 0) {
    counterNumber.style.color = "red";
  } else if (parseInt(counterNumber.textContent) > 0) {
    counterNumber.style.color = "green";
  } else {
    counterNumber.style.color = "white";
  }
};

increaseNumber.addEventListener("click", function () {
  counterNumber.textContent++;
  colorChange();
});
decreaseNumber.addEventListener("click", function () {
  counterNumber.textContent--;
  colorChange();
});

resetNumber.addEventListener("click", function () {
  counterNumber.textContent = 0;
  counterNumber.style.color = "white";
});
