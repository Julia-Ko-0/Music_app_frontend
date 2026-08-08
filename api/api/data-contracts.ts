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
