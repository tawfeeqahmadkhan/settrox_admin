import requests from "./httpService";

const SpecificationServices = {
  getAllSpecification: async () => {
    return requests.get("/specification");
  },

  getAllCategories: async () => {
    return requests.get("/specification/all");
  },

  getSpecificationById: async (id) => {
    return requests.get(`/specification/${id}`);
  },

  addSpecification: async (body) => {
    return requests.post("/specification/add", body);
  },

  addAllSpecification: async (body) => {
    return requests.post("/specification/add/all", body);
  },

  updateSpecification: async (id, body) => {
    return requests.put(`/specification/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/specification/status/${id}`, body);
  },

  deleteSpecification: async (id, body) => {
    return requests.delete(`/specification/${id}`, body);
  },

  updateManySpecification: async (body) => {
    return requests.patch("/specification/update/many", body);
  },

  deleteManySpecification: async (body) => {
    return requests.patch("/specification/delete/many", body);
  },
};

export default SpecificationServices;
