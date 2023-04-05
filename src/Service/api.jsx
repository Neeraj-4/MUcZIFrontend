import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;
export const Authantication = async (data) => {
    try {
        return await axios.post(`${URL}/wish`, data)
    } catch (error) {
     alert('field is empty',error);
    }
}
