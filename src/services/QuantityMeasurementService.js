import httpservice from './HttpService'

class QuantityMeasurementService {
    getMainUnits() {
        return httpservice.get(`type`);
    }

    getSubUnits(mainUnit) {
        return httpservice.get(`subunit`, mainUnit)
    }

    getConvertedValues(input, mainUnit, firstSubunit, secondSubunit) {
        const conversionDTO = {
            actualValue: input,
            quantityType: mainUnit,
            initialUnit: firstSubunit,
            conversionUnit: secondSubunit
        }
        return httpservice.post(conversionDTO)
    }
}

export default new QuantityMeasurementService