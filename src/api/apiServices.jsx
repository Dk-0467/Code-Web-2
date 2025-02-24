import axiosInstance from "./axiosConfig";

function callApi(endpoint, method = "GET", body, params) {
  // Xây dựng chuỗi truy vấn từ params
  const queryString = params ? new URLSearchParams(params).toString() : "";
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  const config = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: body ? JSON.stringify(body) : null,
  };

  console.log("callApi url: ", url);

  return axiosInstance(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API call error:", error);
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      } else {
        console.error("Network or other error:", error.message);
      }
      throw error;
    });
}

export function GET_ALL(endpoint, params) {
  return callApi(endpoint, "GET", null, params);
}

export function GET_ID(endpoint, id) {
  return callApi(endpoint + "/" + id, "GET");
}

export function POST_ADD(endpoint, data) {
  return callApi(endpoint, "POST", data);
}

export function PUT_EDIT(endpoint, data) {
  return callApi(endpoint, "PUT", data);
}

export function DELETE_ID(endpoint) {
  return callApi(endpoint, "DELETE");
}
