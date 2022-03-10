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
/**
 *
 * @export
 * @interface TransactionCheckAuthorization
 */
export interface TransactionCheckAuthorization {
    /**
     * Customer's email address
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    email: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof TransactionCheckAuthorization
     */
    amount: number;
    /**
     * Valid authorization code to charge
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    authorizationCode?: string;
    /**
     * The transaction currency
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    currency?: string;
}
export declare function TransactionCheckAuthorizationFromJSON(json: any): TransactionCheckAuthorization;
export declare function TransactionCheckAuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCheckAuthorization;
export declare function TransactionCheckAuthorizationToJSON(value?: TransactionCheckAuthorization | null): any;