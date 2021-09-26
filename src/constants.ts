const LOCAL_API = 'http://localhost:3000/v2';
const PROD_API = 'https://api.shalomfriend.com/v1';

const nodeEnv = process.env.NODE_ENV;

export const API_URL = nodeEnv === 'production' ? PROD_API : LOCAL_API;
