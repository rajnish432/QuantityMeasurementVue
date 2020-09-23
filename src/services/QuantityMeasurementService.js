import httpservice from './HttpService'

class QuantityMeasurementService {
    getMainUnits() {
        return httpservice.get(`type`);
    }

    getSubUnits(mainUnit) {
        return httpservice.get(`subunit`, mainUnit)
    }

    getConvertedValues(conversionDTO) {
        return httpservice.post(conversionDTO)
    }
}

export default new QuantityMeasurementService