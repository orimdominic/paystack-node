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
 * @interface TransferRecipientUpdate
 */
export interface TransferRecipientUpdate {
    /**
     * Recipient's name
     * @type {string}
     * @memberof TransferRecipientUpdate
     */
    name?: string;
    /**
     * Recipient's email address
     * @type {string}
     * @memberof TransferRecipientUpdate
     */
    email?: string;
}
export declare function TransferRecipientUpdateFromJSON(json: any): TransferRecipientUpdate;
export declare function TransferRecipientUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecipientUpdate;
export declare function TransferRecipientUpdateToJSON(value?: TransferRecipientUpdate | null): any;