const baseURL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
  const api = new ApiService(baseURL)
  api.getAllSunglasses()
})