import axios from "axios";

export const client = axios.create({
    baseURL: 'https://refined-sheep-77.hasura.app/api/rest/resume',
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'JmIzLejUOMN5g61yZO6GfOBmQI6JWQ87qB8M2Ccn0sLzVrc92Jeb17t4mBKLZHg3'
    }
});


// export default client;