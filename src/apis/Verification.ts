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

export interface AvsRequest {
    type?: string;
    country?: string;
    currency?: string;
}

export interface BvnMatchRequest {
    account_number: string;
    bank_code: number;
    bvn: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
}

export interface FetchBanksRequest {
    country?: string;
    pay_with_bank_transfer?: boolean;
    use_cursor?: boolean;
    perPage?: number;
    next?: string;
    previous?: string;
    gateway?: string;
}

export interface ResolveAccountNumberRequest {
    account_number?: number;
    bank_code?: number;
}

export interface ResolveBvnRequest {
    bvn: string;
}

export interface ResolveCardBinRequest {
    bin: string;
}

/**
 * 
 */
export class Verification extends BaseAPI {

    /**
     * List States (AVS)
     */
    async avs(requestParameters: AvsRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }


        const response = await this.request({
            path: `/address_verification/states`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Match Service
     */
    async bvnMatch(requestParameters: BvnMatchRequest): Promise<Response> {
        if (requestParameters.account_number === null || requestParameters.account_number === undefined) {
            throw new RequiredError('account_number','Required parameter account_number was null or undefined when calling bvnMatch.');
        }
        if (requestParameters.bank_code === null || requestParameters.bank_code === undefined) {
            throw new RequiredError('bank_code','Required parameter bank_code was null or undefined when calling bvnMatch.');
        }
        if (requestParameters.bvn === null || requestParameters.bvn === undefined) {
            throw new RequiredError('bvn','Required parameter bvn was null or undefined when calling bvnMatch.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.account_number !== undefined) {
            formParams['account_number'] = requestParameters.account_number;
        }

        if (requestParameters.bank_code !== undefined) {
            formParams['bank_code'] = requestParameters.bank_code;
        }

        if (requestParameters.bvn !== undefined) {
            formParams['bvn'] = requestParameters.bvn;
        }

        if (requestParameters.first_name !== undefined) {
            formParams['first_name'] = requestParameters.first_name;
        }

        if (requestParameters.middle_name !== undefined) {
            formParams['middle_name'] = requestParameters.middle_name;
        }

        if (requestParameters.last_name !== undefined) {
            formParams['last_name'] = requestParameters.last_name;
        }


        const response = await this.request({
            path: `/bvn/match`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Banks
     */
    async fetchBanks(requestParameters: FetchBanksRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.pay_with_bank_transfer !== undefined) {
            queryParameters['pay_with_bank_transfer'] = requestParameters.pay_with_bank_transfer;
        }

        if (requestParameters.use_cursor !== undefined) {
            queryParameters['use_cursor'] = requestParameters.use_cursor;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.next !== undefined) {
            queryParameters['next'] = requestParameters.next;
        }

        if (requestParameters.previous !== undefined) {
            queryParameters['previous'] = requestParameters.previous;
        }

        if (requestParameters.gateway !== undefined) {
            queryParameters['gateway'] = requestParameters.gateway;
        }


        const response = await this.request({
            path: `/bank`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Countries
     */
    async listCountries(): Promise<Response> {
        const queryParameters: any = {};


        const response = await this.request({
            path: `/country`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Resolve Account Number
     */
    async resolveAccountNumber(requestParameters: ResolveAccountNumberRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.account_number !== undefined) {
            queryParameters['account_number'] = requestParameters.account_number;
        }

        if (requestParameters.bank_code !== undefined) {
            queryParameters['bank_code'] = requestParameters.bank_code;
        }


        const response = await this.request({
            path: `/bank/resolve`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Resolve BVN
     */
    async resolveBvn(requestParameters: ResolveBvnRequest): Promise<Response> {
        if (requestParameters.bvn === null || requestParameters.bvn === undefined) {
            throw new RequiredError('bvn','Required parameter bvn was null or undefined when calling resolveBvn.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/bank/resolve_bvn/{bvn}`.replace(`{${"bvn"}}`, encodeURIComponent(String(requestParameters.bvn))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Resolve Card BIN
     */
    async resolveCardBin(requestParameters: ResolveCardBinRequest): Promise<Response> {
        if (requestParameters.bin === null || requestParameters.bin === undefined) {
            throw new RequiredError('bin','Required parameter bin was null or undefined when calling resolveCardBin.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/decision/bin/{bin}`.replace(`{${"bin"}}`, encodeURIComponent(String(requestParameters.bin))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}