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
    image.innerHTML = `<img src=${this.sunglass.image} />`
    this.image = image
    this.constructor.container.appendChild(image)
  }
}