import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dfzrNVtV9umtPTygZ_nNt6UEJ1Nez3JaOkncDEnJTkE'
    }   
});