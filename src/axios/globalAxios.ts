import axios, { AxiosInstance } from 'axios'
import { API_KEY, SERVER_NAME } from '../constant/global'

export const globalAxios: AxiosInstance = axios.create({
	baseURL: `${SERVER_NAME}`,
	headers: {
		'x-nxopen-api-key': API_KEY,
	},
})
