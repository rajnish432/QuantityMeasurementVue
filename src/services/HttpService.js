import axios from 'axios'

const URL = 'http://localhost:8084';

export default {

    post(DTO) {
        return axios({
            method: 'post',
            url: `${URL}/convert`,
            data: DTO,
        })
    },
    get(apiurl, mainUnit) {
        return axios({
            method: 'get',
            url: `${URL}/unit/${apiurl}`,
            params: { quantities: mainUnit }
        })
    }
}