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

#include <napi.h>

#include "./electronwallpaper.h"
#include "./output.h"

namespace bindings {

  using Napi::Uint8Array;
  using Napi::Env;
  using Napi::CallbackInfo;
  using Napi::Object;
  using Napi::String;
  using Napi::Function;
  using Napi::Function;
  using Napi::Function;
  using electronwallpaper::AttachWindow;
  using Output::CreateError;

  void AttachWindowExport(const CallbackInfo& info) {
    Env env = info.Env();

    if (info.Length() < 1) {
      CreateError(env, "attachWindow expects one argument").ThrowAsJavaScriptException();
    } else if (!info[0].IsObject()) {
      CreateError(env, "attachWindow expects first argument to be a window handle buffer").ThrowAsJavaScriptException();
    }

    unsigned char* windowHandleBuffer = info[0].As<Uint8Array>().Data();

    AttachWindow(windowHandleBuffer);
  }

  Object Initialize(Env env, Object exports) {
    exports.Set(String::New(env, "attachWindow"), Function::New(env, AttachWindowExport));
    return exports;
  }
}  // namespace bindings

using bindings::Initialize;
NODE_API_MODULE(module_name, Initialize)
