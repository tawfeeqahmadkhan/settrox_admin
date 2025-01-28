import requests from './httpService';

const AttributeServices = {
  getAllAttributes: async ({ type, option, option1 }) => {
    return requests.get(
      `products/attribute/get-all`
    );
  },

  getShowingAttributes: async (body) => {
   
    return requests.get('/products/attribute/show', body);
  },

  addAttribute: async (body) => {
    return requests.post('/products/attribute/add', body);
  },

  addChildAttribute: async (id, body) => {
    return requests.put(`/products/attribute/add/child/${id}`, body);
  },

  addAllAttributes: async (body) => {
    return requests.post('/products/attribute/add/all', body);
  },

  getAttributeById: async (id) => {
    return requests.get(`/products/attribute/${id}`);
  },

  getChildAttributeById: async ({ id, ids }) => {
    return requests.get(`/products/attribute/child/${id}/${ids}`);
  },

  updateAttributes: async (id, body) => {
    return requests.put(`/products/attribute/${id}`, body);
  },

  updateChildAttributes: async ({ id, ids }, body) => {
    return requests.put(`/products/attribute/update/child/${ids}/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/products/attribute/status/${id}`, body);
  },

  updateChildStatus: async (id, body) => {
    return requests.put(`/products/attribute/status/child/${id}`, body);
  },

  deleteAttribute: async (id, body) => {
    return requests.delete(`/products/attribute/${id}`, body);
  },

  deleteChildAttribute: async ({ id, ids }, body) => {
    return requests.put(`/products/attribute/delete/child/${ids}/${id}`, body);
  },

  updateManyAttribute: async (body) => {
    return requests.patch('/products/attribute/update/many', body);
  },

  updateManyChildAttribute: async (body) => {
    return requests.patch('/products/attribute/update/child/many', body);
  },

  deleteManyAttribute: async (body) => {
    return requests.patch('/products/attribute/delete/many', body);
  },

  deleteManyChildAttribute: async (body) => {
    return requests.patch('/products/attribute/delete/child/many', body);
  },
};

export default AttributeServices;
