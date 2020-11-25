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
    // include the category id as a data attribute
    const btn = document.createElement("button")
    btn.className = "category-button"
    btn.innerHTML = this.category.name
    this.constructor.container.appendChild(btn)
    this.btn = btn
  }

  attachEventListener = () => {
    this.btn.addEventListener("click", this.handleOnClick)
  }

  handleOnClick = () => {
    console.log("clicked")
    //get the category id from the data-id attribute
    //pass the id into a method on apiService to make a request to categories/:id/sunglasses
  }

}