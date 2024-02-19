import axios from 'axios';

const REST_API_BASE_URL = "http://yarn-app-env-1.eba-bvcapd7u.us-east-1.elasticbeanstalk.com/yarns";

const YARN_CRUD_BASE_URL = "http://yarn-app-env-1.eba-bvcapd7u.us-east-1.elasticbeanstalk.com/yarn";

export const listYarns = () => axios.get(REST_API_BASE_URL);

export const createYarn = (yarn) => axios.post(YARN_CRUD_BASE_URL, yarn);

export const getYarnById = (yarnId) => axios.get(YARN_CRUD_BASE_URL, {
    params: {
        id: yarnId
    }
});

export const updateYarn = (yarnId, yarn) => axios.patch(YARN_CRUD_BASE_URL, yarn, {
    params: {
        id: yarnId
    }
});

export const deleteYarn = (yarnId) => axios.delete(YARN_CRUD_BASE_URL, {
    params: {
        id: yarnId
    }
});