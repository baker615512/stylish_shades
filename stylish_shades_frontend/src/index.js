const baseURL = "http://localhost:3000"
const api = new ApiService(baseURL)

document.addEventListener("DOMContentLoaded", () => {
  Category.getAll()
})

const handleOnSubmit = (event) => {
  event.preventDefault()
  let price = document.getElementById("filter-price").value
  let cards = document.getElementsByClassName("card")
  let cardsarray = Array.from(cards)
  cardsarray.filter((card => {
    card.style.display = price >= card.dataset.price ? "" : "none"
  }))
}

document.getElementById("sort").addEventListener("click", Sunglass.sortPrice)

document.getElementById("filter").addEventListener("submit", handleOnSubmit)
