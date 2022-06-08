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
import { BaseAPI } from '../runtime';
import { Response } from '../models';
export interface FetchRequest {
    perPage?: number;
    page?: number;
}
export interface TransactionRequest {
    id: string;
}
/**
 *
 */
export declare class Settlement extends BaseAPI {
    /**
     * Fetch Settlements
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * Settlement Transactions
     */
    transaction(requestParameters: TransactionRequest): Promise<Response>;
}
