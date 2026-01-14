const BASE_URL = 'http://192.168.1.107:5000';

const api = async (endpoint, method = 'GET', body) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : null,
    });

    const text = await response.text(); // 👈 read raw response first

    try {
        return JSON.parse(text);
    } catch (err) {
        console.error('INVALID JSON RESPONSE:', text);
        throw new Error('Invalid JSON from server');
    }
};

export default api;
