import requests from "./httpService";

const GalleryServices = {
  getGallery: async () => requests.get("/siteSetting/gallery"),
  updateGallery: async (body) => requests.put("/siteSetting/gallery", body),
};

export default GalleryServices;