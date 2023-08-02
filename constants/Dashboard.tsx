import { format } from "date-fns";

const API_KEY_VAKIFBANK = process.env.NEXT_PUBLIC_VAKIFBANK_KEY;
const API_KEY_TCMB = process.env.NEXT_PUBLIC_TCMB_KEY;
const apiUrl = `https://apigw.vakifbank.com.tr:8443/getCurrencyRates`;
const currentDate = format(new Date(), "dd/MM/yyyy");

export { apiUrl, API_KEY, currentDate };
