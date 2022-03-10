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
exports.ModelErrorToJSON = exports.ModelErrorFromJSONTyped = exports.ModelErrorFromJSON = void 0;
const runtime_1 = require("../runtime");
function ModelErrorFromJSON(json) {
    return ModelErrorFromJSONTyped(json, false);
}
exports.ModelErrorFromJSON = ModelErrorFromJSON;
function ModelErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': !runtime_1.exists(json, 'status') ? undefined : json['status'],
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
    };
}
exports.ModelErrorFromJSONTyped = ModelErrorFromJSONTyped;
function ModelErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': value.status,
        'message': value.message,
    };
}
exports.ModelErrorToJSON = ModelErrorToJSON;