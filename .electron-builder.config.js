/*
 * @Author: szx
 * @Date: 2022-07-23 13:21:25
 * @LastEditTime: 2023-05-22 17:44:34
 * @Description:
 * @FilePath: \push-markdown\.electron-builder.config.js
 */
const packageConf = require('./package.json');

if (process.env.VITE_APP_VERSION === undefined) {
  // const now = new Date();
  // process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${now.getUTCMonth() + 1}.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`;
  process.env.VITE_APP_VERSION = packageConf.version;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.szx.life.push_markdown',
  releaseInfo: {
    releaseNotes: "修复批量上传有日期字段无法上传成功的问题",
    releaseDate: '2023-5-22'
  },
  productName: 'push-markdown',
  directories: {
    output: 'dist'
  },
  files: ['packages/**/dist/**'],
  extraResources: './public/**',
  extraMetadata: {
    version: process.env.VITE_APP_VERSION
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    installerIcon: './public/app.ico',
    createStartMenuShortcut: true,
    shortcutName: 'push-markdown'
  },
  win: {
    icon: './public/app.ico',
    target: [
      {
        target: 'nsis',
        arch: 'x64'
      }
    ]
  },
  mac: {
    icon: './public/app.ico',
    target: [
      {
        target: 'default'
      }
    ]
  },
  publish: [
    {
      provider: 'generic',
      url: 'http://download.szx.life/push-markdown'
    }
  ]
};

module.exports = config;
