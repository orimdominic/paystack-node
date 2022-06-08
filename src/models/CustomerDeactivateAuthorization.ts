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
 * @interface CustomerDeactivateAuthorization
 */
export interface CustomerDeactivateAuthorization {
    /**
     * Authorization code to be deactivated
     * @type {string}
     * @memberof CustomerDeactivateAuthorization
     */
    authorizationCode: string;
}

export function CustomerDeactivateAuthorizationFromJSON(json: any): CustomerDeactivateAuthorization {
    return CustomerDeactivateAuthorizationFromJSONTyped(json, false);
}

export function CustomerDeactivateAuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDeactivateAuthorization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizationCode': json['authorization_code'],
    };
}

export function CustomerDeactivateAuthorizationToJSON(value?: CustomerDeactivateAuthorization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorization_code': value.authorizationCode,
    };
}


