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

export function PageProductFromJSON(json: any): PageProduct {
    return PageProductFromJSONTyped(json, false);
}

export function PageProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': json['product'],
    };
}

export function PageProductToJSON(value?: PageProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product': value.product,
    };
}

