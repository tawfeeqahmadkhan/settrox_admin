import requests from "./httpService";

const BannerServices = {
  // Fetch all banners
  getAllBanners: async () => {
    return requests.get("/siteSetting/banners");
  },

  // Fetch a banner by ID
  getBannerById: async (id) => {
    return requests.get(`/siteSetting/banners/${id}`);
  },

  // Add a new banner
  addBanner: async (body) => {
    return requests.post("/siteSetting/banners", body);
  },

  // Update a banner by ID
  updateBanner: async (id, body) => {
    return requests.put(`/siteSetting/banners/${id}`, body);
  },

  // Update the status of a banner (e.g., published/unpublished)
  updateBannerStatus: async (id, body) => {
    return requests.put(`/siteSetting/banners/status/${id}`, body);
  },

  // Delete a single banner by ID
  deleteBanner: async (id) => {
    return requests.delete(`/siteSetting/banners/${id}`);
  },


};

export default BannerServices;
