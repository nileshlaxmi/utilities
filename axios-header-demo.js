import config from './config';
import axios from 'axios';

export const fetchAllBotService = () => {
    return axios({
        method: 'get',
        url: config.getAllApplicationsUrl,
        headers: {
            'Content-type': 'application/json',
            'api_key': config.apiToken
        }
    })
};