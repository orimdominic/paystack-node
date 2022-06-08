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
export declare function ChargeSubmitAddressFromJSON(json: any): ChargeSubmitAddress;
export declare function ChargeSubmitAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeSubmitAddress;
export declare function ChargeSubmitAddressToJSON(value?: ChargeSubmitAddress | null): any;
