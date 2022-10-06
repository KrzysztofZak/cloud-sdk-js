'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Airlines = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require('@sap-cloud-sdk/odata-v4');
const util_1 = require('@sap-cloud-sdk/util');
/**
 * This class represents the entity "Airlines" of service "Microsoft.OData.SampleService.Models.TripPin".
 */
class Airlines extends odata_v4_1.Entity {
  GetFavoriteAirline() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'Microsoft.OData.SampleService.Models.TripPin.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  GetInvolvedPeople() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'Microsoft.OData.SampleService.Models.TripPin.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  GetFriendsTrips(userName) {
    const params = {
      userName: new odata_v4_1.FunctionImportParameter(
        'userName',
        'Edm.String',
        userName
      )
    };
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'Microsoft.OData.SampleService.Models.TripPin.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  ShareTrip(userName, tripId) {
    const params = {
      userName: new odata_v4_1.ActionImportParameter(
        'userName',
        'Edm.String',
        userName
      ),
      tripId: new odata_v4_1.ActionImportParameter(
        'tripId',
        'Edm.Int32',
        tripId
      )
    };
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = Airlines._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundActionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'Airlines',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'ShareTrip',
      data => data,
      params,
      deSerializers
    );
  }
}
exports.Airlines = Airlines;
/**
 * Technical entity name for Airlines.
 */
Airlines._entityName = 'Airlines';
/**
 * Default url path for the according service.
 */
Airlines._defaultServicePath =
  'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/';
/**
 * All key fields of the Airlines entity
 */
Airlines._keys = ['AirlineCode'];
//# sourceMappingURL=Airlines.js.map
