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

export interface CreateRequest {
    customer: string;
    plan: string;
    authorization?: string;
    start_date?: Date;
}

export interface DisableRequest {
    code: string;
    token: string;
}

export interface EnableRequest {
    code: string;
    token: string;
}

export interface FetchRequest {
    code: string;
}

export interface ListRequest {
    perPage?: number;
    page?: number;
    plan?: string;
    customer?: string;
    from?: Date;
    to?: Date;
}

export interface ManageEmailRequest {
    code: string;
}

export interface ManageLinkRequest {
    code: string;
}

/**
 * 
 */
export class Subscription extends BaseAPI {

    /**
     * Create Subscription
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new RequiredError('customer','Required parameter customer was null or undefined when calling create.');
        }
        if (requestParameters.plan === null || requestParameters.plan === undefined) {
            throw new RequiredError('plan','Required parameter plan was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.customer !== undefined) {
            formParams['customer'] = requestParameters.customer;
        }

        if (requestParameters.plan !== undefined) {
            formParams['plan'] = requestParameters.plan;
        }

        if (requestParameters.authorization !== undefined) {
            formParams['authorization'] = requestParameters.authorization;
        }

        if (requestParameters.start_date !== undefined) {
            formParams['start_date'] = requestParameters.start_date;
        }


        const response = await this.request({
            path: `/subscription`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Disable Subscription
     */
    async disable(requestParameters: DisableRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling disable.');
        }
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new RequiredError('token','Required parameter token was null or undefined when calling disable.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.code !== undefined) {
            formParams['code'] = requestParameters.code;
        }

        if (requestParameters.token !== undefined) {
            formParams['token'] = requestParameters.token;
        }


        const response = await this.request({
            path: `/subscription/disable`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Enable Subscription
     */
    async enable(requestParameters: EnableRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling enable.');
        }
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new RequiredError('token','Required parameter token was null or undefined when calling enable.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.code !== undefined) {
            formParams['code'] = requestParameters.code;
        }

        if (requestParameters.token !== undefined) {
            formParams['token'] = requestParameters.token;
        }


        const response = await this.request({
            path: `/subscription/enable`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Subscription
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/subscription/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Subscriptions
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.plan !== undefined) {
            queryParameters['plan'] = requestParameters.plan;
        }

        if (requestParameters.customer !== undefined) {
            queryParameters['customer'] = requestParameters.customer;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/subscription`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Send Update Subscription Link
     */
    async manageEmail(requestParameters: ManageEmailRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling manageEmail.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/subscription/{code}/manage/email`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Generate Update Subscription Link
     */
    async manageLink(requestParameters: ManageLinkRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling manageLink.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/subscription/{code}/manage/link`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}