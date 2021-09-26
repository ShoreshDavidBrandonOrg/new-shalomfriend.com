const LOCAL_API = 'http://localhost:3000/v2';
const PROD_API = 'https://shalomfriend-production.herokuapp.com/v2';

const nodeEnv = process.env.NODE_ENV;

export const API_URL = nodeEnv !== 'production' ? LOCAL_API : PROD_API;
