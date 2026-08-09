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

import { TrackResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Получить список всех лайкнутых треков текущего пользователя.
   *
   * @name GetLikedTracksUsersMeLikesGet
   * @summary Get Liked Tracks
   * @request GET:/users/me/likes
   * @secure
   */
  getLikedTracksUsersMeLikesGet = (params: RequestParams = {}) =>
    this.request<TrackResponse[], any>({
      path: `/users/me/likes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
