import axios from "axios"

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

export const fetchUsers = () => API.get('/users')
export const fetchUser = (id) => API.get(`/users/${id}`)
export const updateUser = (id, updatedPost) => API.put(`/users/${id}`, updatedPost)
export const deleteUsers = (id) => API.delete(`/users/${id}`)