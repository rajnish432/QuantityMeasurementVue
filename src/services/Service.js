import axios from "axios";

const URL="http://localhost:8084";
const PATH="unit";

class Service{
    getMainUnits(){
        return axios.get(`${URL}/${PATH}/type`);
    }

    getSubUnits(mainUnit){
        return axios.get(`${URL}/${PATH}/subunit`,{params:{quantities:mainUnit}})
    }
}

export default new Service