"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.USSDToJSON = exports.USSDFromJSONTyped = exports.USSDFromJSON = void 0;
const runtime_1 = require("../runtime");
function USSDFromJSON(json) {
    return USSDFromJSONTyped(json, false);
}
exports.USSDFromJSON = USSDFromJSON;
function USSDFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
    };
}
exports.USSDFromJSONTyped = USSDFromJSONTyped;
function USSDToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
exports.USSDToJSON = USSDToJSON;