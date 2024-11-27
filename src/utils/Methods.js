import { GET, POST, DELETE, PUT } from "./api";

// GET request function (already provided)
export const getdata = async (url) => {
  try {
    const res = await GET(url);
    return res;
  } catch (error) {
    console.log('Error in GET request:', error);
    throw error;
  }
};

// POST request function (already provided)
export const postdata = async (url, data) => {
  try {
    return await POST(url, data);
  } catch (error) {
    console.log('Error in POST request:', error);
  }
};

// PUT request function to update data
export const putdata = async (url, data) => {
  try {
    const res = await PUT(url, data);
    return res;
  } catch (error) {
    console.log('Error in PUT request:', error);
    throw error;
  }
};

// DELETE request function (already provided)
export const deletedata = async (url) => {
  try {
    const res = await DELETE(url);
    return res;
  } catch (error) {
    console.log('Error in DELETE request:', error);
    throw error;
  }
};
