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

import { HTTPValidationError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Stream<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Streams the audio file from MinIO with dynamic media_type.
   *
   * @name StreamTrackStreamTrackIdGet
   * @summary Stream Track
   * @request GET:/stream/{track_id}
   */
  streamTrackStreamTrackIdGet = (trackId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/stream/${trackId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
