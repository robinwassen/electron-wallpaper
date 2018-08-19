/*
 * Copyright 2018 Robin Andersson <me@robinwassen.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module electron-wallpaper
 */

'use strict';

const os = require('os');
const bindings = require('bindings');

/**
 * @summary Attach a window as wallpaper
 * @function
 * @public
 *
 * @param {BrowserWindow} window - Window to attach as wallpaper
 *
 * @example
 * const electronWallpaper = require('electron-wallpaper');
 * const currentWindow = require('electron').remote.getCurrentWindow();
 *
 * electronWallpaper.attachWindow(currentWindow);
 */
exports.attachWindow = function attachWindow(window) {
  switch (os.platform()) {
    case 'win32':
      bindings('electron-wallpaper').attachWindow(window.getNativeWindowHandle());
      break;
    default:
      throw new Error('Platform not supported.');
  }
};
