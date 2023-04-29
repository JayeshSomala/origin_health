// const API_BASE_URL = 'https://example.com/api';

// export function updateImageLabel(imageId, label) {
//   const url = `${API_BASE_URL}/images/${imageId}`;
//   const data = { label };
//   return fetch(url, {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error('Failed to update image label');
//     }
//   });
// }

// export function deleteImage(imageId) {
//   const url = `${API_BASE_URL}/images/${imageId}`;
//   return fetch(url, {
//     method: 'DELETE',
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error('Failed to delete image');
//     }
//   });
// }

import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const updateImageLabel = async (id, label) => {
  try {
    const response = await axios.put(`${baseUrl}/api/images/${id}`, { label });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/api/images/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

