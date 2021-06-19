{
}
// TODO - Clarify about scopes
// querySelector return the first element in the document that matches with CSS selector or groups of selector
const container = document.querySelector('.container')
// querySelectorAll return a nodelist of the document elemets that matches with CSS selector or groups of selector in a form of an array
const seats = document.querySelectorAll('.row seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = Number(movieSelect.value)
// Change data type by adding a + sign before value
// const ticketPrice = +movieSelect.value
// console.log(typeof ticketPrice)

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats);
    
    const selectedSeatsCount = selectedSeats.length
    console.log(selectedSeatsCount);

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})

// Seat click event
container.addEventListener('click', (e) => {
  // Get classes
  // console.log(e.target.classList.value)
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    // console.log(e.target)
    e.target.classList.toggle('selected')

    updateSelectedCount()
  }
})
