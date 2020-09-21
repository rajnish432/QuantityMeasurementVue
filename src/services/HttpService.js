import axios from 'axios'

const URL = 'http://localhost:8084';

export default {

    post(conversionDTO) {
        return axios({
            method: 'post',
            url: `${URL}/convert`,
            data: conversionDTO,
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