const baseURL = "http://localhost:3000"
const api = new ApiService(baseURL)

document.addEventListener("DOMContentLoaded", () => {
  Category.getAll()
})

const handleOnClick = (event) => {
  event.preventDefault()
  let price = document.getElementById("filter-price").value
  //console.log(price)
  let cards = document.getElementsByClassName("card")
  for (let i = 0; i < cards.length; i++){
    let card = cards.item(i)
    card.style.display = price >= card.dataset.price ? "" : "none"
  }

  //1. hide sunglasses that are over the input, or
  //2. iterate and compare input >= this.sunglass.price
}

document.getElementById("filter").addEventListener("submit", handleOnClick)

//const topButton = document.querySelector("#top-button")
//topButton.addEventListener("click", Sunglass.handleTopButton)