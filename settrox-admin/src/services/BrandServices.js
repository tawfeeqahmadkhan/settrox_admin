import requests from "./httpService";

const BrandServices = {
  getAllBrand: async () => {
    return requests.get("/brand");
  },

  getAllBrands: async () => {
    return requests.get("/brand/all");
  },

  getBrandById: async (id) => {
    return requests.get(`/brand/${id}`);
  },

  addBrand: async (body) => {
    return requests.post("/brand/add", body);
  },

  addAllBrand: async (body) => {
    return requests.post("/brand/add/all", body);
  },

  updateBrand: async (id, body) => {
    return requests.put(`/brand/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/brand/status/${id}`, body);
  },

  deleteBrand: async (id, body) => {
    return requests.delete(`/brand/${id}`, body);
  },

  updateManyBrand: async (body) => {
    return requests.patch("/brand/update/many", body);
  },

  deleteManyBrand: async (body) => {
    return requests.patch("/brand/delete/many", body);
  },
};

export default BrandServices;
