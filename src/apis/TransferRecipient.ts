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
    TransferRecipientCreate,
    ResponseFromJSON
} from '../models';

export interface BulkRequest {
    batch: Array<TransferRecipientCreate>;
}

export interface CreateRequest {
    type: string;
    name: string;
    account_number: string;
    bank_code: string;
    description?: string;
    currency?: string;
    authorization_code?: string;
    metadata?: string;
}

export interface FetchRequest {
    code: string;
}

export interface ListRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}

export interface TransferrecipientCodeDeleteRequest {
    code: string;
}

export interface TransferrecipientCodePutRequest {
    code: string;
    name?: string;
    email?: string;
}

/**
 * 
 */
export class TransferRecipient extends BaseAPI {

    /**
     * Bulk Create Transfer Recipient
     */
    async bulk(requestParameters: BulkRequest): Promise<Response> {
        if (requestParameters.batch === null || requestParameters.batch === undefined) {
            throw new RequiredError('batch','Required parameter batch was null or undefined when calling bulk.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.batch) {
            formParams['batch'] = requestParameters.batch;
        }


        const response = await this.request({
            path: `/transferrecipient/bulk`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Create Transfer Recipient
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling create.');
        }
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling create.');
        }
        if (requestParameters.account_number === null || requestParameters.account_number === undefined) {
            throw new RequiredError('account_number','Required parameter account_number was null or undefined when calling create.');
        }
        if (requestParameters.bank_code === null || requestParameters.bank_code === undefined) {
            throw new RequiredError('bank_code','Required parameter bank_code was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.type !== undefined) {
            formParams['type'] = requestParameters.type;
        }

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.account_number !== undefined) {
            formParams['account_number'] = requestParameters.account_number;
        }

        if (requestParameters.bank_code !== undefined) {
            formParams['bank_code'] = requestParameters.bank_code;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.authorization_code !== undefined) {
            formParams['authorization_code'] = requestParameters.authorization_code;
        }

        if (requestParameters.metadata !== undefined) {
            formParams['metadata'] = requestParameters.metadata;
        }


        const response = await this.request({
            path: `/transferrecipient`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Transfer recipient
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/transferrecipient/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Transfer Recipients
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/transferrecipient`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Delete Transfer Recipient
     */
    async transferrecipientCodeDelete(requestParameters: TransferrecipientCodeDeleteRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling transferrecipientCodeDelete.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/transferrecipient/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Update Transfer recipient
     */
    async transferrecipientCodePut(requestParameters: TransferrecipientCodePutRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling transferrecipientCodePut.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.email !== undefined) {
            formParams['email'] = requestParameters.email;
        }


        const response = await this.request({
            path: `/transferrecipient/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

}