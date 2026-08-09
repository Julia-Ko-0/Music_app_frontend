/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BodyLoginForAccessTokenLoginPost,
  HTTPValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Login<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Авторизация и получение токена
   *
   * @name LoginForAccessTokenLoginPost
   * @summary Login For Access Token
   * @request POST:/login
   */
  loginForAccessTokenLoginPost = (
    data: BodyLoginForAccessTokenLoginPost,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/login`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
