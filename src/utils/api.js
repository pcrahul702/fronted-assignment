import axios from "axios";

// Set the base URL for Axios
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || '';

// Function to create headers for requests
const createHeader = (_URL, options = {}) => {
  const token = localStorage.getItem('authToken') || ""; // Ensure this token is dynamically set or retrieved
  const headers = {
    Authorization: `Bearer ${token}`, // Bearer token for authorization
   
  };

  options = { ...options, headers }; // Merge provided options with headers
  return { URL: _URL, options };
};

// POST request function
const POST = (_URL, data = {}, _options = {}) => {
  const { URL, options } = createHeader(_URL, _options);
  return axios.post(URL, data, options);
};

// GET request function
const GET = (_URL, _options = {}) => {
  const { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};

// PUT request function
const PUT = (_URL, data = null, _options = {}) => {
  const { URL, options } = createHeader(_URL, _options);
  return axios.put(URL, data, options);
};

// DELETE request function
const DELETE = (_URL, _options = {}) => {
  const { URL, options } = createHeader(_URL, _options);
  return axios.delete(URL, options);
};

export { POST, GET, PUT, DELETE };
