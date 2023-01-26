import axios from "axios";

export const signup = async (data) => {
    const config = { headers: { 'Content-type': 'application/json' } }

    const response = await axios.post('/api/auth/signup', data, config)

    return response
}