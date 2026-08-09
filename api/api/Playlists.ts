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
  HTTPValidationError,
  PlaylistCreate,
  PlaylistResponse,
  TrackResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Playlists<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Создать новый плейлист.
   *
   * @name CreatePlaylistPlaylistsPost
   * @summary Create Playlist
   * @request POST:/playlists/
   * @secure
   */
  createPlaylistPlaylistsPost = (
    data: PlaylistCreate,
    params: RequestParams = {},
  ) =>
    this.request<PlaylistResponse, HTTPValidationError>({
      path: `/playlists/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Добавить трек в свой плейлист.
   *
   * @name AddTrackToPlaylistPlaylistsPlaylistIdTracksTrackIdPost
   * @summary Add Track To Playlist
   * @request POST:/playlists/{playlist_id}/tracks/{track_id}
   * @secure
   */
  addTrackToPlaylistPlaylistsPlaylistIdTracksTrackIdPost = (
    playlistId: number,
    trackId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/playlists/${playlistId}/tracks/${trackId}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Удалить трек из своего плейлиста.
   *
   * @name RemoveTrackFromPlaylistPlaylistsPlaylistIdTracksTrackIdDelete
   * @summary Remove Track From Playlist
   * @request DELETE:/playlists/{playlist_id}/tracks/{track_id}
   * @secure
   */
  removeTrackFromPlaylistPlaylistsPlaylistIdTracksTrackIdDelete = (
    playlistId: number,
    trackId: number,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/playlists/${playlistId}/tracks/${trackId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Получить все треки из плейлиста. Доступно владельцу, либо если плейлист публичный.
   *
   * @name GetPlaylistTracksPlaylistsPlaylistIdTracksGet
   * @summary Get Playlist Tracks
   * @request GET:/playlists/{playlist_id}/tracks
   * @secure
   */
  getPlaylistTracksPlaylistsPlaylistIdTracksGet = (
    playlistId: number,
    params: RequestParams = {},
  ) =>
    this.request<TrackResponse[], HTTPValidationError>({
      path: `/playlists/${playlistId}/tracks`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
