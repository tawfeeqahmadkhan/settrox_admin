import requests from "./httpService";

const RoleServices = {
  getAllRoles: async () => requests.get("/roles"),
  getRoleById: async (id) => requests.get(`/roles/${id}`),
  createRole: async (body) => requests.post("/roles", body),
  updateRole: async (id, body) => requests.put(`/roles/${id}`, body),
  deleteRole: async (id) => requests.delete(`/roles/${id}`),
  updateStatus: async (id, status) => 
    requests.put(`/roles/status/${id}`, { status }),
};

export default RoleServices;