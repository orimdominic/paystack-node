/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CustomerRiskAction
 */
export interface CustomerRiskAction {
    /**
     * Customer's code, or email address
     * @type {string}
     * @memberof CustomerRiskAction
     */
    customer: string;
    /**
     * One of the possible risk actions [ default, allow, deny ]. allow to whitelist. 
     * deny to blacklist. Customers start with a default risk action.
     * @type {string}
     * @memberof CustomerRiskAction
     */
    riskAction?: string;
}

export function CustomerRiskActionFromJSON(json: any): CustomerRiskAction {
    return CustomerRiskActionFromJSONTyped(json, false);
}

export function CustomerRiskActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerRiskAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['customer'],
        'riskAction': !exists(json, 'risk_action') ? undefined : json['risk_action'],
    };
}

export function CustomerRiskActionToJSON(value?: CustomerRiskAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer': value.customer,
        'risk_action': value.riskAction,
    };
}


