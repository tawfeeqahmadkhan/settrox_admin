import requests from "./httpService";

const MostPurchasedProductsService = {
  // Fetch all most purchased products entries
  getAllMostPurchasedProducts: async () => {
    return requests.get("/siteSetting/most-purchased");
  },

  // Fetch a single entry by ID
  getMostPurchasedProductById: async (id) => {
    return requests.get(`/siteSetting/most-purchased/${id}`);
  },

  // Add a new entry
  addMostPurchasedProduct: async (body) => {
    return requests.post("/siteSetting/most-purchased", body);
  },

  // Update an entry by ID
  updateMostPurchasedProduct: async (id, body) => {
    return requests.put(`/siteSetting/most-purchased/${id}`, body);
  },

  // Update the status of an entry
  updateMostPurchasedProductStatus: async (id, body) => {
    return requests.put(`/siteSetting/most-purchased/status/${id}`, body);
  },

  // Delete a single entry by ID
  deleteMostPurchasedProduct: async (id) => {
    return requests.delete(`/siteSetting/most-purchased/${id}`);
  },
  getUsedOrders: async () => {
    return requests.get("/siteSetting/most-purchased/used-orders");
  },
};

export default MostPurchasedProductsService;