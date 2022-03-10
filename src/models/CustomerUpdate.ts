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
 * @interface CustomerUpdate
 */
export interface CustomerUpdate {
    /**
     * Customer's first name
     * @type {string}
     * @memberof CustomerUpdate
     */
    firstName?: string;
    /**
     * Customer's last name
     * @type {string}
     * @memberof CustomerUpdate
     */
    lastName?: string;
    /**
     * Customer's phone number
     * @type {string}
     * @memberof CustomerUpdate
     */
    phone?: string;
    /**
     * Stringified JSON object of custom data
     * @type {string}
     * @memberof CustomerUpdate
     */
    metadata?: string;
}

export function CustomerUpdateFromJSON(json: any): CustomerUpdate {
    return CustomerUpdateFromJSONTyped(json, false);
}

export function CustomerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function CustomerUpdateToJSON(value?: CustomerUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'metadata': value.metadata,
    };
}

