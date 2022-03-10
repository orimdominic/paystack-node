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
exports.ProductCreateToJSON = exports.ProductCreateFromJSONTyped = exports.ProductCreateFromJSON = void 0;
const runtime_1 = require("../runtime");
function ProductCreateFromJSON(json) {
    return ProductCreateFromJSONTyped(json, false);
}
exports.ProductCreateFromJSON = ProductCreateFromJSON;
function ProductCreateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'],
        'price': json['price'],
        'currency': json['currency'],
        'limited': !runtime_1.exists(json, 'limited') ? undefined : json['limited'],
        'quantity': !runtime_1.exists(json, 'quantity') ? undefined : json['quantity'],
    };
}
exports.ProductCreateFromJSONTyped = ProductCreateFromJSONTyped;
function ProductCreateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'description': value.description,
        'price': value.price,
        'currency': value.currency,
        'limited': value.limited,
        'quantity': value.quantity,
    };
}
exports.ProductCreateToJSON = ProductCreateToJSON;