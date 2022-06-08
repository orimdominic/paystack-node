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
 * @interface TransferFinalize
 */
export interface TransferFinalize {
    /**
     * The transfer code you want to finalize
     * @type {string}
     * @memberof TransferFinalize
     */
    transferCode: string;
    /**
     * OTP sent to business phone to verify transfer
     * @type {string}
     * @memberof TransferFinalize
     */
    otp: string;
}
export declare function TransferFinalizeFromJSON(json: any): TransferFinalize;
export declare function TransferFinalizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferFinalize;
export declare function TransferFinalizeToJSON(value?: TransferFinalize | null): any;
