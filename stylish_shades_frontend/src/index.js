const baseURL = "http://localhost:3000"
const api = new ApiService(baseURL)

document.addEventListener("DOMContentLoaded", () => {
  Category.getAll()
})