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
exports.mapValues = exports.exists = exports.RequiredError = exports.BaseAPI = void 0;
const https = require("https");
const BASE_PATH = "https://api.paystack.co".replace(/\/+$/, "");
/**
 * This is the base class for all generated API classes.
 */
class BaseAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    request(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Do checks on params
            const response = yield this.makeRequest(params);
            // if (response.status >= 200 && response.status < 300) {
            //     return response;
            // }
            // throw response;
            return response;
        });
    }
    makeRequest(request) {
        const query = this.parseQueryParams(request.query);
        const tempPath = query.length === 0 ? request.path : `${request.path}?${query}`;
        const options = {
            method: request.method,
            path: tempPath,
            headers: {
                "authorization": `Bearer ${this.apiKey}`,
                "paystack-version": `@paystack/node - 1.0.0-beta.3`
            }
        };
        return new Promise((resolve, reject) => {
            const req = https.request(BASE_PATH, options, (res) => {
                let data = [];
                res.on('data', (chunk) => {
                    data.push(chunk);
                });
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(Buffer.concat(data).toString()));
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            if (request.body && Object.keys(request.body).length > 0) {
                req.write(JSON.stringify(request.body));
            }
            req.end();
        });
    }
    parseQueryParams(queryParameters) {
        if (queryParameters && Object.keys(queryParameters).length === 0) {
            return "";
        }
        return new URLSearchParams(queryParameters).toString();
    }
}
exports.BaseAPI = BaseAPI;
;
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
function exists(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
exports.exists = exists;
function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: fn(data[key]) })), {});
}
exports.mapValues = mapValues;