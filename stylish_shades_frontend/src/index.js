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
  //for (let i = 0; i < cards.length; i++){
  //  let card = cards.item(i)
    card.style.display = price >= card.dataset.price ? "" : "none"
  }))
}

  //1. hide sunglasses that are over the input, or
  //2. iterate and compare input >= this.sunglass.price
//}


document.getElementById("sort").addEventListener("click", Sunglass.sortPrice)

document.getElementById("filter").addEventListener("submit", handleOnSubmit)

//const topButton = document.querySelector("#top-button")
//topButton.addEventListener("click", Sunglass.handleTopButton)
