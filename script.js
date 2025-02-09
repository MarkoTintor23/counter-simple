document.addEventListener("DOMContentLoaded", () => {
  new Counter();
});
class Counter {
  constructor() {
    this.resetNumber = document.querySelector("#reset");
    this.decreaseNumber = document.querySelector("#decrease");
    this.increaseNumber = document.querySelector("#increase");
    this.counterNumber = document.querySelector("#counter");

    this.addEventListeners();
  }

  colorChange() {
    if (parseInt(this.counterNumber.textContent) < 0) {
      this.counterNumber.style.color = "red";
    } else if (parseInt(this.counterNumber.textContent) > 0) {
      this.counterNumber.style.color = "green";
    } else {
      this.counterNumber.style.color = "white";
    }
  }

  addEventListeners() {
    this.increaseNumber.addEventListener("click", () => this.handleIncrease());
    this.decreaseNumber.addEventListener("click", () => this.handleDecrease());
    this.resetNumber.addEventListener("click", () => this.handleReset());
  }

  handleIncrease() {
    this.counterNumber.textContent =
      parseInt(this.counterNumber.textContent) + 1;
    this.colorChange();
  }

  handleDecrease() {
    this.counterNumber.textContent =
      parseInt(this.counterNumber.textContent) - 1;
    this.colorChange();
  }

  handleReset() {
    this.counterNumber.textContent = 0;
    this.counterNumber.style.color = "white";
  }
}
