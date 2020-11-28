class Sunglass {
  static container = document.getElementById("sunglasses-container")

  constructor(sunglass){
    this.sunglass = sunglass
    this.render()
    //this.attachEventListener()
  }

  render(){
    let image = document.createElement("image")
    image.className = "sunglass-image"
    image.dataset.id = this.sunglass.id 
    image.innerHTML = `<img src=${this.sunglass.image} />` //make image smaller
    this.image = image
    this.constructor.container.appendChild(image)
  }

  //add button under image to get more info
  //this should hide everything else except "Casual" & "Hidden"
  //card should display all attributes of selected sunglasses
  //card should have a "Buy Now" button that will decrement stock by one when clicked
}