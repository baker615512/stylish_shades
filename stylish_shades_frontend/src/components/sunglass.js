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
    let image = document.createElement("img")
    image.className = "sunglass-image"
    image.dataset.id = this.sunglass.id 
    image.src = this.sunglass.image
    this.image = image
    this.constructor.container.appendChild(image)
  }

  //add button under image to get more info
  //this should hide everything else except "Casual" & "Hidden"
  //card should display all attributes of selected sunglasses
  //card should have a "Buy Now" button that will decrement stock by one when clicked
}