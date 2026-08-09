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

/** Body_bulk_upload_tracks_tracks_bulk_upload__post */
export interface BodyBulkUploadTracksTracksBulkUploadPost {
  /** Files */
  files: (File | Blob)[];
}

/** Body_login_for_access_token_login_post */
export interface BodyLoginForAccessTokenLoginPost {
  /** Grant Type */
  grant_type?: string | null;
  /** Username */
  username: string;
  /**
   * Password
   * @format password
   */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string | null;
  /**
   * Client Secret
   * @format password
   */
  client_secret?: string | null;
}

/** Body_upload_track_upload__post */
export interface BodyUploadTrackUploadPost {
  /** File */
  file: File | Blob;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** PlaylistCreate */
export interface PlaylistCreate {
  /** Title */
  title: string;
  /**
   * Is Public
   * @default false
   */
  is_public?: boolean | null;
}

/** PlaylistResponse */
export interface PlaylistResponse {
  /** Id */
  id: number;
  /** Title */
  title: string;
  /** Is Public */
  is_public: boolean;
  /** Owner Id */
  owner_id: number;
}

/** TrackResponse */
export interface TrackResponse {
  /** Id */
  id: number;
  /** Title */
  title: string;
  /** Artist */
  artist: string;
  /** Owner Id */
  owner_id: number;
}

/** TrackUpdate */
export interface TrackUpdate {
  /** Title */
  title?: string | null;
  /** Artist */
  artist?: string | null;
}

/** UserCreate */
export interface UserCreate {
  /**
   * Username
   * @minLength 3
   * @maxLength 50
   */
  username: string;
  /**
   * Password
   * @minLength 4
   * @maxLength 50
   */
  password: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
  /** Input */
  input?: any;
  /** Context */
  ctx?: object;
}
