import requests from "./httpService";

const NewArrivalServices = {
  getNewArrival: async () => requests.get("/siteSetting/new-arrival"),
  updateNewArrival: async (body) => requests.put("/siteSetting/new-arrival", body),
};

export default NewArrivalServices;