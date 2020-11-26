class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  getAllCategories = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json())

  getSunglassesByCategory = () => fetch(`${this.baseURL}/category/${id}/sunglasses`).then(resp => resp.json())
}