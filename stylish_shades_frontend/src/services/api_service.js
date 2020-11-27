class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  getAllCategories = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json())

  getSunglassesByCategory = (id) => fetch(`${this.baseURL}/categories/${id}/sunglasses`).then(resp => resp.json())
}