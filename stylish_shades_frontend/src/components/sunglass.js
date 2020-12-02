class Sunglass {
  static container = document.getElementById("sunglasses-container")

  constructor(sunglass){
    this.sunglass = sunglass
    this.render()
    //this.attachEventListener()
  }

  static renderAll(sunglasses){
    this.container.innerHTML = ""
    sunglasses.forEach(sunglass => new Sunglass(sunglass))
  }

  render(){
    let card = document.createElement("div")
    card.className = "card" 
    this.card = card
    card.innerHTML = this.renderInnerHtml()
    this.constructor.container.appendChild(card)
  }

  renderInnerHtml(){
    return `
    <img src="${this.sunglass.image}" class="card-img-top">
    <div class="card-body">
    <h4 class="card-title">${this.sunglass.model}</h4>
    <h5 class="card-text">Price: $${this.sunglass.price}<br>
    Quantity in Stock: ${this.sunglass.stock_quantity}</h5>
    <a href="#" class="btn btn-primary">Buy Now!</a>
    </div>
    `
  }

  //add button under image to get more info
  //this should hide everything else except "Casual" & "Hidden"
  //card should display all attributes of selected sunglasses
  //card should have a "Buy Now" button that will decrement stock by one when clicked
}