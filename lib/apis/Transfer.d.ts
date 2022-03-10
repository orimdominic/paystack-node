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
import { BaseAPI } from '../runtime';
import { Response, TransferInitiate } from '../models';
export interface BulkRequest {
    source?: string;
    transfers?: Array<TransferInitiate>;
}
export interface DisableOtpFinalizeRequest {
    otp: string;
}
export interface DownloadRequest {
    perPage?: number;
    page?: number;
    status?: string;
    from?: Date;
    to?: Date;
}
export interface FetchRequest {
    code: string;
}
export interface FinalizeRequest {
    transfer_code: string;
    otp: string;
}
export interface InitiateRequest {
    source: string;
    amount: string;
    recipient: string;
    reason?: string;
    currency?: string;
    reference?: string;
}
export interface ListRequest {
    perPage?: number;
    page?: number;
    status?: string;
    from?: Date;
    to?: Date;
}
export interface ResendOtpRequest {
    transfer_code: string;
    reason: string;
}
export interface VerifyRequest {
    reference: string;
}
/**
 *
 */
export declare class Transfer extends BaseAPI {
    /**
     * Initiate Bulk Transfer
     */
    bulk(requestParameters: BulkRequest): Promise<Response>;
    /**
     * Disable OTP requirement for Transfers
     */
    disableOtp(): Promise<Response>;
    /**
     * Finalize Disabling of OTP requirement for Transfers
     */
    disableOtpFinalize(requestParameters: DisableOtpFinalizeRequest): Promise<Response>;
    /**
     * Export Transfers
     */
    download(requestParameters: DownloadRequest): Promise<Response>;
    /**
     * Enable OTP requirement for Transfers
     */
    enableOtp(): Promise<Response>;
    /**
     * Fetch Transfer
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * Finalize Transfer
     */
    finalize(requestParameters: FinalizeRequest): Promise<Response>;
    /**
     * Initiate Transfer
     */
    initiate(requestParameters: InitiateRequest): Promise<Response>;
    /**
     * List Transfers
     */
    list(requestParameters: ListRequest): Promise<Response>;
    /**
     * Resend OTP for Transfer
     */
    resendOtp(requestParameters: ResendOtpRequest): Promise<Response>;
    /**
     * Verify Transfer
     */
    verify(requestParameters: VerifyRequest): Promise<Response>;
}