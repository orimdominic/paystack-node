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
exports.ChargeSubmitAddressToJSON = exports.ChargeSubmitAddressFromJSONTyped = exports.ChargeSubmitAddressFromJSON = void 0;
function ChargeSubmitAddressFromJSON(json) {
    return ChargeSubmitAddressFromJSONTyped(json, false);
}
exports.ChargeSubmitAddressFromJSON = ChargeSubmitAddressFromJSON;
function ChargeSubmitAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'city': json['city'],
        'state': json['state'],
        'zipcode': json['zipcode'],
        'reference': json['reference'],
    };
}
exports.ChargeSubmitAddressFromJSONTyped = ChargeSubmitAddressFromJSONTyped;
function ChargeSubmitAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'zipcode': value.zipcode,
        'reference': value.reference,
    };
}
exports.ChargeSubmitAddressToJSON = ChargeSubmitAddressToJSON;