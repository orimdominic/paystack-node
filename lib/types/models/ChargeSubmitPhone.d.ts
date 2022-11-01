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
 * @interface ChargeSubmitPhone
 */
export interface ChargeSubmitPhone {
    /**
     * Customer's mobile number
     * @type {string}
     * @memberof ChargeSubmitPhone
     */
    phone: string;
    /**
     * The reference of the ongoing transaction
     * @type {string}
     * @memberof ChargeSubmitPhone
     */
    reference: string;
}
export declare function ChargeSubmitPhoneFromJSON(json: any): ChargeSubmitPhone;
export declare function ChargeSubmitPhoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeSubmitPhone;
export declare function ChargeSubmitPhoneToJSON(value?: ChargeSubmitPhone | null): any;