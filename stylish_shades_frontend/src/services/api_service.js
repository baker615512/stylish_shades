class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  getAllCategories = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json())

  getAllSunglasses = () => fetch(`${this.baseURL}/sunglasses`).then(resp => resp.json())
}