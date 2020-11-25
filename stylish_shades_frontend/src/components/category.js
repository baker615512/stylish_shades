class Category {
  static container = document.getElementById("category-container")

  constructor(category){
    this.category = category
    this.render()
  }

  static getAll(){
    api.getAllCategories().then((data) => 
      data.forEach((category) => new Category(category)))
  }

  render(){
    console.log("Do I make it to here?")
  }
}