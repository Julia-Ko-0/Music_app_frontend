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

import { HTTPValidationError, TrackResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Tracks<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a list of tracks with search and pagination.
   *
   * @name GetTracksTracksGet
   * @summary Get Tracks
   * @request GET:/tracks/
   */
  getTracksTracksGet = (
    query?: {
      /**
       * Skip
       * @default 0
       */
      skip?: number;
      /**
       * Limit
       * @default 50
       */
      limit?: number;
      /** Q */
      q?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<TrackResponse[], HTTPValidationError>({
      path: `/tracks/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
