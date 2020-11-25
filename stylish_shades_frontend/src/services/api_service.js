class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  getAllSunglasses = () => {
    fetch(`${this.baseURL}/sunglasses`).then(resp => resp.json()).then(data => console.log(data))
  }
}