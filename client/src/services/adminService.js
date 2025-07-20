import API from './api';

export const login = (credentials) => API.post('/api/admin/login', credentials);
export const getDashboardStats = () => API.get('/api/admin/dashboard');
