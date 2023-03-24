import axios from "axios";

import { requestHandler } from "./Interceptor";

const instance = {
    baseURL: 'https://refined-sheep-77.hasura.app/api/rest/resume',
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'JmIzLejUOMN5g61yZO6GfOBmQI6JWQ87qB8M2Ccn0sLzVrc92Jeb17t4mBKLZHg3'
    }
}

const axiosInstance = axios.create(instance);

// handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;