/*
 * @Author: szx
 * @Date: 2021-07-07 16:45:28
 * @LastEditTime: 2022-08-01 21:40:42
 * @Description: user settings
 * @FilePath: \push-markdown\packages\renderer\src\logic\config.ts
 */
'use strict';

import filenamify from 'filenamify';
import { Base64 } from 'js-base64';
import { store } from '#preload';

export interface SiteConfig {
  type: string;
  name: string;
  url: string;
  username: string;
  password: string;
}
export function clear() {
  store.getStoreSettingsClear();
}

export function newSite(): SiteConfig {
  return {
    type: 'MetaWeblog',
    name: 'Sample Site Config',
    url: 'http://www.example.com/xmlrpc.php',
    username: 'username',
    password: ''
  };
}

export function saveNotCheck(notcheck: boolean) {
  return store.storeSettingsSet('notcheck', notcheck);
}

export function getNotCheck(defaultValue = true) {
  return store.storeSettingsGet('notcheck', defaultValue);
}

export function saveAbstractNumber(abstractNum: any) {
  return store.storeSettingsSet('abstractnumber', abstractNum);
}

export function getAbstractNumber(): number {
  return store.storeSettingsGet('abstractnumber', 120);
}

export function getArticleID(url: string, siteUrl: string, username: string) {
  // const storeName = ['cache', 'post', filenamifyUrl(siteUrl), filenamifyUrl(username)].join('-').toString();
  // return store.storeGet(storeName, url);
}

export function getTheme(): boolean {
  return store.getTheme();
}
