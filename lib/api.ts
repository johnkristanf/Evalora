// src/lib/api.ts
import axios from 'axios'

export const apiV1 = axios.create({
	baseURL: 'http://192.168.43.252:8000/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
})

// Optional: attach auth token
apiV1.interceptors.request.use((config) => {
	// Example: Add token if available
	const token = 'your-token' // Replace with your auth logic
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})
