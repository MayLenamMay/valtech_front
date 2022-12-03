import axios from 'axios';
import responseHandler from '../../data-layer/response-handler';
import { config } from './http-config';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: config,
});

apiClient.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => console.log('error', error) // To add error Handler
);


export default apiClient;
