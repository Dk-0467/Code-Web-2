import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8900/api",
});

// Không còn xử lý chuyển hướng khi gặp lỗi 401
axiosInstance.interceptors.response.use(
  (response) => response, // Trả về response nếu thành công
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error); // Trả lỗi để các nơi khác xử lý
  }
);

export default axiosInstance;
