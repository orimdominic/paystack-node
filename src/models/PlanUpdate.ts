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
 * @interface PlanUpdate
 */
export interface PlanUpdate {
    /**
     * Name of plan
     * @type {string}
     * @memberof PlanUpdate
     */
    name?: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof PlanUpdate
     */
    amount?: number;
    /**
     * Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually
     * @type {string}
     * @memberof PlanUpdate
     */
    interval?: string;
    /**
     * A description for this plan
     * @type {boolean}
     * @memberof PlanUpdate
     */
    description?: boolean;
    /**
     * Set to false if you don't want invoices to be sent to your customers
     * @type {boolean}
     * @memberof PlanUpdate
     */
    sendInvoices?: boolean;
    /**
     * Set to false if you don't want text messages to be sent to your customers
     * @type {boolean}
     * @memberof PlanUpdate
     */
    sendSms?: boolean;
    /**
     * Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD
     * @type {string}
     * @memberof PlanUpdate
     */
    currency?: string;
    /**
     * Number of invoices to raise during subscription to this plan. 
     * Can be overridden by specifying an invoice_limit while subscribing.
     * @type {number}
     * @memberof PlanUpdate
     */
    invoiceLimit?: number;
}

export function PlanUpdateFromJSON(json: any): PlanUpdate {
    return PlanUpdateFromJSONTyped(json, false);
}

export function PlanUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sendInvoices': !exists(json, 'send_invoices') ? undefined : json['send_invoices'],
        'sendSms': !exists(json, 'send_sms') ? undefined : json['send_sms'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'invoiceLimit': !exists(json, 'invoice_limit') ? undefined : json['invoice_limit'],
    };
}

export function PlanUpdateToJSON(value?: PlanUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'amount': value.amount,
        'interval': value.interval,
        'description': value.description,
        'send_invoices': value.sendInvoices,
        'send_sms': value.sendSms,
        'currency': value.currency,
        'invoice_limit': value.invoiceLimit,
    };
}


