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
export interface UpdatePaymentSessionTimeoutRequest {
    body?: object;
}
/**
 *
 */
export declare class Integration extends BaseAPI {
    /**
     * Fetch Payment Session Timeout
     */
    fetchPaymentSessionTimeout(): Promise<Response>;
    /**
     * Update Payment Session Timeout
     */
    updatePaymentSessionTimeout(requestParameters: UpdatePaymentSessionTimeoutRequest): Promise<Response>;
}
