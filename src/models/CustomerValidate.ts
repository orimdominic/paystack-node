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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CustomerValidate
 */
export interface CustomerValidate {
    /**
     * Customer's first name
     * @type {string}
     * @memberof CustomerValidate
     */
    firstName: string;
    /**
     * Customer's last name
     * @type {string}
     * @memberof CustomerValidate
     */
    lastName: string;
    /**
     * Predefined types of identification. e.g. (BVN)
     * @type {string}
     * @memberof CustomerValidate
     */
    type: string;
    /**
     * Customer's identification number
     * @type {string}
     * @memberof CustomerValidate
     */
    value: string;
    /**
     * 2 letter country code of identification issuer
     * @type {string}
     * @memberof CustomerValidate
     */
    country: string;
}

export function CustomerValidateFromJSON(json: any): CustomerValidate {
    return CustomerValidateFromJSONTyped(json, false);
}

export function CustomerValidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerValidate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'type': json['type'],
        'value': json['value'],
        'country': json['country'],
    };
}

export function CustomerValidateToJSON(value?: CustomerValidate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'type': value.type,
        'value': value.value,
        'country': value.country,
    };
}

