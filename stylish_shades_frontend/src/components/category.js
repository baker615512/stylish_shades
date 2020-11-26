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
    this.constructor.container.appendChild(btn)
    this.btn = btn
  }

  attachEventListener = () => {
    this.btn.addEventListener("click", this.handleOnClick)
  }

  handleOnClick = () => {
    const id = this.category.dataset.id
    api.getSunglassesByCategory(id).then((data) => 
      data.forEach((sunglass) => new Sunglass(sunglass))) // I need to send this data to the sunglass class
    //get the category id from the data-id attribute
    //pass the id into a method on apiService to make a request to categories/:id/sunglasses
  }

}