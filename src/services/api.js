import axios from 'axios';

const api_key = 'b926c0ea-0aca-4499-b6e9-fbf136c9cab9';

const catApi = axios.create({
    headers: {
        'apiKey': api_key
    }
})

export default {
    catApi
}