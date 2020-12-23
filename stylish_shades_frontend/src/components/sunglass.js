class Sunglass {
  static container = document.getElementById("sunglasses-container")
  static all = []

  constructor(sunglass){
    this.sunglass = sunglass
    this.render()
    this.attachEventListener()
    Sunglass.all.push(this)
  }

  static renderAll(sunglasses){
    this.container.innerHTML = ""
    sunglasses.forEach(sunglass => new Sunglass(sunglass))
  }

  render(){
    let card = document.createElement("div")
    card.className = "card" 
    card.setAttribute("data-price", this.sunglass.price)
    this.card = card
    card.innerHTML = this.renderInnerHtml()
    this.constructor.container.appendChild(card)
    let filter = document.getElementById("filter")
    filter.style.visibility = "visible"
  }

  renderInnerHtml(){
    return `
    <img src="${this.sunglass.image}" class="card-img-top">
    <div class="card-body">
    <h4 class="card-title">${this.sunglass.model}</h4>
    <h5 class="card-text">Price: $${this.sunglass.price}</h5>
    <h6 class="card-quantity">Quantity in Stock: ${this.sunglass.stock_quantity}</h6>
    <button ${this.sunglass.stock_quantity < 1 ? "disabled" : ''} data-id="${this.sunglass.id}" class="btn btn-primary buy-btn">Buy Now!</button>
    </div>
    `
  }

  attachEventListener = () => {
    this.card.addEventListener("click", (event) => this.handleOnClick(event))
  }

  handleOnClick = (event) => {
    if (event.target.classList.contains("buy-btn")){
      let id = event.target.dataset.id
      api.updateStockQuantity(id).then((sunglass) =>
        this.updateSunglass(sunglass)
      )
    }
  }

  updateSunglass = (sunglass) => {
    this.sunglass = sunglass
    this.card.innerHTML = this.renderInnerHtml()
  }

  //static handleTopButton = () => {
  //  console.log("do whatever a button needs to do")
  //}
}

