const devBaseURL = 'http://123.207.32.32:1888/api';
const proBaseURL = 'http://123.207.32.32:1888/api';

const BASE_URL = import.meta.env.MODE === 'development' ? devBaseURL : proBaseURL;
const TIME_OUT = 5000;

export { BASE_URL, TIME_OUT };
