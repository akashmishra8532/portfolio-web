import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export async function sendContact(payload) {
  const { data } = await api.post('/api/contact', payload)
  return data
}

export default api




