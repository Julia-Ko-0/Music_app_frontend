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

import { HTTPValidationError, UserCreate } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Register<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Регистрация нового пользователя
   *
   * @name RegisterUserRegisterPost
   * @summary Register User
   * @request POST:/register/
   */
  registerUserRegisterPost = (data: UserCreate, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/register/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
