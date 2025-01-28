import requests from "./httpService";

const VideoServices = {
  getVideo: async () => requests.get("/siteSetting/video"),
  updateVideo: async (body) => requests.put("/siteSetting/video", body),
};

export default VideoServices;