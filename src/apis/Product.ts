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


import { BaseAPI, RequiredError } from '../runtime';
import {
    Response,
    ResponseFromJSON
} from '../models';

export interface DeleteRequest {
    id: string;
}

export interface CreateRequest {
    name: string;
    description: string;
    price: number;
    currency: string;
    limited?: boolean;
    quantity?: number;
}

export interface FetchRequest {
    id: string;
}

export interface ListRequest {
    perPage?: number;
    page?: number;
    active?: boolean;
    from?: Date;
    to?: Date;
}

export interface UpdateRequest {
    id: string;
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    limited?: boolean;
    quantity?: number;
}

/**
 * 
 */
export class Product extends BaseAPI {

    /**
     * Delete Product
     */
    async _delete(requestParameters: DeleteRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/product/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Create Product
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling create.');
        }
        if (requestParameters.description === null || requestParameters.description === undefined) {
            throw new RequiredError('description','Required parameter description was null or undefined when calling create.');
        }
        if (requestParameters.price === null || requestParameters.price === undefined) {
            throw new RequiredError('price','Required parameter price was null or undefined when calling create.');
        }
        if (requestParameters.currency === null || requestParameters.currency === undefined) {
            throw new RequiredError('currency','Required parameter currency was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.price !== undefined) {
            formParams['price'] = requestParameters.price;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.limited !== undefined) {
            formParams['limited'] = requestParameters.limited;
        }

        if (requestParameters.quantity !== undefined) {
            formParams['quantity'] = requestParameters.quantity;
        }


        const response = await this.request({
            path: `/product`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Product
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/product/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Products
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/product`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Update product
     */
    async update(requestParameters: UpdateRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling update.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.price !== undefined) {
            formParams['price'] = requestParameters.price;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.limited !== undefined) {
            formParams['limited'] = requestParameters.limited;
        }

        if (requestParameters.quantity !== undefined) {
            formParams['quantity'] = requestParameters.quantity;
        }


        const response = await this.request({
            path: `/product/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

}
