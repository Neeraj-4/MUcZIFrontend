import axios from 'axios';

const URL = 'https://servermuczi.onrender.com';
export const Authantication = async (data) => {
    try {
        return await axios.post(`${URL}/wish`, data)
    } catch (error) {
     alert('field is empty',error);
    }
}
