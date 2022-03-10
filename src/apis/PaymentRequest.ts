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


import { BaseAPI, RequiredError } from '../runtime';
import {
    Response,
    ResponseFromJSON
} from '../models';

export interface ArchiveRequest {
    id: string;
}

export interface CreateRequest {
    customer: string;
    amount?: number;
    currency?: string;
    due_date?: Date;
    description?: string;
    line_items?: Array<object>;
    tax?: Array<object>;
    send_notification?: Array<object>;
    draft?: Array<object>;
    has_invoice?: Array<object>;
    invoice_number?: number;
    split_code?: string;
}

export interface FetchRequest {
    id: string;
}

export interface FinalizeRequest {
    id: string;
}

export interface ListRequest {
    perPage?: number;
    page?: number;
    customer?: string;
    status?: string;
    currency?: string;
    from?: Date;
    to?: Date;
}

export interface NotifyRequest {
    id: string;
}

export interface UpdateRequest {
    id: string;
    customer?: string;
    amount?: number;
    currency?: string;
    due_date?: Date;
    description?: string;
    line_items?: Array<object>;
    tax?: Array<object>;
    send_notification?: Array<object>;
    draft?: Array<object>;
    has_invoice?: Array<object>;
    invoice_number?: number;
    split_code?: string;
}

export interface VerifyRequest {
    id: string;
}

/**
 * 
 */
export class PaymentRequest extends BaseAPI {

    /**
     * Archive Payment Request
     */
    async archive(requestParameters: ArchiveRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling archive.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/archive/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Create Payment Request
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new RequiredError('customer','Required parameter customer was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.customer !== undefined) {
            formParams['customer'] = requestParameters.customer;
        }

        if (requestParameters.amount !== undefined) {
            formParams['amount'] = requestParameters.amount;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.due_date !== undefined) {
            formParams['due_date'] = requestParameters.due_date;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.line_items) {
            formParams['line_items'] = requestParameters.line_items;
        }

        if (requestParameters.tax) {
            formParams['tax'] = requestParameters.tax;
        }

        if (requestParameters.send_notification) {
            formParams['send_notification'] = requestParameters.send_notification;
        }

        if (requestParameters.draft) {
            formParams['draft'] = requestParameters.draft;
        }

        if (requestParameters.has_invoice) {
            formParams['has_invoice'] = requestParameters.has_invoice;
        }

        if (requestParameters.invoice_number !== undefined) {
            formParams['invoice_number'] = requestParameters.invoice_number;
        }

        if (requestParameters.split_code !== undefined) {
            formParams['split_code'] = requestParameters.split_code;
        }


        const response = await this.request({
            path: `/paymentrequest`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Payment Request
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Finalize Payment Request
     */
    async finalize(requestParameters: FinalizeRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling finalize.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/finalize/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Payment Request
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.customer !== undefined) {
            queryParameters['customer'] = requestParameters.customer;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/paymentrequest`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Send Notification
     */
    async notify(requestParameters: NotifyRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling notify.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/notify/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Payment Request Total
     */
    async totals(): Promise<Response> {
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/totals`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Update Payment Request
     */
    async update(requestParameters: UpdateRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling update.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.customer !== undefined) {
            formParams['customer'] = requestParameters.customer;
        }

        if (requestParameters.amount !== undefined) {
            formParams['amount'] = requestParameters.amount;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.due_date !== undefined) {
            formParams['due_date'] = requestParameters.due_date;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.line_items) {
            formParams['line_items'] = requestParameters.line_items;
        }

        if (requestParameters.tax) {
            formParams['tax'] = requestParameters.tax;
        }

        if (requestParameters.send_notification) {
            formParams['send_notification'] = requestParameters.send_notification;
        }

        if (requestParameters.draft) {
            formParams['draft'] = requestParameters.draft;
        }

        if (requestParameters.has_invoice) {
            formParams['has_invoice'] = requestParameters.has_invoice;
        }

        if (requestParameters.invoice_number !== undefined) {
            formParams['invoice_number'] = requestParameters.invoice_number;
        }

        if (requestParameters.split_code !== undefined) {
            formParams['split_code'] = requestParameters.split_code;
        }


        const response = await this.request({
            path: `/paymentrequest/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Verify Payment Request
     */
    async verify(requestParameters: VerifyRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling verify.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/paymentrequest/verify/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}