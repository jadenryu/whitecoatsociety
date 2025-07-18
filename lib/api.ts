import axios from 'axios'
import { supabase } from './supabase'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth interceptor to include JWT token
api.interceptors.request.use(async (config) => {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (session?.access_token) {
    config.headers.Authorization = `Bearer ${session.access_token}`
  }
  
  return config
})

// API endpoints
export const apiClient = {
  // User endpoints
  user: {
    getProfile: () => api.get('/api/v1/users/me'),
    updateProfile: (data: any) => api.put('/api/v1/users/me', data),
    getDashboard: () => api.get('/api/v1/users/me/dashboard'),
    updateParentalConsent: () => api.post('/api/v1/users/me/parental-consent'),
  },
  
  // Content endpoints
  content: {
    getBodySystems: () => api.get('/api/v1/content/body-systems'),
    getBodySystem: (id: string) => api.get(`/api/v1/content/body-systems/${id}`),
    getLessons: (bodySystemId: string) => api.get(`/api/v1/content/body-systems/${bodySystemId}/lessons`),
    getLesson: (id: string) => api.get(`/api/v1/content/lessons/${id}`),
    getAllLessons: (params?: any) => api.get('/api/v1/content/lessons', { params }),
    completeLesson: (id: string) => api.post(`/api/v1/content/lessons/${id}/complete`),
  },
  
  // Search endpoints
  search: {
    searchContent: (query: string, params?: any) => api.get('/api/v1/search/', { params: { q: query, ...params } }),
    getSuggestions: (query: string) => api.get('/api/v1/search/suggestions', { params: { q: query } }),
    getPopularContent: (limit?: number) => api.get('/api/v1/search/popular', { params: { limit } }),
    getContentByBodySystem: (bodySystemId: string) => api.get(`/api/v1/search/body-system/${bodySystemId}`),
  },
  
  // Health check
  health: () => api.get('/health'),
}

export default api 