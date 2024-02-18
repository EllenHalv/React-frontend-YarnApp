import axios from 'axios';

const REST_API_BASE_URL = "http://yarn-app-env-1.eba-bvcapd7u.us-east-1.elasticbeanstalk.com/yarns";

export const listYarns = () => axios.get(REST_API_BASE_URL);