import axios from './cutomize-axios';

const fetchAllUser = () => {
    return axios.get('/api/users?page=1');
}

export { fetchAllUser };