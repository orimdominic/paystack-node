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
exports.DisputeEvidenceToJSON = exports.DisputeEvidenceFromJSONTyped = exports.DisputeEvidenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function DisputeEvidenceFromJSON(json) {
    return DisputeEvidenceFromJSONTyped(json, false);
}
exports.DisputeEvidenceFromJSON = DisputeEvidenceFromJSON;
function DisputeEvidenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerEmail': json['customer_email'],
        'customerName': json['customer_name'],
        'customerPhone': json['customer_phone'],
        'serviceDetails': json['service_details'],
        'deliveryAddress': !runtime_1.exists(json, 'delivery_address') ? undefined : json['delivery_address'],
        'deliveryDate': !runtime_1.exists(json, 'delivery_date') ? undefined : (new Date(json['delivery_date'])),
    };
}
exports.DisputeEvidenceFromJSONTyped = DisputeEvidenceFromJSONTyped;
function DisputeEvidenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customer_email': value.customerEmail,
        'customer_name': value.customerName,
        'customer_phone': value.customerPhone,
        'service_details': value.serviceDetails,
        'delivery_address': value.deliveryAddress,
        'delivery_date': value.deliveryDate === undefined ? undefined : (value.deliveryDate.toISOString()),
    };
}
exports.DisputeEvidenceToJSON = DisputeEvidenceToJSON;