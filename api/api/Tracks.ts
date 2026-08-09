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
  BodyBulkUploadTracksTracksBulkUploadPost,
  HTTPValidationError,
  TrackResponse,
  TrackUpdate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Tracks<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Возвращение списка треков с поиском и пагинацией.
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
  /**
   * @description Удаление трека. Доступно владельцу или администратору.
   *
   * @name DeleteTrackTracksTrackIdDelete
   * @summary Delete Track
   * @request DELETE:/tracks/{track_id}
   * @secure
   */
  deleteTrackTracksTrackIdDelete = (
    trackId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/tracks/${trackId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Изменение названия или исполнителя трека. Доступно владельцу или администратору.
   *
   * @name UpdateTrackMetadataTracksTrackIdPut
   * @summary Update Track Metadata
   * @request PUT:/tracks/{track_id}
   * @secure
   */
  updateTrackMetadataTracksTrackIdPut = (
    trackId: number,
    data: TrackUpdate,
    params: RequestParams = {},
  ) =>
    this.request<TrackResponse, HTTPValidationError>({
      path: `/tracks/${trackId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Массовая загрузка файлов. Идеально для загрузки целого альбома.
   *
   * @name BulkUploadTracksTracksBulkUploadPost
   * @summary Bulk Upload Tracks
   * @request POST:/tracks/bulk-upload/
   * @secure
   */
  bulkUploadTracksTracksBulkUploadPost = (
    data: BodyBulkUploadTracksTracksBulkUploadPost,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/tracks/bulk-upload/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Добавить трек в понравившееся.
   *
   * @name LikeTrackTracksTrackIdLikePost
   * @summary Like Track
   * @request POST:/tracks/{track_id}/like
   * @secure
   */
  likeTrackTracksTrackIdLikePost = (
    trackId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/tracks/${trackId}/like`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Удалить трек из понравившегося.
   *
   * @name UnlikeTrackTracksTrackIdLikeDelete
   * @summary Unlike Track
   * @request DELETE:/tracks/{track_id}/like
   * @secure
   */
  unlikeTrackTracksTrackIdLikeDelete = (
    trackId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/tracks/${trackId}/like`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
