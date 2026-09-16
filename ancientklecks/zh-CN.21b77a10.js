// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fQ1wG":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6502977e21b77a10";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iRXNP":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"向左/右切换","toggle-show-tools":"显示/隐藏工具","scroll":"上滑/下滑","donate":"赞助","home":"主页","modal-new-tab":"在新页面打开","tab-layers":"图层","tab-edit":"编辑","tab-file":"文件","tool-brush":"画笔工具","tool-paint-bucket":"油漆桶","tool-gradient":"渐变","tool-shape":"形状","tool-text":"文本","tool-hand":"手型工具","tool-zoom":"缩放工具","tool-undo-redo":"撤销/重做","undo":"撤销","redo":"重做","brush-pen":"画笔","brush-blend":"水彩刷","brush-sketchy":"素描笔","brush-pixel":"像素化","brush-chemy":"异形图形","brush-smudge":"晕染","brush-size":"画笔大小","brush-blending":"水分量","brush-toggle-pressure":"笔压敏度","brush-pen-circle":"圆形","brush-pen-chalk":"粉笔","brush-pen-calligraphy":"斜角笔","brush-pen-square":"方形","brush-sketchy-scale":"网格长度","brush-pixel-dither":"像素抖动","brush-chemy-fill":"填充","brush-chemy-stroke":"线条","brush-chemy-mirror-x":"水平对称","brush-chemy-mirror-y":"垂直对称","brush-chemy-gradient":"渐变","brush-eraser-transparent-bg":"底层透明度","stabilizer":"抖动修正","stabilizer-title":"抖动修正线条","eyedropper":"颜色选取","secondary-color":"二级色","manual-color-input":"手动输入颜色","mci-hex":"16进制","mci-copy":"复制","modal-ok":"Ok","modal-cancel":"取消","modal-close":"关闭","layers-active-layer":"当前图层","layers-layer":"图层","layers-copy":"副本","layers-blending":"混合模式","layers-new":"新建图层","layers-remove":"删除图层","layers-duplicate":"复制图层","layers-merge":"向下合并","layers-rename":"重命名","layers-blend-normal":"正常","layers-blend-darken":"变暗","layers-blend-multiply":"正片叠底","layers-blend-color-burn":"颜色加深","layers-blend-lighten":"变亮","layers-blend-screen":"滤色","layers-blend-color-dodge":"颜色减淡","layers-blend-overlay":"叠加","layers-blend-soft-light":"柔光","layers-blend-hard-light":"强光","layers-blend-difference":"差值","layers-blend-exclusion":"排除","layers-blend-hue":"色相","layers-blend-saturation":"饱和度","layers-blend-color":"颜色","layers-blend-luminosity":"明度","layers-rename-title":"重命名图层","layers-rename-name":"重命名","layers-rename-clear":"清除","layers-rename-sketch":"草图","layers-rename-colors":"色彩","layers-rename-lines":"线条","layers-rename-foreground":"前景","layers-merge-modal-title":"向下合并","layers-merge-description":"选中层与底下一层合并。选择混合模式：","file-no-autosave":"不能自动保存，没有云存储","file-new":"新建","file-import":"打开","file-save":"保存","file-save-png":"保存为PNG","file-save-psd":"保存为PSD","file-save-layers":"保存图层","file-copy":"复制","file-copy-title":"复制到剪贴板","file-share":"分享","file-storage":"保存至浏览器","file-storage-thumb-title":"重新打开页面时恢复","file-storage-about":"关于保存至浏览器","file-storage-cant-access":"无法获取","file-storage-empty":"无内容","file-storage-store":"保存","file-storage-clear":"清除","file-storage-storing":"保存中","file-storage-overwrite":"覆盖","file-storage-min-ago":"{x}分钟前","file-storage-hours-ago":"{x}小时前","file-storage-days-ago":"{x}天前","file-storage-month-ago":">一个月前","file-storage-restored":"从浏览器内存中恢复","file-storage-stored":"保存至浏览器内存","file-storage-failed":"保存失败","file-storage-failed-1":"保存失败。可能是由于：","file-storage-failed-2":"磁盘空间不足","file-storage-failed-3":"隐身页面中禁用存储功能","file-storage-failed-4":"浏览器不支持","file-storage-failed-clear":"清除失败","file-upload":"上传","cleared-layer":"图层已清除","filled":"图层已填充","new-title":"新建项目","new-current":"当前大小","new-fit":"适应页面","new-oversize":"大画布","new-square":"正方形","new-landscape":"横向尺寸","new-portrait":"纵向尺寸","new-screen":"显示分辨率","new-video":"视频","new-din-paper":"纸张大小","new-px":"像素","new-ratio":"比例","upload-title":"上传到Imgur","upload-link-notice":"他人可以通过生成的图片链接查看你的作品。","upload-name":"标题","upload-title-untitled":"未命名","upload-caption":"描述","upload-tos":"服务条款","upload-tos-2":"imgur.com","upload-submit":"上传","upload-uploading":"上传中...","upload-success":"上传成功","upload-failed":"上传失败","upload-delete":"要从Imgur删除你的图片, 请访问:","cropcopy-title-copy":"复制到剪贴板","cropcopy-title-crop":"裁剪","cropcopy-click-hold":"点击右键或长按进行复制。","cropcopy-btn-copy":"至剪贴板","cropcopy-copied":"已复制","cropcopy-btn-crop":"应用裁剪","crop-drag-to-crop":"拖动裁剪","filter-crop-extend":"画布大小","filter-flip":"翻转","filter-perspective":"透视","filter-resize":"图像大小","filter-rotate":"旋转","filter-transform":"自由变换","filter-bright-contrast":"亮度/对比","filter-curves":"曲线","filter-hue-sat":"色相/饱和度","filter-invert":"反相","filter-tilt-shift":"移轴","filter-to-alpha":"转换至Alpha","filter-triangle-blur":"模糊","filter-unsharp-mask":"USM 锐化","filter-crop-title":"画布大小","filter-crop-description":"裁剪图片","filter-crop-left":"左","filter-crop-right":"右","filter-crop-top":"上","filter-crop-bottom":"下","filter-crop-rule-thirds":"三分法","filter-crop-fill":"填充","filter-flip-title":"翻转","filter-flip-description":"翻转图层或整个图像","filter-flip-horizontal":"水平","filter-flip-vertical":"垂直","filter-flip-image":"翻转图像","filter-flip-layer":"翻转图层","filter-perspective-title":"透视","filter-perspective-description":"变换已选图层","filter-resize-title":"图像大小","filter-resize-description":"更改图像大小","filter-rotate-title":"旋转","filter-rotate-description":"旋转图像","filter-transform-empty":"图层为空","filter-transform-title":"变换","filter-transform-description":"变换已选图层。按住Shift操作。","filter-transform-rotation":"旋转","filter-transform-flip":"翻转","filter-transform-center":"居中","filter-transform-constrain":"保持","filter-transform-snap":"对齐","filter-transform-snap-title":"旋转对齐/水平对齐","filter-bright-contrast-title":"亮度/对比","filter-bright-contrast-description":"更改已选图层的亮度和对比度。","filter-bright-contrast-brightness":"亮度","filter-bright-contrast-contrast":"对比","filter-curves-title":"曲线","filter-curves-description":"应用曲线到已选图层。","filter-curves-all":"全部","filter-hue-sat-title":"色相/饱和度","filter-hue-sat-description":"更改已选图层的色相和饱和度。","filter-hue-sat-hue":"色相","filter-hue-sat-saturation":"饱和度","filter-applied":"应用","filter-tilt-shift-title":"移轴","filter-tilt-shift-description":"应用移轴到已选图层。","filter-tilt-shift-blur":"模糊半径","filter-tilt-shift-gradient":"梯度半径","filter-to-alpha-title":"至Alpha","filter-to-alpha-description":"对已选图层生成Alpha通道：","filter-to-alpha-inverted-lum":"亮度翻转","filter-to-alpha-lum":"亮度","filter-to-alpha-replace":"替换RGB","filter-triangle-blur-title":"模糊","filter-triangle-blur-description":"应用模糊到已选图层。","filter-unsharp-mask-title":"USM锐化","filter-unsharp-mask-description":"根据附近像素的均值应用锐化到已选图层。","filter-unsharp-mask-strength":"强度","filter-grid":"网格","filter-grid-description":"给当前层添加网格线。","filter-noise":"噪音","filter-noise-description":"应用噪音到已选图层。","filter-noise-scale":"图案大小","filter-noise-alpha":"Alpha","import-opening":"打开文件...","import-title":"导入图像","import-too-large":"图像过大，将会进行缩小。","import-btn-as-layer":"作为图层","import-btn-as-image":"作为图像","import-as-layer-title":"导入图像作为新图层","import-as-layer-description":"调整导入图像的位置。","import-as-layer-limit-reached":"达到图层数量上限。图像将会应用到已有图层。","import-as-layer-fit":"适应","import-flatten":"拼合图像","import-unsupported-file":"不支持此类文件类型。查看帮助。","import-broken-file":"不能加载图像。文件可能受损。","import-psd-unsupported":"不支持该功能。PSD需要拼合。","import-psd-limited-support":"PSD支持受限。拼合功能将会更近原始图像。","import-psd-too-large":"图像超过{x} x {x}个像素。不能导入。","import-psd-size":"图像大小","hand-reset":"重置","hand-fit":"适应","bucket-tolerance":"容差","bucket-sample":"采样","bucket-sample-title":"从特定图层进行色彩采样","bucket-sample-all":"全部","bucket-sample-active":"当前","bucket-sample-above":"之前","bucket-grow":"填充扩展","bucket-grow-title":"扩展填充的区域（像素）","bucket-contiguous":"连续的","bucket-contiguous-title":"仅填充相连的区域","gradient-linear":"线性","gradient-linear-mirror":"对称","gradient-radial":"径向","shape-stroke":"线条","shape-fill":"填充","shape-rect":"方形","shape-ellipse":"圆形","shape-line":"线条","shape-line-width":"线条宽度","shape-outwards":"自中心向外","shape-fixed":"锁定 1:1","text-instruction":"点击画布添加文本","text-title":"添加文本","text-placeholder":"请输入（换行 Shift+Enter）","text-color":"色彩","text-size":"大小","text-left":"左对齐","text-center":"居中","text-right":"右对齐","text-italic":"斜体","text-bold":"加粗","save-reminder-title":"作品未保存","save-reminder-text":"图画已{a}分钟{b}未保存。立刻保存以避免进度丢失。","save-reminder-save-psd":"保存为PSD","save-reminder-psd-layers":"PSD可保留所有图层。","submit":"提交","submit-title":"提交作品","submit-prompt":"确认提交？","submit-submitting":"提交中","embed-init-loading":"加载app","embed-init-waiting":"图像上传中","unsaved":"未保存","help":"帮助","tab-settings":"设置","settings-language":"语言","settings-preferred-language":"首选语言","settings-language-reload":"刷新后更改语言","licenses":"许可","source-code":"源代码","auto":"自动","zoom-in":"放大","zoom-out":"缩小","radius":"半径","constrain-proportions":"保持纵横比","width":"宽度","height":"高度","opacity":"不透明度","red":"红","green":"绿","blue":"蓝","eraser":"橡皮擦","center":"居中","background":"背景","scaling-algorithm":"缩放算法","algorithm-smooth":"平滑","algorithm-pixelated":"像素化","preview":"预览","angle-snap":"对齐","angle-snap-title":"以45\xb0角度对齐","lock-alpha":"锁定","lock-alpha-title":"锁定图层透明度","reverse":"反向","compare-before":"之前","compare-after":"之后"}');

},{}]},["fQ1wG"], null, "parcelRequire94c2")

//# sourceMappingURL=zh-CN.21b77a10.js.map
