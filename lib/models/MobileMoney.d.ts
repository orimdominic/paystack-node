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
 * @interface MobileMoney
 */
export interface MobileMoney {
    /**
     * Customer's phone number
     * @type {string}
     * @memberof MobileMoney
     */
    phone?: string;
    /**
     * The telco provider of customer's phone number. This can be fetched from the List Bank endpoint
     * @type {string}
     * @memberof MobileMoney
     */
    provider?: string;
}
export declare function MobileMoneyFromJSON(json: any): MobileMoney;
export declare function MobileMoneyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MobileMoney;
export declare function MobileMoneyToJSON(value?: MobileMoney | null): any;