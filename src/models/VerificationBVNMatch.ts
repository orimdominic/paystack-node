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
 * @interface VerificationBVNMatch
 */
export interface VerificationBVNMatch {
    /**
     * Bank Account Number
     * @type {string}
     * @memberof VerificationBVNMatch
     */
    accountNumber: string;
    /**
     * You can get the list of banks codes by calling the List Bank endpoint
     * @type {number}
     * @memberof VerificationBVNMatch
     */
    bankCode: number;
    /**
     * 11 digits Bank Verification Number
     * @type {string}
     * @memberof VerificationBVNMatch
     */
    bvn: string;
    /**
     * Customer's first name
     * @type {string}
     * @memberof VerificationBVNMatch
     */
    firstName?: string;
    /**
     * Customer's middle name
     * @type {string}
     * @memberof VerificationBVNMatch
     */
    middleName?: string;
    /**
     * Customer's last name
     * @type {string}
     * @memberof VerificationBVNMatch
     */
    lastName?: string;
}

export function VerificationBVNMatchFromJSON(json: any): VerificationBVNMatch {
    return VerificationBVNMatchFromJSONTyped(json, false);
}

export function VerificationBVNMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationBVNMatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'],
        'bankCode': json['bank_code'],
        'bvn': json['bvn'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'middleName': !exists(json, 'middle_name') ? undefined : json['middle_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
    };
}

export function VerificationBVNMatchToJSON(value?: VerificationBVNMatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_number': value.accountNumber,
        'bank_code': value.bankCode,
        'bvn': value.bvn,
        'first_name': value.firstName,
        'middle_name': value.middleName,
        'last_name': value.lastName,
    };
}

