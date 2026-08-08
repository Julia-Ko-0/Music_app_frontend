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

import { HttpClient, RequestParams } from "./http-client";

export class SyncStorage<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Scans MinIO for files not present in the DB and adds them.
   *
   * @name SyncMinioToDbSyncStoragePost
   * @summary Sync Minio To Db
   * @request POST:/sync-storage/
   */
  syncMinioToDbSyncStoragePost = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/sync-storage/`,
      method: "POST",
      format: "json",
      ...params,
    });
}
