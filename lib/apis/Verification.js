"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification = void 0;
const runtime_1 = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class Verification extends runtime_1.BaseAPI {
    /**
     * List States (AVS)
     */
    avs(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.type !== undefined) {
                queryParameters['type'] = requestParameters.type;
            }
            if (requestParameters.country !== undefined) {
                queryParameters['country'] = requestParameters.country;
            }
            if (requestParameters.currency !== undefined) {
                queryParameters['currency'] = requestParameters.currency;
            }
            const response = yield this.request({
                path: `/address_verification/states`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Match Service
     */
    bvnMatch(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account_number === null || requestParameters.account_number === undefined) {
                throw new runtime_1.RequiredError('account_number', 'Required parameter account_number was null or undefined when calling bvnMatch.');
            }
            if (requestParameters.bank_code === null || requestParameters.bank_code === undefined) {
                throw new runtime_1.RequiredError('bank_code', 'Required parameter bank_code was null or undefined when calling bvnMatch.');
            }
            if (requestParameters.bvn === null || requestParameters.bvn === undefined) {
                throw new runtime_1.RequiredError('bvn', 'Required parameter bvn was null or undefined when calling bvnMatch.');
            }
            const queryParameters = {};
            let formParams = {};
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
            const response = yield this.request({
                path: `/bvn/match`,
                method: 'POST',
                query: queryParameters,
                body: formParams,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Fetch Banks
     */
    fetchBanks(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
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
            const response = yield this.request({
                path: `/bank`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * List Countries
     */
    listCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const response = yield this.request({
                path: `/country`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Resolve Account Number
     */
    resolveAccountNumber(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.account_number !== undefined) {
                queryParameters['account_number'] = requestParameters.account_number;
            }
            if (requestParameters.bank_code !== undefined) {
                queryParameters['bank_code'] = requestParameters.bank_code;
            }
            const response = yield this.request({
                path: `/bank/resolve`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Resolve BVN
     */
    resolveBvn(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.bvn === null || requestParameters.bvn === undefined) {
                throw new runtime_1.RequiredError('bvn', 'Required parameter bvn was null or undefined when calling resolveBvn.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/bank/resolve_bvn/{bvn}`.replace(`{${"bvn"}}`, encodeURIComponent(String(requestParameters.bvn))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Resolve Card BIN
     */
    resolveCardBin(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.bin === null || requestParameters.bin === undefined) {
                throw new runtime_1.RequiredError('bin', 'Required parameter bin was null or undefined when calling resolveCardBin.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/decision/bin/{bin}`.replace(`{${"bin"}}`, encodeURIComponent(String(requestParameters.bin))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
}
exports.Verification = Verification;