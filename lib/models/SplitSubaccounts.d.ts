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
 * @interface SplitSubaccounts
 */
export interface SplitSubaccounts {
    /**
     * Subaccount code of the customer or partner
     * @type {string}
     * @memberof SplitSubaccounts
     */
    subaccount?: string;
    /**
     * The percentage or flat quota of the customer or partner
     * @type {string}
     * @memberof SplitSubaccounts
     */
    share?: string;
}
export declare function SplitSubaccountsFromJSON(json: any): SplitSubaccounts;
export declare function SplitSubaccountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SplitSubaccounts;
export declare function SplitSubaccountsToJSON(value?: SplitSubaccounts | null): any;
