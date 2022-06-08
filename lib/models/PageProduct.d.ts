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
 * @interface PageProduct
 */
export interface PageProduct {
    /**
     * IDs of all products to add to a page
     * @type {Array<string>}
     * @memberof PageProduct
     */
    product: Array<string>;
}
export declare function PageProductFromJSON(json: any): PageProduct;
export declare function PageProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageProduct;
export declare function PageProductToJSON(value?: PageProduct | null): any;
