const devBaseURL = 'http://localhost:7777';
const proBaseURL = 'http://t-gbox.dysdk.com';

const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
const TIME_OUT = 5000;

export { BASE_URL, TIME_OUT };
