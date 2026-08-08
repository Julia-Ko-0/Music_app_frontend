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
  BodyUploadTrackUploadPost,
  HTTPValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Upload<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Uploads an audio file to MinIO, reads tags, and creates a database record.
   *
   * @name UploadTrackUploadPost
   * @summary Upload Track
   * @request POST:/upload/
   * @secure
   */
  uploadTrackUploadPost = (
    data: BodyUploadTrackUploadPost,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/upload/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
