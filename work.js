const seatsOfContainer = document.querySelector(".container");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const film = document.querySelector("#film");
let filmprice = film.value;
let sumOfSeatsSelected = 0;

film.addEventListener("change", (event) => {
  if (event.target.value) {
    if (filmprice !== film.value) {
      const selectedSeats = document.querySelectorAll(".selected");
      selectedSeats.forEach((item) => {
        item.classList.remove("selected");
        sumOfSeatsSelected = 0;
        total.textContent = "0";
        count.textContent = "0";
      });
    }
  }
});

seatsOfContainer.addEventListener("click", (event) => {
  const seat = event.target.closest(".seat");
  if (seat) {
    if (seat.className === "seat") {
      seat.classList.add("selected");
      sumOfSeatsSelected += 1;
      count.textContent = sumOfSeatsSelected;
    } else if (seat.className === "seat selected") {
      seat.classList.remove("selected");
      sumOfSeatsSelected -= 1;
      count.textContent = sumOfSeatsSelected;
      console.log(film.value);
    }
    filmprice = film.value;
    total.textContent = film.value * sumOfSeatsSelected;
  }
});
