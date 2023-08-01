import {format} from 'date-fns';

const API_KEY = "54d7f2a3d8b30c7127eb144c";
const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}`;
const currentDate = format(new Date(), 'dd/MM/yyyy');

export {
    apiUrl,
    API_KEY,
    currentDate
}