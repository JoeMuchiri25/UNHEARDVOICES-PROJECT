// src/services/donationService.js
import API from './api';

// Submit donation (used in Donate.jsx)
export const submitDonation = (data) => API.post('/api/donations', data);

// Fetch donations linked to a story
export const getDonationsByStory = (storyId) => API.get(`/api/donations/${storyId}`);
