import requests from "./httpService";

const FlashSaleServices = {
  getAllFlashSales: async () => requests.get("/siteSetting/flash-sales"),
  getFlashSaleById: async (id) => requests.get(`/siteSetting/flash-sales/${id}`),
  addFlashSale: async (body) => requests.post("/siteSetting/flash-sales", body),
  updateFlashSale: async (id, body) => requests.put(`/siteSetting/flash-sales/${id}`, body),
  deleteFlashSale: async (id) => requests.delete(`/siteSetting/flash-sales/${id}`),
  updateStatus: async (id, status) =>
    requests.put(`/siteSetting/flash-sales/status/${id}`,  status ),
};

export default FlashSaleServices;
