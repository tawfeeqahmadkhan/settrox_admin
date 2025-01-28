import requests from "./httpService";

const FeaturedProductServices = {
  getAllFeaturedProducts: async () => requests.get("/siteSetting/featured-products"),
  getFeaturedProductById: async (id) => requests.get(`/siteSetting/featured-products/${id}`),
  addFeaturedProduct: async (body) => requests.post("/siteSetting/featured-products", body),
  updateFeaturedProduct: async (id, body) => requests.put(`/siteSetting/featured-products/${id}`, body),
  deleteFeaturedProduct: async (id) => requests.delete(`/siteSetting/featured-products/${id}`),
  updateStatus: async (id, status) => 
    requests.put(`/siteSetting/featured-products/status/${id}`, { status }),
};

export default FeaturedProductServices;