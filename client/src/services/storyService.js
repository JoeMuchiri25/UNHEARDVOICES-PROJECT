import API from './api';

export const getStories = () => API.get('/api/stories');
export const getStoryById = (id) => API.get(`/api/stories/${id}`);
export const createStory = (data) => API.post('/api/stories', data);
