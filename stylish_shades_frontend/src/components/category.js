class Category {
  static container = document.getElementById("category-container")

  constructor(category){
    this.category = category
    this.render()
    this.attachEventListener()
  }

  static getAll(){
    api.getAllCategories().then((data) =>
      data.forEach((category) => new Category(category)))
  }

  render(){
    const btn = document.createElement("button")
    btn.className = "category-button"
    btn.dataset.id = this.category.id 
    btn.innerHTML = this.category.name
    this.btn = btn
    this.constructor.container.appendChild(btn)
  }

  attachEventListener = () => {
    this.btn.addEventListener("click", this.handleOnClick)
  }

  handleOnClick = () => {
    const id = this.category.id
    api.getSunglassesByCategory(id).then((data) => 
      data.forEach((sunglass) => new Sunglass(sunglass))) //if casual sunglasses are already rendered
      //they should be hidden when sporty button is clicked
  }

}