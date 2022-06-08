/* tslint:disable */
/* eslint-disable */
/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 * Contact: techsupport@paystack.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChargeSubmitAddress
 */
export interface ChargeSubmitAddress {
    /**
     * Customer's address
     * @type {string}
     * @memberof ChargeSubmitAddress
     */
    address: string;
    /**
     * Customer's city
     * @type {string}
     * @memberof ChargeSubmitAddress
     */
    city: string;
    /**
     * Customer's state
     * @type {string}
     * @memberof ChargeSubmitAddress
     */
    state: string;
    /**
     * Customer's zipcode
     * @type {string}
     * @memberof ChargeSubmitAddress
     */
    zipcode: string;
    /**
     * The reference of the ongoing transaction
     * @type {string}
     * @memberof ChargeSubmitAddress
     */
    reference: string;
}

export function ChargeSubmitAddressFromJSON(json: any): ChargeSubmitAddress {
    return ChargeSubmitAddressFromJSONTyped(json, false);
}

export function ChargeSubmitAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeSubmitAddress {
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

export function ChargeSubmitAddressToJSON(value?: ChargeSubmitAddress | null): any {
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


