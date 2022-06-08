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
export interface AddProductsRequest {
    id: string;
    product: Array<string>;
}
export interface CheckSlugAvailabilityRequest {
    slug: string;
}
export interface CreateRequest {
    name: string;
    description?: string;
    amount?: number;
    slug?: string;
    metadata?: string;
    redirect_url?: string;
    custom_fields?: Array<object>;
}
export interface FetchRequest {
    id: string;
}
export interface ListRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}
export interface UpdateRequest {
    id: string;
    name?: string;
    description?: string;
    amount?: number;
    active?: boolean;
}
/**
 *
 */
export declare class Page extends BaseAPI {
    /**
     * Add Products
     */
    addProducts(requestParameters: AddProductsRequest): Promise<Response>;
    /**
     * Check Slug Availability
     */
    checkSlugAvailability(requestParameters: CheckSlugAvailabilityRequest): Promise<Response>;
    /**
     * Create Page
     */
    create(requestParameters: CreateRequest): Promise<Response>;
    /**
     * Fetch Page
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * List Pages
     */
    list(requestParameters: ListRequest): Promise<Response>;
    /**
     * Update Page
     */
    update(requestParameters: UpdateRequest): Promise<Response>;
}
