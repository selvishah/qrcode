/*!
 *
 *  QR Code scanner.
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

importScripts('qrclient.js');
importScripts('jsqrcode/grid.js');
importScripts('jsqrcode/version.js');
importScripts('jsqrcode/detector.js');
importScripts("jsqrcode/formatinf.js");
importScripts("jsqrcode/errorlevel.js");
importScripts("jsqrcode/bitmat.js");
importScripts("jsqrcode/datablock.js");
importScripts("jsqrcode/bmparser.js");
importScripts("jsqrcode/datamask.js");
importScripts("jsqrcode/rsdecoder.js");
importScripts("jsqrcode/gf256poly.js");
importScripts("jsqrcode/gf256.js");
importScripts("jsqrcode/decoder.js");
importScripts("jsqrcode/qrcode.js");
importScripts("jsqrcode/findpat.js");
importScripts("jsqrcode/alignpat.js");
importScripts("jsqrcode/databr.js");

this.onmessage = function(e) {

  var imageData = e.data;

  try {
      var width = imageData.width;
      var height = imageData.height;
      var result = qrcode.decode(width, height, imageData);
      postMessage(result);
  }
  catch(e) {
    // consume the error.
    postMessage(undefined);
  }

};
