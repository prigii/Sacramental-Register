// lib/members.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Update this to your backend API URL

export const getMembers = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/members`, {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching members');
  }
};

export const addMember = async (memberData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/members/`, memberData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding member');
  }
};
