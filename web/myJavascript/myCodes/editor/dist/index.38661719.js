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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"7BQdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs"); // default : paragraph, list
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
// Install bundler for web => parcel : npm i parcel --save 
// Create a block-style web editor
const editor = new _editorjsDefault.default({
    holderId: 'editorjs'
});
let saveBtn = document.querySelector("button");
saveBtn.addEventListener("click", function() {
    editor.save().then((result)=>{
        console.log(result);
        console.log(result.blocks[0].data.text);
    }).catch((err)=>{
        console.log(err);
    });
});

},{"@editorjs/editorjs":"bGC2L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bGC2L":[function(require,module,exports) {
/*! For license information please see editor.js.LICENSE.txt */ !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EditorJS = e() : t.EditorJS = e();
}(window, function() {
    return (function(t1) {
        var e1 = {
        };
        function n(o) {
            if (e1[o]) return e1[o].exports;
            var r = e1[o] = {
                i: o,
                l: !1,
                exports: {
                }
            };
            return t1[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = t1, n.c = e1, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                return t[e];
            }).bind(null, r));
            return o;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 186);
    })([
        function(t2, e2, n1) {
            var o = n1(10), r = n1(17), i = n1(27), a = n1(21), s = n1(31), l = function(t, e, n) {
                var c, u, f, d, p = t & l.F, h = t & l.G, v = t & l.S, g = t & l.P, y = t & l.B, b = h ? o : v ? o[e] || (o[e] = {
                }) : (o[e] || {
                }).prototype, m = h ? r : r[e] || (r[e] = {
                }), k = m.prototype || (m.prototype = {
                });
                for(c in h && (n = e), n)f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && i(m, c, d), g && k[c] != f && (k[c] = f);
            };
            o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t2.exports = l;
        },
        function(t3, e) {
            t3.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            };
        },
        function(t4, e3) {
            t4.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function(t5, e4) {
            function n2(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                }
            }
            t5.exports = function(t, e, o) {
                return e && n2(t.prototype, e), o && n2(t, o), t;
            };
        },
        function(t6, e5) {
            function n(e) {
                return t6.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                }, n(e);
            }
            t6.exports = n;
        },
        function(t7, e6, n) {
            var o = n(110);
            t7.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && o(t, e);
            };
        },
        function(t8, e7, n) {
            var o = n(80), r = n(149);
            t8.exports = function(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e;
            };
        },
        function(t9, e8, n3) {
            var o1, r1, i1;
            "undefined" != typeof globalThis || "undefined", r1 = [
                e8,
                n3(23),
                n3(370),
                n3(24),
                n3(398),
                n3(15)
            ], void 0 === (i1 = "function" == typeof (o1 = function(t10, e9, o2, r2, i2, a1) {
                var s1, l1 = n3(1);
                function c1(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
                    if ("console" in window && window.console[n]) {
                        var i = [
                            "info",
                            "log",
                            "warn",
                            "error"
                        ].includes(n), a = [];
                        switch(c1.logLevel){
                            case s1.ERROR:
                                if ("error" !== n) return;
                                break;
                            case s1.WARN:
                                if (![
                                    "error",
                                    "warn"
                                ].includes(n)) return;
                                break;
                            case s1.INFO:
                                if (!i || t) return;
                        }
                        o && a.push(o);
                        var l = "Editor.js ".concat("2.22.2"), u = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                        t && (i ? (a.unshift(u, r), e = "%c".concat(l, "%c ").concat(e)) : e = "( ".concat(l, " )").concat(e));
                        try {
                            if (i) {
                                if (o) {
                                    var f;
                                    (f = console)[n].apply(f, [
                                        "".concat(e, " %o")
                                    ].concat(a));
                                } else {
                                    var d;
                                    (d = console)[n].apply(d, [
                                        e
                                    ].concat(a));
                                }
                            } else console[n](e);
                        } catch (t) {
                        }
                    }
                }
                Object.defineProperty(t10, "__esModule", {
                    value: !0
                }), t10.setLogLevel = function(t) {
                    c1.logLevel = t;
                }, t10.typeOf = d1, t10.isFunction = p, t10.isObject = h, t10.isString = function(t) {
                    return "string" === d1(t);
                }, t10.isBoolean = function(t) {
                    return "boolean" === d1(t);
                }, t10.isNumber = function(t) {
                    return "number" === d1(t);
                }, t10.isUndefined = v, t10.isClass = function(t) {
                    return p(t) && /^\s*class\s+/.test(t.toString());
                }, t10.isEmpty = function(t) {
                    return !t || 0 === Object.keys(t).length && t.constructor === Object;
                }, t10.isPromise = function(t) {
                    return Promise.resolve(t) === t;
                }, t10.isPrintableKey = function(t) {
                    return t > 47 && t < 58 || 32 === t || 13 === t || 229 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
                }, t10.sequence = function(t) {
                    return g.apply(this, arguments);
                }, t10.array = function(t) {
                    return Array.prototype.slice.call(t);
                }, t10.delay = function(t, e) {
                    return function() {
                        var n = this, o = arguments;
                        window.setTimeout(function() {
                            return t.apply(n, o);
                        }, e);
                    };
                }, t10.getFileExtension = function(t) {
                    return t.name.split(".").pop();
                }, t10.isValidMimeType = function(t) {
                    return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
                }, t10.debounce = function(t, e, n) {
                    var o, r = this;
                    return function() {
                        for(var i = arguments.length, a = new Array(i), s = 0; s < i; s++)a[s] = arguments[s];
                        var l = r, c = function() {
                            o = null, n || t.apply(l, a);
                        }, u = n && !o;
                        window.clearTimeout(o), o = window.setTimeout(c, e), u && t.apply(l, a);
                    };
                }, t10.copyTextToClipboard = function(t) {
                    var e = a1.default.make("div", "codex-editor-clipboard", {
                        innerHTML: t
                    });
                    document.body.appendChild(e);
                    var n = window.getSelection(), o = document.createRange();
                    o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
                }, t10.getUserOS = y, t10.capitalize = function(t) {
                    return t[0].toUpperCase() + t.slice(1);
                }, t10.deepMerge = function t(e) {
                    for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i];
                    if (!r.length) return e;
                    var a = r.shift();
                    if (h(e) && h(a)) for(var s in a)h(a[s]) ? (e[s] || Object.assign(e, (0, o2.default)({
                    }, s, {
                    })), t(e[s], a[s])) : Object.assign(e, (0, o2.default)({
                    }, s, a[s]));
                    return t.apply(void 0, [
                        e
                    ].concat(r));
                }, t10.beautifyShortcut = function(t) {
                    var e = y();
                    return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
                }, t10.getValidUrl = function(t) {
                    try {
                        return new URL(t).href;
                    } catch (t11) {
                    }
                    return "//" === t.substring(0, 2) ? window.location.protocol + t : window.location.origin + t;
                }, t10.generateBlockId = function() {
                    return (0, i2.nanoid)(10);
                }, t10.openTab = function(t) {
                    window.open(t, "_blank");
                }, t10.generateId = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "".concat(t).concat(Math.floor(100000000 * Math.random()).toString(16));
                }, t10.deprecationAssert = function(t, e, n) {
                    var o = "«".concat(e, "» is deprecated and will be removed in the next major release. Please use the «").concat(n, "» instead.");
                    t && f1(o, "warn");
                }, t10.cacheable = function(t12, e10, n4) {
                    var o = n4.value ? "value" : "get", r = n4[o], i = "#".concat(e10, "Cache");
                    if (n4[o] = function() {
                        if (void 0 === this[i]) {
                            for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
                            this[i] = r.apply.apply(r, [
                                this
                            ].concat(e));
                        }
                        return this[i];
                    }, "get" === o && n4.set) {
                        var a = n4.set;
                        n4.set = function(e) {
                            delete t12[i], a.apply(this, e);
                        };
                    }
                    return n4;
                }, t10.isTouchSupported = t10.logLabeled = t10.log = t10.mouseButtons = t10.keyCodes = t10.LogLevels = void 0, e9 = l1(e9), o2 = l1(o2), r2 = l1(r2), a1 = l1(a1), t10.LogLevels = s1, (function(t) {
                    t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR";
                })(s1 || (t10.LogLevels = s1 = {
                })), t10.keyCodes = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    DOWN: 40,
                    RIGHT: 39,
                    DELETE: 46,
                    META: 91
                }, t10.mouseButtons = {
                    LEFT: 0,
                    WHEEL: 1,
                    RIGHT: 2,
                    BACKWARD: 3,
                    FORWARD: 4
                }, c1.logLevel = s1.VERBOSE;
                var u1 = c1.bind(window, !1);
                t10.log = u1;
                var f1 = c1.bind(window, !0);
                function d1(t) {
                    return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                }
                function p(t) {
                    return "function" === d1(t);
                }
                function h(t) {
                    return "object" === d1(t);
                }
                function v(t) {
                    return "undefined" === d1(t);
                }
                function g() {
                    return (g = (0, r2.default)(e9.default.mark(function t13(n5) {
                        var o3, i, a, s, l = arguments;
                        return e9.default.wrap(function(t14) {
                            for(;;)switch(t14.prev = t14.next){
                                case 0:
                                    return s = function() {
                                        return (s = (0, r2.default)(e9.default.mark(function t15(n, o, r) {
                                            return e9.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, n.function(n.data);
                                                    case 3:
                                                        return t.next = 5, o(v(n.data) ? {
                                                        } : n.data);
                                                    case 5:
                                                        t.next = 10;
                                                        break;
                                                    case 7:
                                                        t.prev = 7, t.t0 = t.catch(0), r(v(n.data) ? {
                                                        } : n.data);
                                                    case 10:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t15, null, [
                                                [
                                                    0,
                                                    7
                                                ]
                                            ]);
                                        }))).apply(this, arguments);
                                    }, a = function(t, e, n) {
                                        return s.apply(this, arguments);
                                    }, o3 = l.length > 1 && void 0 !== l[1] ? l[1] : function() {
                                    }, i = l.length > 2 && void 0 !== l[2] ? l[2] : function() {
                                    }, t14.abrupt("return", n5.reduce(function() {
                                        var t16 = (0, r2.default)(e9.default.mark(function t17(n, r) {
                                            return e9.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, n;
                                                    case 2:
                                                        return t.abrupt("return", a(r, o3, i));
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t17);
                                        }));
                                        return function(e, n) {
                                            return t16.apply(this, arguments);
                                        };
                                    }(), Promise.resolve()));
                                case 5:
                                case "end":
                                    return t14.stop();
                            }
                        }, t13);
                    }))).apply(this, arguments);
                }
                function y() {
                    var t18 = {
                        win: !1,
                        mac: !1,
                        x11: !1,
                        linux: !1
                    }, e = Object.keys(t18).find(function(t) {
                        return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
                    });
                    return e ? (t18[e] = !0, t18) : t18;
                }
                t10.logLabeled = f1;
                var b = "ontouchstart" in document.documentElement;
                t10.isTouchSupported = b;
            }) ? o1.apply(e8, r1) : o1) || (t9.exports = i1);
        },
        function(t19, e11, n6) {
            var o = n6(80);
            function r() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap;
                return r = function() {
                    return t;
                }, t;
            }
            t19.exports = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== o(t) && "function" != typeof t) return {
                    default: t
                };
                var e = r();
                if (e && e.has(t)) return e.get(t);
                var n = {
                }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var a in t)if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
                }
                return n.default = t, e && e.set(t, n), n;
            };
        },
        function(t20, e12, n7) {
            var o4, r3, i3;
            "undefined" != typeof globalThis || "undefined", r3 = [
                e12,
                n7(2),
                n7(3),
                n7(375)
            ], void 0 === (i3 = "function" == typeof (o4 = function(o5, r4, i4, a2) {
                var s = n7(1);
                function l(t21) {
                    if ("undefined" == typeof Symbol || null == t21[Symbol.iterator]) {
                        if (Array.isArray(t21) || (t21 = (function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return c(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                            }
                        })(t21))) {
                            var e13 = 0, n8 = function() {
                            };
                            return {
                                s: n8,
                                n: function() {
                                    return e13 >= t21.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t21[e13++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n8
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t21[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function c(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                Object.defineProperty(o5, "__esModule", {
                    value: !0
                }), o5.default = void 0, r4 = s(r4), i4 = s(i4), a2 = s(a2);
                var u = function() {
                    function t22(e14) {
                        var n = this, o6 = e14.config, i = e14.eventsDispatcher;
                        if ((0, r4.default)(this, t22), this.nodes = {
                        }, this.listeners = new a2.default, this.readOnlyMutableListeners = {
                            on: function(t, e, o) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                n.mutableListenerIds.push(n.listeners.on(t, e, o, r));
                            },
                            clearAll: function() {
                                var t, e = l(n.mutableListenerIds);
                                try {
                                    for(e.s(); !(t = e.n()).done;){
                                        var o = t.value;
                                        n.listeners.offById(o);
                                    }
                                } catch (t23) {
                                    e.e(t23);
                                } finally{
                                    e.f();
                                }
                                n.mutableListenerIds = [];
                            }
                        }, this.mutableListenerIds = [], (this instanceof t22 ? this.constructor : void 0) === t22) throw new TypeError("Constructors for abstract class Module are not allowed.");
                        this.config = o6, this.eventsDispatcher = i;
                    }
                    return (0, i4.default)(t22, [
                        {
                            key: "removeAllNodes",
                            value: function() {
                                for(var t in this.nodes){
                                    var e = this.nodes[t];
                                    e instanceof HTMLElement && e.remove();
                                }
                            }
                        },
                        {
                            key: "state",
                            set: function(t) {
                                this.Editor = t;
                            }
                        },
                        {
                            key: "isRtl",
                            get: function() {
                                return "rtl" === this.config.i18n.direction;
                            }
                        }
                    ]), t22;
                }();
                o5.default = u, u.displayName = "Module", t20.exports = e12.default;
            }) ? o4.apply(e12, r3) : o4) || (t20.exports = i3);
        },
        function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n);
        },
        function(t24, e) {
            t24.exports = function(t) {
                try {
                    return !!t();
                } catch (t25) {
                    return !0;
                }
            };
        },
        function(t26, e, n) {
            var o = n(13);
            t26.exports = function(t) {
                if (!o(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function(t27, e) {
            t27.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function(t28, e, n) {
            var o = n(68)("wks"), r = n(44), i = n(10).Symbol, a = "function" == typeof i;
            (t28.exports = function(t) {
                return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t));
            }).store = o;
        },
        function(t29, e15, n9) {
            var o7, r5, i5;
            "undefined" != typeof globalThis || "undefined", r5 = [
                e15,
                n9(42),
                n9(2),
                n9(3),
                n9(7)
            ], void 0 === (i5 = "function" == typeof (o7 = function(o8, r, i6, a3, s) {
                var l = n9(8), c = n9(1);
                Object.defineProperty(o8, "__esModule", {
                    value: !0
                }), o8.default = void 0, r = c(r), i6 = c(i6), a3 = c(a3), s = l(s);
                var u = function() {
                    function t30() {
                        (0, i6.default)(this, t30);
                    }
                    return (0, a3.default)(t30, null, [
                        {
                            key: "isSingleTag",
                            value: function(t) {
                                return t.tagName && [
                                    "AREA",
                                    "BASE",
                                    "BR",
                                    "COL",
                                    "COMMAND",
                                    "EMBED",
                                    "HR",
                                    "IMG",
                                    "INPUT",
                                    "KEYGEN",
                                    "LINK",
                                    "META",
                                    "PARAM",
                                    "SOURCE",
                                    "TRACK",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "isLineBreakTag",
                            value: function(t) {
                                return t && t.tagName && [
                                    "BR",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "make",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                }, i = document.createElement(t);
                                for(var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r.default)(n)) : n && i.classList.add(n), o)Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
                                return i;
                            }
                        },
                        {
                            key: "text",
                            value: function(t) {
                                return document.createTextNode(t);
                            }
                        },
                        {
                            key: "svg",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
                            }
                        },
                        {
                            key: "append",
                            value: function(t, e16) {
                                Array.isArray(e16) ? e16.forEach(function(e) {
                                    return t.appendChild(e);
                                }) : t.appendChild(e16);
                            }
                        },
                        {
                            key: "prepend",
                            value: function(t, e17) {
                                Array.isArray(e17) ? (e17 = e17.reverse()).forEach(function(e) {
                                    return t.prepend(e);
                                }) : t.prepend(e17);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = document.createElement("div"), o = t.parentNode;
                                o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
                            }
                        },
                        {
                            key: "find",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelector(e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return document.getElementById(t);
                            }
                        },
                        {
                            key: "findAll",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelectorAll(e);
                            }
                        },
                        {
                            key: "findAllInputs",
                            value: function(e18) {
                                return s.array(e18.querySelectorAll(t30.allInputsSelector)).reduce(function(e, n) {
                                    return t30.isNativeInput(n) || t30.containsOnlyInlineElements(n) ? [].concat((0, r.default)(e), [
                                        n
                                    ]) : [].concat((0, r.default)(e), (0, r.default)(t30.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getDeepestNode",
                            value: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = n ? "lastChild" : "firstChild", r = n ? "previousSibling" : "nextSibling";
                                if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                                    var i = e[o];
                                    if (t30.isSingleTag(i) && !t30.isNativeInput(i) && !t30.isLineBreakTag(i)) {
                                        if (i[r]) i = i[r];
                                        else {
                                            if (!i.parentNode[r]) return i.parentNode;
                                            i = i.parentNode[r];
                                        }
                                    }
                                    return this.getDeepestNode(i, n);
                                }
                                return e;
                            }
                        },
                        {
                            key: "isElement",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isFragment",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                            }
                        },
                        {
                            key: "isContentEditable",
                            value: function(t) {
                                return "true" === t.contentEditable;
                            }
                        },
                        {
                            key: "isNativeInput",
                            value: function(t) {
                                return !(!t || !t.tagName) && [
                                    "INPUT",
                                    "TEXTAREA"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "canSetCaret",
                            value: function(e) {
                                var n = !0;
                                if (t30.isNativeInput(e)) switch(e.type){
                                    case "file":
                                    case "checkbox":
                                    case "radio":
                                    case "hidden":
                                    case "submit":
                                    case "button":
                                    case "image":
                                    case "reset":
                                        n = !1;
                                }
                                else n = t30.isContentEditable(e);
                                return n;
                            }
                        },
                        {
                            key: "isNodeEmpty",
                            value: function(t) {
                                return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length;
                            }
                        },
                        {
                            key: "isLeaf",
                            value: function(t) {
                                return !!t && 0 === t.childNodes.length;
                            }
                        },
                        {
                            key: "isEmpty",
                            value: function(t) {
                                t.normalize();
                                for(var e = [
                                    t
                                ]; e.length > 0;)if (t = e.shift()) {
                                    if (this.isLeaf(t) && !this.isNodeEmpty(t)) return !1;
                                    t.childNodes && e.push.apply(e, (0, r.default)(Array.from(t.childNodes)));
                                }
                                return !0;
                            }
                        },
                        {
                            key: "isHTMLString",
                            value: function(e) {
                                var n = t30.make("div");
                                return n.innerHTML = e, n.childElementCount > 0;
                            }
                        },
                        {
                            key: "getContentLength",
                            value: function(e) {
                                return t30.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
                            }
                        },
                        {
                            key: "containsOnlyInlineElements",
                            value: function(e19) {
                                var n10;
                                return s.isString(e19) ? (n10 = document.createElement("div")).innerHTML = e19 : n10 = e19, Array.from(n10.children).every(function e(n) {
                                    return !t30.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
                                });
                            }
                        },
                        {
                            key: "getDeepestBlockElements",
                            value: function(e20) {
                                return t30.containsOnlyInlineElements(e20) ? [
                                    e20
                                ] : Array.from(e20.children).reduce(function(e, n) {
                                    return [].concat((0, r.default)(e), (0, r.default)(t30.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getHolder",
                            value: function(t) {
                                return s.isString(t) ? document.getElementById(t) : t;
                            }
                        },
                        {
                            key: "isExtensionNode",
                            value: function(t) {
                                return t && [
                                    "GRAMMARLY-EXTENSION"
                                ].includes(t.nodeName);
                            }
                        },
                        {
                            key: "isAnchor",
                            value: function(t) {
                                return "a" === t.tagName.toLowerCase();
                            }
                        },
                        {
                            key: "allInputsSelector",
                            get: function() {
                                return "[contenteditable=true], textarea, input:not([type]), " + [
                                    "text",
                                    "password",
                                    "email",
                                    "number",
                                    "search",
                                    "tel",
                                    "url"
                                ].map(function(t) {
                                    return 'input[type="'.concat(t, '"]');
                                }).join(", ");
                            }
                        },
                        {
                            key: "blockElements",
                            get: function() {
                                return [
                                    "address",
                                    "article",
                                    "aside",
                                    "blockquote",
                                    "canvas",
                                    "div",
                                    "dl",
                                    "dt",
                                    "fieldset",
                                    "figcaption",
                                    "figure",
                                    "footer",
                                    "form",
                                    "h1",
                                    "h2",
                                    "h3",
                                    "h4",
                                    "h5",
                                    "h6",
                                    "header",
                                    "hgroup",
                                    "hr",
                                    "li",
                                    "main",
                                    "nav",
                                    "noscript",
                                    "ol",
                                    "output",
                                    "p",
                                    "pre",
                                    "ruby",
                                    "section",
                                    "table",
                                    "tr",
                                    "tfoot",
                                    "ul",
                                    "video"
                                ];
                            }
                        }
                    ]), t30;
                }();
                o8.default = u, u.displayName = "Dom", t29.exports = e15.default;
            }) ? o7.apply(e15, r5) : o7) || (t29.exports = i5);
        },
        function(t31, e, n) {
            var o = n(33), r = Math.min;
            t31.exports = function(t) {
                return t > 0 ? r(o(t), 9007199254740991) : 0;
            };
        },
        function(t, e) {
            var n = t.exports = {
                version: "2.6.11"
            };
            "number" == typeof __e && (__e = n);
        },
        function(t, e, n) {
            t.exports = !n(11)(function() {
                return 7 != Object.defineProperty({
                }, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t32, e21, n11) {
            var o = n11(12), r = n11(113), i = n11(40), a = Object.defineProperty;
            e21.f = n11(18) ? Object.defineProperty : function(t, e, n) {
                if (o(t), e = i(e, !0), o(n), r) try {
                    return a(t, e, n);
                } catch (t33) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
            };
        },
        function(t34, e, n) {
            var o = n(38);
            t34.exports = function(t) {
                return Object(o(t));
            };
        },
        function(t35, e22, n12) {
            var o = n12(10), r = n12(27), i = n12(26), a = n12(44)("src"), s2 = n12(191), l = ("" + s2).split("toString");
            n12(17).inspectSource = function(t) {
                return s2.call(t);
            }, (t35.exports = function(t, e, n, s) {
                var c = "function" == typeof n;
                c && (i(n, "name") || r(n, "name", e)), t[e] !== n && (c && (i(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)));
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s2.call(this);
            });
        },
        function(t36, e23, n13) {
            var o9 = n13(0), r6 = n13(11), i = n13(38), a = /"/g, s3 = function(t, e, n, o) {
                var r = String(i(t)), s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">";
            };
            t36.exports = function(t, e24) {
                var n = {
                };
                n[t] = e24(s3), o9(o9.P + o9.F * r6(function() {
                    var e = ""[t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3;
                }), "String", n);
            };
        },
        function(t, e, n) {
            t.exports = n(144);
        },
        function(t37, e25) {
            function n14(t, e, n, o, r, i, a) {
                try {
                    var s = t[i](a), l = s.value;
                } catch (t38) {
                    return void n(t38);
                }
                s.done ? e(l) : Promise.resolve(l).then(o, r);
            }
            t37.exports = function(t39) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(r, i) {
                        var a = t39.apply(e, o);
                        function s(t) {
                            n14(a, r, i, s, l, "next", t);
                        }
                        function l(t) {
                            n14(a, r, i, s, l, "throw", t);
                        }
                        s(void 0);
                    });
                };
            };
        },
        function(t40, e26, n15) {
            var o10, r7, i7;
            "undefined" != typeof globalThis || "undefined", r7 = [
                e26,
                n15(2),
                n15(3),
                n15(7),
                n15(15)
            ], void 0 === (i7 = "function" == typeof (o10 = function(o11, r8, i8, a, s) {
                var l = n15(8), c = n15(1);
                Object.defineProperty(o11, "__esModule", {
                    value: !0
                }), o11.default = void 0, r8 = c(r8), i8 = c(i8), a = l(a), s = c(s);
                var u = function() {
                    function t41() {
                        (0, r8.default)(this, t41), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
                    }
                    return (0, i8.default)(t41, [
                        {
                            key: "removeFakeBackground",
                            value: function() {
                                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
                            }
                        },
                        {
                            key: "setFakeBackground",
                            value: function() {
                                document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                this.savedSelectionRange = t41.range;
                            }
                        },
                        {
                            key: "restore",
                            value: function() {
                                if (this.savedSelectionRange) {
                                    var t = window.getSelection();
                                    t.removeAllRanges(), t.addRange(this.savedSelectionRange);
                                }
                            }
                        },
                        {
                            key: "clearSaved",
                            value: function() {
                                this.savedSelectionRange = null;
                            }
                        },
                        {
                            key: "collapseToEnd",
                            value: function() {
                                var t = window.getSelection(), e = document.createRange();
                                e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
                            }
                        },
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o12 = window.getSelection(), r = null;
                                if (!o12 || !o12.anchorNode || !o12.focusNode) return null;
                                var i9 = [
                                    o12.anchorNode,
                                    o12.focusNode
                                ];
                                return i9.forEach(function(o) {
                                    for(var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));)o = o.parentNode, i--;
                                }), r;
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                var e = window.getSelection();
                                e.removeAllRanges();
                                var n = document.createRange();
                                n.selectNodeContents(t), e.addRange(n);
                            }
                        }
                    ], [
                        {
                            key: "isSelectionAtEditor",
                            value: function(e) {
                                if (!e) return !1;
                                var n = e.anchorNode || e.focusNode;
                                n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                var o = null;
                                return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isRangeAtEditor",
                            value: function(e) {
                                if (e) {
                                    var n = e.startContainer;
                                    n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                    var o = null;
                                    return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                                }
                            }
                        },
                        {
                            key: "getRangeFromSelection",
                            value: function(t) {
                                return t && t.rangeCount ? t.getRangeAt(0) : null;
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return window.getSelection();
                            }
                        },
                        {
                            key: "setCursor",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = document.createRange(), o = window.getSelection();
                                if (s.default.isNativeInput(t)) {
                                    if (!s.default.canSetCaret(t)) return;
                                    return t.focus(), t.selectionStart = t.selectionEnd = e, t.getBoundingClientRect();
                                }
                                return n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n), n.getBoundingClientRect();
                            }
                        },
                        {
                            key: "addFakeCursor",
                            value: function(e) {
                                var n = t41.range, o = s.default.make("span", "codex-editor__fake-cursor");
                                o.dataset.mutationFree = "true", !n || e && !e.contains(n.startContainer) || (n.collapse(), n.insertNode(o));
                            }
                        },
                        {
                            key: "removeFakeCursor",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, e = s.default.find(t, ".codex-editor__fake-cursor");
                                e && e.remove();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorZone: "codex-editor__redactor"
                                };
                            }
                        },
                        {
                            key: "anchorNode",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorNode : null;
                            }
                        },
                        {
                            key: "anchorElement",
                            get: function() {
                                var t = window.getSelection();
                                if (!t) return null;
                                var e = t.anchorNode;
                                return e ? s.default.isElement(e) ? e : e.parentElement : null;
                            }
                        },
                        {
                            key: "anchorOffset",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorOffset : null;
                            }
                        },
                        {
                            key: "isCollapsed",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.isCollapsed : null;
                            }
                        },
                        {
                            key: "isAtEditor",
                            get: function() {
                                return this.isSelectionAtEditor(t41.get());
                            }
                        },
                        {
                            key: "isSelectionExists",
                            get: function() {
                                return !!t41.get().anchorNode;
                            }
                        },
                        {
                            key: "range",
                            get: function() {
                                return this.getRangeFromSelection(this.get());
                            }
                        },
                        {
                            key: "rect",
                            get: function() {
                                var t, e = document.selection, n = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                };
                                if (e && "Control" !== e.type) return t = e.createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
                                if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
                                if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                                if (0 === e.rangeCount) return n;
                                if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                                    var o = document.createElement("span");
                                    if (o.getBoundingClientRect) {
                                        o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                                        var r = o.parentNode;
                                        r.removeChild(o), r.normalize();
                                    }
                                }
                                return n;
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return window.getSelection ? window.getSelection().toString() : "";
                            }
                        }
                    ]), t41;
                }();
                o11.default = u, u.displayName = "SelectionUtils", t40.exports = e26.default;
            }) ? o10.apply(e26, r7) : o10) || (t40.exports = i7);
        },
        function(t42, e27) {
            var n = {
            }.hasOwnProperty;
            t42.exports = function(t, e) {
                return n.call(t, e);
            };
        },
        function(t43, e28, n16) {
            var o = n16(19), r = n16(43);
            t43.exports = n16(18) ? function(t, e, n) {
                return o.f(t, e, r(1, n));
            } : function(t, e, n) {
                return t[e] = n, t;
            };
        },
        function(t44, e, n) {
            var o = n(61), r = n(38);
            t44.exports = function(t) {
                return o(r(t));
            };
        },
        function(t45, e29, n) {
            "use strict";
            var o = n(11);
            t45.exports = function(t, e) {
                return !!t && o(function() {
                    e ? t.call(null, function() {
                    }, 1) : t.call(null);
                });
            };
        },
        function(t46, e30, n) {
            var o = n(360), r = n(361), i = n(145), a = n(362);
            t46.exports = function(t, e) {
                return o(t) || r(t, e) || i(t, e) || a();
            };
        },
        function(t47, e31, n17) {
            var o13 = n17(32);
            t47.exports = function(t, e, n18) {
                if (o13(t), void 0 === e) return t;
                switch(n18){
                    case 1:
                        return function(n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function(n, o) {
                            return t.call(e, n, o);
                        };
                    case 3:
                        return function(n, o, r) {
                            return t.call(e, n, o, r);
                        };
                }
                return function() {
                    return t.apply(e, arguments);
                };
            };
        },
        function(t48, e) {
            t48.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function(t49, e) {
            var n = Math.ceil, o = Math.floor;
            t49.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
            };
        },
        function(t50, e32, n) {
            var o = n(62), r = n(43), i = n(28), a = n(40), s = n(26), l = n(113), c = Object.getOwnPropertyDescriptor;
            e32.f = n(18) ? c : function(t, e) {
                if (t = i(t), e = a(e, !0), l) try {
                    return c(t, e);
                } catch (t51) {
                }
                if (s(t, e)) return r(!o.f.call(t, e), t[e]);
            };
        },
        function(t, e33, n19) {
            var o = n19(0), r = n19(17), i = n19(11);
            t.exports = function(t, e) {
                var n = (r.Object || {
                })[t] || Object[t], a = {
                };
                a[t] = e(n), o(o.S + o.F * i(function() {
                    n(1);
                }), "Object", a);
            };
        },
        function(t52, e34, n20) {
            var o = n20(31), r = n20(61), i = n20(20), a = n20(16), s4 = n20(129);
            t52.exports = function(t, e35) {
                var n = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, f = 6 == t, d = 5 == t || f, p = e35 || s4;
                return function(e, s, h) {
                    for(var v, g, y = i(e), b = r(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++)if ((d || x in b) && (g = m(v = b[x], x, y), t)) {
                        if (n) w[x] = g;
                        else if (g) switch(t){
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return x;
                            case 2:
                                w.push(v);
                        }
                        else if (u) return !1;
                    }
                    return f ? -1 : c || u ? u : w;
                };
            };
        },
        function(t53, e) {
            var n = {
            }.toString;
            t53.exports = function(t) {
                return n.call(t).slice(8, -1);
            };
        },
        function(t54, e) {
            t54.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function(t55, e36, n21) {
            "use strict";
            if (n21(18)) {
                var o14 = n21(45), r9 = n21(10), i10 = n21(11), a4 = n21(0), s5 = n21(79), l2 = n21(109), c2 = n21(31), u2 = n21(57), f2 = n21(43), d2 = n21(27), p1 = n21(58), h1 = n21(33), v = n21(16), g = n21(140), y1 = n21(47), b1 = n21(40), m1 = n21(26), k = n21(63), x = n21(13), w1 = n21(20), S1 = n21(101), T = n21(48), E = n21(50), B = n21(49).f, C1 = n21(103), _1 = n21(44), O1 = n21(14), I1 = n21(36), M = n21(69), R = n21(64), A = n21(105), N = n21(55), P = n21(72), L = n21(56), D = n21(104), j = n21(131), F = n21(19), U = n21(34), H = F.f, z = U.f, W = r9.RangeError, Y = r9.TypeError, V = r9.Uint8Array, X = Array.prototype, G = l2.ArrayBuffer, K = l2.DataView, Z = I1(0), q = I1(2), J = I1(3), $ = I1(4), Q = I1(5), tt = I1(6), et = M(!0), nt = M(!1), ot = A.values, rt = A.keys, it = A.entries, at = X.lastIndexOf, st = X.reduce, lt = X.reduceRight, ct = X.join, ut = X.sort, ft = X.slice, dt = X.toString, pt = X.toLocaleString, ht = O1("iterator"), vt = O1("toStringTag"), gt = _1("typed_constructor"), yt = _1("def_constructor"), bt = s5.CONSTR, mt = s5.TYPED, kt = s5.VIEW, xt = I1(1, function(t, e) {
                    return Bt(R(t, t[yt]), e);
                }), wt = i10(function() {
                    return 1 === new V(new Uint16Array([
                        1
                    ]).buffer)[0];
                }), St = !!V && !!V.prototype.set && i10(function() {
                    new V(1).set({
                    });
                }), Tt = function(t, e) {
                    var n = h1(t);
                    if (n < 0 || n % e) throw W("Wrong offset!");
                    return n;
                }, Et = function(t) {
                    if (x(t) && mt in t) return t;
                    throw Y(t + " is not a typed array!");
                }, Bt = function(t, e) {
                    if (!x(t) || !(gt in t)) throw Y("It is not a typed array constructor!");
                    return new t(e);
                }, Ct = function(t, e) {
                    return _t(R(t, t[yt]), e);
                }, _t = function(t, e) {
                    for(var n = 0, o = e.length, r = Bt(t, o); o > n;)r[n] = e[n++];
                    return r;
                }, Ot = function(t, e, n) {
                    H(t, e, {
                        get: function() {
                            return this._d[n];
                        }
                    });
                }, It = function(t) {
                    var e, n, o, r, i, a, s = w1(t), l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, d = C1(s);
                    if (null != d && !S1(d)) {
                        for(a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++)o.push(i.value);
                        s = o;
                    }
                    for(f && l > 2 && (u = c2(u, arguments[2], 2)), e = 0, n = v(s.length), r = Bt(this, n); n > e; e++)r[e] = f ? u(s[e], e) : s[e];
                    return r;
                }, Mt = function() {
                    for(var t = 0, e = arguments.length, n = Bt(this, e); e > t;)n[t] = arguments[t++];
                    return n;
                }, Rt = !!V && i10(function() {
                    pt.call(new V(1));
                }), At = function() {
                    return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments);
                }, Nt = {
                    copyWithin: function(t, e) {
                        return j.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    every: function(t) {
                        return $(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    fill: function(t) {
                        return D.apply(Et(this), arguments);
                    },
                    filter: function(t) {
                        return Ct(this, q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    find: function(t) {
                        return Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    findIndex: function(t) {
                        return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    forEach: function(t) {
                        Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    indexOf: function(t) {
                        return nt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    includes: function(t) {
                        return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    join: function(t) {
                        return ct.apply(Et(this), arguments);
                    },
                    lastIndexOf: function(t) {
                        return at.apply(Et(this), arguments);
                    },
                    map: function(t) {
                        return xt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    reduce: function(t) {
                        return st.apply(Et(this), arguments);
                    },
                    reduceRight: function(t) {
                        return lt.apply(Et(this), arguments);
                    },
                    reverse: function() {
                        for(var t, e = Et(this).length, n = Math.floor(e / 2), o = 0; o < n;)t = this[o], this[o++] = this[--e], this[e] = t;
                        return this;
                    },
                    some: function(t) {
                        return J(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    sort: function(t) {
                        return ut.call(Et(this), t);
                    },
                    subarray: function(t, e) {
                        var n = Et(this), o = n.length, r = y1(t, o);
                        return new (R(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y1(e, o)) - r));
                    }
                }, Pt = function(t, e) {
                    return Ct(this, ft.call(Et(this), t, e));
                }, Lt = function(t) {
                    Et(this);
                    var e = Tt(arguments[1], 1), n = this.length, o = w1(t), r = v(o.length), i = 0;
                    if (r + e > n) throw W("Wrong length!");
                    for(; i < r;)this[e + i] = o[i++];
                }, Dt = {
                    entries: function() {
                        return it.call(Et(this));
                    },
                    keys: function() {
                        return rt.call(Et(this));
                    },
                    values: function() {
                        return ot.call(Et(this));
                    }
                }, jt = function(t, e) {
                    return x(t) && t[mt] && "symbol" != typeof e && e in t && String(+e) == String(e);
                }, Ft = function(t, e) {
                    return jt(t, e = b1(e, !0)) ? f2(2, t[e]) : z(t, e);
                }, Ut = function(t, e, n) {
                    return !(jt(t, e = b1(e, !0)) && x(n) && m1(n, "value")) || m1(n, "get") || m1(n, "set") || n.configurable || m1(n, "writable") && !n.writable || m1(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t);
                };
                bt || (U.f = Ft, F.f = Ut), a4(a4.S + a4.F * !bt, "Object", {
                    getOwnPropertyDescriptor: Ft,
                    defineProperty: Ut
                }), i10(function() {
                    dt.call({
                    });
                }) && (dt = pt = function() {
                    return ct.call(this);
                });
                var Ht = p1({
                }, Nt);
                p1(Ht, Dt), d2(Ht, ht, Dt.values), p1(Ht, {
                    slice: Pt,
                    set: Lt,
                    constructor: function() {
                    },
                    toString: dt,
                    toLocaleString: At
                }), Ot(Ht, "buffer", "b"), Ot(Ht, "byteOffset", "o"), Ot(Ht, "byteLength", "l"), Ot(Ht, "length", "e"), H(Ht, vt, {
                    get: function() {
                        return this[mt];
                    }
                }), t55.exports = function(t56, e, n22, l3) {
                    var c = t56 + ((l3 = !!l3) ? "Clamped" : "") + "Array", f3 = "get" + t56, p2 = "set" + t56, h = r9[c], y2 = h || {
                    }, b = h && E(h), m = !h || !s5.ABV, w = {
                    }, S = h && h.prototype, C = function(t57, n23) {
                        H(t57, n23, {
                            get: function() {
                                return (function(t, n) {
                                    var o = t._d;
                                    return o.v[f3](n * e + o.o, wt);
                                })(this, n23);
                            },
                            set: function(t58) {
                                return (function(t, n, o) {
                                    var r = t._d;
                                    l3 && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p2](n * e + r.o, o, wt);
                                })(this, n23, t58);
                            },
                            enumerable: !0
                        });
                    };
                    m ? (h = n22(function(t, n, o, r) {
                        u2(t, h, c, "_d");
                        var i, a, s, l, f = 0, p = 0;
                        if (x(n)) {
                            if (!(n instanceof G || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : It.call(h, n);
                            i = n, p = Tt(o, e);
                            var y = n.byteLength;
                            if (void 0 === r) {
                                if (y % e) throw W("Wrong length!");
                                if ((a = y - p) < 0) throw W("Wrong length!");
                            } else if ((a = v(r) * e) + p > y) throw W("Wrong length!");
                            s = a / e;
                        } else s = g(n), i = new G(a = s * e);
                        for(d2(t, "_d", {
                            b: i,
                            o: p,
                            l: a,
                            e: s,
                            v: new K(i)
                        }); f < s;)C(t, f++);
                    }), S = h.prototype = T(Ht), d2(S, "constructor", h)) : i10(function() {
                        h(1);
                    }) && i10(function() {
                        new h(-1);
                    }) && P(function(t) {
                        new h, new h(null), new h(1.5), new h(t);
                    }, !0) || (h = n22(function(t, n, o, r) {
                        var i;
                        return u2(t, h, c), x(n) ? n instanceof G || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y2(n, Tt(o, e), r) : void 0 !== o ? new y2(n, Tt(o, e)) : new y2(n) : mt in n ? _t(h, n) : It.call(h, n) : new y2(g(n));
                    }), Z(b !== Function.prototype ? B(y2).concat(B(b)) : B(y2), function(t) {
                        t in h || d2(h, t, y2[t]);
                    }), h.prototype = S, o14 || (S.constructor = h));
                    var _ = S[ht], O = !!_ && ("values" == _.name || null == _.name), I = Dt.values;
                    d2(h, gt, !0), d2(S, mt, c), d2(S, kt, !0), d2(S, yt, h), (l3 ? new h(1)[vt] == c : vt in S) || H(S, vt, {
                        get: function() {
                            return c;
                        }
                    }), w[c] = h, a4(a4.G + a4.W + a4.F * (h != y2), w), a4(a4.S, c, {
                        BYTES_PER_ELEMENT: e
                    }), a4(a4.S + a4.F * i10(function() {
                        y2.of.call(h, 1);
                    }), c, {
                        from: It,
                        of: Mt
                    }), "BYTES_PER_ELEMENT" in S || d2(S, "BYTES_PER_ELEMENT", e), a4(a4.P, c, Nt), L(c), a4(a4.P + a4.F * St, c, {
                        set: Lt
                    }), a4(a4.P + a4.F * !O, c, Dt), o14 || S.toString == dt || (S.toString = dt), a4(a4.P + a4.F * i10(function() {
                        new h(1).slice();
                    }), c, {
                        slice: Pt
                    }), a4(a4.P + a4.F * (i10(function() {
                        return [
                            1,
                            2
                        ].toLocaleString() != new h([
                            1,
                            2
                        ]).toLocaleString();
                    }) || !i10(function() {
                        S.toLocaleString.call([
                            1,
                            2
                        ]);
                    })), c, {
                        toLocaleString: At
                    }), N[c] = O ? _ : I, o14 || O || d2(S, ht, I);
                };
            } else t55.exports = function() {
            };
        },
        function(t59, e37, n24) {
            var o = n24(13);
            t59.exports = function(t, e) {
                if (!o(t)) return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
                if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(t60, e38, n) {
            var o = n(44)("meta"), r = n(13), i = n(26), a = n(19).f, s = 0, l = Object.isExtensible || function() {
                return !0;
            }, c = !n(11)(function() {
                return l(Object.preventExtensions({
                }));
            }), u = function(t) {
                a(t, o, {
                    value: {
                        i: "O" + ++s,
                        w: {
                        }
                    }
                });
            }, f = t60.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, o)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t);
                    }
                    return t[o].i;
                },
                getWeak: function(t, e) {
                    if (!i(t, o)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t);
                    }
                    return t[o].w;
                },
                onFreeze: function(t) {
                    return c && f.NEED && l(t) && !i(t, o) && u(t), t;
                }
            };
        },
        function(t61, e, n) {
            var o = n(367), r = n(368), i = n(145), a = n(369);
            t61.exports = function(t) {
                return o(t) || r(t) || i(t) || a();
            };
        },
        function(t62, e39) {
            t62.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                };
            };
        },
        function(t63, e) {
            var n = 0, o = Math.random();
            t63.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
            };
        },
        function(t, e) {
            t.exports = !1;
        },
        function(t64, e, n) {
            var o = n(115), r = n(88);
            t64.exports = Object.keys || function(t) {
                return o(t, r);
            };
        },
        function(t65, e40, n) {
            var o = n(33), r = Math.max, i = Math.min;
            t65.exports = function(t, e) {
                return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e);
            };
        },
        function(t66, e41, n25) {
            var o15 = n25(12), r = n25(116), i = n25(88), a = n25(87)("IE_PROTO"), s = function() {
            }, l = function() {
                var t, e = n25(85)("iframe"), o = i.length;
                for(e.style.display = "none", n25(89).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; o--;)delete l.prototype[i[o]];
                return l();
            };
            t66.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (s.prototype = o15(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e);
            };
        },
        function(t67, e, n) {
            var o = n(115), r = n(88).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return o(t, r);
            };
        },
        function(t68, e, n) {
            var o = n(26), r = n(20), i = n(87)("IE_PROTO"), a = Object.prototype;
            t68.exports = Object.getPrototypeOf || function(t) {
                return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
            };
        },
        function(t, e, n) {
            var o = n(14)("unscopables"), r = Array.prototype;
            null == r[o] && n(27)(r, o, {
            }), t.exports = function(t) {
                r[o][t] = !0;
            };
        },
        function(t69, e42, n) {
            var o = n(13);
            t69.exports = function(t, e) {
                if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                return t;
            };
        },
        function(t70, e43, n26) {
            var o = n26(19).f, r = n26(26), i = n26(14)("toStringTag");
            t70.exports = function(t, e, n) {
                t && !r(t = n ? t : t.prototype, i) && o(t, i, {
                    configurable: !0,
                    value: e
                });
            };
        },
        function(t71, e44, n27) {
            var o = n27(0), r10 = n27(38), i = n27(11), a = n27(91), s6 = "[" + a + "]", l4 = RegExp("^" + s6 + s6 + "*"), c = RegExp(s6 + s6 + "*$"), u = function(t, e, n) {
                var r = {
                }, s = i(function() {
                    return !!a[t]() || "​" != "​"[t]();
                }), l = r[t] = s ? e(f) : a[t];
                n && (r[n] = l), o(o.P + o.F * s, "String", r);
            }, f = u.trim = function(t, e) {
                return t = String(r10(t)), 1 & e && (t = t.replace(l4, "")), 2 & e && (t = t.replace(c, "")), t;
            };
            t71.exports = u;
        },
        function(t, e) {
            t.exports = {
            };
        },
        function(t, e45, n) {
            "use strict";
            var o = n(10), r = n(19), i = n(18), a = n(14)("species");
            t.exports = function(t) {
                var e = o[t];
                i && e && !e[a] && r.f(e, a, {
                    configurable: !0,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        function(t72, e46) {
            t72.exports = function(t, e, n, o) {
                if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
                return t;
            };
        },
        function(t73, e47, n28) {
            var o = n28(21);
            t73.exports = function(t, e, n) {
                for(var r in e)o(t, r, e[r], n);
                return t;
            };
        },
        function(t74, e48, n29) {
            var o16, r11, i11;
            "undefined" != typeof globalThis || "undefined", r11 = [
                e48,
                n29(2),
                n29(3),
                n29(147)
            ], void 0 === (i11 = "function" == typeof (o16 = function(o17, r, i, a) {
                var s = n29(1);
                Object.defineProperty(o17, "__esModule", {
                    value: !0
                }), o17.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t75() {
                        (0, r.default)(this, t75);
                    }
                    return (0, i.default)(t75, null, [
                        {
                            key: "ui",
                            value: function(e, n) {
                                return t75._t(e, n);
                            }
                        },
                        {
                            key: "t",
                            value: function(e, n) {
                                return t75._t(e, n);
                            }
                        },
                        {
                            key: "setDictionary",
                            value: function(e) {
                                t75.currentDictionary = e;
                            }
                        },
                        {
                            key: "_t",
                            value: function(e, n) {
                                var o = t75.getNamespace(e);
                                return o && o[n] ? o[n] : n;
                            }
                        },
                        {
                            key: "getNamespace",
                            value: function(e) {
                                return e.split(".").reduce(function(t, e) {
                                    return t && Object.keys(t).length ? t[e] : {
                                    };
                                }, t75.currentDictionary);
                            }
                        }
                    ]), t75;
                }();
                o17.default = l, l.displayName = "I18n", l.currentDictionary = a.default, t74.exports = e48.default;
            }) ? o16.apply(e48, r11) : o16) || (t74.exports = i11);
        },
        function(t76, e49, n30) {
            var o18, r12, i12;
            "undefined" != typeof globalThis || "undefined", r12 = [
                e49,
                n30(2),
                n30(3),
                n30(380),
                n30(7)
            ], void 0 === (i12 = "function" == typeof (o18 = function(o, r, i, a, s) {
                var l = n30(8), c = n30(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = l(s);
                var u = function() {
                    function t77(e50) {
                        var n = this;
                        (0, r.default)(this, t77), this.iterator = null, this.activated = !1, this.allowArrows = !0, this.onKeyDown = function(e) {
                            if (n.isEventReadyForHandling(e)) switch(t77.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode){
                                case s.keyCodes.TAB:
                                    n.handleTabPress(e);
                                    break;
                                case s.keyCodes.LEFT:
                                case s.keyCodes.UP:
                                    n.flipLeft();
                                    break;
                                case s.keyCodes.RIGHT:
                                case s.keyCodes.DOWN:
                                    n.flipRight();
                                    break;
                                case s.keyCodes.ENTER:
                                    n.handleEnterPress(e);
                            }
                        }, this.allowArrows = !s.isBoolean(e50.allowArrows) || e50.allowArrows, this.iterator = new a.default(e50.items, e50.focusedItemClass), this.activateCallback = e50.activateCallback;
                    }
                    return (0, i.default)(t77, [
                        {
                            key: "activate",
                            value: function(t) {
                                this.activated = !0, t && this.iterator.setItems(t), document.addEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "deactivate",
                            value: function() {
                                this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "focusFirst",
                            value: function() {
                                this.dropCursor(), this.flipRight();
                            }
                        },
                        {
                            key: "flipLeft",
                            value: function() {
                                this.iterator.previous();
                            }
                        },
                        {
                            key: "flipRight",
                            value: function() {
                                this.iterator.next();
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                this.iterator.dropCursor();
                            }
                        },
                        {
                            key: "isEventReadyForHandling",
                            value: function(t) {
                                var e = [
                                    s.keyCodes.TAB,
                                    s.keyCodes.ENTER
                                ], n = this.iterator.currentItem == document.activeElement;
                                return this.allowArrows && !n && e.push(s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.UP, s.keyCodes.DOWN), this.activated && -1 !== e.indexOf(t.keyCode);
                            }
                        },
                        {
                            key: "handleTabPress",
                            value: function(t) {
                                switch(t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT){
                                    case a.default.directions.RIGHT:
                                        this.flipRight();
                                        break;
                                    case a.default.directions.LEFT:
                                        this.flipLeft();
                                }
                            }
                        },
                        {
                            key: "handleEnterPress",
                            value: function(t) {
                                this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t.preventDefault(), t.stopPropagation());
                            }
                        },
                        {
                            key: "currentItem",
                            get: function() {
                                return this.iterator.currentItem;
                            }
                        }
                    ], [
                        {
                            key: "usedKeys",
                            get: function() {
                                return [
                                    s.keyCodes.TAB,
                                    s.keyCodes.LEFT,
                                    s.keyCodes.RIGHT,
                                    s.keyCodes.ENTER,
                                    s.keyCodes.UP,
                                    s.keyCodes.DOWN
                                ];
                            }
                        }
                    ]), t77;
                }();
                o.default = u, u.displayName = "Flipper", t76.exports = e49.default;
            }) ? o18.apply(e49, r12) : o18) || (t76.exports = i12);
        },
        function(t78, e, n) {
            var o = n(37);
            t78.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == o(t) ? t.split("") : Object(t);
            };
        },
        function(t, e) {
            e.f = ({
            }).propertyIsEnumerable;
        },
        function(t79, e51, n31) {
            var o = n31(37), r = n31(14)("toStringTag"), i = "Arguments" == o(function() {
                return arguments;
            }());
            t79.exports = function(t80) {
                var e, n, a;
                return void 0 === t80 ? "Undefined" : null === t80 ? "Null" : "string" == typeof (n = function(t, e) {
                    try {
                        return t[e];
                    } catch (t81) {
                    }
                }(e = Object(t80), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a;
            };
        },
        function(t82, e52, n32) {
            var o = n32(12), r = n32(32), i = n32(14)("species");
            t82.exports = function(t, e) {
                var n, a = o(t).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
            };
        },
        function(t83, e53, n33) {
            var o19, r13, i13;
            "undefined" != typeof globalThis || "undefined", r13 = [
                e53,
                n33(7),
                n33(378)
            ], void 0 === (i13 = "function" == typeof (o19 = function(t84, e54, o20) {
                var r14 = n33(1), i14 = n33(8);
                function a5(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    }, n = {
                        tags: e
                    }, r = new o20.default(n);
                    return r.clean(t);
                }
                function s(t85, n34) {
                    var o21, r15, i15;
                    return Array.isArray(t85) ? (i15 = n34, t85.map(function(t) {
                        return s(t, i15);
                    })) : e54.isObject(t85) ? (function(t, n) {
                        var o, r = {
                        };
                        for(var i in t)if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var a = t[i], l = (o = n[i], e54.isObject(o) || e54.isBoolean(o) || e54.isFunction(o) ? n[i] : n);
                            r[i] = s(a, l);
                        }
                        return r;
                    })(t85, n34) : e54.isString(t85) ? (o21 = t85, r15 = n34, e54.isObject(r15) ? a5(o21, r15) : !1 === r15 ? a5(o21, {
                    }) : o21) : t85;
                }
                Object.defineProperty(t84, "__esModule", {
                    value: !0
                }), t84.sanitizeBlocks = function(t86, n) {
                    return t86.map(function(t) {
                        var o = e54.isFunction(n) ? n(t.tool) : n;
                        return e54.isEmpty(o) || (t.data = s(t.data, o)), t;
                    });
                }, t84.clean = a5, e54 = i14(e54), o20 = r14(o20);
            }) ? o19.apply(e53, r13) : o19) || (t83.exports = i13);
        },
        function(t87, e55, n35) {
            var o22, r16, i16;
            "undefined" != typeof globalThis || "undefined", r16 = [
                e55,
                n35(30),
                n35(23),
                n35(24),
                n35(42),
                n35(2),
                n35(3),
                n35(149),
                n35(168),
                n35(5),
                n35(6),
                n35(4),
                n35(15),
                n35(7),
                n35(111),
                n35(25),
                n35(151)
            ], void 0 === (i16 = "function" == typeof (o22 = function(t88, e56, o23, r17, i17, a6, s7, l5, c3, u3, f4, d, p, h, v, g, y3) {
                var b, m2 = n35(8), k1 = n35(1);
                function x() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t88, "__esModule", {
                    value: !0
                }), t88.default = t88.BlockToolAPI = void 0, e56 = k1(e56), o23 = k1(o23), r17 = k1(r17), i17 = k1(i17), a6 = k1(a6), s7 = k1(s7), l5 = k1(l5), c3 = k1(c3), u3 = k1(u3), f4 = k1(f4), d = k1(d), p = k1(p), h = m2(h), v = k1(v), g = k1(g), y3 = k1(y3), t88.BlockToolAPI = b, (function(t) {
                    t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste";
                })(b || (t88.BlockToolAPI = b = {
                }));
                var w2 = function(t89) {
                    (0, u3.default)(S, t89);
                    var n36, y, m, k, w = (n36 = S, function() {
                        var t, e = (0, d.default)(n36);
                        if (x()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, f4.default)(this, t);
                    });
                    function S(t90) {
                        var e57, n37 = t90.id, o24 = void 0 === n37 ? h.generateBlockId() : n37, r = t90.data, s = t90.tool, c = t90.api, u = t90.readOnly, f = t90.tunesData;
                        return (0, a6.default)(this, S), (e57 = w.call(this)).cachedInputs = [], e57.tunesInstances = new Map, e57.defaultTunesInstances = new Map, e57.unavailableTunesData = {
                        }, e57.inputIndex = 0, e57.modificationDebounceTimer = 450, e57.didMutated = h.debounce(function(t91) {
                            !t91.some(function(t92) {
                                var e = t92.addedNodes, n = void 0 === e ? [] : e, o = t92.removedNodes;
                                return [].concat((0, i17.default)(Array.from(n)), (0, i17.default)(Array.from(o))).some(function(t) {
                                    return p.default.isElement(t) && "true" === t.dataset.mutationFree;
                                });
                            }) && (e57.cachedInputs = [], e57.updateCurrentInput(), e57.call(b.UPDATED), e57.emit("didMutated", (0, l5.default)(e57)));
                        }, e57.modificationDebounceTimer), e57.handleFocus = function() {
                            e57.cachedInputs = [], e57.updateCurrentInput();
                        }, e57.name = s.name, e57.id = o24, e57.settings = s.settings, e57.config = s.settings.config || {
                        }, e57.api = c, e57.blockAPI = new v.default((0, l5.default)(e57)), e57.mutationObserver = new MutationObserver(e57.didMutated), e57.tool = s, e57.toolInstance = s.create(r, e57.blockAPI, u), e57.tunes = s.tunes, e57.composeTunes(f), e57.holder = e57.compose(), e57;
                    }
                    return (0, s7.default)(S, [
                        {
                            key: "call",
                            value: function(t, e) {
                                if (h.isFunction(this.toolInstance[t])) {
                                    t === b.APPEND_CALLBACK && h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                                    try {
                                        this.toolInstance[t].call(this.toolInstance, e);
                                    } catch (e) {
                                        h.log("Error during '".concat(t, "' call: ").concat(e.message), "error");
                                    }
                                }
                            }
                        },
                        {
                            key: "mergeWith",
                            value: (k = (0, r17.default)(o23.default.mark(function t93(e) {
                                return o23.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, this.toolInstance.merge(e);
                                        case 2:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t93, this);
                            })), function(t) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "save",
                            value: (m = (0, r17.default)(o23.default.mark(function t94() {
                                var n38, r, a, s, l = this;
                                return o23.default.wrap(function(t95) {
                                    for(;;)switch(t95.prev = t95.next){
                                        case 0:
                                            return t95.next = 2, this.toolInstance.save(this.pluginsContent);
                                        case 2:
                                            return n38 = t95.sent, r = this.unavailableTunesData, [].concat((0, i17.default)(this.tunesInstances.entries()), (0, i17.default)(this.defaultTunesInstances.entries())).forEach(function(t) {
                                                var n = (0, e56.default)(t, 2), o = n[0], i = n[1];
                                                if (h.isFunction(i.save)) try {
                                                    r[o] = i.save();
                                                } catch (t96) {
                                                    h.log("Tune ".concat(i.constructor.name, " save method throws an Error %o"), "warn", t96);
                                                }
                                            }), a = window.performance.now(), t95.abrupt("return", Promise.resolve(n38).then(function(t) {
                                                return s = window.performance.now(), {
                                                    id: l.id,
                                                    tool: l.name,
                                                    data: t,
                                                    tunes: r,
                                                    time: s - a
                                                };
                                            }).catch(function(t) {
                                                h.log("Saving proccess for ".concat(l.name, " tool failed due to the ").concat(t), "log", "red");
                                            }));
                                        case 7:
                                        case "end":
                                            return t95.stop();
                                    }
                                }, t94, this);
                            })), function() {
                                return m.apply(this, arguments);
                            })
                        },
                        {
                            key: "validate",
                            value: (y = (0, r17.default)(o23.default.mark(function t97(e) {
                                var n;
                                return o23.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = !0, !(this.toolInstance.validate instanceof Function)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return t.next = 4, this.toolInstance.validate(e);
                                        case 4:
                                            n = t.sent;
                                        case 5:
                                            return t.abrupt("return", n);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t97, this);
                            })), function(t) {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "renderTunes",
                            value: function() {
                                var t98 = document.createDocumentFragment(), e58 = document.createDocumentFragment();
                                return this.tunesInstances.forEach(function(e) {
                                    p.default.append(t98, e.render());
                                }), this.defaultTunesInstances.forEach(function(t) {
                                    p.default.append(e58, t.render());
                                }), [
                                    t98,
                                    e58
                                ];
                            }
                        },
                        {
                            key: "updateCurrentInput",
                            value: function() {
                                this.currentInput = p.default.isNativeInput(document.activeElement) || !g.default.anchorNode ? document.activeElement : g.default.anchorNode;
                            }
                        },
                        {
                            key: "willSelect",
                            value: function() {
                                this.mutationObserver.observe(this.holder.firstElementChild, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), this.addInputEvents();
                            }
                        },
                        {
                            key: "willUnselect",
                            value: function() {
                                this.mutationObserver.disconnect(), this.removeInputEvents();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                (0, c3.default)((0, d.default)(S.prototype), "destroy", this).call(this), h.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
                            }
                        },
                        {
                            key: "renderSettings",
                            value: function() {
                                if (h.isFunction(this.toolInstance.renderSettings)) return this.toolInstance.renderSettings();
                            }
                        },
                        {
                            key: "compose",
                            value: function() {
                                var t99 = p.default.make("div", S.CSS.wrapper), e59 = p.default.make("div", S.CSS.content), n = this.toolInstance.render();
                                e59.appendChild(n);
                                var o = e59;
                                return [].concat((0, i17.default)(this.tunesInstances.values()), (0, i17.default)(this.defaultTunesInstances.values())).forEach(function(t) {
                                    if (h.isFunction(t.wrap)) try {
                                        o = t.wrap(o);
                                    } catch (e) {
                                        h.log("Tune ".concat(t.constructor.name, " wrap method throws an Error %o"), "warn", e);
                                    }
                                }), t99.appendChild(o), t99;
                            }
                        },
                        {
                            key: "composeTunes",
                            value: function(t100) {
                                var n = this;
                                Array.from(this.tunes.values()).forEach(function(e) {
                                    (e.isInternal ? n.defaultTunesInstances : n.tunesInstances).set(e.name, e.create(t100[e.name], n.blockAPI));
                                }), Object.entries(t100).forEach(function(t) {
                                    var o = (0, e56.default)(t, 2), r = o[0], i = o[1];
                                    n.tunesInstances.has(r) || (n.unavailableTunesData[r] = i);
                                });
                            }
                        },
                        {
                            key: "addInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.addEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.addEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "removeInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.removeEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.removeEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "inputs",
                            get: function() {
                                if (0 !== this.cachedInputs.length) return this.cachedInputs;
                                var t = p.default.findAllInputs(this.holder);
                                return this.inputIndex > t.length - 1 && (this.inputIndex = t.length - 1), this.cachedInputs = t, t;
                            }
                        },
                        {
                            key: "currentInput",
                            get: function() {
                                return this.inputs[this.inputIndex];
                            },
                            set: function(t) {
                                var e60 = this.inputs.findIndex(function(e) {
                                    return e === t || e.contains(t);
                                });
                                -1 !== e60 && (this.inputIndex = e60);
                            }
                        },
                        {
                            key: "firstInput",
                            get: function() {
                                return this.inputs[0];
                            }
                        },
                        {
                            key: "lastInput",
                            get: function() {
                                var t = this.inputs;
                                return t[t.length - 1];
                            }
                        },
                        {
                            key: "nextInput",
                            get: function() {
                                return this.inputs[this.inputIndex + 1];
                            }
                        },
                        {
                            key: "previousInput",
                            get: function() {
                                return this.inputs[this.inputIndex - 1];
                            }
                        },
                        {
                            key: "data",
                            get: function() {
                                return this.save().then(function(t) {
                                    return t && !h.isEmpty(t.data) ? t.data : {
                                    };
                                });
                            }
                        },
                        {
                            key: "sanitize",
                            get: function() {
                                return this.tool.sanitizeConfig;
                            }
                        },
                        {
                            key: "mergeable",
                            get: function() {
                                return h.isFunction(this.toolInstance.merge);
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                var t = p.default.isEmpty(this.pluginsContent), e = !this.hasMedia;
                                return t && e;
                            }
                        },
                        {
                            key: "hasMedia",
                            get: function() {
                                return !!this.holder.querySelector([
                                    "img",
                                    "iframe",
                                    "video",
                                    "audio",
                                    "source",
                                    "input",
                                    "textarea",
                                    "twitterwidget"
                                ].join(","));
                            }
                        },
                        {
                            key: "focused",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.focused, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.focused);
                            }
                        },
                        {
                            key: "selected",
                            set: function(t) {
                                t ? (this.holder.classList.add(S.CSS.selected), g.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(S.CSS.selected), g.default.removeFakeCursor(this.holder));
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.selected);
                            }
                        },
                        {
                            key: "stretched",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.wrapperStretched, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.wrapperStretched);
                            }
                        },
                        {
                            key: "dropTarget",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.dropTarget, t);
                            }
                        },
                        {
                            key: "pluginsContent",
                            get: function() {
                                var t = this.holder.querySelector(".".concat(S.CSS.content));
                                if (t && t.childNodes.length) for(var e = t.childNodes.length - 1; e >= 0; e--){
                                    var n = t.childNodes[e];
                                    if (!p.default.isExtensionNode(n)) return n;
                                }
                                return null;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-block",
                                    wrapperStretched: "ce-block--stretched",
                                    content: "ce-block__content",
                                    focused: "ce-block--focused",
                                    selected: "ce-block--selected",
                                    dropTarget: "ce-block--drop-target"
                                };
                            }
                        }
                    ]), S;
                }(y3.default);
                t88.default = w2, w2.displayName = "Block";
            }) ? o22.apply(e55, r16) : o22) || (t87.exports = i16);
        },
        function(t101, e61, n39) {
            var o25, r18, i18;
            "undefined" != typeof globalThis || "undefined", r18 = [
                e61,
                n39(2),
                n39(3),
                n39(7)
            ], void 0 === (i18 = "function" == typeof (o25 = function(t102, e, o26, r19) {
                var i19, a7, s8, l6, c4, u4, f = n39(8), d = n39(1);
                Object.defineProperty(t102, "__esModule", {
                    value: !0
                }), t102.default = t102.InternalTuneSettings = t102.InternalInlineToolSettings = t102.InternalBlockToolSettings = t102.CommonInternalSettings = t102.UserSettings = t102.ToolType = void 0, e = d(e), o26 = d(o26), r19 = f(r19), t102.ToolType = i19, (function(t) {
                    t[t.Block = 0] = "Block", t[t.Inline = 1] = "Inline", t[t.Tune = 2] = "Tune";
                })(i19 || (t102.ToolType = i19 = {
                })), t102.UserSettings = a7, (function(t) {
                    t.Shortcut = "shortcut", t.Toolbox = "toolbox", t.EnabledInlineTools = "inlineToolbar", t.EnabledBlockTunes = "tunes", t.Config = "config";
                })(a7 || (t102.UserSettings = a7 = {
                })), t102.CommonInternalSettings = s8, (function(t) {
                    t.Shortcut = "shortcut", t.SanitizeConfig = "sanitize";
                })(s8 || (t102.CommonInternalSettings = s8 = {
                })), t102.InternalBlockToolSettings = l6, (function(t) {
                    t.IsEnabledLineBreaks = "enableLineBreaks", t.Toolbox = "toolbox", t.ConversionConfig = "conversionConfig", t.IsReadOnlySupported = "isReadOnlySupported", t.PasteConfig = "pasteConfig";
                })(l6 || (t102.InternalBlockToolSettings = l6 = {
                })), t102.InternalInlineToolSettings = c4, (function(t) {
                    t.IsInline = "isInline", t.Title = "title";
                })(c4 || (t102.InternalInlineToolSettings = c4 = {
                })), t102.InternalTuneSettings = u4, (function(t) {
                    t.IsTune = "isTune";
                })(u4 || (t102.InternalTuneSettings = u4 = {
                }));
                var p = function() {
                    function t103(n) {
                        var o = n.name, r = n.constructable, i = n.config, a = n.api, s = n.isDefault, l = n.isInternal, c = void 0 !== l && l, u = n.defaultPlaceholder;
                        (0, e.default)(this, t103), this.api = a, this.name = o, this.constructable = r, this.config = i, this.isDefault = s, this.isInternal = c, this.defaultPlaceholder = u;
                    }
                    return (0, o26.default)(t103, [
                        {
                            key: "reset",
                            value: function() {
                                if (r19.isFunction(this.constructable.reset)) return this.constructable.reset();
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                if (r19.isFunction(this.constructable.prepare)) return this.constructable.prepare({
                                    toolName: this.name,
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isInline",
                            value: function() {
                                return this.type === i19.Inline;
                            }
                        },
                        {
                            key: "isBlock",
                            value: function() {
                                return this.type === i19.Block;
                            }
                        },
                        {
                            key: "isTune",
                            value: function() {
                                return this.type === i19.Tune;
                            }
                        },
                        {
                            key: "settings",
                            get: function() {
                                var t = this.config[a7.Config] || {
                                };
                                return this.isDefault && !("placeholder" in t) && this.defaultPlaceholder && (t.placeholder = this.defaultPlaceholder), t;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                var t = this.constructable[s8.Shortcut];
                                return this.config[a7.Shortcut] || t;
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                return this.constructable[s8.SanitizeConfig] || {
                                };
                            }
                        }
                    ]), t103;
                }();
                t102.default = p, p.displayName = "BaseTool";
            }) ? o25.apply(e61, r18) : o25) || (t101.exports = i18);
        },
        function(t, e62, n) {
            var o = n(17), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {
            });
            (t.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {
                });
            })("versions", []).push({
                version: o.version,
                mode: n(45) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            });
        },
        function(t104, e63, n40) {
            var o = n40(28), r = n40(16), i = n40(47);
            t104.exports = function(t) {
                return function(e, n, a) {
                    var s, l = o(e), c = r(l.length), u = i(a, c);
                    if (t && n != n) {
                        for(; c > u;)if ((s = l[u++]) != s) return !0;
                    } else for(; c > u; u++)if ((t || u in l) && l[u] === n) return t || u || 0;
                    return !t && -1;
                };
            };
        },
        function(t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function(t105, e, n) {
            var o = n(37);
            t105.exports = Array.isArray || function(t) {
                return "Array" == o(t);
            };
        },
        function(t107, e64, n41) {
            var o = n41(14)("iterator"), r = !1;
            try {
                var i = [
                    7
                ][o]();
                i.return = function() {
                    r = !0;
                }, Array.from(i, function() {
                    throw 2;
                });
            } catch (t106) {
            }
            t107.exports = function(t, e) {
                if (!e && !r) return !1;
                var n = !1;
                try {
                    var i = [
                        7
                    ], a = i[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        };
                    }, i[o] = function() {
                        return a;
                    }, t(i);
                } catch (t108) {
                }
                return n;
            };
        },
        function(t109, e65, n) {
            "use strict";
            var o = n(12);
            t109.exports = function() {
                var t = o(this), e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
            };
        },
        function(t110, e66, n42) {
            "use strict";
            var o = n42(63), r = RegExp.prototype.exec;
            t110.exports = function(t, e) {
                var n = t.exec;
                if ("function" == typeof n) {
                    var i = n.call(t, e);
                    if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return i;
                }
                if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e);
            };
        },
        function(t111, e67, n43) {
            "use strict";
            n43(133);
            var o27 = n43(21), r20 = n43(27), i = n43(11), a = n43(38), s = n43(14), l = n43(106), c = s("species"), u = !i(function() {
                var t112 = /./;
                return t112.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t;
                }, "7" !== "".replace(t112, "$<a>");
            }), f = function() {
                var t = /(?:)/, e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments);
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            }();
            t111.exports = function(t113, e68, n44) {
                var d = s(t113), p = !i(function() {
                    var e = {
                    };
                    return e[d] = function() {
                        return 7;
                    }, 7 != ""[t113](e);
                }), h = p ? !i(function() {
                    var e = !1, n = /a/;
                    return n.exec = function() {
                        return e = !0, null;
                    }, "split" === t113 && (n.constructor = {
                    }, n.constructor[c] = function() {
                        return n;
                    }), n[d](""), !e;
                }) : void 0;
                if (!p || !h || "replace" === t113 && !u || "split" === t113 && !f) {
                    var v = /./[d], g = n44(a, d, ""[t113], function(t, e, n, o, r) {
                        return e.exec === l ? p && !r ? {
                            done: !0,
                            value: v.call(e, n, o)
                        } : {
                            done: !0,
                            value: t.call(n, e, o)
                        } : {
                            done: !1
                        };
                    }), y = g[0], b = g[1];
                    o27(String.prototype, t113, y), r20(RegExp.prototype, d, 2 == e68 ? function(t, e) {
                        return b.call(t, this, e);
                    } : function(t) {
                        return b.call(t, this);
                    });
                }
            };
        },
        function(t114, e69, n45) {
            var o = n45(31), r = n45(128), i = n45(101), a = n45(12), s = n45(16), l = n45(103), c = {
            }, u = {
            };
            (e69 = t114.exports = function(t, e, n, f, d) {
                var p, h, v, g, y = d ? function() {
                    return t;
                } : l(t), b = o(n, f, e ? 2 : 1), m = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for(p = s(t.length); p > m; m++)if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g;
                } else for(v = y.call(t); !(h = v.next()).done;)if ((g = r(v, b, h.value, e)) === c || g === u) return g;
            }).BREAK = c, e69.RETURN = u;
        },
        function(t, e, n) {
            var o = n(10).navigator;
            t.exports = o && o.userAgent || "";
        },
        function(t115, e70, n46) {
            "use strict";
            var o28 = n46(10), r = n46(0), i = n46(21), a = n46(58), s = n46(41), l = n46(76), c = n46(57), u = n46(13), f = n46(11), d = n46(72), p = n46(53), h = n46(92);
            t115.exports = function(t116, e71, n47, v, g, y) {
                var b = o28[t116], m = b, k = g ? "set" : "add", x = m && m.prototype, w = {
                }, S = function(t117) {
                    var e = x[t117];
                    i(x, t117, "delete" == t117 || "has" == t117 ? function(t) {
                        return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
                    } : "get" == t117 ? function(t) {
                        return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                    } : "add" == t117 ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                    } : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                    });
                };
                if ("function" == typeof m && (y || x.forEach && !f(function() {
                    (new m).entries().next();
                }))) {
                    var T = new m, E = T[k](y ? {
                    } : -0, 1) != T, B = f(function() {
                        T.has(1);
                    }), C = d(function(t) {
                        new m(t);
                    }), _ = !y && f(function() {
                        for(var t = new m, e = 5; e--;)t[k](e, e);
                        return !t.has(-0);
                    });
                    C || ((m = e71(function(e, n) {
                        c(e, m, t116);
                        var o = h(new b, e, m);
                        return null != n && l(n, g, o[k], o), o;
                    })).prototype = x, x.constructor = m), (B || _) && (S("delete"), S("has"), g && S("get")), (_ || E) && S(k), y && x.clear && delete x.clear;
                } else m = v.getConstructor(e71, t116, g, k), a(m.prototype, n47), s.NEED = !0;
                return p(m, t116), w[t116] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t116, g), m;
            };
        },
        function(t, e, n) {
            for(var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, l, !0)) : u = !1;
            t.exports = {
                ABV: c,
                CONSTR: u,
                TYPED: s,
                VIEW: l
            };
        },
        function(t118, e72) {
            function n(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t118.exports = n = function(t) {
                    return typeof t;
                } : t118.exports = n = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, n(e);
            }
            t118.exports = n;
        },
        function(t119, e73, n48) {
            var o29, r21, i20;
            "undefined" != typeof globalThis || "undefined", r21 = [
                e73,
                n48(2),
                n48(3),
                n48(5),
                n48(6),
                n48(4),
                n48(9)
            ], void 0 === (i20 = "function" == typeof (o29 = function(o30, r, i, a, s, l, c) {
                var u = n48(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o30, "__esModule", {
                    value: !0
                }), o30.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t120) {
                    (0, a.default)(o31, t120);
                    var e, n49 = (e = o31, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o31() {
                        return (0, r.default)(this, o31), n49.apply(this, arguments);
                    }
                    return (0, i.default)(o31, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    i18n: this.Editor.I18nAPI.getMethodsForTool(t)
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    blocks: this.Editor.BlocksAPI.methods,
                                    caret: this.Editor.CaretAPI.methods,
                                    events: this.Editor.EventsAPI.methods,
                                    listeners: this.Editor.ListenersAPI.methods,
                                    notifier: this.Editor.NotifierAPI.methods,
                                    sanitizer: this.Editor.SanitizerAPI.methods,
                                    saver: this.Editor.SaverAPI.methods,
                                    selection: this.Editor.SelectionAPI.methods,
                                    styles: this.Editor.StylesAPI.classes,
                                    toolbar: this.Editor.ToolbarAPI.methods,
                                    inlineToolbar: this.Editor.InlineToolbarAPI.methods,
                                    tooltip: this.Editor.TooltipAPI.methods,
                                    i18n: this.Editor.I18nAPI.methods,
                                    readOnly: this.Editor.ReadOnlyAPI.methods
                                };
                            }
                        }
                    ]), o31;
                }((c = u(c)).default);
                o30.default = d, d.displayName = "API", t119.exports = e73.default;
            }) ? o29.apply(e73, r21) : o29) || (t119.exports = i20);
        },
        function(t121, e74, n50) {
            var o32, r22, i21;
            "undefined" != typeof globalThis || "undefined", r22 = [
                e74,
                n50(2),
                n50(3),
                n50(379)
            ], void 0 === (i21 = "function" == typeof (o32 = function(o, r, i, a) {
                var s = n50(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t122() {
                        (0, r.default)(this, t122), this.lib = new a.default;
                    }
                    return (0, i.default)(t122, [
                        {
                            key: "destroy",
                            value: function() {
                                this.lib.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.lib.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.lib.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.lib.onHover(t, e, n);
                            }
                        }
                    ]), t122;
                }();
                o.default = l, l.displayName = "Tooltip", t121.exports = e74.default;
            }) ? o32.apply(e74, r22) : o32) || (t121.exports = i21);
        },
        function(t123, e75, n51) {
            var o33, r23, i22;
            "undefined" != typeof globalThis || "undefined", r23 = [
                e75,
                n51(2),
                n51(3),
                n51(5),
                n51(6),
                n51(4),
                n51(9),
                n51(15),
                n51(7),
                n51(59),
                n51(84),
                n51(82)
            ], void 0 === (i22 = "function" == typeof (o33 = function(o34, r24, i23, a8, s, l, c, u, f, d, p, h) {
                var v = n51(8), g = n51(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o34, "__esModule", {
                    value: !0
                }), o34.default = void 0, r24 = g(r24), i23 = g(i23), a8 = g(a8), s = g(s), l = g(l), c = g(c), u = g(u), f = v(f), d = g(d), h = g(h);
                var b = function(t124) {
                    (0, a8.default)(o35, t124);
                    var e76, n52 = (e76 = o35, function() {
                        var t, n = (0, l.default)(e76);
                        if (y()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o35(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r24.default)(this, o35), (e = n52.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new h.default, e;
                    }
                    return (0, i23.default)(o35, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.Toolbox.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
                                var e = this.Editor.BlockManager.currentBlock.holder;
                                if (e) {
                                    var n = this.Editor.UI.isMobile, o = e.offsetHeight, r = e.offsetTop;
                                    if (n) r += o;
                                    else {
                                        var i = Math.floor(o / 2);
                                        this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)");
                                    }
                                    this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(r), "px, 0)");
                                }
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                f.delay(function() {
                                    t.move(n), t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide();
                                }, 50)();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), [
                                    "content",
                                    "actions"
                                ].forEach(function(e) {
                                    t.nodes[e] = u.default.make("div", t.CSS[e]);
                                }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                                    t.plusButtonClicked();
                                }, !1);
                                var e = u.default.make("div");
                                e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, {
                                    textContent: "⇥ Tab"
                                })), this.tooltip.onHover(this.nodes.plusButton, e), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                                var n = u.default.svg("dots", 8, 8);
                                u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), {
                                    placement: "top"
                                }), u.default.append(this.nodes.content, this.Editor.Toolbox.nodes.toolbox), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
                            }
                        },
                        {
                            key: "plusButtonClicked",
                            value: function() {
                                this.Editor.Toolbox.toggle();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(e) {
                                    e.stopPropagation(), t.settingsTogglerClicked();
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "settingsTogglerClicked",
                            value: function() {
                                this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
                            }
                        },
                        {
                            key: "drawUI",
                            value: function() {
                                this.Editor.BlockSettings.make(), this.Editor.Toolbox.make(), this.make();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbar: "ce-toolbar",
                                    content: "ce-toolbar__content",
                                    actions: "ce-toolbar__actions",
                                    actionsOpened: "ce-toolbar__actions--opened",
                                    toolbarOpened: "ce-toolbar--opened",
                                    plusButton: "ce-toolbar__plus",
                                    plusButtonShortcut: "ce-toolbar__plus-shortcut",
                                    plusButtonHidden: "ce-toolbar__plus--hidden",
                                    blockActionsButtons: "ce-toolbar__actions-buttons",
                                    settingsToggler: "ce-toolbar__settings-btn"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
                            }
                        },
                        {
                            key: "plusButton",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden);
                                    },
                                    show: function() {
                                        t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden);
                                    }
                                };
                            }
                        },
                        {
                            key: "blockActions",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        t.nodes.actions.classList.remove(t.CSS.actionsOpened);
                                    },
                                    show: function() {
                                        t.nodes.actions.classList.add(t.CSS.actionsOpened);
                                    }
                                };
                            }
                        }
                    ]), o35;
                }(c.default);
                o34.default = b, b.displayName = "Toolbar", t123.exports = e75.default;
            }) ? o33.apply(e75, r23) : o33) || (t123.exports = i22);
        },
        function(t125, e77, n53) {
            var o36, r25, i24;
            "undefined" != typeof globalThis || "undefined", r25 = [
                e77,
                n53(30),
                n53(147),
                n53(7)
            ], void 0 === (i24 = "function" == typeof (o36 = function(t126, e, o37, r) {
                var i25 = n53(1);
                Object.defineProperty(t126, "__esModule", {
                    value: !0
                }), t126.I18nInternalNS = void 0, e = i25(e);
                var a9 = function t127(n54, o) {
                    var i = {
                    };
                    return Object.entries(n54).forEach(function(n) {
                        var a = (0, e.default)(n, 2), s = a[0], l = a[1];
                        if ((0, r.isObject)(l)) {
                            var c = o ? "".concat(o, ".").concat(s) : s, u = Object.values(l).every(function(t) {
                                return (0, r.isString)(t);
                            });
                            i[s] = u ? c : t127(l, c);
                        } else i[s] = l;
                    }), i;
                }((o37 = i25(o37)).default);
                t126.I18nInternalNS = a9;
            }) ? o36.apply(e77, r25) : o36) || (t125.exports = i24);
        },
        function(t128, e, n) {
            var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
            t128.exports = function(t) {
                return i ? r.createElement(t) : {
                };
            };
        },
        function(t, e, n) {
            e.f = n(14);
        },
        function(t129, e, n) {
            var o = n(68)("keys"), r = n(44);
            t129.exports = function(t) {
                return o[t] || (o[t] = r(t));
            };
        },
        function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function(t, e, n) {
            var o = n(10).document;
            t.exports = o && o.documentElement;
        },
        function(t130, e78, n55) {
            var o38 = n55(13), r = n55(12), i = function(t, e) {
                if (r(t), !o38(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
            };
            t130.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {
                } ? (function(t132, e, o) {
                    try {
                        (o = n55(31)(Function.call, n55(34).f(Object.prototype, "__proto__").set, 2))(t132, []), e = !(t132 instanceof Array);
                    } catch (t131) {
                        e = !0;
                    }
                    return function(t, n) {
                        return i(t, n), e ? t.__proto__ = n : o(t, n), t;
                    };
                })({
                }, !1) : void 0),
                check: i
            };
        },
        function(t, e) {
            t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
        },
        function(t133, e79, n56) {
            var o = n56(13), r = n56(90).set;
            t133.exports = function(t, e, n) {
                var i, a = e.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t;
            };
        },
        function(t134, e80, n57) {
            "use strict";
            var o = n57(33), r = n57(38);
            t134.exports = function(t) {
                var e = String(r(this)), n = "", i = o(t);
                if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
                for(; i > 0; (i >>>= 1) && (e += e))1 & i && (n += e);
                return n;
            };
        },
        function(t135, e) {
            t135.exports = Math.sign || function(t) {
                return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
            };
        },
        function(t136, e) {
            var n = Math.expm1;
            t136.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -0.00000000000000002 != n(-0.00000000000000002) ? function(t) {
                return 0 == (t = +t) ? t : t > -0.000001 && t < 0.000001 ? t + t * t / 2 : Math.exp(t) - 1;
            } : n;
        },
        function(t137, e81, n58) {
            var o = n58(33), r = n58(38);
            t137.exports = function(t) {
                return function(e, n) {
                    var i, a, s = String(r(e)), l = o(n), c = s.length;
                    return l < 0 || l >= c ? t ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : i : t ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
                };
            };
        },
        function(t138, e82, n59) {
            "use strict";
            var o = n59(45), r = n59(0), i = n59(21), a = n59(27), s = n59(55), l = n59(127), c = n59(53), u = n59(50), f = n59(14)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
                return this;
            };
            t138.exports = function(t139, e, n, h, v, g, y) {
                l(n, e, h);
                var b, m, k, x = function(t) {
                    if (!d && t in E) return E[t];
                    switch(t){
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t);
                            };
                    }
                    return function() {
                        return new n(this, t);
                    };
                }, w = e + " Iterator", S = "values" == v, T = !1, E = t139.prototype, B = E[f] || E["@@iterator"] || v && E[v], C = B || x(v), _ = v ? S ? x("entries") : C : void 0, O = "Array" == e && E.entries || B;
                if (O && (k = u(O.call(new t139))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && B && "values" !== B.name && (T = !0, C = function() {
                    return B.call(this);
                }), o && !y || !d && !T && E[f] || a(E, f, C), s[e] = C, s[w] = p, v) {
                    if (b = {
                        values: S ? C : x("values"),
                        keys: g ? C : x("keys"),
                        entries: _
                    }, y) for(m in b)m in E || i(E, m, b[m]);
                    else r(r.P + r.F * (d || T), e, b);
                }
                return b;
            };
        },
        function(t140, e83, n60) {
            var o = n60(99), r = n60(38);
            t140.exports = function(t, e, n) {
                if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(r(t));
            };
        },
        function(t141, e84, n) {
            var o = n(13), r = n(37), i = n(14)("match");
            t141.exports = function(t) {
                var e;
                return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
            };
        },
        function(t, e85, n) {
            var o = n(14)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./"[t](e);
                } catch (n) {
                    try {
                        return e[o] = !1, !"/./"[t](e);
                    } catch (t) {
                    }
                }
                return !0;
            };
        },
        function(t142, e, n) {
            var o = n(55), r = n(14)("iterator"), i = Array.prototype;
            t142.exports = function(t) {
                return void 0 !== t && (o.Array === t || i[r] === t);
            };
        },
        function(t143, e86, n61) {
            "use strict";
            var o = n61(19), r = n61(43);
            t143.exports = function(t, e, n) {
                e in t ? o.f(t, e, r(0, n)) : t[e] = n;
            };
        },
        function(t144, e, n) {
            var o = n(63), r = n(14)("iterator"), i = n(55);
            t144.exports = n(17).getIteratorMethod = function(t) {
                if (null != t) return t[r] || t["@@iterator"] || i[o(t)];
            };
        },
        function(t145, e87, n62) {
            "use strict";
            var o = n62(20), r = n62(47), i = n62(16);
            t145.exports = function(t) {
                for(var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;)e[s++] = t;
                return e;
            };
        },
        function(t146, e88, n63) {
            "use strict";
            var o = n63(51), r = n63(132), i = n63(55), a = n63(28);
            t146.exports = n63(97)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e;
            }, function() {
                var t = this._t, e = this._k, n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [
                    n,
                    t[n]
                ]);
            }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        },
        function(t147, e89, n64) {
            "use strict";
            var o39, r26, i = n64(73), a = RegExp.prototype.exec, s = String.prototype.replace, l7 = a, c = (o39 = /a/, r26 = /b*/g, a.call(o39, "a"), a.call(r26, "a"), 0 !== o39.lastIndex || 0 !== r26.lastIndex), u = void 0 !== /()??/.exec("")[1];
            (c || u) && (l7 = function(t) {
                var e, n, o, r, l = this;
                return u && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, function() {
                    for(r = 1; r < arguments.length - 2; r++)void 0 === arguments[r] && (o[r] = void 0);
                }), o;
            }), t147.exports = l7;
        },
        function(t148, e90, n65) {
            "use strict";
            var o = n65(96)(!0);
            t148.exports = function(t, e, n) {
                return e + (n ? o(t, e).length : 1);
            };
        },
        function(t149, e91, n66) {
            var o, r, i, a = n66(31), s = n66(121), l = n66(89), c = n66(85), u = n66(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {
            }, b = function() {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e();
                }
            }, m = function(t) {
                b.call(t.data);
            };
            d && p || (d = function(t) {
                for(var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
                return y[++g] = function() {
                    s("function" == typeof t ? t : Function(t), e);
                }, o(g), g;
            }, p = function(t) {
                delete y[t];
            }, "process" == n66(37)(f) ? o = function(t) {
                f.nextTick(a(b, t, 1));
            } : v && v.now ? o = function(t) {
                v.now(a(b, t, 1));
            } : h ? (i = (r = new h).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(t) {
                u.postMessage(t + "", "*");
            }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function(t) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), b.call(t);
                };
            } : function(t) {
                setTimeout(a(b, t, 1), 0);
            }), t149.exports = {
                set: d,
                clear: p
            };
        },
        function(t150, e92, n67) {
            "use strict";
            var o40 = n67(10), r27 = n67(18), i26 = n67(45), a10 = n67(79), s9 = n67(27), l8 = n67(58), c5 = n67(11), u5 = n67(57), f = n67(33), d3 = n67(16), p = n67(140), h = n67(49).f, v = n67(19).f, g = n67(104), y = n67(53), b = o40.ArrayBuffer, m = o40.DataView, k = o40.Math, x = o40.RangeError, w = o40.Infinity, S = b, T = k.abs, E = k.pow, B = k.floor, C = k.log, _ = k.LN2, O = r27 ? "_b" : "buffer", I = r27 ? "_l" : "byteLength", M = r27 ? "_o" : "byteOffset";
            function R(t, e, n) {
                var o, r, i, a = new Array(n), s = 8 * n - e - 1, l = (1 << s) - 1, c = l >> 1, u = 23 === e ? E(2, -24) - E(2, -77) : 0, f = 0, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for((t = T(t)) != t || t === w ? (r = t != t ? 1 : 0, o = l) : (o = B(C(t) / _), t * (i = E(2, -o)) < 1 && (o--, i *= 2), (t += o + c >= 1 ? u / i : u * E(2, 1 - c)) * i >= 2 && (o++, i /= 2), o + c >= l ? (r = 0, o = l) : o + c >= 1 ? (r = (t * i - 1) * E(2, e), o += c) : (r = t * E(2, c - 1) * E(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8);
                for(o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
                return a[--f] |= 128 * d, a;
            }
            function A(t, e, n) {
                var o, r = 8 * n - e - 1, i = (1 << r) - 1, a = i >> 1, s = r - 7, l = n - 1, c = t[l--], u = 127 & c;
                for(c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
                for(o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8);
                if (0 === u) u = 1 - a;
                else {
                    if (u === i) return o ? NaN : c ? -w : w;
                    o += E(2, e), u -= a;
                }
                return (c ? -1 : 1) * o * E(2, u - e);
            }
            function N(t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
            }
            function P(t) {
                return [
                    255 & t
                ];
            }
            function L(t) {
                return [
                    255 & t,
                    t >> 8 & 255
                ];
            }
            function D(t) {
                return [
                    255 & t,
                    t >> 8 & 255,
                    t >> 16 & 255,
                    t >> 24 & 255
                ];
            }
            function j(t) {
                return R(t, 52, 8);
            }
            function F(t) {
                return R(t, 23, 4);
            }
            function U(t, e, n) {
                v(t.prototype, e, {
                    get: function() {
                        return this[n];
                    }
                });
            }
            function H(t, e, n, o) {
                var r = p(+n);
                if (r + e > t[I]) throw x("Wrong index!");
                var i = t[O]._b, a = r + t[M], s = i.slice(a, a + e);
                return o ? s : s.reverse();
            }
            function z(t, e, n, o, r, i) {
                var a = p(+n);
                if (a + e > t[I]) throw x("Wrong index!");
                for(var s = t[O]._b, l = a + t[M], c = o(+r), u = 0; u < e; u++)s[l + u] = c[i ? u : e - u - 1];
            }
            if (a10.ABV) {
                if (!c5(function() {
                    b(1);
                }) || !c5(function() {
                    new b(-1);
                }) || c5(function() {
                    return new b, new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
                })) {
                    for(var W, Y = (b = function(t) {
                        return u5(this, b), new S(p(t));
                    }).prototype = S.prototype, V = h(S), X = 0; V.length > X;)(W = V[X++]) in b || s9(b, W, S[W]);
                    i26 || (Y.constructor = b);
                }
                var G = new m(new b(2)), K = m.prototype.setInt8;
                G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || l8(m.prototype, {
                    setInt8: function(t, e) {
                        K.call(this, t, e << 24 >> 24);
                    },
                    setUint8: function(t, e) {
                        K.call(this, t, e << 24 >> 24);
                    }
                }, !0);
            } else b = function(t) {
                u5(this, b, "ArrayBuffer");
                var e = p(t);
                this._b = g.call(new Array(e), 0), this[I] = e;
            }, m = function(t, e, n) {
                u5(this, m, "DataView"), u5(t, b, "DataView");
                var o = t[I], r = f(e);
                if (r < 0 || r > o) throw x("Wrong offset!");
                if (r + (n = void 0 === n ? o - r : d3(n)) > o) throw x("Wrong length!");
                this[O] = t, this[M] = r, this[I] = n;
            }, r27 && (U(b, "byteLength", "_l"), U(m, "buffer", "_b"), U(m, "byteLength", "_l"), U(m, "byteOffset", "_o")), l8(m.prototype, {
                getInt8: function(t) {
                    return H(this, 1, t)[0] << 24 >> 24;
                },
                getUint8: function(t) {
                    return H(this, 1, t)[0];
                },
                getInt16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16;
                },
                getUint16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0];
                },
                getInt32: function(t) {
                    return N(H(this, 4, t, arguments[1]));
                },
                getUint32: function(t) {
                    return N(H(this, 4, t, arguments[1])) >>> 0;
                },
                getFloat32: function(t) {
                    return A(H(this, 4, t, arguments[1]), 23, 4);
                },
                getFloat64: function(t) {
                    return A(H(this, 8, t, arguments[1]), 52, 8);
                },
                setInt8: function(t, e) {
                    z(this, 1, t, P, e);
                },
                setUint8: function(t, e) {
                    z(this, 1, t, P, e);
                },
                setInt16: function(t, e) {
                    z(this, 2, t, L, e, arguments[2]);
                },
                setUint16: function(t, e) {
                    z(this, 2, t, L, e, arguments[2]);
                },
                setInt32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setUint32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setFloat32: function(t, e) {
                    z(this, 4, t, F, e, arguments[2]);
                },
                setFloat64: function(t, e) {
                    z(this, 8, t, j, e, arguments[2]);
                }
            });
            y(b, "ArrayBuffer"), y(m, "DataView"), s9(m.prototype, a10.VIEW, !0), e92.ArrayBuffer = b, e92.DataView = m;
        },
        function(t151, e93) {
            function n(e94, o) {
                return t151.exports = n = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                }, n(e94, o);
            }
            t151.exports = n;
        },
        function(t152, e95, n68) {
            var o41, r, i;
            "undefined" != typeof globalThis || "undefined", r = [
                e95
            ], void 0 === (i = "function" == typeof (o41 = function(n69) {
                Object.defineProperty(n69, "__esModule", {
                    value: !0
                }), n69.default = void 0;
                var o = function(t) {
                    var e96 = {
                        get id () {
                            return t.id;
                        },
                        get name () {
                            return t.name;
                        },
                        get config () {
                            return t.config;
                        },
                        get holder () {
                            return t.holder;
                        },
                        get isEmpty () {
                            return t.isEmpty;
                        },
                        get selected () {
                            return t.selected;
                        },
                        set stretched (e){
                            t.stretched = e;
                        },
                        get stretched () {
                            return t.stretched;
                        },
                        call: function(e, n) {
                            return t.call(e, n);
                        },
                        save: function() {
                            return t.save();
                        },
                        validate: function(e) {
                            return t.validate(e);
                        }
                    };
                    Object.setPrototypeOf(this, e96);
                };
                n69.default = o, t152.exports = e95.default;
            }) ? o41.apply(e95, r) : o41) || (t152.exports = i);
        },
        function(t153, e97, n70) {
            var o42, r28, i27;
            "undefined" != typeof globalThis || "undefined", r28 = [
                e97,
                n70(42),
                n70(2),
                n70(3),
                n70(383)
            ], void 0 === (i27 = "function" == typeof (o42 = function(o43, r, i, a, s) {
                var l = n70(1);
                Object.defineProperty(o43, "__esModule", {
                    value: !0
                }), o43.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
                var c = function() {
                    function t154() {
                        (0, i.default)(this, t154), this.registeredShortcuts = new Map;
                    }
                    return (0, a.default)(t154, [
                        {
                            key: "add",
                            value: function(t) {
                                if (this.findShortcut(t.on, t.name)) throw Error("Shortcut ".concat(t.name, " is already registered for ").concat(t.on, ". Please remove it before add a new handler."));
                                var e = new s.default({
                                    name: t.name,
                                    on: t.on,
                                    callback: t.handler
                                }), n = this.registeredShortcuts.get(t.on) || [];
                                this.registeredShortcuts.set(t.on, [].concat((0, r.default)(n), [
                                    e
                                ]));
                            }
                        },
                        {
                            key: "remove",
                            value: function(t155, e) {
                                var n = this.findShortcut(t155, e);
                                if (n) {
                                    n.remove();
                                    var o = this.registeredShortcuts.get(t155);
                                    this.registeredShortcuts.set(t155, o.filter(function(t) {
                                        return t !== n;
                                    }));
                                }
                            }
                        },
                        {
                            key: "findShortcut",
                            value: function(t156, e) {
                                return (this.registeredShortcuts.get(t156) || []).find(function(t) {
                                    return t.name === e;
                                });
                            }
                        }
                    ]), t154;
                }();
                c.displayName = "Shortcuts";
                var u = new c;
                o43.default = u, t153.exports = e97.default;
            }) ? o42.apply(e97, r28) : o42) || (t153.exports = i27);
        },
        function(t, e, n) {
            t.exports = !n(18) && !n(11)(function() {
                return 7 != Object.defineProperty(n(85)("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t157, e98, n) {
            var o = n(10), r = n(17), i = n(45), a = n(86), s = n(19).f;
            t157.exports = function(t) {
                var e = r.Symbol || (r.Symbol = i ? {
                } : o.Symbol || {
                });
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: a.f(t)
                });
            };
        },
        function(t158, e99, n71) {
            var o = n71(26), r = n71(28), i = n71(69)(!1), a = n71(87)("IE_PROTO");
            t158.exports = function(t, e) {
                var n, s = r(t), l = 0, c = [];
                for(n in s)n != a && o(s, n) && c.push(n);
                for(; e.length > l;)o(s, n = e[l++]) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function(t159, e100, n72) {
            var o = n72(19), r = n72(12), i = n72(46);
            t159.exports = n72(18) ? Object.defineProperties : function(t, e) {
                r(t);
                for(var n, a = i(e), s = a.length, l = 0; s > l;)o.f(t, n = a[l++], e[n]);
                return t;
            };
        },
        function(t160, e, n) {
            var o = n(28), r = n(49).f, i = {
            }.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t160.exports.f = function(t161) {
                return a && "[object Window]" == i.call(t161) ? (function(t) {
                    try {
                        return r(t);
                    } catch (t162) {
                        return a.slice();
                    }
                })(t161) : r(o(t161));
            };
        },
        function(t163, e101, n73) {
            "use strict";
            var o44 = n73(18), r = n73(46), i = n73(70), a = n73(62), s = n73(20), l = n73(61), c6 = Object.assign;
            t163.exports = !c6 || n73(11)(function() {
                var t164 = {
                }, e = {
                }, n = Symbol(), o = "abcdefghijklmnopqrst";
                return t164[n] = 7, o.split("").forEach(function(t) {
                    e[t] = t;
                }), 7 != c6({
                }, t164)[n] || Object.keys(c6({
                }, e)).join("") != o;
            }) ? function(t, e) {
                for(var n = s(t), c = arguments.length, u = 1, f = i.f, d = a.f; c > u;)for(var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y;)p = v[y++], o44 && !d.call(h, p) || (n[p] = h[p]);
                return n;
            } : c6;
        },
        function(t165, e102) {
            t165.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
        },
        function(t166, e103, n74) {
            "use strict";
            var o45 = n74(32), r29 = n74(13), i = n74(121), a = [].slice, s10 = {
            }, l = function(t, e, n) {
                if (!(e in s10)) {
                    for(var o = [], r = 0; r < e; r++)o[r] = "a[" + r + "]";
                    s10[e] = Function("F,a", "return new F(" + o.join(",") + ")");
                }
                return s10[e](t, n);
            };
            t166.exports = Function.bind || function(t) {
                var e = o45(this), n = a.call(arguments, 1), s = function() {
                    var o = n.concat(a.call(arguments));
                    return this instanceof s ? l(e, o.length, o) : i(e, o, t);
                };
                return r29(e.prototype) && (s.prototype = e.prototype), s;
            };
        },
        function(t167, e104) {
            t167.exports = function(t, e, n) {
                var o = void 0 === n;
                switch(e.length){
                    case 0:
                        return o ? t() : t.call(n);
                    case 1:
                        return o ? t(e[0]) : t.call(n, e[0]);
                    case 2:
                        return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                    case 3:
                        return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                    case 4:
                        return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
                }
                return t.apply(n, e);
            };
        },
        function(t168, e105, n75) {
            var o = n75(10).parseInt, r = n75(54).trim, i = n75(91), a = /^[-+]?0[xX]/;
            t168.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(t, e) {
                var n = r(String(t), 3);
                return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
            } : o;
        },
        function(t169, e106, n76) {
            var o = n76(10).parseFloat, r = n76(54).trim;
            t169.exports = 1 / o(n76(91) + "-0") != -1 / 0 ? function(t) {
                var e = r(String(t), 3), n = o(e);
                return 0 === n && "-" == e.charAt(0) ? -0 : n;
            } : o;
        },
        function(t170, e107, n) {
            var o = n(37);
            t170.exports = function(t, e) {
                if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
                return +t;
            };
        },
        function(t171, e, n) {
            var o = n(13), r = Math.floor;
            t171.exports = function(t) {
                return !o(t) && isFinite(t) && r(t) === t;
            };
        },
        function(t172, e) {
            t172.exports = Math.log1p || function(t) {
                return (t = +t) > -0.00000001 && t < 0.00000001 ? t - t * t / 2 : Math.log(1 + t);
            };
        },
        function(t173, e108, n77) {
            "use strict";
            var o = n77(48), r = n77(43), i = n77(53), a = {
            };
            n77(27)(a, n77(14)("iterator"), function() {
                return this;
            }), t173.exports = function(t, e, n) {
                t.prototype = o(a, {
                    next: r(1, n)
                }), i(t, e + " Iterator");
            };
        },
        function(t174, e109, n78) {
            var o = n78(12);
            t174.exports = function(t, e, n, r) {
                try {
                    return r ? e(o(n)[0], n[1]) : e(n);
                } catch (e110) {
                    var i = t.return;
                    throw void 0 !== i && o(i.call(t)), e110;
                }
            };
        },
        function(t175, e111, n) {
            var o = n(281);
            t175.exports = function(t, e) {
                return new (o(t))(e);
            };
        },
        function(t176, e112, n79) {
            var o = n79(32), r = n79(20), i = n79(61), a = n79(16);
            t176.exports = function(t, e, n, s, l) {
                o(e);
                var c = r(t), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
                if (n < 2) for(;;){
                    if (d in u) {
                        s = u[d], d += p;
                        break;
                    }
                    if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
                }
                for(; l ? d >= 0 : f > d; d += p)d in u && (s = e(s, u[d], d, c));
                return s;
            };
        },
        function(t177, e113, n80) {
            "use strict";
            var o = n80(20), r = n80(47), i = n80(16);
            t177.exports = [].copyWithin || function(t, e) {
                var n = o(this), a = i(n.length), s = r(t, a), l = r(e, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
                for(l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
                return n;
            };
        },
        function(t178, e114) {
            t178.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                };
            };
        },
        function(t, e, n) {
            "use strict";
            var o = n(106);
            n(0)({
                target: "RegExp",
                proto: !0,
                forced: o !== /./.exec
            }, {
                exec: o
            });
        },
        function(t, e, n) {
            n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(73)
            });
        },
        function(t179, e115, n81) {
            "use strict";
            var o46, r30, i28, a11, s11 = n81(45), l9 = n81(10), c7 = n81(31), u6 = n81(63), f = n81(0), d = n81(13), p = n81(32), h = n81(57), v = n81(76), g = n81(64), y = n81(108).set, b = n81(301)(), m = n81(136), k = n81(302), x = n81(77), w = n81(137), S = l9.TypeError, T = l9.process, E = T && T.versions, B = E && E.v8 || "", C = l9.Promise, _ = "process" == u6(T), O = function() {
            }, I = r30 = m.f, M = !!function() {
                try {
                    var t180 = C.resolve(1), e = (t180.constructor = {
                    })[n81(14)("species")] = function(t) {
                        t(O, O);
                    };
                    return (_ || "function" == typeof PromiseRejectionEvent) && t180.then(O) instanceof e && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
                } catch (t) {
                }
            }(), R = function(t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e;
            }, A = function(t181, e116) {
                if (!t181._n) {
                    t181._n = !0;
                    var n82 = t181._c;
                    b(function() {
                        for(var o = t181._v, r = 1 == t181._s, i29 = 0, a12 = function(e) {
                            var n, i, a, s = r ? e.ok : e.fail, l = e.resolve, c = e.reject, u = e.domain;
                            try {
                                s ? (r || (2 == t181._h && L(t181), t181._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (i = R(n)) ? i.call(n, l, c) : l(n)) : c(o);
                            } catch (t) {
                                u && !a && u.exit(), c(t);
                            }
                        }; n82.length > i29;)a12(n82[i29++]);
                        t181._c = [], t181._n = !1, e116 && !t181._h && N(t181);
                    });
                }
            }, N = function(t) {
                y.call(l9, function() {
                    var e, n, o, r = t._v, i = P(t);
                    if (i && (e = k(function() {
                        _ ? T.emit("unhandledRejection", r, t) : (n = l9.onunhandledrejection) ? n({
                            promise: t,
                            reason: r
                        }) : (o = l9.console) && o.error && o.error("Unhandled promise rejection", r);
                    }), t._h = _ || P(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
                });
            }, P = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            }, L = function(t) {
                y.call(l9, function() {
                    var e;
                    _ ? T.emit("rejectionHandled", t) : (e = l9.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    });
                });
            }, D = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0));
            }, j = function(t182) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t182) throw S("Promise can't be resolved itself");
                        (e = R(t182)) ? b(function() {
                            var o = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t182, c7(j, o, 1), c7(D, o, 1));
                            } catch (t) {
                                D.call(o, t);
                            }
                        }) : (n._v = t182, n._s = 1, A(n, !1));
                    } catch (t) {
                        D.call({
                            _w: n,
                            _d: !1
                        }, t);
                    }
                }
            };
            M || (C = function(t) {
                h(this, C, "Promise", "_h"), p(t), o46.call(this);
                try {
                    t(c7(j, this, 1), c7(D, this, 1));
                } catch (t183) {
                    D.call(this, t183);
                }
            }, (o46 = function(t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
            }).prototype = n81(58)(C.prototype, {
                then: function(t, e) {
                    var n = I(g(this, C));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise;
                },
                catch: function(t) {
                    return this.then(void 0, t);
                }
            }), i28 = function() {
                var t = new o46;
                this.promise = t, this.resolve = c7(j, t, 1), this.reject = c7(D, t, 1);
            }, m.f = I = function(t) {
                return t === C || t === a11 ? new i28(t) : r30(t);
            }), f(f.G + f.W + f.F * !M, {
                Promise: C
            }), n81(53)(C, "Promise"), n81(56)("Promise"), a11 = n81(17).Promise, f(f.S + f.F * !M, "Promise", {
                reject: function(t) {
                    var e = I(this);
                    return (0, e.reject)(t), e.promise;
                }
            }), f(f.S + f.F * (s11 || !M), "Promise", {
                resolve: function(t) {
                    return w(s11 && this === a11 ? C : this, t);
                }
            }), f(f.S + f.F * !(M && n81(72)(function(t) {
                C.all(t).catch(O);
            })), "Promise", {
                all: function(t184) {
                    var e = this, n83 = I(e), o = n83.resolve, r = n83.reject, i30 = k(function() {
                        var n = [], i = 0, a = 1;
                        v(t184, !1, function(t185) {
                            var s = i++, l = !1;
                            n.push(void 0), a++, e.resolve(t185).then(function(t) {
                                l || (l = !0, n[s] = t, --a || o(n));
                            }, r);
                        }), --a || o(n);
                    });
                    return i30.e && r(i30.v), n83.promise;
                },
                race: function(t186) {
                    var e = this, n = I(e), o = n.reject, r = k(function() {
                        v(t186, !1, function(t) {
                            e.resolve(t).then(n.resolve, o);
                        });
                    });
                    return r.e && o(r.v), n.promise;
                }
            });
        },
        function(t187, e117, n84) {
            "use strict";
            var o47 = n84(32);
            function r(t188) {
                var e, n;
                this.promise = new t188(function(t, o) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = o;
                }), this.resolve = o47(e), this.reject = o47(n);
            }
            t187.exports.f = function(t) {
                return new r(t);
            };
        },
        function(t189, e118, n85) {
            var o = n85(12), r = n85(13), i = n85(136);
            t189.exports = function(t, e) {
                if (o(t), r(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise;
            };
        },
        function(t190, e119, n86) {
            "use strict";
            var o48 = n86(19).f, r31 = n86(48), i31 = n86(58), a = n86(31), s = n86(57), l = n86(76), c = n86(97), u7 = n86(132), f = n86(56), d = n86(18), p = n86(41).fastKey, h = n86(52), v = d ? "_s" : "size", g = function(t, e) {
                var n, o = p(e);
                if ("F" !== o) return t._i[o];
                for(n = t._f; n; n = n.n)if (n.k == e) return n;
            };
            t190.exports = {
                getConstructor: function(t191, e, n87, c) {
                    var u = t191(function(t, o) {
                        s(t, u, e, "_i"), t._t = e, t._i = r31(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n87, t[c], t);
                    });
                    return i31(u.prototype, {
                        clear: function() {
                            for(var t = h(this, e), n = t._i, o = t._f; o; o = o.n)o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                            t._f = t._l = void 0, t[v] = 0;
                        },
                        delete: function(t) {
                            var n = h(this, e), o = g(n, t);
                            if (o) {
                                var r = o.n, i = o.p;
                                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--;
                            }
                            return !!o;
                        },
                        forEach: function(t) {
                            h(this, e);
                            for(var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)for(o(n.v, n.k, this); n && n.r;)n = n.p;
                        },
                        has: function(t) {
                            return !!g(h(this, e), t);
                        }
                    }), d && o48(u.prototype, "size", {
                        get: function() {
                            return h(this, e)[v];
                        }
                    }), u;
                },
                def: function(t, e, n) {
                    var o, r, i = g(t, e);
                    return i ? i.v = n : (t._l = i = {
                        i: r = p(e, !0),
                        k: e,
                        v: n,
                        p: o = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t;
                },
                getEntry: g,
                setStrong: function(t192, e120, n88) {
                    c(t192, e120, function(t, n) {
                        this._t = h(t, e120), this._k = n, this._l = void 0;
                    }, function() {
                        for(var t = this._k, e = this._l; e && e.r;)e = e.p;
                        return this._t && (this._l = e = e ? e.n : this._t._f) ? u7(0, "keys" == t ? e.k : "values" == t ? e.v : [
                            e.k,
                            e.v
                        ]) : (this._t = void 0, u7(1));
                    }, n88 ? "entries" : "values", !n88, !0), f(e120);
                }
            };
        },
        function(t193, e121, n89) {
            "use strict";
            var o49 = n89(58), r = n89(41).getWeak, i = n89(12), a = n89(13), s = n89(57), l = n89(76), c8 = n89(36), u = n89(26), f = n89(52), d = c8(5), p = c8(6), h = 0, v = function(t) {
                return t._l || (t._l = new g);
            }, g = function() {
                this.a = [];
            }, y = function(t194, e) {
                return d(t194.a, function(t) {
                    return t[0] === e;
                });
            };
            g.prototype = {
                get: function(t) {
                    var e = y(this, t);
                    if (e) return e[1];
                },
                has: function(t) {
                    return !!y(this, t);
                },
                set: function(t, e) {
                    var n = y(this, t);
                    n ? n[1] = e : this.a.push([
                        t,
                        e
                    ]);
                },
                delete: function(t) {
                    var e122 = p(this.a, function(e) {
                        return e[0] === t;
                    });
                    return ~e122 && this.a.splice(e122, 1), !!~e122;
                }
            }, t193.exports = {
                getConstructor: function(t195, e, n90, i) {
                    var c = t195(function(t, o) {
                        s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n90, t[i], t);
                    });
                    return o49(c.prototype, {
                        delete: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
                        },
                        has: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i);
                        }
                    }), c;
                },
                def: function(t, e, n) {
                    var o = r(i(e), !0);
                    return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
                },
                ufstore: v
            };
        },
        function(t196, e123, n91) {
            var o = n91(33), r = n91(16);
            t196.exports = function(t) {
                if (void 0 === t) return 0;
                var e = o(t), n = r(e);
                if (e !== n) throw RangeError("Wrong length!");
                return n;
            };
        },
        function(t197, e124, n92) {
            var o = n92(49), r = n92(70), i = n92(12), a = n92(10).Reflect;
            t197.exports = a && a.ownKeys || function(t) {
                var e = o.f(i(t)), n = r.f;
                return n ? e.concat(n(t)) : e;
            };
        },
        function(t198, e125, n93) {
            var o = n93(16), r = n93(93), i = n93(38);
            t198.exports = function(t, e, n, a) {
                var s = String(i(t)), l = s.length, c = void 0 === n ? " " : String(n), u = o(e);
                if (u <= l || "" == c) return s;
                var f = u - l, d = r.call(c, Math.ceil(f / c.length));
                return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
            };
        },
        function(t199, e126, n94) {
            var o = n94(18), r = n94(46), i = n94(28), a = n94(62).f;
            t199.exports = function(t) {
                return function(e) {
                    for(var n, s = i(e), l = r(s), c = l.length, u = 0, f = []; c > u;)n = l[u++], o && !a.call(s, n) || f.push(t ? [
                        n,
                        s[n]
                    ] : s[n]);
                    return f;
                };
            };
        },
        function(t200, e127, n95) {
            var o50 = function(t201) {
                var e128 = Object.prototype, n96 = e128.hasOwnProperty, o51 = "function" == typeof Symbol ? Symbol : {
                }, r32 = o51.iterator || "@@iterator", i32 = o51.asyncIterator || "@@asyncIterator", a13 = o51.toStringTag || "@@toStringTag";
                function s12(t202, e129, n97, o52) {
                    var r33 = e129 && e129.prototype instanceof u8 ? e129 : u8, i33 = Object.create(r33.prototype), a14 = new w(o52 || []);
                    return i33._invoke = (function(t, e, n) {
                        var o = "suspendedStart";
                        return function(r, i) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === r) throw i;
                                return T();
                            }
                            for(n.method = r, n.arg = i;;){
                                var a = n.delegate;
                                if (a) {
                                    var s = m(a, n);
                                    if (s) {
                                        if (s === c9) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var u = l10(t, e, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", u.arg === c9) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === u.type && (o = "completed", n.method = "throw", n.arg = u.arg);
                            }
                        };
                    })(t202, n97, a14), i33;
                }
                function l10(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        };
                    } catch (t203) {
                        return {
                            type: "throw",
                            arg: t203
                        };
                    }
                }
                t201.wrap = s12;
                var c9 = {
                };
                function u8() {
                }
                function f5() {
                }
                function d() {
                }
                var p = {
                };
                p[r32] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, v = h && h(h(S([])));
                v && v !== e128 && n96.call(v, r32) && (p = v);
                var g = d.prototype = u8.prototype = Object.create(p);
                function y(t204) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(e) {
                        t204[e] = function(t) {
                            return this._invoke(e, t);
                        };
                    });
                }
                function b(t205, e) {
                    var o53;
                    this._invoke = function(r, i34) {
                        function a15() {
                            return new e(function(o54, a16) {
                                !function o(r, i, a, s) {
                                    var c = l10(t205[r], t205, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg, f = u.value;
                                        return f && "object" == typeof f && n96.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                            o("next", t, a, s);
                                        }, function(t) {
                                            o("throw", t, a, s);
                                        }) : e.resolve(f).then(function(t) {
                                            u.value = t, a(u);
                                        }, function(t) {
                                            return o("throw", t, a, s);
                                        });
                                    }
                                    s(c.arg);
                                }(r, i34, o54, a16);
                            });
                        }
                        return o53 = o53 ? o53.then(a15, a15) : a15();
                    };
                }
                function m(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, m(t, e), "throw" === e.method)) return c9;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return c9;
                    }
                    var o = l10(n, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, c9;
                    var r = o.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c9) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c9);
                }
                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                }
                function x(t) {
                    var e = t.completion || {
                    };
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function w(t) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], t.forEach(k, this), this.reset(!0);
                }
                function S(t) {
                    if (t) {
                        var e130 = t[r32];
                        if (e130) return e130.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1, i = function e() {
                                for(; ++o < t.length;)if (n96.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: T
                    };
                }
                function T() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return f5.prototype = g.constructor = d, d.constructor = f5, d[a13] = f5.displayName = "GeneratorFunction", t201.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f5 || "GeneratorFunction" === (e.displayName || e.name));
                }, t201.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, a13 in t || (t[a13] = "GeneratorFunction")), t.prototype = Object.create(g), t;
                }, t201.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, y(b.prototype), b.prototype[i32] = function() {
                    return this;
                }, t201.AsyncIterator = b, t201.async = function(e, n, o, r, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(s12(e, n, o, r), i);
                    return t201.isGeneratorFunction(n) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next();
                    });
                }, y(g), g[a13] = "Generator", g[r32] = function() {
                    return this;
                }, g.toString = function() {
                    return "[object Generator]";
                }, t201.keys = function(t) {
                    var e = [];
                    for(var n98 in t)e.push(n98);
                    return e.reverse(), function n() {
                        for(; e.length;){
                            var o = e.pop();
                            if (o in t) return n.value = o, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, t201.values = S, w.prototype = {
                    constructor: w,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for(var e in this)"t" === e.charAt(0) && n96.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function o55(n, o) {
                            return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), !!o;
                        }
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r], a = i.completion;
                            if ("root" === i.tryLoc) return o55("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n96.call(i, "catchLoc"), l = n96.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc) return o55(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o55(i.finallyLoc);
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return o55(i.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o55(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var r = this.tryEntries[o];
                            if (r.tryLoc <= this.prev && n96.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {
                        };
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c9) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c9;
                    },
                    finish: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), c9;
                        }
                    },
                    catch: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    x(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), c9;
                    }
                }, t201;
            }(t200.exports);
            try {
                regeneratorRuntime = o50;
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(o50);
            }
        },
        function(t206, e131, n99) {
            var o = n99(146);
            t206.exports = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            };
        },
        function(t207, e132) {
            t207.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                return o;
            };
        },
        function(t) {
            t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        },
        function(t208, e133, n100) {
            var o56, r34, i35;
            "undefined" != typeof globalThis || "undefined", r34 = [
                e133,
                n100(2),
                n100(5),
                n100(6),
                n100(4),
                n100(150)
            ], void 0 === (i35 = "function" == typeof (o56 = function(t209, e134, o57, r, i, a17) {
                var s13 = n100(1);
                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t209, "__esModule", {
                    value: !0
                }), t209.CriticalError = void 0, e134 = s13(e134), o57 = s13(o57), r = s13(r), i = s13(i);
                var c = function(t210) {
                    (0, o57.default)(s, t210);
                    var n, a = (n = s, function() {
                        var t, e = (0, i.default)(n);
                        if (l()) {
                            var o = (0, i.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, r.default)(this, t);
                    });
                    function s() {
                        return (0, e134.default)(this, s), a.apply(this, arguments);
                    }
                    return s;
                }((0, (a17 = s13(a17)).default)(Error));
                t209.CriticalError = c, c.displayName = "CriticalError";
            }) ? o56.apply(e133, r34) : o56) || (t208.exports = i35);
        },
        function(t211, e) {
            t211.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            };
        },
        function(t212, e135, n101) {
            var o = n101(4), r = n101(110), i = n101(371), a = n101(372);
            function s(e136) {
                var n = "function" == typeof Map ? new Map : void 0;
                return t212.exports = s = function(t) {
                    if (null === t || !i(t)) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(t)) return n.get(t);
                        n.set(t, e);
                    }
                    function e() {
                        return a(t, arguments, o(this).constructor);
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(e, t);
                }, s(e136);
            }
            t212.exports = s;
        },
        function(t213, e137, n102) {
            var o58, r35, i36;
            "undefined" != typeof globalThis || "undefined", r35 = [
                e137,
                n102(2),
                n102(3),
                n102(7)
            ], void 0 === (i36 = "function" == typeof (o58 = function(o59, r36, i37, a18) {
                var s = n102(1);
                Object.defineProperty(o59, "__esModule", {
                    value: !0
                }), o59.default = void 0, r36 = s(r36), i37 = s(i37);
                var l = function() {
                    function t214() {
                        (0, r36.default)(this, t214), this.subscribers = {
                        };
                    }
                    return (0, i37.default)(t214, [
                        {
                            key: "on",
                            value: function(t, e) {
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
                            }
                        },
                        {
                            key: "once",
                            value: function(t, e) {
                                var n = this;
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(function o(r) {
                                    var i = e(r), a = n.subscribers[t].indexOf(o);
                                    return -1 !== a && n.subscribers[t].splice(a, 1), i;
                                });
                            }
                        },
                        {
                            key: "emit",
                            value: function(t215, e138) {
                                !(0, a18.isEmpty)(this.subscribers) && this.subscribers[t215] && this.subscribers[t215].reduce(function(t, e) {
                                    return e(t) || t;
                                }, e138);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                for(var n = 0; n < this.subscribers[t].length; n++)if (this.subscribers[t][n] === e) {
                                    delete this.subscribers[t][n];
                                    break;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.subscribers = null;
                            }
                        }
                    ]), t214;
                }();
                o59.default = l, l.displayName = "EventsDispatcher", t213.exports = e137.default;
            }) ? o58.apply(e137, r35) : o58) || (t213.exports = i36);
        },
        function(t216, e139, n103) {
            var o60, r37, i38;
            "undefined" != typeof globalThis || "undefined", r37 = [
                e139,
                n103(2),
                n103(3),
                n103(5),
                n103(6),
                n103(4),
                n103(7),
                n103(111),
                n103(9)
            ], void 0 === (i38 = "function" == typeof (o60 = function(o61, r38, i39, a, s, l, c, u, f) {
                var d = n103(8), p = n103(1);
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o61, "__esModule", {
                    value: !0
                }), o61.default = void 0, r38 = p(r38), i39 = p(i39), a = p(a), s = p(s), l = p(l), c = d(c), u = p(u);
                var v = function(t217) {
                    (0, a.default)(o62, t217);
                    var e140, n104 = (e140 = o62, function() {
                        var t, n = (0, l.default)(e140);
                        if (h()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o62() {
                        var t;
                        return (0, r38.default)(this, o62), (t = n104.apply(this, arguments)).insert = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.defaultBlock, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            }, o = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0), r = arguments.length > 4 ? arguments[4] : void 0;
                            t.Editor.BlockManager.insert({
                                tool: e,
                                data: n,
                                index: o,
                                needToFocus: r
                            });
                        }, t.update = function(e, n) {
                            var o = t.Editor.BlockManager, r = o.getBlockById(e);
                            if (r) {
                                var i = o.getBlockIndex(r);
                                o.insert({
                                    id: r.id,
                                    tool: r.name,
                                    data: n,
                                    index: i,
                                    replace: !0,
                                    tunes: r.tunes
                                });
                            } else c.log("blocks.update(): Block with passed id was not found", "warn");
                        }, t;
                    }
                    return (0, i39.default)(o62, [
                        {
                            key: "getBlocksCount",
                            value: function() {
                                return this.Editor.BlockManager.blocks.length;
                            }
                        },
                        {
                            key: "getCurrentBlockIndex",
                            value: function() {
                                return this.Editor.BlockManager.currentBlockIndex;
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockByIndex(t);
                                if (void 0 !== e) return new u.default(e);
                                c.logLabeled("There is no block at index `" + t + "`", "warn");
                            }
                        },
                        {
                            key: "getById",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockById(t);
                                return void 0 === e ? (c.logLabeled("There is no block with id `" + t + "`", "warn"), null) : new u.default(e);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                c.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1);
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                this.Editor.BlockManager.move(t, e), this.Editor.Toolbar.move(!1);
                            }
                        },
                        {
                            key: "delete",
                            value: function(t) {
                                try {
                                    this.Editor.BlockManager.removeBlock(t);
                                } catch (t218) {
                                    return void c.logLabeled(t218, "warn");
                                }
                                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "render",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
                            }
                        },
                        {
                            key: "renderFromHTML",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
                            }
                        },
                        {
                            key: "stretchBlock",
                            value: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                c.deprecationAssert(!0, "blocks.stretchBlock()", "BlockAPI");
                                var n = this.Editor.BlockManager.getBlockByIndex(t);
                                n && (n.stretched = e);
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function() {
                                c.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clear: function() {
                                        return t.clear();
                                    },
                                    render: function(e) {
                                        return t.render(e);
                                    },
                                    renderFromHTML: function(e) {
                                        return t.renderFromHTML(e);
                                    },
                                    delete: function(e) {
                                        return t.delete(e);
                                    },
                                    swap: function(e, n) {
                                        return t.swap(e, n);
                                    },
                                    move: function(e, n) {
                                        return t.move(e, n);
                                    },
                                    getBlockByIndex: function(e) {
                                        return t.getBlockByIndex(e);
                                    },
                                    getById: function(e) {
                                        return t.getById(e);
                                    },
                                    getCurrentBlockIndex: function() {
                                        return t.getCurrentBlockIndex();
                                    },
                                    getBlocksCount: function() {
                                        return t.getBlocksCount();
                                    },
                                    stretchBlock: function(e) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        return t.stretchBlock(e, n);
                                    },
                                    insertNewBlock: function() {
                                        return t.insertNewBlock();
                                    },
                                    insert: this.insert,
                                    update: this.update
                                };
                            }
                        }
                    ]), o62;
                }((f = p(f)).default);
                o61.default = v, v.displayName = "BlocksAPI", t216.exports = e139.default;
            }) ? o60.apply(e139, r37) : o60) || (t216.exports = i38);
        },
        function(t219, e141, n105) {
            var o63, r39, i40;
            "undefined" != typeof globalThis || "undefined", r39 = [
                e141,
                n105(2),
                n105(3),
                n105(5),
                n105(6),
                n105(4),
                n105(9)
            ], void 0 === (i40 = "function" == typeof (o63 = function(o64, r, i, a, s, l, c) {
                var u = n105(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o64, "__esModule", {
                    value: !0
                }), o64.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t220) {
                    (0, a.default)(o65, t220);
                    var e142, n106 = (e142 = o65, function() {
                        var t, n = (0, l.default)(e142);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o65() {
                        var t;
                        return (0, r.default)(this, o65), (t = n106.apply(this, arguments)).setToFirstBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
                        }, t.setToLastBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
                        }, t.setToPreviousBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
                        }, t.setToNextBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
                        }, t.setToBlock = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
                        }, t.focus = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
                        }, t;
                    }
                    return (0, i.default)(o65, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    setToFirstBlock: this.setToFirstBlock,
                                    setToLastBlock: this.setToLastBlock,
                                    setToPreviousBlock: this.setToPreviousBlock,
                                    setToNextBlock: this.setToNextBlock,
                                    setToBlock: this.setToBlock,
                                    focus: this.focus
                                };
                            }
                        }
                    ]), o65;
                }((c = u(c)).default);
                o64.default = d, d.displayName = "CaretAPI", t219.exports = e141.default;
            }) ? o63.apply(e141, r39) : o63) || (t219.exports = i40);
        },
        function(t221, e143, n107) {
            var o66, r40, i41;
            "undefined" != typeof globalThis || "undefined", r40 = [
                e143,
                n107(2),
                n107(3),
                n107(5),
                n107(6),
                n107(4),
                n107(9)
            ], void 0 === (i41 = "function" == typeof (o66 = function(o67, r, i, a, s, l, c) {
                var u = n107(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o67, "__esModule", {
                    value: !0
                }), o67.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t222) {
                    (0, a.default)(o68, t222);
                    var e144, n108 = (e144 = o68, function() {
                        var t, n = (0, l.default)(e144);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o68() {
                        return (0, r.default)(this, o68), n108.apply(this, arguments);
                    }
                    return (0, i.default)(o68, [
                        {
                            key: "on",
                            value: function(t, e) {
                                this.eventsDispatcher.on(t, e);
                            }
                        },
                        {
                            key: "emit",
                            value: function(t, e) {
                                this.eventsDispatcher.emit(t, e);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                this.eventsDispatcher.off(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    emit: function(e, n) {
                                        return t.emit(e, n);
                                    },
                                    off: function(e, n) {
                                        return t.off(e, n);
                                    },
                                    on: function(e, n) {
                                        return t.on(e, n);
                                    }
                                };
                            }
                        }
                    ]), o68;
                }((c = u(c)).default);
                o67.default = d, d.displayName = "EventsAPI", t221.exports = e143.default;
            }) ? o66.apply(e143, r40) : o66) || (t221.exports = i41);
        },
        function(t223, e145, n109) {
            var o69, r41, i42;
            "undefined" != typeof globalThis || "undefined", r41 = [
                e145,
                n109(2),
                n109(3),
                n109(5),
                n109(6),
                n109(4),
                n109(59),
                n109(7),
                n109(9)
            ], void 0 === (i42 = "function" == typeof (o69 = function(o70, r, i, a, s, l, c, u, f) {
                var d = n109(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o70, "__esModule", {
                    value: !0
                }), o70.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c);
                var h = function(t224) {
                    (0, a.default)(o71, t224);
                    var e146, n110 = (e146 = o71, function() {
                        var t, n = (0, l.default)(e146);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o71() {
                        return (0, r.default)(this, o71), n110.apply(this, arguments);
                    }
                    return (0, i.default)(o71, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    t: function(e) {
                                        return c.default.t(o71.getNamespace(t), e);
                                    }
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    t: function() {
                                        (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                                    }
                                };
                            }
                        }
                    ], [
                        {
                            key: "getNamespace",
                            value: function(t) {
                                return t.isTune() ? "blockTunes.".concat(t.name) : "tools.".concat(t.name);
                            }
                        }
                    ]), o71;
                }((f = d(f)).default);
                o70.default = h, h.displayName = "I18nAPI", t223.exports = e145.default;
            }) ? o69.apply(e145, r41) : o69) || (t223.exports = i42);
        },
        function(t225, e147, n111) {
            var o72, r42, i43;
            "undefined" != typeof globalThis || "undefined", r42 = [
                e147,
                n111(2),
                n111(3),
                n111(5),
                n111(6),
                n111(4),
                n111(9)
            ], void 0 === (i43 = "function" == typeof (o72 = function(o73, r, i, a, s, l, c) {
                var u = n111(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o73, "__esModule", {
                    value: !0
                }), o73.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t226) {
                    (0, a.default)(o74, t226);
                    var e, n112 = (e = o74, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o74() {
                        return (0, r.default)(this, o74), n112.apply(this, arguments);
                    }
                    return (0, i.default)(o74, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.InlineToolbar.tryToShow();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    }
                                };
                            }
                        }
                    ]), o74;
                }((c = u(c)).default);
                o73.default = d, d.displayName = "InlineToolbarAPI", t225.exports = e147.default;
            }) ? o72.apply(e147, r42) : o72) || (t225.exports = i43);
        },
        function(t227, e148, n113) {
            var o75, r43, i44;
            "undefined" != typeof globalThis || "undefined", r43 = [
                e148,
                n113(2),
                n113(3),
                n113(5),
                n113(6),
                n113(4),
                n113(9)
            ], void 0 === (i44 = "function" == typeof (o75 = function(o76, r44, i, a, s, l, c) {
                var u = n113(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o76, "__esModule", {
                    value: !0
                }), o76.default = void 0, r44 = u(r44), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t228) {
                    (0, a.default)(o77, t228);
                    var e149, n114 = (e149 = o77, function() {
                        var t, n = (0, l.default)(e149);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o77() {
                        return (0, r44.default)(this, o77), n114.apply(this, arguments);
                    }
                    return (0, i.default)(o77, [
                        {
                            key: "on",
                            value: function(t, e, n, o) {
                                this.listeners.on(t, e, n, o);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e, n, o) {
                                this.listeners.off(t, e, n, o);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    on: function(e, n, o, r) {
                                        return t.on(e, n, o, r);
                                    },
                                    off: function(e, n, o, r) {
                                        return t.off(e, n, o, r);
                                    }
                                };
                            }
                        }
                    ]), o77;
                }((c = u(c)).default);
                o76.default = d, d.displayName = "ListenersAPI", t227.exports = e148.default;
            }) ? o75.apply(e148, r43) : o75) || (t227.exports = i44);
        },
        function(t229, e150, n115) {
            var o78, r45, i45;
            "undefined" != typeof globalThis || "undefined", r45 = [
                e150,
                n115(2),
                n115(3),
                n115(5),
                n115(6),
                n115(4),
                n115(376),
                n115(9)
            ], void 0 === (i45 = "function" == typeof (o78 = function(o79, r, i46, a19, s, l, c, u) {
                var f = n115(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o79, "__esModule", {
                    value: !0
                }), o79.default = void 0, r = f(r), i46 = f(i46), a19 = f(a19), s = f(s), l = f(l), c = f(c);
                var p = function(t230) {
                    (0, a19.default)(o80, t230);
                    var e151, n116 = (e151 = o80, function() {
                        var t, n = (0, l.default)(e151);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o80(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o80), (e = n116.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).notifier = new c.default, e;
                    }
                    return (0, i46.default)(o80, [
                        {
                            key: "show",
                            value: function(t) {
                                return this.notifier.show(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e) {
                                        return t.show(e);
                                    }
                                };
                            }
                        }
                    ]), o80;
                }((u = f(u)).default);
                o79.default = p, p.displayName = "NotifierAPI", t229.exports = e150.default;
            }) ? o78.apply(e150, r45) : o78) || (t229.exports = i45);
        },
        function(t231, e152, n117) {
            var o81, r46, i47;
            "undefined" != typeof globalThis || "undefined", r46 = [
                e152,
                n117(2),
                n117(3),
                n117(5),
                n117(6),
                n117(4),
                n117(9)
            ], void 0 === (i47 = "function" == typeof (o81 = function(o82, r, i, a, s, l, c) {
                var u = n117(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o82, "__esModule", {
                    value: !0
                }), o82.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t232) {
                    (0, a.default)(o83, t232);
                    var e153, n118 = (e153 = o83, function() {
                        var t, n = (0, l.default)(e153);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o83() {
                        return (0, r.default)(this, o83), n118.apply(this, arguments);
                    }
                    return (0, i.default)(o83, [
                        {
                            key: "toggle",
                            value: function(t) {
                                return this.Editor.ReadOnly.toggle(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    toggle: function(e) {
                                        return t.toggle(e);
                                    },
                                    isEnabled: this.isEnabled
                                };
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.Editor.ReadOnly.isEnabled;
                            }
                        }
                    ]), o83;
                }((c = u(c)).default);
                o82.default = d, d.displayName = "ReadOnlyAPI", t231.exports = e152.default;
            }) ? o81.apply(e152, r46) : o81) || (t231.exports = i47);
        },
        function(t233, e154, n119) {
            var o84, r47, i48;
            "undefined" != typeof globalThis || "undefined", r47 = [
                e154,
                n119(2),
                n119(3),
                n119(5),
                n119(6),
                n119(4),
                n119(9),
                n119(65)
            ], void 0 === (i48 = "function" == typeof (o84 = function(o85, r, i, a, s, l, c, u) {
                var f = n119(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o85, "__esModule", {
                    value: !0
                }), o85.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t234) {
                    (0, a.default)(o86, t234);
                    var e155, n120 = (e155 = o86, function() {
                        var t, n = (0, l.default)(e155);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o86() {
                        return (0, r.default)(this, o86), n120.apply(this, arguments);
                    }
                    return (0, i.default)(o86, [
                        {
                            key: "clean",
                            value: function(t, e) {
                                return (0, u.clean)(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clean: function(e, n) {
                                        return t.clean(e, n);
                                    }
                                };
                            }
                        }
                    ]), o86;
                }((c = f(c)).default);
                o85.default = p, p.displayName = "SanitizerAPI", t233.exports = e154.default;
            }) ? o84.apply(e154, r47) : o84) || (t233.exports = i48);
        },
        function(t235, e156, n121) {
            var o87, r48, i49;
            "undefined" != typeof globalThis || "undefined", r48 = [
                e156,
                n121(2),
                n121(3),
                n121(5),
                n121(6),
                n121(4),
                n121(7),
                n121(9)
            ], void 0 === (i49 = "function" == typeof (o87 = function(o88, r, i, a, s, l, c, u) {
                var f = n121(8), d = n121(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o88, "__esModule", {
                    value: !0
                }), o88.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = f(c);
                var h = function(t236) {
                    (0, a.default)(o89, t236);
                    var e, n122 = (e = o89, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o89() {
                        return (0, r.default)(this, o89), n122.apply(this, arguments);
                    }
                    return (0, i.default)(o89, [
                        {
                            key: "save",
                            value: function() {
                                var t = "Editor's content can not be saved in read-only mode";
                                return this.Editor.ReadOnly.isEnabled ? (c.logLabeled(t, "warn"), Promise.reject(new Error(t))) : this.Editor.Saver.save();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    save: function() {
                                        return t.save();
                                    }
                                };
                            }
                        }
                    ]), o89;
                }((u = d(u)).default);
                o88.default = h, h.displayName = "SaverAPI", t235.exports = e156.default;
            }) ? o87.apply(e156, r48) : o87) || (t235.exports = i49);
        },
        function(t237, e157, n123) {
            var o90, r49, i50;
            "undefined" != typeof globalThis || "undefined", r49 = [
                e157,
                n123(2),
                n123(3),
                n123(5),
                n123(6),
                n123(4),
                n123(25),
                n123(9)
            ], void 0 === (i50 = "function" == typeof (o90 = function(o91, r, i, a, s, l, c, u) {
                var f = n123(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o91, "__esModule", {
                    value: !0
                }), o91.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t238) {
                    (0, a.default)(o92, t238);
                    var e158, n124 = (e158 = o92, function() {
                        var t, n = (0, l.default)(e158);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o92() {
                        return (0, r.default)(this, o92), n124.apply(this, arguments);
                    }
                    return (0, i.default)(o92, [
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                return (new c.default).findParentTag(t, e);
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                (new c.default).expandToTag(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    findParentTag: function(e, n) {
                                        return t.findParentTag(e, n);
                                    },
                                    expandToTag: function(e) {
                                        return t.expandToTag(e);
                                    }
                                };
                            }
                        }
                    ]), o92;
                }((u = f(u)).default);
                o91.default = p, p.displayName = "SelectionAPI", t237.exports = e157.default;
            }) ? o90.apply(e157, r49) : o90) || (t237.exports = i50);
        },
        function(t239, e159, n125) {
            var o93, r50, i51;
            "undefined" != typeof globalThis || "undefined", r50 = [
                e159,
                n125(2),
                n125(3),
                n125(5),
                n125(6),
                n125(4),
                n125(9)
            ], void 0 === (i51 = "function" == typeof (o93 = function(o94, r, i, a, s, l, c) {
                var u = n125(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o94, "__esModule", {
                    value: !0
                }), o94.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t240) {
                    (0, a.default)(o95, t240);
                    var e, n126 = (e = o95, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o95() {
                        return (0, r.default)(this, o95), n126.apply(this, arguments);
                    }
                    return (0, i.default)(o95, [
                        {
                            key: "classes",
                            get: function() {
                                return {
                                    block: "cdx-block",
                                    inlineToolButton: "ce-inline-tool",
                                    inlineToolButtonActive: "ce-inline-tool--active",
                                    input: "cdx-input",
                                    loader: "cdx-loader",
                                    button: "cdx-button",
                                    settingsButton: "cdx-settings-button",
                                    settingsButtonActive: "cdx-settings-button--active"
                                };
                            }
                        }
                    ]), o95;
                }((c = u(c)).default);
                o94.default = d, d.displayName = "StylesAPI", t239.exports = e159.default;
            }) ? o93.apply(e159, r50) : o93) || (t239.exports = i51);
        },
        function(t241, e160, n127) {
            var o96, r51, i52;
            "undefined" != typeof globalThis || "undefined", r51 = [
                e160,
                n127(2),
                n127(3),
                n127(5),
                n127(6),
                n127(4),
                n127(9),
                n127(7)
            ], void 0 === (i52 = "function" == typeof (o96 = function(o97, r, i, a, s, l, c, u) {
                var f = n127(8), d = n127(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o97, "__esModule", {
                    value: !0
                }), o97.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t242) {
                    (0, a.default)(o98, t242);
                    var e161, n128 = (e161 = o98, function() {
                        var t, n = (0, l.default)(e161);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o98() {
                        return (0, r.default)(this, o98), n128.apply(this, arguments);
                    }
                    return (0, i.default)(o98, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.Toolbar.open();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "toggleBlockSettings",
                            value: function(t) {
                                if (-1 !== this.Editor.BlockManager.currentBlockIndex) {
                                    var e = null != t ? t : !this.Editor.BlockSettings.opened;
                                    t !== this.Editor.BlockSettings.opened && (e ? (this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close());
                                } else u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    },
                                    toggleBlockSettings: function(e) {
                                        return t.toggleBlockSettings(e);
                                    }
                                };
                            }
                        }
                    ]), o98;
                }(c.default);
                o97.default = h, h.displayName = "ToolbarAPI", t241.exports = e160.default;
            }) ? o96.apply(e160, r51) : o96) || (t241.exports = i52);
        },
        function(t243, e162, n129) {
            var o99, r52, i53;
            "undefined" != typeof globalThis || "undefined", r52 = [
                e162,
                n129(2),
                n129(3),
                n129(5),
                n129(6),
                n129(4),
                n129(9),
                n129(82)
            ], void 0 === (i53 = "function" == typeof (o99 = function(o100, r, i54, a20, s, l, c, u) {
                var f = n129(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o100, "__esModule", {
                    value: !0
                }), o100.default = void 0, r = f(r), i54 = f(i54), a20 = f(a20), s = f(s), l = f(l), c = f(c), u = f(u);
                var p = function(t244) {
                    (0, a20.default)(o101, t244);
                    var e163, n130 = (e163 = o101, function() {
                        var t, n = (0, l.default)(e163);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o101(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o101), (e = n130.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new u.default, e;
                    }
                    return (0, i54.default)(o101, [
                        {
                            key: "destroy",
                            value: function() {
                                this.tooltip.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.tooltip.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.tooltip.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.tooltip.onHover(t, e, n);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e, n, o) {
                                        return t.show(e, n, o);
                                    },
                                    hide: function() {
                                        return t.hide();
                                    },
                                    onHover: function(e, n, o) {
                                        return t.onHover(e, n, o);
                                    }
                                };
                            }
                        }
                    ]), o101;
                }(c.default);
                o100.default = p, p.displayName = "TooltipAPI", t243.exports = e162.default;
            }) ? o99.apply(e162, r52) : o99) || (t243.exports = i53);
        },
        function(t245, e164, n131) {
            var o102, r53, i55;
            "undefined" != typeof globalThis || "undefined", r53 = [
                e164,
                n131(2),
                n131(3),
                n131(5),
                n131(6),
                n131(4),
                n131(9),
                n131(7),
                n131(25),
                n131(60)
            ], void 0 === (i55 = "function" == typeof (o102 = function(o103, r54, i56, a21, s14, l11, c, u, f, d) {
                var p = n131(8), h = n131(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o103, "__esModule", {
                    value: !0
                }), o103.default = void 0, r54 = h(r54), i56 = h(i56), a21 = h(a21), s14 = h(s14), l11 = h(l11), c = h(c), u = p(u), f = h(f), d = h(d);
                var g = function(t246) {
                    (0, a21.default)(o104, t246);
                    var e165, n132 = (e165 = o104, function() {
                        var t, n = (0, l11.default)(e165);
                        if (v()) {
                            var o = (0, l11.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s14.default)(this, t);
                    });
                    function o104() {
                        return (0, r54.default)(this, o104), n132.apply(this, arguments);
                    }
                    return (0, i56.default)(o104, [
                        {
                            key: "keydown",
                            value: function(t) {
                                switch(this.beforeKeydownProcessing(t), t.keyCode){
                                    case u.keyCodes.BACKSPACE:
                                        this.backspace(t);
                                        break;
                                    case u.keyCodes.ENTER:
                                        this.enter(t);
                                        break;
                                    case u.keyCodes.DOWN:
                                    case u.keyCodes.RIGHT:
                                        this.arrowRightAndDown(t);
                                        break;
                                    case u.keyCodes.UP:
                                    case u.keyCodes.LEFT:
                                        this.arrowLeftAndUp(t);
                                        break;
                                    case u.keyCodes.TAB:
                                        this.tabPressed(t);
                                }
                            }
                        },
                        {
                            key: "beforeKeydownProcessing",
                            value: function(t) {
                                this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t)));
                            }
                        },
                        {
                            key: "keyup",
                            value: function(t) {
                                t.shiftKey || this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "tabPressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t);
                                var e = this.Editor, n = e.BlockManager, o = e.InlineToolbar, r = e.ConversionToolbar, i = n.currentBlock;
                                if (i) {
                                    var a = i.tool.isDefault && i.isEmpty, s = !i.isEmpty && r.opened, l = !i.isEmpty && !f.default.isCollapsed && o.opened;
                                    a ? this.activateToolbox() : s || l || this.activateBlockSettings();
                                }
                            }
                        },
                        {
                            key: "dragOver",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0;
                            }
                        },
                        {
                            key: "dragLeave",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1;
                            }
                        },
                        {
                            key: "handleCommandC",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                e.anyBlockSelected && e.copySelectedBlocks(t);
                            }
                        },
                        {
                            key: "handleCommandX",
                            value: function(t) {
                                var e166 = this.Editor, n = e166.BlockSelection, o = e166.BlockManager, r = e166.Caret;
                                n.anyBlockSelected && n.copySelectedBlocks(t).then(function() {
                                    var e = o.removeSelectedBlocks(), i = o.insertDefaultBlockAtIndex(e, !0);
                                    r.setToBlock(i, r.positions.START), n.clearSelection(t);
                                });
                            }
                        },
                        {
                            key: "enter",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.UI;
                                if (!n.currentBlock.tool.isLineBreaksEnabled && !(o.someToolbarOpened && o.someFlipperButtonFocused || t.shiftKey)) {
                                    var r = this.Editor.BlockManager.currentBlock;
                                    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), r.tool.isDefault && r.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault();
                                }
                            }
                        },
                        {
                            key: "backspace",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.currentBlock, a = i.tool;
                                if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                                    t.preventDefault();
                                    var s = n.currentBlockIndex;
                                    return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t);
                                }
                                if (!a.isLineBreaksEnabled || r.isAtStart) {
                                    var l = 0 === n.currentBlockIndex;
                                    r.isAtStart && f.default.isCollapsed && i.currentInput === i.firstInput && !l && (t.preventDefault(), this.mergeBlocks());
                                }
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: function() {
                                var t = this.Editor, e = t.BlockManager, n = t.Caret, o = t.Toolbar, r = e.previousBlock, i = e.currentBlock;
                                if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
                                n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then(function() {
                                    n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close();
                                });
                            }
                        },
                        {
                            key: "arrowRightAndDown",
                            value: function(t) {
                                var e = this, n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);
                                if (!this.Editor.UI.someToolbarOpened || !n) {
                                    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                    var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                                    t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t.keyCode === u.keyCodes.DOWN || t.keyCode === u.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t.preventDefault() : u.delay(function() {
                                        e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                    }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                                }
                            }
                        },
                        {
                            key: "arrowLeftAndUp",
                            value: function(t) {
                                var e = this;
                                if (this.Editor.UI.someToolbarOpened) {
                                    if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
                                    this.Editor.UI.closeAllToolbars();
                                }
                                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                                t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : ((t.keyCode === u.keyCodes.UP || t.keyCode === u.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t.preventDefault() : u.delay(function() {
                                    e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                            }
                        },
                        {
                            key: "needToolbarClosing",
                            value: function(t) {
                                var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbox.opened, n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened, o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i = t.keyCode === u.keyCodes.TAB;
                                return !(t.shiftKey || i || e || n || o || r);
                            }
                        },
                        {
                            key: "activateToolbox",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open();
                            }
                        },
                        {
                            key: "activateBlockSettings",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
                            }
                        }
                    ]), o104;
                }(c.default);
                o103.default = g, g.displayName = "BlockEvents", t245.exports = e164.default;
            }) ? o102.apply(e164, r53) : o102) || (t245.exports = i55);
        },
        function(t247, e167, n133) {
            var o105, r55, i57;
            "undefined" != typeof globalThis || "undefined", r55 = [
                e167,
                n133(23),
                n133(24),
                n133(2),
                n133(3),
                n133(5),
                n133(6),
                n133(4),
                n133(66),
                n133(9),
                n133(15),
                n133(7),
                n133(382),
                n133(111)
            ], void 0 === (i57 = "function" == typeof (o105 = function(o106, r56, i58, a22, s15, l12, c10, u9, f6, d4, p3, h2, v1, g) {
                var y4 = n133(8), b = n133(1);
                function m() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o106, "__esModule", {
                    value: !0
                }), o106.default = void 0, r56 = b(r56), i58 = b(i58), a22 = b(a22), s15 = b(s15), l12 = b(l12), c10 = b(c10), u9 = b(u9), f6 = y4(f6), d4 = b(d4), p3 = b(p3), h2 = y4(h2), v1 = b(v1), g = b(g);
                var k = function(t248) {
                    (0, l12.default)(y, t248);
                    var e168, n134, o107, d5 = (e168 = y, function() {
                        var t, n = (0, u9.default)(e168);
                        if (m()) {
                            var o = (0, u9.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c10.default)(this, t);
                    });
                    function y() {
                        var t;
                        return (0, a22.default)(this, y), (t = d5.apply(this, arguments))._currentBlockIndex = -1, t._blocks = null, t;
                    }
                    return (0, s15.default)(y, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this, e169 = new v1.default(this.Editor.UI.nodes.redactor);
                                this._blocks = new Proxy(e169, {
                                    set: v1.default.set,
                                    get: v1.default.get
                                }), this.listeners.on(document, "copy", function(e) {
                                    return t.Editor.BlockEvents.handleCommandC(e);
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "composeBlock",
                            value: function(t) {
                                var e = t.tool, n = t.data, o = void 0 === n ? {
                                } : n, r = t.id, i = void 0 === r ? void 0 : r, a = t.tunes, s = void 0 === a ? {
                                } : a, l = this.Editor.ReadOnly.isEnabled, c = this.Editor.Tools.blockTools.get(e), u = new f6.default({
                                    id: i,
                                    data: o,
                                    tool: c,
                                    api: this.Editor.API,
                                    readOnly: l,
                                    tunesData: s
                                });
                                return l || this.bindBlockEvents(u), u;
                            }
                        },
                        {
                            key: "insert",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                }, e = t.id, n = void 0 === e ? void 0 : e, o = t.tool, r = void 0 === o ? this.config.defaultBlock : o, i = t.data, a = void 0 === i ? {
                                } : i, s = t.index, l = t.needToFocus, c = void 0 === l || l, u = t.replace, f = void 0 !== u && u, d = t.tunes, p = void 0 === d ? {
                                } : d, h = s;
                                void 0 === h && (h = this.currentBlockIndex + (f ? 0 : 1));
                                var v = this.composeBlock({
                                    id: n,
                                    tool: r,
                                    data: a,
                                    tunes: p
                                });
                                return this._blocks.insert(h, v, f), this.blockDidMutated(v), c ? this.currentBlockIndex = h : h <= this.currentBlockIndex && this.currentBlockIndex++, v;
                            }
                        },
                        {
                            key: "replace",
                            value: function(t) {
                                var e = t.tool, n = void 0 === e ? this.config.defaultBlock : e, o = t.data, r = void 0 === o ? {
                                } : o;
                                return this.insert({
                                    tool: n,
                                    data: r,
                                    index: this.currentBlockIndex,
                                    replace: !0
                                });
                            }
                        },
                        {
                            key: "paste",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.insert({
                                    tool: t,
                                    replace: n
                                });
                                try {
                                    o.call(f6.BlockToolAPI.ON_PASTE, e);
                                } catch (e170) {
                                    h2.log("".concat(t, ": onPaste callback call is failed"), "error", e170);
                                }
                                return o;
                            }
                        },
                        {
                            key: "insertDefaultBlockAtIndex",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.composeBlock({
                                    tool: this.config.defaultBlock
                                });
                                return this._blocks[t] = n, this.blockDidMutated(n), e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
                            }
                        },
                        {
                            key: "insertAtEnd",
                            value: function() {
                                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: (o107 = (0, i58.default)(r56.default.mark(function t249(e, n) {
                                var o, i;
                                return r56.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (o = this._blocks.indexOf(n), !n.isEmpty) {
                                                t.next = 3;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return t.next = 5, n.data;
                                        case 5:
                                            if (i = t.sent, h2.isEmpty(i)) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.next = 9, e.mergeWith(i);
                                        case 9:
                                            this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
                                        case 11:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t249, this);
                            })), function(t, e) {
                                return o107.apply(this, arguments);
                            })
                        },
                        {
                            key: "removeBlock",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                                if (!this.validateIndex(t)) throw new Error("Can't find a Block to remove");
                                var e = this._blocks[t];
                                e.destroy(), this._blocks.remove(t), this.blockDidMutated(e), this.currentBlockIndex >= t && this.currentBlockIndex--, this.blocks.length ? 0 === t && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
                            }
                        },
                        {
                            key: "removeSelectedBlocks",
                            value: function() {
                                for(var t, e = this.blocks.length - 1; e >= 0; e--)this.blocks[e].selected && (this.removeBlock(e), t = e);
                                return t;
                            }
                        },
                        {
                            key: "removeAllBlocks",
                            value: function() {
                                for(var t = this.blocks.length - 1; t >= 0; t--)this._blocks.remove(t);
                                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
                            }
                        },
                        {
                            key: "split",
                            value: function() {
                                var t = this.Editor.Caret.extractFragmentFromCaretPosition(), e = p3.default.make("div");
                                e.appendChild(t);
                                var n = {
                                    text: p3.default.isEmpty(e) ? "" : e.innerHTML
                                };
                                return this.insert({
                                    data: n
                                });
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                return this._blocks[t];
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(t) {
                                return this._blocks.indexOf(t);
                            }
                        },
                        {
                            key: "getBlockById",
                            value: function(t) {
                                return this._blocks.array.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        },
                        {
                            key: "getBlock",
                            value: function(t) {
                                p3.default.isElement(t) || (t = t.parentNode);
                                var e = this._blocks.nodes, n = t.closest(".".concat(f6.default.CSS.wrapper)), o = e.indexOf(n);
                                if (o >= 0) return this._blocks[o];
                            }
                        },
                        {
                            key: "highlightCurrentNode",
                            value: function() {
                                this.clearFocused(), this.currentBlock.focused = !0;
                            }
                        },
                        {
                            key: "clearFocused",
                            value: function() {
                                this.blocks.forEach(function(t) {
                                    t.focused = !1;
                                });
                            }
                        },
                        {
                            key: "setCurrentBlockByChildNode",
                            value: function(t) {
                                p3.default.isElement(t) || (t = t.parentNode);
                                var e = t.closest(".".concat(f6.default.CSS.wrapper));
                                if (e) {
                                    var n = e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                                    if (null == n ? void 0 : n.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock.updateCurrentInput(), this.currentBlock;
                                }
                            }
                        },
                        {
                            key: "getBlockByChildNode",
                            value: function(t250) {
                                p3.default.isElement(t250) || (t250 = t250.parentNode);
                                var e = t250.closest(".".concat(f6.default.CSS.wrapper));
                                return this.blocks.find(function(t) {
                                    return t.holder === e;
                                });
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                this._blocks.swap(t, e), this.currentBlockIndex = e;
                            }
                        },
                        {
                            key: "move",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                                isNaN(t) || isNaN(e) ? h2.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t) && this.validateIndex(e) ? (this._blocks.move(t, e), this.currentBlockIndex = t, this.blockDidMutated(this.currentBlock)) : h2.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
                            }
                        },
                        {
                            key: "dropPointer",
                            value: function() {
                                this.currentBlockIndex = -1, this.clearFocused();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this._blocks.removeAll(), this.dropPointer(), t && this.insert(), this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "destroy",
                            value: (n134 = (0, i58.default)(r56.default.mark(function t251() {
                                return r56.default.wrap(function(t252) {
                                    for(;;)switch(t252.prev = t252.next){
                                        case 0:
                                            return t252.next = 2, Promise.all(this.blocks.map(function(t) {
                                                return t.destroy();
                                            }));
                                        case 2:
                                        case "end":
                                            return t252.stop();
                                    }
                                }, t251, this);
                            })), function() {
                                return n134.apply(this, arguments);
                            })
                        },
                        {
                            key: "bindBlockEvents",
                            value: function(t253) {
                                var e = this, n = this.Editor.BlockEvents;
                                this.readOnlyMutableListeners.on(t253.holder, "keydown", function(t) {
                                    n.keydown(t);
                                }), this.readOnlyMutableListeners.on(t253.holder, "keyup", function(t) {
                                    n.keyup(t);
                                }), this.readOnlyMutableListeners.on(t253.holder, "dragover", function(t) {
                                    n.dragOver(t);
                                }), this.readOnlyMutableListeners.on(t253.holder, "dragleave", function(t) {
                                    n.dragLeave(t);
                                }), t253.on("didMutated", function(t) {
                                    return e.blockDidMutated(t);
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(document, "cut", function(e) {
                                    return t.Editor.BlockEvents.handleCommandX(e);
                                }), this.blocks.forEach(function(e) {
                                    t.bindBlockEvents(e);
                                });
                            }
                        },
                        {
                            key: "validateIndex",
                            value: function(t) {
                                return !(t < 0 || t >= this._blocks.length);
                            }
                        },
                        {
                            key: "blockDidMutated",
                            value: function(t) {
                                return this.Editor.ModificationsObserver.onChange(new g.default(t)), t;
                            }
                        },
                        {
                            key: "currentBlockIndex",
                            get: function() {
                                return this._currentBlockIndex;
                            },
                            set: function(t) {
                                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
                            }
                        },
                        {
                            key: "firstBlock",
                            get: function() {
                                return this._blocks[0];
                            }
                        },
                        {
                            key: "lastBlock",
                            get: function() {
                                return this._blocks[this._blocks.length - 1];
                            }
                        },
                        {
                            key: "currentBlock",
                            get: function() {
                                return this._blocks[this.currentBlockIndex];
                            }
                        },
                        {
                            key: "nextBlock",
                            get: function() {
                                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
                            }
                        },
                        {
                            key: "nextContentfulBlock",
                            get: function() {
                                return this.blocks.slice(this.currentBlockIndex + 1).find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousContentfulBlock",
                            get: function() {
                                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousBlock",
                            get: function() {
                                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
                            }
                        },
                        {
                            key: "blocks",
                            get: function() {
                                return this._blocks.array;
                            }
                        },
                        {
                            key: "isEditorEmpty",
                            get: function() {
                                return this.blocks.every(function(t) {
                                    return t.isEmpty;
                                });
                            }
                        }
                    ]), y;
                }(d4.default);
                o106.default = k, k.displayName = "BlockManager", t247.exports = e167.default;
            }) ? o105.apply(e167, r55) : o105) || (t247.exports = i57);
        },
        function(t254, e171, n135) {
            var o = n135(381);
            function r57(e172, n136, i59) {
                return "undefined" != typeof Reflect && Reflect.get ? t254.exports = r57 = Reflect.get : t254.exports = r57 = function(t, e, n) {
                    var r = o(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value;
                    }
                }, r57(e172, n136, i59 || e172);
            }
            t254.exports = r57;
        },
        function(t255, e173, n137) {
            var o108, r58, i60;
            "undefined" != typeof globalThis || "undefined", r58 = [
                e173,
                n137(2),
                n137(3),
                n137(5),
                n137(6),
                n137(4),
                n137(9),
                n137(7),
                n137(15),
                n137(112),
                n137(25),
                n137(65)
            ], void 0 === (i60 = "function" == typeof (o108 = function(o109, r59, i61, a23, s16, l13, c, u, f, d, p, h) {
                var v = n137(8), g = n137(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o109, "__esModule", {
                    value: !0
                }), o109.default = void 0, r59 = g(r59), i61 = g(i61), a23 = g(a23), s16 = g(s16), l13 = g(l13), c = g(c), u = v(u), f = g(f), d = g(d), p = g(p);
                var b = function(t256) {
                    (0, a23.default)(o110, t256);
                    var e174, n138 = (e174 = o110, function() {
                        var t, n = (0, l13.default)(e174);
                        if (y()) {
                            var o = (0, l13.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s16.default)(this, t);
                    });
                    function o110() {
                        var t;
                        return (0, r59.default)(this, o110), (t = n138.apply(this, arguments)).anyBlockSelectedCache = null, t.needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t;
                    }
                    return (0, i61.default)(o110, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this;
                                this.selection = new p.default, d.default.add({
                                    name: "CMD+A",
                                    handler: function(e) {
                                        var n = t.Editor, o = n.BlockManager;
                                        if (n.ReadOnly.isEnabled) return e.preventDefault(), void t.selectAllBlocks();
                                        o.currentBlock && t.handleCommandA(e);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                p.default.get().removeAllRanges(), this.allBlocksSelected = !1;
                            }
                        },
                        {
                            key: "unSelectBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager;
                                (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1, this.clearCache();
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function(t) {
                                var e175 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.Editor, o = n.BlockManager, r = n.Caret, i = n.RectangleSelection;
                                this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
                                var a = t && t instanceof KeyboardEvent, s = a && u.isPrintableKey(t.keyCode);
                                if (this.anyBlockSelected && a && s && !p.default.isSelectionExists) {
                                    var l = o.removeSelectedBlocks();
                                    o.insertDefaultBlockAtIndex(l, !0), r.setToBlock(o.currentBlock), u.delay(function() {
                                        var e = t.key;
                                        r.insertContentAtCaretPosition(e.length > 1 ? "" : e);
                                    }, 20)();
                                }
                                this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !i.isRectActivated() ? (e175 && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
                            }
                        },
                        {
                            key: "copySelectedBlocks",
                            value: function(t257) {
                                var e = this;
                                t257.preventDefault();
                                var n139 = f.default.make("div");
                                this.selectedBlocks.forEach(function(t) {
                                    var o = (0, h.clean)(t.holder.innerHTML, e.sanitizerConfig), r = f.default.make("p");
                                    r.innerHTML = o, n139.appendChild(r);
                                });
                                var o111 = Array.from(n139.childNodes).map(function(t) {
                                    return t.textContent;
                                }).join("\n\n"), r60 = n139.innerHTML;
                                return t257.clipboardData.setData("text/plain", o111), t257.clipboardData.setData("text/html", r60), Promise.all(this.selectedBlocks.map(function(t) {
                                    return t.save();
                                })).then(function(n) {
                                    try {
                                        t257.clipboardData.setData(e.Editor.Paste.MIME_TYPE, JSON.stringify(n));
                                    } catch (t) {
                                    }
                                });
                            }
                        },
                        {
                            key: "selectBlockByIndex",
                            value: function(t) {
                                var e, n = this.Editor.BlockManager;
                                n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), p.default.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "clearCache",
                            value: function() {
                                this.anyBlockSelectedCache = null;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                d.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
                            }
                        },
                        {
                            key: "handleCommandA",
                            value: function(t) {
                                if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
                                    var e = this.Editor.BlockManager.getBlock(t.target).inputs;
                                    e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
                                } else this.readyToBlockSelection = !0;
                            }
                        },
                        {
                            key: "selectAllBlocks",
                            value: function() {
                                this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "sanitizerConfig",
                            get: function() {
                                return {
                                    p: {
                                    },
                                    h1: {
                                    },
                                    h2: {
                                    },
                                    h3: {
                                    },
                                    h4: {
                                    },
                                    h5: {
                                    },
                                    h6: {
                                    },
                                    ol: {
                                    },
                                    ul: {
                                    },
                                    li: {
                                    },
                                    br: !0,
                                    img: {
                                        src: !0,
                                        width: !0,
                                        height: !0
                                    },
                                    a: {
                                        href: !0
                                    },
                                    b: {
                                    },
                                    i: {
                                    },
                                    u: {
                                    }
                                };
                            }
                        },
                        {
                            key: "allBlocksSelected",
                            get: function() {
                                return this.Editor.BlockManager.blocks.every(function(t) {
                                    return !0 === t.selected;
                                });
                            },
                            set: function(t) {
                                this.Editor.BlockManager.blocks.forEach(function(e) {
                                    e.selected = t;
                                }), this.clearCache();
                            }
                        },
                        {
                            key: "anyBlockSelected",
                            get: function() {
                                var t258 = this.Editor.BlockManager;
                                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = t258.blocks.some(function(t) {
                                    return !0 === t.selected;
                                })), this.anyBlockSelectedCache;
                            }
                        },
                        {
                            key: "selectedBlocks",
                            get: function() {
                                return this.Editor.BlockManager.blocks.filter(function(t) {
                                    return t.selected;
                                });
                            }
                        }
                    ]), o110;
                }(c.default);
                o109.default = b, b.displayName = "BlockSelection", t255.exports = e173.default;
            }) ? o108.apply(e173, r58) : o108) || (t255.exports = i60);
        },
        function(t259, e176, n140) {
            var o112, r61, i62;
            "undefined" != typeof globalThis || "undefined", r61 = [
                e176,
                n140(2),
                n140(3),
                n140(5),
                n140(6),
                n140(4),
                n140(25),
                n140(9),
                n140(15),
                n140(7)
            ], void 0 === (i62 = "function" == typeof (o112 = function(o113, r62, i63, a24, s17, l, c, u, f, d) {
                var p = n140(8), h = n140(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o113, "__esModule", {
                    value: !0
                }), o113.default = void 0, r62 = h(r62), i63 = h(i63), a24 = h(a24), s17 = h(s17), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
                var g = function(t260) {
                    (0, a24.default)(o114, t260);
                    var e177, n141 = (e177 = o114, function() {
                        var t, n = (0, l.default)(e177);
                        if (v()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s17.default)(this, t);
                    });
                    function o114() {
                        return (0, r62.default)(this, o114), n141.apply(this, arguments);
                    }
                    return (0, i63.default)(o114, [
                        {
                            key: "setToBlock",
                            value: function(t) {
                                var e, n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = this.Editor.BlockManager;
                                switch(o){
                                    case this.positions.START:
                                        e = t.firstInput;
                                        break;
                                    case this.positions.END:
                                        e = t.lastInput;
                                        break;
                                    default:
                                        e = t.currentInput;
                                }
                                if (e) {
                                    var a = f.default.getDeepestNode(e, o === this.positions.END), s = f.default.getContentLength(a);
                                    switch(!0){
                                        case o === this.positions.START:
                                            r = 0;
                                            break;
                                        case o === this.positions.END:
                                        case r > s:
                                            r = s;
                                    }
                                    d.delay(function() {
                                        n.set(a, r);
                                    }, 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e;
                                }
                            }
                        },
                        {
                            key: "setToInput",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = this.Editor.BlockManager.currentBlock, r = f.default.getDeepestNode(t);
                                switch(e){
                                    case this.positions.START:
                                        this.set(r, 0);
                                        break;
                                    case this.positions.END:
                                        this.set(r, f.default.getContentLength(r));
                                        break;
                                    default:
                                        n && this.set(r, n);
                                }
                                o.currentInput = t;
                            }
                        },
                        {
                            key: "set",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = c.default.setCursor(t, e), o = n.top, r = n.bottom, i = window, a = i.innerHeight;
                                o < 0 && window.scrollBy(0, o), r > a && window.scrollBy(0, r - a);
                            }
                        },
                        {
                            key: "setToTheLastBlock",
                            value: function() {
                                var t = this.Editor.BlockManager.lastBlock;
                                if (t) {
                                    if (t.tool.isDefault && t.isEmpty) this.setToBlock(t);
                                    else {
                                        var e = this.Editor.BlockManager.insertAtEnd();
                                        this.setToBlock(e);
                                    }
                                }
                            }
                        },
                        {
                            key: "extractFragmentFromCaretPosition",
                            value: function() {
                                var t = c.default.get();
                                if (t.rangeCount) {
                                    var e = t.getRangeAt(0), n = this.Editor.BlockManager.currentBlock.currentInput;
                                    if (e.deleteContents(), n) {
                                        if (f.default.isNativeInput(n)) {
                                            var o = n, r = document.createDocumentFragment(), i = o.value.substring(0, o.selectionStart), a = o.value.substring(o.selectionStart);
                                            return r.textContent = a, o.value = i, r;
                                        }
                                        var s = e.cloneRange();
                                        return s.selectNodeContents(n), s.setStart(e.endContainer, e.endOffset), s.extractContents();
                                    }
                                }
                            }
                        },
                        {
                            key: "navigateNext",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.nextContentfulBlock, o = e.nextInput, r = this.isAtEnd, i = n;
                                if (!i && !o) {
                                    if (e.tool.isDefault || !r) return !1;
                                    i = t.insertAtEnd();
                                }
                                return !!r && (o ? this.setToInput(o, this.positions.START) : this.setToBlock(i, this.positions.START), !0);
                            }
                        },
                        {
                            key: "navigatePrevious",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.previousContentfulBlock;
                                if (!e) return !1;
                                var o = e.previousInput;
                                return !(!n && !o || !this.isAtStart || (o ? this.setToInput(o, this.positions.END) : this.setToBlock(n, this.positions.END), 0));
                            }
                        },
                        {
                            key: "createShadow",
                            value: function(t) {
                                var e = document.createElement("span");
                                e.classList.add(o114.CSS.shadowCaret), t.insertAdjacentElement("beforeend", e);
                            }
                        },
                        {
                            key: "restoreCaret",
                            value: function(t261) {
                                var e = t261.querySelector(".".concat(o114.CSS.shadowCaret));
                                e && ((new c.default).expandToTag(e), setTimeout(function() {
                                    var t = document.createRange();
                                    t.selectNode(e), t.extractContents();
                                }, 50));
                            }
                        },
                        {
                            key: "insertContentAtCaretPosition",
                            value: function(t262) {
                                var e = document.createDocumentFragment(), n = document.createElement("div"), o = c.default.get(), r = c.default.range;
                                n.innerHTML = t262, Array.from(n.childNodes).forEach(function(t) {
                                    return e.appendChild(t);
                                }), 0 === e.childNodes.length && e.appendChild(new Text);
                                var i = e.lastChild;
                                r.deleteContents(), r.insertNode(e);
                                var a = document.createRange();
                                a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a);
                            }
                        },
                        {
                            key: "getHigherLevelSiblings",
                            value: function(t, e) {
                                for(var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;)n = n.parentNode;
                                for(var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];)n = n[r], o.push(n);
                                return o;
                            }
                        },
                        {
                            key: "positions",
                            get: function() {
                                return {
                                    START: "start",
                                    END: "end",
                                    DEFAULT: "default"
                                };
                            }
                        },
                        {
                            key: "isAtStart",
                            get: function() {
                                var t263 = c.default.get(), e178 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n142 = t263.focusNode;
                                if (f.default.isNativeInput(e178)) return 0 === e178.selectionEnd;
                                if (!t263.anchorNode) return !1;
                                var o115 = n142.textContent.search(/\S/);
                                -1 === o115 && (o115 = 0);
                                var r = t263.focusOffset;
                                return n142.nodeType !== Node.TEXT_NODE && n142.childNodes.length && (n142.childNodes[r] ? (n142 = n142.childNodes[r], r = 0) : r = (n142 = n142.childNodes[r - 1]).textContent.length), !(!f.default.isLineBreakTag(e178) && !f.default.isEmpty(e178) || !this.getHigherLevelSiblings(n142, "left").every(function(t) {
                                    var e = f.default.isLineBreakTag(t), n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]), o = e || n;
                                    return f.default.isEmpty(t) && !o;
                                }) || r !== o115) || null === e178 || n142 === e178 && r <= o115;
                            }
                        },
                        {
                            key: "isAtEnd",
                            get: function() {
                                var t264 = c.default.get(), e179 = t264.focusNode, n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                                if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                                if (!t264.focusNode) return !1;
                                var o = t264.focusOffset;
                                if (e179.nodeType !== Node.TEXT_NODE && e179.childNodes.length && (e179.childNodes[o - 1] ? o = (e179 = e179.childNodes[o - 1]).textContent.length : (e179 = e179.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
                                    var r = this.getHigherLevelSiblings(e179, "right");
                                    if (r.every(function(t, e) {
                                        return e === r.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t);
                                    }) && o === e179.textContent.length) return !0;
                                }
                                var i = n.textContent.replace(/\s+$/, "");
                                return e179 === n && o >= i.length;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    shadowCaret: "cdx-shadow-caret"
                                };
                            }
                        }
                    ]), o114;
                }(u.default);
                o113.default = g, g.displayName = "Caret", t259.exports = e176.default;
            }) ? o112.apply(e176, r61) : o112) || (t259.exports = i62);
        },
        function(t265, e180, n143) {
            var o116, r63, i64;
            "undefined" != typeof globalThis || "undefined", r63 = [
                e180,
                n143(23),
                n143(24),
                n143(2),
                n143(3),
                n143(5),
                n143(6),
                n143(4),
                n143(9),
                n143(25),
                n143(7)
            ], void 0 === (i64 = "function" == typeof (o116 = function(o117, r64, i65, a25, s18, l14, c11, u, f7, d, p) {
                var h = n143(8), v = n143(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o117, "__esModule", {
                    value: !0
                }), o117.default = void 0, r64 = v(r64), i65 = v(i65), a25 = v(a25), s18 = v(s18), l14 = v(l14), c11 = v(c11), u = v(u), f7 = v(f7), d = v(d), p = h(p);
                var y = function(t266) {
                    (0, l14.default)(f, t266);
                    var e181, n144, o118 = (e181 = f, function() {
                        var t, n = (0, u.default)(e181);
                        if (g()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c11.default)(this, t);
                    });
                    function f() {
                        var t;
                        return (0, a25.default)(this, f), (t = o118.apply(this, arguments)).onMouseUp = function() {
                            t.listeners.off(document, "mouseover", t.onMouseOver), t.listeners.off(document, "mouseup", t.onMouseUp);
                        }, t.onMouseOver = function(e) {
                            var n = t.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock, a = o.getBlockByChildNode(e.target);
                            if (i && a && a !== i) {
                                if (i === t.firstSelectedBlock) return d.default.get().removeAllRanges(), i.selected = !0, a.selected = !0, void r.clearCache();
                                if (a === t.firstSelectedBlock) return i.selected = !1, a.selected = !1, void r.clearCache();
                                t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(i, a), t.lastSelectedBlock = a;
                            }
                        }, t;
                    }
                    return (0, s18.default)(f, [
                        {
                            key: "prepare",
                            value: (n144 = (0, i65.default)(r64.default.mark(function t267() {
                                var e = this;
                                return r64.default.wrap(function(t268) {
                                    for(;;)switch(t268.prev = t268.next){
                                        case 0:
                                            this.listeners.on(document, "mousedown", function(t) {
                                                e.enableCrossBlockSelection(t);
                                            });
                                        case 1:
                                        case "end":
                                            return t268.stop();
                                    }
                                }, t267, this);
                            })), function() {
                                return n144.apply(this, arguments);
                            })
                        },
                        {
                            key: "watchSelection",
                            value: function(t) {
                                if (t.button === p.mouseButtons.LEFT) {
                                    var e = this.Editor.BlockManager;
                                    this.firstSelectedBlock = e.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                                }
                            }
                        },
                        {
                            key: "toggleBlockSelectedState",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.Editor, n = e.BlockManager, o = e.BlockSelection;
                                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), d.default.get().removeAllRanges());
                                var r = n.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1), i = n.blocks[r];
                                i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
                                    block: "nearest"
                                }));
                            }
                        },
                        {
                            key: "clear",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.blocks.indexOf(this.firstSelectedBlock), a = n.blocks.indexOf(this.lastSelectedBlock);
                                if (o.anyBlockSelected && i > -1 && a > -1) {
                                    if (t && t instanceof KeyboardEvent) switch(t.keyCode){
                                        case p.keyCodes.DOWN:
                                        case p.keyCodes.RIGHT:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                            break;
                                        case p.keyCodes.UP:
                                        case p.keyCodes.LEFT:
                                            r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                            break;
                                        default:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    }
                                    else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                }
                                this.firstSelectedBlock = this.lastSelectedBlock = null;
                            }
                        },
                        {
                            key: "enableCrossBlockSelection",
                            value: function(t) {
                                var e = this.Editor.UI;
                                d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), e.nodes.redactor.contains(t.target) ? this.watchSelection(t) : this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "toggleBlocksSelectedState",
                            value: function(t, e) {
                                for(var n = this.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.blocks.indexOf(t), a = o.blocks.indexOf(e), s = t.selected !== e.selected, l = Math.min(i, a); l <= Math.max(i, a); l++){
                                    var c = o.blocks[l];
                                    c !== this.firstSelectedBlock && c !== (s ? t : e) && (o.blocks[l].selected = !o.blocks[l].selected, r.clearCache());
                                }
                            }
                        },
                        {
                            key: "isCrossBlockSelectionStarted",
                            get: function() {
                                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
                            }
                        }
                    ]), f;
                }(f7.default);
                o117.default = y, y.displayName = "CrossBlockSelection", t265.exports = e180.default;
            }) ? o116.apply(e180, r63) : o116) || (t265.exports = i64);
        },
        function(t269, e182, n145) {
            var o119, r65, i66;
            "undefined" != typeof globalThis || "undefined", r65 = [
                e182,
                n145(23),
                n145(24),
                n145(2),
                n145(3),
                n145(5),
                n145(6),
                n145(4),
                n145(25),
                n145(9)
            ], void 0 === (i66 = "function" == typeof (o119 = function(o120, r, i67, a26, s19, l15, c, u, f, d6) {
                var p = n145(1);
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o120, "__esModule", {
                    value: !0
                }), o120.default = void 0, r = p(r), i67 = p(i67), a26 = p(a26), s19 = p(s19), l15 = p(l15), c = p(c), u = p(u), f = p(f);
                var v = function(t270) {
                    (0, l15.default)(d, t270);
                    var e183, n146, o121 = (e183 = d, function() {
                        var t, n = (0, u.default)(e183);
                        if (h()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function d() {
                        var t;
                        return (0, a26.default)(this, d), (t = o121.apply(this, arguments)).isStartedAtEditor = !1, t;
                    }
                    return (0, s19.default)(d, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e184 = this.Editor.UI;
                                this.readOnlyMutableListeners.on(e184.nodes.holder, "drop", function() {
                                    var e185 = (0, i67.default)(r.default.mark(function e186(n) {
                                        return r.default.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return e.next = 2, t.processDrop(n);
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e186);
                                    }));
                                    return function(t) {
                                        return e185.apply(this, arguments);
                                    };
                                }(), !0), this.readOnlyMutableListeners.on(e184.nodes.holder, "dragstart", function() {
                                    t.processDragStart();
                                }), this.readOnlyMutableListeners.on(e184.nodes.holder, "dragover", function(e) {
                                    t.processDragOver(e);
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "processDrop",
                            value: (n146 = (0, i67.default)(r.default.mark(function t271(e) {
                                var n, o, i, a, s, l;
                                return r.default.wrap(function(t272) {
                                    for(;;)switch(t272.prev = t272.next){
                                        case 0:
                                            return n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach(function(t) {
                                                t.dropTarget = !1;
                                            }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1, (s = o.setCurrentBlockByChildNode(e.target)) ? this.Editor.Caret.setToBlock(s, i.positions.END) : (l = o.setCurrentBlockByChildNode(o.lastBlock.holder), this.Editor.Caret.setToBlock(l, i.positions.END)), t272.next = 9, a.processDataTransfer(e.dataTransfer, !0);
                                        case 9:
                                        case "end":
                                            return t272.stop();
                                    }
                                }, t271, this);
                            })), function(t) {
                                return n146.apply(this, arguments);
                            })
                        },
                        {
                            key: "processDragStart",
                            value: function() {
                                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "processDragOver",
                            value: function(t) {
                                t.preventDefault();
                            }
                        }
                    ]), d;
                }((d6 = p(d6)).default);
                o120.default = v, v.displayName = "DragNDrop", t269.exports = e182.default;
            }) ? o119.apply(e182, r65) : o119) || (t269.exports = i66);
        },
        function(t273, e187, n147) {
            var o122, r66, i68;
            "undefined" != typeof globalThis || "undefined", r66 = [
                e187,
                n147(2),
                n147(3),
                n147(5),
                n147(6),
                n147(4),
                n147(9),
                n147(7)
            ], void 0 === (i68 = "function" == typeof (o122 = function(o123, r, i, a, s, l, c, u) {
                var f = n147(8), d = n147(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o123, "__esModule", {
                    value: !0
                }), o123.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t274) {
                    (0, a.default)(o124, t274);
                    var e, n148 = (e = o124, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o124() {
                        var t;
                        return (0, r.default)(this, o124), (t = n148.apply(this, arguments)).disabled = !1, t;
                    }
                    return (0, i.default)(o124, [
                        {
                            key: "enable",
                            value: function() {
                                this.disabled = !1;
                            }
                        },
                        {
                            key: "disable",
                            value: function() {
                                this.disabled = !0;
                            }
                        },
                        {
                            key: "onChange",
                            value: function(t) {
                                !this.disabled && u.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, t);
                            }
                        }
                    ]), o124;
                }(c.default);
                o123.default = h, h.displayName = "ModificationsObserver", t273.exports = e187.default;
            }) ? o122.apply(e187, r66) : o122) || (t273.exports = i68);
        },
        function(t275, e188, n149) {
            var o125, r67, i69;
            "undefined" != typeof globalThis || "undefined", r67 = [
                e188,
                n149(42),
                n149(30),
                n149(23),
                n149(24),
                n149(2),
                n149(3),
                n149(5),
                n149(6),
                n149(4),
                n149(9),
                n149(15),
                n149(7),
                n149(65)
            ], void 0 === (i69 = "function" == typeof (o125 = function(o126, r68, i70, a27, s20, l16, c12, u10, f8, d7, p4, h, v, g) {
                var y5 = n149(8), b2 = n149(1);
                function m() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o126, "__esModule", {
                    value: !0
                }), o126.default = void 0, r68 = b2(r68), i70 = b2(i70), a27 = b2(a27), s20 = b2(s20), l16 = b2(l16), c12 = b2(c12), u10 = b2(u10), f8 = b2(f8), d7 = b2(d7), p4 = b2(p4), h = b2(h), v = y5(v);
                var k2 = function(t276) {
                    (0, u10.default)(T, t276);
                    var e189, n150, o127, p5, y, b, k, x, w, S = (e189 = T, function() {
                        var t, n = (0, d7.default)(e189);
                        if (m()) {
                            var o = (0, d7.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f8.default)(this, t);
                    });
                    function T() {
                        var t277;
                        return (0, l16.default)(this, T), (t277 = S.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t277.toolsTags = {
                        }, t277.tagsByTool = {
                        }, t277.toolsPatterns = [], t277.toolsFiles = {
                        }, t277.exceptionList = [], t277.processTool = function(e) {
                            try {
                                var n = e.create({
                                }, {
                                }, !1);
                                if (!1 === e.pasteConfig) return void t277.exceptionList.push(e.name);
                                if (!v.isFunction(n.onPaste)) return;
                                t277.getTagsConfig(e), t277.getFilesConfig(e), t277.getPatternsConfig(e);
                            } catch (t) {
                                v.log("Paste handling for «".concat(e.name, "» Tool hasn't been set up because of the error"), "warn", t);
                            }
                        }, t277.handlePasteEvent = (function() {
                            var e190 = (0, s20.default)(a27.default.mark(function e191(n) {
                                var o, r, i;
                                return a27.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = t277.Editor, r = o.BlockManager, i = o.Toolbar, r.currentBlock && (!t277.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (!r.currentBlock || !t277.exceptionList.includes(r.currentBlock.name)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            n.preventDefault(), t277.processDataTransfer(n.clipboardData), r.clearFocused(), i.close();
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e191);
                            }));
                            return function(t) {
                                return e190.apply(this, arguments);
                            };
                        })(), t277;
                    }
                    return (0, c12.default)(T, [
                        {
                            key: "prepare",
                            value: (w = (0, s20.default)(a27.default.mark(function t278() {
                                return a27.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.processTools();
                                        case 1:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t278, this);
                            })), function() {
                                return w.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.unsetCallback() : this.setCallback();
                            }
                        },
                        {
                            key: "processDataTransfer",
                            value: (x = (0, s20.default)(a27.default.mark(function t279(e) {
                                var n, o, r, i, s, l, c, u, f, d = arguments;
                                return a27.default.wrap(function(t280) {
                                    for(;;)switch(t280.prev = t280.next){
                                        case 0:
                                            if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor.Tools, !((r = e.types).includes ? r.includes("Files") : r.contains("Files"))) {
                                                t280.next = 8;
                                                break;
                                            }
                                            return t280.next = 7, this.processFiles(e.files);
                                        case 7:
                                            return t280.abrupt("return");
                                        case 8:
                                            if (i = e.getData(this.MIME_TYPE), s = e.getData("text/plain"), l = e.getData("text/html"), !i) {
                                                t280.next = 19;
                                                break;
                                            }
                                            return t280.prev = 12, this.insertEditorJSData(JSON.parse(i)), t280.abrupt("return");
                                        case 17:
                                            t280.prev = 17, t280.t0 = t280.catch(12);
                                        case 19:
                                            if (n && s.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : s) + "</p>"), c = Object.keys(this.toolsTags).reduce(function(t, e) {
                                                return t[e.toLowerCase()] = !0, t;
                                            }, {
                                            }), u = Object.assign({
                                            }, c, o.getAllInlineToolsSanitizeConfig(), {
                                                br: {
                                                }
                                            }), (f = (0, g.clean)(l, u)).trim() && f.trim() !== s && h.default.isHTMLString(f)) {
                                                t280.next = 28;
                                                break;
                                            }
                                            return t280.next = 26, this.processText(s);
                                        case 26:
                                            t280.next = 30;
                                            break;
                                        case 28:
                                            return t280.next = 30, this.processText(f, !0);
                                        case 30:
                                        case "end":
                                            return t280.stop();
                                    }
                                }, t279, this, [
                                    [
                                        12,
                                        17
                                    ]
                                ]);
                            })), function(t) {
                                return x.apply(this, arguments);
                            })
                        },
                        {
                            key: "processText",
                            value: (k = (0, s20.default)(a27.default.mark(function t281(e192) {
                                var n151, o, r, i, l, c, u, f = this, d = arguments;
                                return a27.default.wrap(function(t282) {
                                    for(;;)switch(t282.prev = t282.next){
                                        case 0:
                                            if (n151 = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor, r = o.Caret, i = o.BlockManager, (l = n151 ? this.processHTML(e192) : this.processPlain(e192)).length) {
                                                t282.next = 5;
                                                break;
                                            }
                                            return t282.abrupt("return");
                                        case 5:
                                            if (1 !== l.length) {
                                                t282.next = 8;
                                                break;
                                            }
                                            return l[0].isBlock ? this.processSingleBlock(l.pop()) : this.processInlinePaste(l.pop()), t282.abrupt("return");
                                        case 8:
                                            c = i.currentBlock && i.currentBlock.tool.isDefault, u = c && i.currentBlock.isEmpty, l.map(function() {
                                                var t283 = (0, s20.default)(a27.default.mark(function t284(e, n) {
                                                    return a27.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.abrupt("return", f.insertBlock(e, 0 === n && u));
                                                            case 1:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t284);
                                                }));
                                                return function(e, n) {
                                                    return t283.apply(this, arguments);
                                                };
                                            }()), i.currentBlock && r.setToBlock(i.currentBlock, r.positions.END);
                                        case 12:
                                        case "end":
                                            return t282.stop();
                                    }
                                }, t281, this);
                            })), function(t) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "setCallback",
                            value: function() {
                                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "unsetCallback",
                            value: function() {
                                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "processTools",
                            value: function() {
                                var t = this.Editor.Tools.blockTools;
                                Array.from(t.values()).forEach(this.processTool);
                            }
                        },
                        {
                            key: "getTagsConfig",
                            value: function(t285) {
                                var e = this, n152 = t285.pasteConfig.tags || [];
                                n152.forEach(function(n) {
                                    Object.prototype.hasOwnProperty.call(e.toolsTags, n) ? v.log("Paste handler for «".concat(t285.name, "» Tool on «").concat(n, "» tag is skipped ") + "because it is already used by «".concat(e.toolsTags[n].tool.name, "» Tool."), "warn") : e.toolsTags[n.toUpperCase()] = {
                                        tool: t285
                                    };
                                }), this.tagsByTool[t285.name] = n152.map(function(t) {
                                    return t.toUpperCase();
                                });
                            }
                        },
                        {
                            key: "getFilesConfig",
                            value: function(t) {
                                var e193 = t.pasteConfig.files, n = void 0 === e193 ? {
                                } : e193, o = n.extensions, r = n.mimeTypes;
                                (o || r) && (o && !Array.isArray(o) && (v.log("«extensions» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), o = []), r && !Array.isArray(r) && (v.log("«mimeTypes» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), r = []), r && (r = r.filter(function(e) {
                                    return !!v.isValidMimeType(e) || (v.log("MIME type value «".concat(e, "» for the «").concat(t.name, "» Tool is not a valid MIME type"), "warn"), !1);
                                })), this.toolsFiles[t.name] = {
                                    extensions: o || [],
                                    mimeTypes: r || []
                                });
                            }
                        },
                        {
                            key: "getPatternsConfig",
                            value: function(t) {
                                var e = this;
                                t.pasteConfig.patterns && !v.isEmpty(t.pasteConfig.patterns) && Object.entries(t.pasteConfig.patterns).forEach(function(n) {
                                    var o = (0, i70.default)(n, 2), r = o[0], a = o[1];
                                    a instanceof RegExp || v.log("Pattern ".concat(a, " for «").concat(t.name, "» Tool is skipped because it should be a Regexp instance."), "warn"), e.toolsPatterns.push({
                                        key: r,
                                        pattern: a,
                                        tool: t
                                    });
                                });
                            }
                        },
                        {
                            key: "isNativeBehaviour",
                            value: function(t) {
                                return h.default.isNativeInput(t);
                            }
                        },
                        {
                            key: "processFiles",
                            value: (b = (0, s20.default)(a27.default.mark(function t286(e194) {
                                var n, o, r, i, s = this;
                                return a27.default.wrap(function(t287) {
                                    for(;;)switch(t287.prev = t287.next){
                                        case 0:
                                            return n = this.Editor.BlockManager, t287.next = 3, Promise.all(Array.from(e194).map(function(t) {
                                                return s.processFile(t);
                                            }));
                                        case 3:
                                            o = (o = t287.sent).filter(function(t) {
                                                return !!t;
                                            }), r = n.currentBlock.tool.isDefault, i = r && n.currentBlock.isEmpty, o.forEach(function(t, e) {
                                                n.paste(t.type, t.event, 0 === e && i);
                                            });
                                        case 8:
                                        case "end":
                                            return t287.stop();
                                    }
                                }, t286, this);
                            })), function(t) {
                                return b.apply(this, arguments);
                            })
                        },
                        {
                            key: "processFile",
                            value: (y = (0, s20.default)(a27.default.mark(function t288(e195) {
                                var n153, o128, r69, s21, l17;
                                return a27.default.wrap(function(t289) {
                                    for(;;)switch(t289.prev = t289.next){
                                        case 0:
                                            if (n153 = v.getFileExtension(e195), o128 = Object.entries(this.toolsFiles).find(function(t290) {
                                                var o129 = (0, i70.default)(t290, 2), r70 = (o129[0], o129[1]), a = r70.mimeTypes, s = r70.extensions, l = e195.type.split("/"), c = (0, i70.default)(l, 2), u = c[0], f = c[1], d = s.find(function(t) {
                                                    return t.toLowerCase() === n153.toLowerCase();
                                                }), p = a.find(function(t) {
                                                    var e = t.split("/"), n = (0, i70.default)(e, 2), o = n[0], r = n[1];
                                                    return o === u && (r === f || "*" === r);
                                                });
                                                return !!d || !!p;
                                            })) {
                                                t289.next = 4;
                                                break;
                                            }
                                            return t289.abrupt("return");
                                        case 4:
                                            return r69 = (0, i70.default)(o128, 1), s21 = r69[0], l17 = this.composePasteEvent("file", {
                                                file: e195
                                            }), t289.abrupt("return", {
                                                event: l17,
                                                type: s21
                                            });
                                        case 7:
                                        case "end":
                                            return t289.stop();
                                    }
                                }, t288, this);
                            })), function(t) {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "processHTML",
                            value: function(t291) {
                                var e = this, n = this.Editor.Tools, o130 = h.default.make("DIV");
                                return o130.innerHTML = t291, this.getNodes(o130).map(function(t292) {
                                    var o, r = n.defaultTool, i = !1;
                                    switch(t292.nodeType){
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            (o = h.default.make("div")).appendChild(t292);
                                            break;
                                        case Node.ELEMENT_NODE:
                                            o = t292, i = !0, e.toolsTags[o.tagName] && (r = e.toolsTags[o.tagName].tool);
                                    }
                                    var a = r.pasteConfig.tags.reduce(function(t, e) {
                                        return t[e.toLowerCase()] = {
                                        }, t;
                                    }, {
                                    }), s = Object.assign({
                                    }, a, r.baseSanitizeConfig);
                                    o.innerHTML = (0, g.clean)(o.innerHTML, s);
                                    var l = e.composePasteEvent("tag", {
                                        data: o
                                    });
                                    return {
                                        content: o,
                                        isBlock: i,
                                        tool: r.name,
                                        event: l
                                    };
                                }).filter(function(t) {
                                    return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content);
                                });
                            }
                        },
                        {
                            key: "processPlain",
                            value: function(t293) {
                                var e = this, n154 = this.config.defaultBlock;
                                if (!t293) return [];
                                var o = n154;
                                return t293.split(/\r?\n/).filter(function(t) {
                                    return t.trim();
                                }).map(function(t) {
                                    var n = h.default.make("div");
                                    n.textContent = t;
                                    var r = e.composePasteEvent("tag", {
                                        data: n
                                    });
                                    return {
                                        content: n,
                                        tool: o,
                                        isBlock: !1,
                                        event: r
                                    };
                                });
                            }
                        },
                        {
                            key: "processSingleBlock",
                            value: (p5 = (0, s20.default)(a27.default.mark(function t294(e) {
                                var n, o, r, i;
                                return a27.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Caret, r = n.BlockManager, (i = r.currentBlock) && e.tool === i.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return this.insertBlock(e, (null == i ? void 0 : i.tool.isDefault) && i.isEmpty), t.abrupt("return");
                                        case 5:
                                            o.insertContentAtCaretPosition(e.content.innerHTML);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t294, this);
                            })), function(t) {
                                return p5.apply(this, arguments);
                            })
                        },
                        {
                            key: "processInlinePaste",
                            value: (o127 = (0, s20.default)(a27.default.mark(function t295(e) {
                                var n, o, r, i, s, l, c, u;
                                return a27.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.BlockManager, r = n.Caret, i = e.content, !(o.currentBlock && o.currentBlock.tool.isDefault && i.textContent.length < T.PATTERN_PROCESSING_MAX_LENGTH)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return t.next = 6, this.processPattern(i.textContent);
                                        case 6:
                                            if (!(s = t.sent)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return l = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, c = o.paste(s.tool, s.event, l), r.setToBlock(c, r.positions.END), t.abrupt("return");
                                        case 12:
                                            o.currentBlock && o.currentBlock.currentInput ? (u = o.currentBlock.tool.sanitizeConfig, document.execCommand("insertHTML", !1, (0, g.clean)(i.innerHTML, u))) : this.insertBlock(e);
                                        case 13:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t295, this);
                            })), function(t) {
                                return o127.apply(this, arguments);
                            })
                        },
                        {
                            key: "processPattern",
                            value: (n150 = (0, s20.default)(a27.default.mark(function t296(e) {
                                var n155, o;
                                return a27.default.wrap(function(t297) {
                                    for(;;)switch(t297.prev = t297.next){
                                        case 0:
                                            if (n155 = this.toolsPatterns.find(function(t) {
                                                var n = t.pattern.exec(e);
                                                return !!n && e === n.shift();
                                            })) {
                                                t297.next = 3;
                                                break;
                                            }
                                            return t297.abrupt("return");
                                        case 3:
                                            return o = this.composePasteEvent("pattern", {
                                                key: n155.key,
                                                data: e
                                            }), t297.abrupt("return", {
                                                event: o,
                                                tool: n155.tool.name
                                            });
                                        case 5:
                                        case "end":
                                            return t297.stop();
                                    }
                                }, t296, this);
                            })), function(t) {
                                return n150.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.Editor, r = o.BlockManager, i = o.Caret, a = r.currentBlock;
                                if (n && a && a.isEmpty) return e = r.paste(t.tool, t.event, !0), void i.setToBlock(e, i.positions.END);
                                e = r.paste(t.tool, t.event), i.setToBlock(e, i.positions.END);
                            }
                        },
                        {
                            key: "insertEditorJSData",
                            value: function(t298) {
                                var e196 = this.Editor, n = e196.BlockManager, o = e196.Caret, r71 = e196.Tools;
                                (0, g.sanitizeBlocks)(t298, function(t) {
                                    return r71.blockTools.get(t).sanitizeConfig;
                                }).forEach(function(t, e) {
                                    var r = t.tool, i = t.data, a = !1;
                                    0 === e && (a = n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty);
                                    var s = n.insert({
                                        tool: r,
                                        data: i,
                                        replace: a
                                    });
                                    o.setToBlock(s, o.positions.END);
                                });
                            }
                        },
                        {
                            key: "processElementNode",
                            value: function(t299, e197, n) {
                                var o = Object.keys(this.toolsTags), i = t299, a = (this.toolsTags[i.tagName] || {
                                }).tool, s = this.tagsByTool[null == a ? void 0 : a.name] || [], l = o.includes(i.tagName), c = h.default.blockElements.includes(i.tagName.toLowerCase()), u = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return o.includes(e) && !s.includes(e);
                                }), f = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return h.default.blockElements.includes(e.toLowerCase());
                                });
                                return c || l || u ? l && !u || c && !f && !u ? [].concat((0, r68.default)(e197), [
                                    n,
                                    i
                                ]) : void 0 : (n.appendChild(i), [].concat((0, r68.default)(e197), [
                                    n
                                ]));
                            }
                        },
                        {
                            key: "getNodes",
                            value: function(t300) {
                                var e, n = this;
                                return Array.from(t300.childNodes).reduce(function t(o, i) {
                                    if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return o;
                                    var a = o[o.length - 1], s = new DocumentFragment;
                                    switch(a && h.default.isFragment(a) && (s = o.pop()), i.nodeType){
                                        case Node.ELEMENT_NODE:
                                            if (e = n.processElementNode(i, o, s)) return e;
                                            break;
                                        case Node.TEXT_NODE:
                                            return s.appendChild(i), [].concat((0, r68.default)(o), [
                                                s
                                            ]);
                                        default:
                                            return [].concat((0, r68.default)(o), [
                                                s
                                            ]);
                                    }
                                    return [].concat((0, r68.default)(o), (0, r68.default)(Array.from(i.childNodes).reduce(t, [])));
                                }, []);
                            }
                        },
                        {
                            key: "composePasteEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        }
                    ]), T;
                }(p4.default);
                o126.default = k2, k2.displayName = "Paste", k2.PATTERN_PROCESSING_MAX_LENGTH = 450, t275.exports = e188.default;
            }) ? o125.apply(e188, r67) : o125) || (t275.exports = i69);
        },
        function(t301, e198, n156) {
            var o131, r72, i71;
            "undefined" != typeof globalThis || "undefined", r72 = [
                e198,
                n156(23),
                n156(30),
                n156(24),
                n156(2),
                n156(3),
                n156(5),
                n156(6),
                n156(4),
                n156(9),
                n156(148)
            ], void 0 === (i71 = "function" == typeof (o131 = function(o132, r, i72, a28, s, l, c, u, f, d8, p) {
                var h3 = n156(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o132, "__esModule", {
                    value: !0
                }), o132.default = void 0, r = h3(r), i72 = h3(i72), a28 = h3(a28), s = h3(s), l = h3(l), c = h3(c), u = h3(u), f = h3(f);
                var g = function(t302) {
                    (0, c.default)(h, t302);
                    var e199, n157, o133, d = (e199 = h, function() {
                        var t, n = (0, f.default)(e199);
                        if (v()) {
                            var o = (0, f.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, u.default)(this, t);
                    });
                    function h() {
                        var t;
                        return (0, s.default)(this, h), (t = d.apply(this, arguments)).toolsDontSupportReadOnly = [], t.readOnlyEnabled = !1, t;
                    }
                    return (0, l.default)(h, [
                        {
                            key: "prepare",
                            value: (o133 = (0, a28.default)(r.default.mark(function t303() {
                                var e200, n158, o;
                                return r.default.wrap(function(t304) {
                                    for(;;)switch(t304.prev = t304.next){
                                        case 0:
                                            e200 = this.Editor.Tools, n158 = e200.blockTools, o = [], Array.from(n158.entries()).forEach(function(t) {
                                                var e = (0, i72.default)(t, 2), n = e[0];
                                                e[1].isReadOnlySupported || o.push(n);
                                            }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                                        case 7:
                                        case "end":
                                            return t304.stop();
                                    }
                                }, t303, this);
                            })), function() {
                                return o133.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggle",
                            value: (n157 = (0, a28.default)(r.default.mark(function t305() {
                                var e, n, o, i, a = arguments;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            (e = a.length > 0 && void 0 !== a[0] ? a[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n = this.readOnlyEnabled, this.readOnlyEnabled = e, t.t0 = r.default.keys(this.Editor);
                                        case 5:
                                            if ((t.t1 = t.t0()).done) {
                                                t.next = 12;
                                                break;
                                            }
                                            if (o = t.t1.value, this.Editor[o].toggleReadOnly) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.abrupt("continue", 5);
                                        case 9:
                                            this.Editor[o].toggleReadOnly(e), t.next = 5;
                                            break;
                                        case 12:
                                            if (n !== e) {
                                                t.next = 14;
                                                break;
                                            }
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 14:
                                            return t.next = 16, this.Editor.Saver.save();
                                        case 16:
                                            return i = t.sent, t.next = 19, this.Editor.BlockManager.clear();
                                        case 19:
                                            return t.next = 21, this.Editor.Renderer.render(i.blocks);
                                        case 21:
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 22:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t305, this);
                            })), function() {
                                return n157.apply(this, arguments);
                            })
                        },
                        {
                            key: "throwCriticalError",
                            value: function() {
                                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.readOnlyEnabled;
                            }
                        }
                    ]), h;
                }((d8 = h3(d8)).default);
                o132.default = g, g.displayName = "ReadOnly", t301.exports = e198.default;
            }) ? o131.apply(e198, r72) : o131) || (t301.exports = i71);
        },
        function(t306, e201, n159) {
            var o134, r73, i73;
            "undefined" != typeof globalThis || "undefined", r73 = [
                e201,
                n159(2),
                n159(3),
                n159(5),
                n159(6),
                n159(4),
                n159(9),
                n159(15),
                n159(25),
                n159(66)
            ], void 0 === (i73 = "function" == typeof (o134 = function(o135, r74, i74, a29, s22, l18, c13, u11, f9, d9) {
                var p = n159(1);
                function h(t307) {
                    if ("undefined" == typeof Symbol || null == t307[Symbol.iterator]) {
                        if (Array.isArray(t307) || (t307 = (function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return v(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0;
                            }
                        })(t307))) {
                            var e202 = 0, n160 = function() {
                            };
                            return {
                                s: n160,
                                n: function() {
                                    return e202 >= t307.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t307[e202++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n160
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t307[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function v(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o135, "__esModule", {
                    value: !0
                }), o135.default = void 0, r74 = p(r74), i74 = p(i74), a29 = p(a29), s22 = p(s22), l18 = p(l18), c13 = p(c13), u11 = p(u11), f9 = p(f9), d9 = p(d9);
                var y = function(t308) {
                    (0, a29.default)(o136, t308);
                    var e203, n161 = (e203 = o136, function() {
                        var t, n = (0, l18.default)(e203);
                        if (g()) {
                            var o = (0, l18.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s22.default)(this, t);
                    });
                    function o136() {
                        var t;
                        return (0, r74.default)(this, o136), (t = n161.apply(this, arguments)).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t.listenerIds = [], t;
                    }
                    return (0, i74.default)(o136, [
                        {
                            key: "prepare",
                            value: function() {
                                this.enableModuleBindings();
                            }
                        },
                        {
                            key: "startSelection",
                            value: function(t309, e) {
                                var n = document.elementFromPoint(t309 - window.pageXOffset, e - window.pageYOffset);
                                n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
                                var o = [
                                    ".".concat(d9.default.CSS.content),
                                    ".".concat(this.Editor.Toolbar.CSS.toolbar),
                                    ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)
                                ], r = n.closest("." + this.Editor.UI.CSS.editorWrapper), i = o.some(function(t) {
                                    return !!n.closest(t);
                                });
                                r && !i && (this.mousedown = !0, this.startX = t309, this.startY = e);
                            }
                        },
                        {
                            key: "endSelection",
                            value: function() {
                                this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
                            }
                        },
                        {
                            key: "isRectActivated",
                            value: function() {
                                return this.isRectSelectionActivated;
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function() {
                                this.isRectSelectionActivated = !1;
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e204 = this.genHTML().container;
                                this.listeners.on(e204, "mousedown", function(e) {
                                    t.processMouseDown(e);
                                }, !1), this.listeners.on(document.body, "mousemove", function(e) {
                                    t.processMouseMove(e);
                                }, !1), this.listeners.on(document.body, "mouseleave", function() {
                                    t.processMouseLeave();
                                }), this.listeners.on(window, "scroll", function(e) {
                                    t.processScroll(e);
                                }, !1), this.listeners.on(document.body, "mouseup", function() {
                                    t.processMouseUp();
                                }, !1);
                            }
                        },
                        {
                            key: "processMouseDown",
                            value: function(t) {
                                t.button === this.MAIN_MOUSE_BUTTON && (null !== t.target.closest(u11.default.allInputsSelector) || this.startSelection(t.pageX, t.pageY));
                            }
                        },
                        {
                            key: "processMouseMove",
                            value: function(t) {
                                this.changingRectangle(t), this.scrollByZones(t.clientY);
                            }
                        },
                        {
                            key: "processMouseLeave",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "processScroll",
                            value: function(t) {
                                this.changingRectangle(t);
                            }
                        },
                        {
                            key: "processMouseUp",
                            value: function() {
                                this.endSelection();
                            }
                        },
                        {
                            key: "scrollByZones",
                            value: function(t) {
                                this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
                            }
                        },
                        {
                            key: "genHTML",
                            value: function() {
                                var t = this.Editor.UI, e = t.nodes.holder.querySelector("." + t.CSS.editorWrapper), n = u11.default.make("div", o136.CSS.overlay, {
                                }), r = u11.default.make("div", o136.CSS.overlayContainer, {
                                }), i = u11.default.make("div", o136.CSS.rect, {
                                });
                                return r.appendChild(i), n.appendChild(r), e.appendChild(n), this.overlayRectangle = i, {
                                    container: e,
                                    overlay: n
                                };
                            }
                        },
                        {
                            key: "scrollVertical",
                            value: function(t) {
                                var e = this;
                                if (this.inScrollZone && this.mousedown) {
                                    var n = window.pageYOffset;
                                    window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function() {
                                        e.scrollVertical(t);
                                    }, 0);
                                }
                            }
                        },
                        {
                            key: "changingRectangle",
                            value: function(t) {
                                if (this.mousedown) {
                                    void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                                    var e = this.genInfoForMouseSelection(), n = e.rightPos, o = e.leftPos, r = e.index, i = this.startX > n && this.mouseX > n, a = this.startX < o && this.mouseX < o;
                                    this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f9.default.get().removeAllRanges(), t.preventDefault());
                                }
                            }
                        },
                        {
                            key: "shrinkRectangleToPoint",
                            value: function() {
                                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
                            }
                        },
                        {
                            key: "inverseSelection",
                            value: function() {
                                var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                                if (this.rectCrossesBlocks && !t) {
                                    var e, n = h(this.stackOfSelected);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var o = e.value;
                                            this.Editor.BlockSelection.selectBlockByIndex(o);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                                if (!this.rectCrossesBlocks && t) {
                                    var r, i = h(this.stackOfSelected);
                                    try {
                                        for(i.s(); !(r = i.n()).done;){
                                            var a = r.value;
                                            this.Editor.BlockSelection.unSelectBlockByIndex(a);
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                }
                            }
                        },
                        {
                            key: "updateRectangleSize",
                            value: function() {
                                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
                            }
                        },
                        {
                            key: "genInfoForMouseSelection",
                            value: function() {
                                var t310, e = document.body.offsetWidth / 2, n = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, n), r = this.Editor.BlockManager.getBlockByChildNode(o);
                                void 0 !== r && (t310 = this.Editor.BlockManager.blocks.findIndex(function(t) {
                                    return t.holder === r.holder;
                                }));
                                var i = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d9.default.CSS.content), a = Number.parseInt(window.getComputedStyle(i).width, 10) / 2;
                                return {
                                    index: t310,
                                    leftPos: e - a,
                                    rightPos: e + a
                                };
                            }
                        },
                        {
                            key: "addBlockInSelection",
                            value: function(t) {
                                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
                            }
                        },
                        {
                            key: "trySelectNextBlock",
                            value: function(t) {
                                var e = this, n = this.stackOfSelected[this.stackOfSelected.length - 1] === t, o = this.stackOfSelected.length;
                                if (!n) {
                                    var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0, i = 0;
                                    o > 1 && (i = r ? 1 : -1);
                                    var a = t > this.stackOfSelected[o - 1] && 1 === i, s = t < this.stackOfSelected[o - 1] && -1 === i, l = !(a || s || 0 === i);
                                    if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                        if (!l && t < this.stackOfSelected[o - 1]) for(var c = this.stackOfSelected[o - 1] - 1; c >= t; c--)this.addBlockInSelection(c);
                                        else if (l) {
                                            var u, f = o - 1;
                                            for(u = t > this.stackOfSelected[o - 1] ? function() {
                                                return t > e.stackOfSelected[f];
                                            } : function() {
                                                return t < e.stackOfSelected[f];
                                            }; u();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                                        }
                                    } else for(var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++)this.addBlockInSelection(d);
                                }
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    overlay: "codex-editor-overlay",
                                    overlayContainer: "codex-editor-overlay__container",
                                    rect: "codex-editor-overlay__rectangle",
                                    topScrollZone: "codex-editor-overlay__scroll-zone--top",
                                    bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
                                };
                            }
                        }
                    ]), o136;
                }(c13.default);
                o135.default = y, y.displayName = "RectangleSelection", t306.exports = e201.default;
            }) ? o134.apply(e201, r73) : o134) || (t306.exports = i73);
        },
        function(t311, e205, n162) {
            var o137, r75, i75;
            "undefined" != typeof globalThis || "undefined", r75 = [
                e205,
                n162(23),
                n162(24),
                n162(2),
                n162(3),
                n162(5),
                n162(6),
                n162(4),
                n162(9),
                n162(7)
            ], void 0 === (i75 = "function" == typeof (o137 = function(o138, r, i76, a30, s23, l19, c14, u12, f10, d) {
                var p6 = n162(8), h = n162(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o138, "__esModule", {
                    value: !0
                }), o138.default = void 0, r = h(r), i76 = h(i76), a30 = h(a30), s23 = h(s23), l19 = h(l19), c14 = h(c14), u12 = h(u12), f10 = h(f10), d = p6(d);
                var g = function(t312) {
                    (0, l19.default)(p, t312);
                    var e206, n163, o139, f11 = (e206 = p, function() {
                        var t, n = (0, u12.default)(e206);
                        if (v()) {
                            var o = (0, u12.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c14.default)(this, t);
                    });
                    function p() {
                        return (0, a30.default)(this, p), f11.apply(this, arguments);
                    }
                    return (0, s23.default)(p, [
                        {
                            key: "render",
                            value: (o139 = (0, i76.default)(r.default.mark(function t313(e) {
                                var n, o, i = this;
                                return r.default.wrap(function(t314) {
                                    for(;;)switch(t314.prev = t314.next){
                                        case 0:
                                            return n = e.map(function(t) {
                                                return {
                                                    function: function() {
                                                        return i.insertBlock(t);
                                                    }
                                                };
                                            }), this.Editor.ModificationsObserver.disable(), t314.next = 4, d.sequence(n);
                                        case 4:
                                            return o = t314.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), t314.abrupt("return", o);
                                        case 8:
                                        case "end":
                                            return t314.stop();
                                    }
                                }, t313, this);
                            })), function(t) {
                                return o139.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: (n163 = (0, i76.default)(r.default.mark(function t315(e) {
                                var n, o, i, a, s, l, c, u, f;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Tools, i = n.BlockManager, a = e.type, s = e.data, l = e.tunes, c = e.id, !o.available.has(a)) {
                                                t.next = 13;
                                                break;
                                            }
                                            t.prev = 3, i.insert({
                                                id: c,
                                                tool: a,
                                                data: s,
                                                tunes: l
                                            }), t.next = 11;
                                            break;
                                        case 7:
                                            throw t.prev = 7, t.t0 = t.catch(3), d.log("Block «".concat(a, "» skipped because of plugins error"), "warn", s), Error(t.t0);
                                        case 11:
                                            t.next = 18;
                                            break;
                                        case 13:
                                            u = {
                                                savedData: {
                                                    id: c,
                                                    type: a,
                                                    data: s
                                                },
                                                title: a
                                            }, o.unavailable.has(a) && (f = o.unavailable.get(a).toolbox, u.title = (null == f ? void 0 : f.title) || u.title), i.insert({
                                                id: c,
                                                tool: o.stubTool,
                                                data: u
                                            }).stretched = !0, d.log("Tool «".concat(a, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                        case 18:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t315, this, [
                                    [
                                        3,
                                        7
                                    ]
                                ]);
                            })), function(t) {
                                return n163.apply(this, arguments);
                            })
                        }
                    ]), p;
                }(f10.default);
                o138.default = g, g.displayName = "Renderer", t311.exports = e205.default;
            }) ? o137.apply(e205, r75) : o137) || (t311.exports = i75);
        },
        function(t316, e207, n164) {
            var o140, r76, i77;
            "undefined" != typeof globalThis || "undefined", r76 = [
                e207,
                n164(23),
                n164(24),
                n164(2),
                n164(3),
                n164(5),
                n164(6),
                n164(4),
                n164(9),
                n164(7),
                n164(65)
            ], void 0 === (i77 = "function" == typeof (o140 = function(o141, r77, i78, a31, s24, l20, c15, u13, f12, d, p) {
                var h4 = n164(8), v = n164(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o141, "__esModule", {
                    value: !0
                }), o141.default = void 0, r77 = v(r77), i78 = v(i78), a31 = v(a31), s24 = v(s24), l20 = v(l20), c15 = v(c15), u13 = v(u13), f12 = v(f12), d = h4(d);
                var y = function(t317) {
                    (0, l20.default)(h, t317);
                    var e208, n165, o142, f = (e208 = h, function() {
                        var t, n = (0, u13.default)(e208);
                        if (g()) {
                            var o = (0, u13.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c15.default)(this, t);
                    });
                    function h() {
                        return (0, a31.default)(this, h), f.apply(this, arguments);
                    }
                    return (0, s24.default)(h, [
                        {
                            key: "save",
                            value: (o142 = (0, i78.default)(r77.default.mark(function t318() {
                                var e, n, o, i, a, s, l, c, u = this;
                                return r77.default.wrap(function(t319) {
                                    for(;;)switch(t319.prev = t319.next){
                                        case 0:
                                            return e = this.Editor, n = e.BlockManager, o = e.Tools, i = e.ModificationsObserver, a = n.blocks, s = [], t319.prev = 2, i.disable(), a.forEach(function(t) {
                                                s.push(u.getSavedData(t));
                                            }), t319.next = 7, Promise.all(s);
                                        case 7:
                                            return l = t319.sent, t319.next = 10, (0, p.sanitizeBlocks)(l, function(t) {
                                                return o.blockTools.get(t).sanitizeConfig;
                                            });
                                        case 10:
                                            return c = t319.sent, t319.abrupt("return", this.makeOutput(c));
                                        case 14:
                                            t319.prev = 14, t319.t0 = t319.catch(2), d.logLabeled("Saving failed due to the Error %o", "error", t319.t0);
                                        case 17:
                                            return t319.prev = 17, i.enable(), t319.finish(17);
                                        case 20:
                                        case "end":
                                            return t319.stop();
                                    }
                                }, t318, this, [
                                    [
                                        2,
                                        14,
                                        17,
                                        20
                                    ]
                                ]);
                            })), function() {
                                return o142.apply(this, arguments);
                            })
                        },
                        {
                            key: "getSavedData",
                            value: (n165 = (0, i78.default)(r77.default.mark(function t320(e) {
                                var n, o;
                                return r77.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, e.save();
                                        case 2:
                                            if (n = t.sent, t.t0 = n, !t.t0) {
                                                t.next = 8;
                                                break;
                                            }
                                            return t.next = 7, e.validate(n.data);
                                        case 7:
                                            t.t0 = t.sent;
                                        case 8:
                                            return o = t.t0, t.abrupt("return", Object.assign(Object.assign({
                                            }, n), {
                                                isValid: o
                                            }));
                                        case 10:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t320);
                            })), function(t) {
                                return n165.apply(this, arguments);
                            })
                        },
                        {
                            key: "makeOutput",
                            value: function(t321) {
                                var e = this, n = 0, o = [];
                                return d.log("[Editor.js saving]:", "groupCollapsed"), t321.forEach(function(t) {
                                    var r = t.id, i = t.tool, a = t.data, s = t.tunes, l = t.time, c = t.isValid;
                                    if (n += l, d.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !c) return d.log("Block «".concat(i, "» skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                                    if (d.log(a), d.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool) {
                                        var u = Object.assign({
                                            id: r,
                                            type: i,
                                            data: a
                                        }, !d.isEmpty(s) && {
                                            tunes: s
                                        });
                                        o.push(u);
                                    } else o.push(a);
                                }), d.log("Total", "log", n), d.log(void 0, "groupEnd"), {
                                    time: +new Date,
                                    blocks: o,
                                    version: "2.22.2"
                                };
                            }
                        }
                    ]), h;
                }(f12.default);
                o141.default = y, y.displayName = "Saver", t316.exports = e207.default;
            }) ? o140.apply(e207, r76) : o140) || (t316.exports = i77);
        },
        function(t322, e209, n166) {
            var o143, r78, i79;
            "undefined" != typeof globalThis || "undefined", r78 = [
                e209,
                n166(30),
                n166(2),
                n166(3),
                n166(5),
                n166(6),
                n166(4),
                n166(9),
                n166(15),
                n166(60),
                n166(7),
                n166(25)
            ], void 0 === (i79 = "function" == typeof (o143 = function(o144, r, i, a, s, l, c, u, f, d, p, h) {
                var v = n166(8), g = n166(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o144, "__esModule", {
                    value: !0
                }), o144.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);
                var b = function(t323) {
                    (0, s.default)(o145, t323);
                    var e210, n167 = (e210 = o145, function() {
                        var t, n = (0, c.default)(e210);
                        if (y()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o145() {
                        var t;
                        return (0, i.default)(this, o145), (t = n167.apply(this, arguments)).buttons = [], t.flipper = null, t.selection = new h.default, t;
                    }
                    return (0, a.default)(o145, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [
                                    this.nodes.toolSettings,
                                    this.nodes.defaultSettings
                                ]), this.enableFlipper();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), this.Editor.BlockManager.currentBlock.selected = !0, this.Editor.BlockSelection.clearCache(), this.addToolSettings(), this.addTunes(), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
                            }
                        },
                        {
                            key: "addToolSettings",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock.renderSettings();
                                t && f.default.append(this.nodes.toolSettings, t);
                            }
                        },
                        {
                            key: "addTunes",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock.renderTunes(), e = (0, r.default)(t, 2), n = e[0], o = e[1];
                                f.default.append(this.nodes.toolSettings, n), f.default.append(this.nodes.defaultSettings, o);
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = this;
                                this.flipper = new d.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    activateCallback: function(e) {
                                        e && f.default.canSetCaret(e) ? t.close() : p.delay(function() {
                                            t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);
                                        }, 50)();
                                    }
                                });
                            }
                        },
                        {
                            key: "events",
                            get: function() {
                                return {
                                    opened: "block-settings-opened",
                                    closed: "block-settings-closed"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-settings",
                                    wrapperOpened: "ce-settings--opened",
                                    toolSettings: "ce-settings__plugin-zone",
                                    defaultSettings: "ce-settings__default-zone",
                                    button: "ce-settings__button",
                                    focusedButton: "ce-settings__button--focused",
                                    focusedButtonAnimated: "ce-settings__button--focused-animated"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
                            }
                        },
                        {
                            key: "blockTunesButtons",
                            get: function() {
                                var t = this, e211 = this.Editor.StylesAPI;
                                if (0 !== this.buttons.length) return this.buttons;
                                var n = this.nodes.toolSettings.querySelectorAll(".".concat(e211.classes.settingsButton, ", ").concat(f.default.allInputsSelector)), o = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                                return n.forEach(function(e) {
                                    t.buttons.push(e);
                                }), o.forEach(function(e) {
                                    t.buttons.push(e);
                                }), this.buttons;
                            }
                        }
                    ]), o145;
                }(u.default);
                o144.default = b, b.displayName = "BlockSettings", t322.exports = e209.default;
            }) ? o143.apply(e209, r78) : o143) || (t322.exports = i79);
        },
        function(t324, e212, n168) {
            var o146, r79, i80;
            "undefined" != typeof globalThis || "undefined", r79 = [
                e212,
                n168(30),
                n168(23),
                n168(24),
                n168(42),
                n168(2),
                n168(3),
                n168(5),
                n168(6),
                n168(4),
                n168(9),
                n168(15),
                n168(7),
                n168(60),
                n168(59),
                n168(84),
                n168(65)
            ], void 0 === (i80 = "function" == typeof (o146 = function(o147, r80, i81, a32, s25, l21, c16, u14, f13, d10, p7, h, v, g, y, b, m) {
                var k = n168(8), x = n168(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o147, "__esModule", {
                    value: !0
                }), o147.default = void 0, r80 = x(r80), i81 = x(i81), a32 = x(a32), s25 = x(s25), l21 = x(l21), c16 = x(c16), u14 = x(u14), f13 = x(f13), d10 = x(d10), p7 = x(p7), h = x(h), v = k(v), g = x(g), y = x(y);
                var S = function(t325) {
                    (0, u14.default)(p8, t325);
                    var e213, n169, o148 = (e213 = p8, function() {
                        var t, n = (0, d10.default)(e213);
                        if (w()) {
                            var o = (0, d10.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f13.default)(this, t);
                    });
                    function p8() {
                        var t;
                        return (0, l21.default)(this, p8), (t = o148.apply(this, arguments)).opened = !1, t.tools = {
                        }, t.flipper = null, t.togglingCallback = null, t;
                    }
                    return (0, c16.default)(p8, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = h.default.make("div", [
                                    p8.CSS.conversionToolbarWrapper
                                ].concat((0, s25.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.tools = h.default.make("div", p8.CSS.conversionToolbarTools);
                                var t = h.default.make("div", p8.CSS.conversionToolbarLabel, {
                                    textContent: y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to")
                                });
                                return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "toggle",
                            value: function(t) {
                                this.opened ? this.close() : this.open(), v.isFunction(t) && (this.togglingCallback = t);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t326 = this;
                                this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(p8.CSS.conversionToolbarShowed), setTimeout(function() {
                                    t326.flipper.activate(Object.values(t326.tools).filter(function(t) {
                                        return !t.classList.contains(p8.CSS.conversionToolHidden);
                                    })), t326.flipper.focusFirst(), v.isFunction(t326.togglingCallback) && t326.togglingCallback(!0);
                                }, 50);
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(p8.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(!1);
                            }
                        },
                        {
                            key: "hasTools",
                            value: function() {
                                var t = Object.keys(this.tools);
                                return !(1 === t.length && t.shift() === this.config.defaultBlock);
                            }
                        },
                        {
                            key: "replaceWithBlock",
                            value: (n169 = (0, a32.default)(i81.default.mark(function t327(e) {
                                var n, o, r, a, s, l, c, u, f, d, p = this;
                                return i81.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return n = this.Editor.BlockManager.currentBlock.tool, o = this.Editor.BlockManager.currentBlock.name, t.next = 4, this.Editor.BlockManager.currentBlock.save();
                                        case 4:
                                            if (r = t.sent, a = r.data, o === e && (e = this.config.defaultBlock), s = this.Editor.Tools.blockTools.get(e), l = "", c = n.conversionConfig.export, !v.isFunction(c)) {
                                                t.next = 14;
                                                break;
                                            }
                                            l = c(a), t.next = 20;
                                            break;
                                        case 14:
                                            if (!v.isString(c)) {
                                                t.next = 18;
                                                break;
                                            }
                                            l = a[c], t.next = 20;
                                            break;
                                        case 18:
                                            return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t.abrupt("return");
                                        case 20:
                                            if (u = (0, m.clean)(l, s.sanitizeConfig), f = {
                                            }, d = s.conversionConfig.import, !v.isFunction(d)) {
                                                t.next = 27;
                                                break;
                                            }
                                            f = d(u), t.next = 33;
                                            break;
                                        case 27:
                                            if (!v.isString(d)) {
                                                t.next = 31;
                                                break;
                                            }
                                            f[d] = u, t.next = 33;
                                            break;
                                        case 31:
                                            return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t.abrupt("return");
                                        case 33:
                                            this.Editor.BlockManager.replace({
                                                tool: e,
                                                data: f
                                            }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay(function() {
                                                p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock);
                                            }, 10)();
                                        case 38:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t327, this);
                            })), function(t) {
                                return n169.apply(this, arguments);
                            })
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var t = this, e214 = this.Editor.Tools.blockTools;
                                Array.from(e214.entries()).forEach(function(e) {
                                    var n = (0, r80.default)(e, 2), o = n[0], i = n[1], a = i.toolbox, s = i.conversionConfig;
                                    !v.isEmpty(a) && a.icon && s && s.import && t.addTool(o, a.icon, a.title);
                                });
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t, e215, n) {
                                var o = this, r = h.default.make("div", [
                                    p8.CSS.conversionTool
                                ]), s = h.default.make("div", [
                                    p8.CSS.conversionToolIcon
                                ]);
                                r.dataset.tool = t, s.innerHTML = e215, h.default.append(r, s), h.default.append(r, h.default.text(y.default.t(b.I18nInternalNS.toolNames, n || v.capitalize(t)))), h.default.append(this.nodes.tools, r), this.tools[t] = r, this.listeners.on(r, "click", (0, a32.default)(i81.default.mark(function e216() {
                                    return i81.default.wrap(function(e) {
                                        for(;;)switch(e.prev = e.next){
                                            case 0:
                                                return e.next = 2, o.replaceWithBlock(t);
                                            case 2:
                                            case "end":
                                                return e.stop();
                                        }
                                    }, e216);
                                })));
                            }
                        },
                        {
                            key: "filterTools",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock;
                                Object.entries(this.tools).forEach(function(e) {
                                    var n = (0, r80.default)(e, 2), o = n[0], i = n[1];
                                    i.hidden = !1, i.classList.toggle(p8.CSS.conversionToolHidden, o === t.name);
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new g.default({
                                    focusedItemClass: p8.CSS.conversionToolFocused
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    conversionToolbarWrapper: "ce-conversion-toolbar",
                                    conversionToolbarShowed: "ce-conversion-toolbar--showed",
                                    conversionToolbarTools: "ce-conversion-toolbar__tools",
                                    conversionToolbarLabel: "ce-conversion-toolbar__label",
                                    conversionTool: "ce-conversion-tool",
                                    conversionToolHidden: "ce-conversion-tool--hidden",
                                    conversionToolIcon: "ce-conversion-tool__icon",
                                    conversionToolFocused: "ce-conversion-tool--focused",
                                    conversionToolActive: "ce-conversion-tool--active"
                                };
                            }
                        }
                    ]), p8;
                }(p7.default);
                o147.default = S, S.displayName = "ConversionToolbar", t324.exports = e212.default;
            }) ? o146.apply(e212, r79) : o146) || (t324.exports = i80);
        },
        function(t328, e217, n170) {
            var o149, r81, i82;
            "undefined" != typeof globalThis || "undefined", r81 = [
                e217,
                n170(42),
                n170(30),
                n170(2),
                n170(3),
                n170(5),
                n170(6),
                n170(4),
                n170(9),
                n170(15),
                n170(25),
                n170(7),
                n170(60),
                n170(59),
                n170(84),
                n170(112),
                n170(82),
                n170(67)
            ], void 0 === (i82 = "function" == typeof (o149 = function(o150, r82, i83, a33, s26, l, c, u, f, d, p, h, v, g, y, b, m, k) {
                var x = n170(8), w = n170(1);
                function S() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o150, "__esModule", {
                    value: !0
                }), o150.default = void 0, r82 = w(r82), i83 = w(i83), a33 = w(a33), s26 = w(s26), l = w(l), c = w(c), u = w(u), f = w(f), d = w(d), p = w(p), h = x(h), v = w(v), g = w(g), b = w(b), m = w(m);
                var T = function(t329) {
                    (0, l.default)(o151, t329);
                    var e218, n171 = (e218 = o151, function() {
                        var t, n = (0, u.default)(e218);
                        if (S()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function o151(t) {
                        var e, r = t.config, i = t.eventsDispatcher;
                        return (0, a33.default)(this, o151), (e = n171.call(this, {
                            config: r,
                            eventsDispatcher: i
                        })).CSS = {
                            inlineToolbar: "ce-inline-toolbar",
                            inlineToolbarShowed: "ce-inline-toolbar--showed",
                            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
                            buttonsWrapper: "ce-inline-toolbar__buttons",
                            actionsWrapper: "ce-inline-toolbar__actions",
                            inlineToolButton: "ce-inline-tool",
                            inputField: "cdx-input",
                            focusedButton: "ce-inline-tool--focused",
                            conversionToggler: "ce-inline-toolbar__dropdown",
                            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
                            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
                            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
                        }, e.opened = !1, e.toolbarVerticalMargin = 5, e.buttonsList = null, e.width = 0, e.flipper = null, e.tooltip = new m.default, e;
                    }
                    return (0, s26.default)(o151, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
                            }
                        },
                        {
                            key: "tryToShow",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this.allowedToShow() ? (this.move(), this.open(e), this.Editor.Toolbar.close()) : t && this.close();
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var t = p.default.rect, e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n = {
                                    x: t.x - e.left,
                                    y: t.y + t.height - e.top + this.toolbarVerticalMargin
                                };
                                t.width && (n.x += Math.floor(t.width / 2));
                                var o = n.x - this.width / 2, r = n.x + this.width / 2;
                                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                var t = this;
                                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(e) {
                                    var n = (0, i83.default)(e, 2), o = n[0], r = n[1], a = t.getToolShortcut(o);
                                    a && b.default.remove(t.Editor.UI.nodes.redactor, a), h.isFunction(r.clear) && r.clear();
                                }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t330 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (!this.opened) {
                                    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, t330 && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
                                    var e = Array.from(this.buttonsList);
                                    e.unshift(this.nodes.conversionToggler), e = e.filter(function(t) {
                                        return !t.hidden;
                                    }), this.flipper.activate(e);
                                }
                            }
                        },
                        {
                            key: "containsNode",
                            value: function(t) {
                                return this.nodes.wrapper.contains(t);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = d.default.make("div", [
                                    this.CSS.inlineToolbar
                                ].concat((0, r82.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.togglerAndButtonsWrapper = d.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(e) {
                                    e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault();
                                }), d.default.append(this.nodes.wrapper, [
                                    this.nodes.togglerAndButtonsWrapper,
                                    this.nodes.actions
                                ]), d.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
                            }
                        },
                        {
                            key: "allowedToShow",
                            value: function() {
                                var t = p.default.get(), e = p.default.text;
                                if (!t || !t.anchorNode) return !1;
                                if (t.isCollapsed || e.length < 1) return !1;
                                var n = d.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
                                if (t && [
                                    "IMG",
                                    "INPUT"
                                ].includes(n.tagName)) return !1;
                                if (null === n.closest('[contenteditable="true"]')) return !1;
                                var o = this.Editor.BlockManager.getBlock(t.anchorNode);
                                return !!o && 0 !== o.tool.inlineTools.size;
                            }
                        },
                        {
                            key: "recalculateWidth",
                            value: function() {
                                this.width = this.nodes.wrapper.offsetWidth;
                            }
                        },
                        {
                            key: "addConversionToggler",
                            value: function() {
                                var t = this;
                                this.nodes.conversionToggler = d.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.default.make("div", this.CSS.conversionTogglerContent);
                                var e219 = d.default.svg("toggler-down", 13, 13);
                                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e219), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                                    t.Editor.ConversionToolbar.toggle(function(e) {
                                        !e && t.opened ? t.flipper.activate() : t.opened && t.flipper.deactivate();
                                    });
                                }), this.tooltip.onHover(this.nodes.conversionToggler, g.default.ui(y.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), {
                                    placement: "top",
                                    hidingDelay: 100
                                });
                            }
                        },
                        {
                            key: "setConversionTogglerContent",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock, e = t.name, n = t.tool.conversionConfig, o = n && n.export;
                                this.nodes.conversionToggler.hidden = !o, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !o);
                                var r = t.tool.toolbox || {
                                };
                                this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || h.capitalize(e);
                            }
                        },
                        {
                            key: "prepareConversionToolbar",
                            value: function() {
                                var t = this.Editor.ConversionToolbar.make();
                                d.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "addToolsFiltered",
                            value: function() {
                                var t = this, e220 = p.default.get(), n = this.Editor.BlockManager.getBlock(e220.anchorNode);
                                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, Array.from(n.tool.inlineTools.values()).forEach(function(e) {
                                    t.addTool(e);
                                }), this.recalculateWidth();
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t331) {
                                var e = this, n = t331.create(), o = n.render();
                                if (o) {
                                    if (o.dataset.tool = t331.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(t331.name, n), h.isFunction(n.renderActions)) {
                                        var r = n.renderActions();
                                        this.nodes.actions.appendChild(r);
                                    }
                                    this.listeners.on(o, "click", function(t) {
                                        e.toolClicked(n), t.preventDefault();
                                    });
                                    var i = this.getToolShortcut(t331.name);
                                    if (i) try {
                                        this.enableShortcuts(n, i);
                                    } catch (t) {
                                    }
                                    var a = d.default.make("div"), s = g.default.t(y.I18nInternalNS.toolNames, t331.title || h.capitalize(t331.name));
                                    a.appendChild(d.default.text(s)), i && a.appendChild(d.default.make("div", this.CSS.inlineToolbarShortcut, {
                                        textContent: h.beautifyShortcut(i)
                                    })), this.tooltip.onHover(o, a, {
                                        placement: "top",
                                        hidingDelay: 100
                                    }), n.checkState(p.default.get());
                                } else h.log("Render method must return an instance of Node", "warn", t331.name);
                            }
                        },
                        {
                            key: "getToolShortcut",
                            value: function(t) {
                                var e = this.Editor.Tools, n = e.inlineTools.get(t), o = e.internal.inlineTools;
                                return Array.from(o.keys()).includes(t) ? this.inlineTools[t][k.CommonInternalSettings.Shortcut] : n.shortcut;
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function(t, e221) {
                                var n = this;
                                b.default.add({
                                    name: e221,
                                    handler: function(e) {
                                        var o = n.Editor.BlockManager.currentBlock;
                                        o && o.tool.enabledInlineTools && (e.preventDefault(), n.toolClicked(t));
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toolClicked",
                            value: function(t) {
                                var e = p.default.range;
                                t.surround(e), this.checkToolsState();
                            }
                        },
                        {
                            key: "checkToolsState",
                            value: function() {
                                this.toolsInstances.forEach(function(t) {
                                    t.checkState(p.default.get());
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new v.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    allowArrows: !1
                                });
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                var t = {
                                };
                                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e) {
                                    var n = (0, i83.default)(e, 2), o = n[0], r = n[1];
                                    t[o] = r.create();
                                }), t;
                            }
                        }
                    ]), o151;
                }(f.default);
                o150.default = T, T.displayName = "InlineToolbar", t328.exports = e217.default;
            }) ? o149.apply(e217, r81) : o149) || (t328.exports = i82);
        },
        function(t332, e222, n172) {
            var o152, r83, i84;
            "undefined" != typeof globalThis || "undefined", r83 = [
                e222,
                n172(2),
                n172(3),
                n172(5),
                n172(6),
                n172(4),
                n172(9),
                n172(15),
                n172(7),
                n172(60),
                n172(66),
                n172(59),
                n172(84),
                n172(112),
                n172(82)
            ], void 0 === (i84 = "function" == typeof (o152 = function(o153, r84, i85, a34, s, l, c, u, f, d, p, h, v, g, y) {
                var b = n172(8), m = n172(1);
                function k() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o153, "__esModule", {
                    value: !0
                }), o153.default = void 0, r84 = m(r84), i85 = m(i85), a34 = m(a34), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), d = m(d), h = m(h), g = m(g), y = m(y);
                var x = function(t333) {
                    (0, a34.default)(o154, t333);
                    var e223, n173 = (e223 = o154, function() {
                        var t, n = (0, l.default)(e223);
                        if (k()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o154(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r84.default)(this, o154), (e = n173.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).nodes = {
                            toolbox: null,
                            buttons: []
                        }, e.opened = !1, e.displayedToolsCount = 0, e.flipper = null, e.tooltip = new y.default, e;
                    }
                    return (0, i85.default)(o154, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), this.addTools(), this.enableFlipper();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.removeAllShortcuts(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "toolButtonActivate",
                            value: function(t, e) {
                                this.insertNewBlock(e);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0, this.flipper.activate());
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.flipper.deactivate();
                            }
                        },
                        {
                            key: "toggle",
                            value: function() {
                                this.opened ? this.close() : this.open();
                            }
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var t = this, e224 = this.Editor.Tools.blockTools;
                                Array.from(e224.values()).forEach(function(e) {
                                    return t.addTool(e);
                                });
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t) {
                                var e = this, n174 = t.toolbox;
                                if (n174) {
                                    if (!n174 || n174.icon) {
                                        var o = u.default.make("li", [
                                            this.CSS.toolboxButton
                                        ]);
                                        o.dataset.tool = t.name, o.innerHTML = n174.icon, u.default.append(this.nodes.toolbox, o), this.nodes.toolbox.appendChild(o), this.nodes.buttons.push(o), this.listeners.on(o, "click", function(n) {
                                            e.toolButtonActivate(n, t.name);
                                        });
                                        var r = this.drawTooltip(t);
                                        this.tooltip.onHover(o, r, {
                                            placement: "bottom",
                                            hidingDelay: 200
                                        });
                                        var i = t.shortcut;
                                        i && this.enableShortcut(t.name, i), this.displayedToolsCount++;
                                    } else f.log("Toolbar icon is missed. Tool %o skipped", "warn", t.name);
                                }
                            }
                        },
                        {
                            key: "drawTooltip",
                            value: function(t) {
                                var e = t.toolbox || {
                                }, n = h.default.t(v.I18nInternalNS.toolNames, e.title || t.name), o = t.shortcut, r = u.default.make("div", this.CSS.buttonTooltip), i = document.createTextNode(f.capitalize(n));
                                return r.appendChild(i), o && (o = f.beautifyShortcut(o), r.appendChild(u.default.make("div", this.CSS.buttonShortcut, {
                                    textContent: o
                                }))), r;
                            }
                        },
                        {
                            key: "enableShortcut",
                            value: function(t, e225) {
                                var n = this;
                                g.default.add({
                                    name: e225,
                                    handler: function(e) {
                                        e.preventDefault(), n.insertNewBlock(t);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "removeAllShortcuts",
                            value: function() {
                                var t = this, e226 = this.Editor.Tools.blockTools;
                                Array.from(e226.values()).forEach(function(e) {
                                    var n = e.shortcut;
                                    n && g.default.remove(t.Editor.UI.nodes.redactor, n);
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = Array.from(this.nodes.toolbox.childNodes);
                                this.flipper = new d.default({
                                    items: t,
                                    focusedItemClass: this.CSS.toolboxButtonActive
                                });
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.Caret, r = n.currentBlock, i = n.insert({
                                    tool: t,
                                    replace: r.isEmpty
                                });
                                i.call(p.BlockToolAPI.APPEND_CALLBACK), this.Editor.Caret.setToBlock(i), 0 === i.inputs.length && (i === n.lastBlock ? (n.insertAtEnd(), o.setToBlock(n.lastBlock)) : o.setToBlock(n.nextBlock)), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbox: "ce-toolbox",
                                    toolboxButton: "ce-toolbox__button",
                                    toolboxButtonActive: "ce-toolbox__button--active",
                                    toolboxOpened: "ce-toolbox--opened",
                                    openedToolbarHolderModifier: "codex-editor--toolbox-opened",
                                    buttonTooltip: "ce-toolbox-button-tooltip",
                                    buttonShortcut: "ce-toolbox-button-tooltip__shortcut"
                                };
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                return 0 === this.displayedToolsCount;
                            }
                        }
                    ]), o154;
                }(c.default);
                o153.default = x, x.displayName = "Toolbox", t332.exports = e222.default;
            }) ? o152.apply(e222, r83) : o152) || (t332.exports = i84);
        },
        function(t334, e227, n175) {
            var o155, r85, i86;
            "undefined" != typeof globalThis || "undefined", r85 = [
                e227,
                n175(42),
                n175(30),
                n175(23),
                n175(24),
                n175(2),
                n175(3),
                n175(5),
                n175(6),
                n175(4),
                n175(80),
                n175(384),
                n175(9),
                n175(7),
                n175(385),
                n175(386),
                n175(387),
                n175(388),
                n175(389),
                n175(393),
                n175(394),
                n175(395),
                n175(184)
            ], void 0 === (i86 = "function" == typeof (o155 = function(o156, r86, i87, a35, s27, l, c, u, f, d, p9, h, v, g, y, b, m, k, x, w, S, T, E) {
                var B = n175(8), C = n175(1);
                function _() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o156, "__esModule", {
                    value: !0
                }), o156.default = void 0, r86 = C(r86), i87 = C(i87), a35 = C(a35), s27 = C(s27), l = C(l), c = C(c), u = C(u), f = C(f), d = C(d), p9 = C(p9), h = C(h), v = C(v), g = B(g), y = C(y), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T), E = C(E);
                var O = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, p9.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, I = function(t335) {
                    (0, u.default)(p, t335);
                    var e228, n176, o157 = (e228 = p, function() {
                        var t, n = (0, d.default)(e228);
                        if (_()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function p() {
                        var t;
                        return (0, l.default)(this, p), (t = o157.apply(this, arguments)).stubTool = "stub", t.toolsAvailable = new E.default, t.toolsUnavailable = new E.default, t;
                    }
                    return (0, c.default)(p, [
                        {
                            key: "prepare",
                            value: (n176 = (0, s27.default)(a35.default.mark(function t336() {
                                var e, n, o = this;
                                return a35.default.wrap(function(t337) {
                                    for(;;)switch(t337.prev = t337.next){
                                        case 0:
                                            if (this.validateTools(), this.config.tools = g.deepMerge({
                                            }, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                                                t337.next = 4;
                                                break;
                                            }
                                            throw Error("Can't start without tools");
                                        case 4:
                                            if (e = this.prepareConfig(), this.factory = new x.default(e, this.config, this.Editor.API), 0 !== (n = this.getListOfPrepareFunctions(e)).length) {
                                                t337.next = 9;
                                                break;
                                            }
                                            return t337.abrupt("return", Promise.resolve());
                                        case 9:
                                            return t337.next = 11, g.sequence(n, function(t) {
                                                o.toolPrepareMethodSuccess(t);
                                            }, function(t) {
                                                o.toolPrepareMethodFallback(t);
                                            });
                                        case 11:
                                            this.prepareBlockTools();
                                        case 12:
                                        case "end":
                                            return t337.stop();
                                    }
                                }, t336, this);
                            })), function() {
                                return n176.apply(this, arguments);
                            })
                        },
                        {
                            key: "getAllInlineToolsSanitizeConfig",
                            value: function() {
                                var t = {
                                };
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                Object.values(this.available).forEach(function() {
                                    var t338 = (0, s27.default)(a35.default.mark(function t339(e) {
                                        return a35.default.wrap(function(t) {
                                            for(;;)switch(t.prev = t.next){
                                                case 0:
                                                    if (!g.isFunction(e.reset)) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.next = 3, e.reset();
                                                case 3:
                                                case "end":
                                                    return t.stop();
                                            }
                                        }, t339);
                                    }));
                                    return function(e) {
                                        return t338.apply(this, arguments);
                                    };
                                }());
                            }
                        },
                        {
                            key: "toolPrepareMethodSuccess",
                            value: function(t) {
                                var e = this.factory.get(t.toolName);
                                if (e.isInline()) {
                                    var n = [
                                        "render",
                                        "surround",
                                        "checkState"
                                    ].filter(function(t) {
                                        return !e.create()[t];
                                    });
                                    if (n.length) return g.log("Incorrect Inline Tool: ".concat(e.name, ". Some of required methods is not implemented %o"), "warn", n), void this.toolsUnavailable.set(e.name, e);
                                }
                                this.toolsAvailable.set(e.name, e);
                            }
                        },
                        {
                            key: "toolPrepareMethodFallback",
                            value: function(t) {
                                this.toolsUnavailable.set(t.toolName, this.factory.get(t.toolName));
                            }
                        },
                        {
                            key: "getListOfPrepareFunctions",
                            value: function(t340) {
                                var e = [];
                                return Object.entries(t340).forEach(function(t) {
                                    var n = (0, i87.default)(t, 2), o = n[0], r = n[1];
                                    e.push({
                                        function: g.isFunction(r.class.prepare) ? r.class.prepare : function() {
                                        },
                                        data: {
                                            toolName: o
                                        }
                                    });
                                }), e;
                            }
                        },
                        {
                            key: "prepareBlockTools",
                            value: function() {
                                var t = this;
                                Array.from(this.blockTools.values()).forEach(function(e) {
                                    t.assignInlineToolsToBlockTool(e), t.assignBlockTunesToBlockTool(e);
                                });
                            }
                        },
                        {
                            key: "assignInlineToolsToBlockTool",
                            value: function(t341) {
                                var e = this;
                                !1 !== this.config.inlineToolbar && (!0 !== t341.enabledInlineTools ? Array.isArray(t341.enabledInlineTools) && (t341.inlineTools = new E.default(t341.enabledInlineTools.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }))) : t341.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }) : Array.from(this.inlineTools.entries())));
                            }
                        },
                        {
                            key: "assignBlockTunesToBlockTool",
                            value: function(t342) {
                                var e = this;
                                if (!1 !== t342.enabledBlockTunes) {
                                    if (Array.isArray(t342.enabledBlockTunes)) {
                                        var n = new E.default(t342.enabledBlockTunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t342.tunes = new E.default([].concat((0, r86.default)(n), (0, r86.default)(this.blockTunes.internalTools)));
                                    } else if (Array.isArray(this.config.tunes)) {
                                        var o = new E.default(this.config.tunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t342.tunes = new E.default([].concat((0, r86.default)(o), (0, r86.default)(this.blockTunes.internalTools)));
                                    } else t342.tunes = this.blockTunes.internalTools;
                                }
                            }
                        },
                        {
                            key: "validateTools",
                            value: function() {
                                for(var t in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, t)) {
                                    if (t in this.internalTools) return;
                                    var e = this.config.tools[t];
                                    if (!g.isFunction(e) && !g.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"));
                                }
                            }
                        },
                        {
                            key: "prepareConfig",
                            value: function() {
                                var t = {
                                };
                                for(var e in this.config.tools)g.isObject(this.config.tools[e]) ? t[e] = this.config.tools[e] : t[e] = {
                                    class: this.config.tools[e]
                                };
                                return t;
                            }
                        },
                        {
                            key: "available",
                            get: function() {
                                return this.toolsAvailable;
                            }
                        },
                        {
                            key: "unavailable",
                            get: function() {
                                return this.toolsUnavailable;
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return this.available.inlineTools;
                            }
                        },
                        {
                            key: "blockTools",
                            get: function() {
                                return this.available.blockTools;
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return this.available.blockTunes;
                            }
                        },
                        {
                            key: "defaultTool",
                            get: function() {
                                return this.blockTools.get(this.config.defaultBlock);
                            }
                        },
                        {
                            key: "internal",
                            get: function() {
                                return this.available.internalTools;
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return {
                                    bold: {
                                        class: y.default,
                                        isInternal: !0
                                    },
                                    italic: {
                                        class: b.default,
                                        isInternal: !0
                                    },
                                    link: {
                                        class: m.default,
                                        isInternal: !0
                                    },
                                    paragraph: {
                                        class: h.default,
                                        inlineToolbar: !0,
                                        isInternal: !0
                                    },
                                    stub: {
                                        class: k.default,
                                        isInternal: !0
                                    },
                                    moveUp: {
                                        class: T.default,
                                        isInternal: !0
                                    },
                                    delete: {
                                        class: S.default,
                                        isInternal: !0
                                    },
                                    moveDown: {
                                        class: w.default,
                                        isInternal: !0
                                    }
                                };
                            }
                        }
                    ]), p;
                }(v.default);
                o156.default = I, I.displayName = "Tools", O([
                    g.cacheable
                ], I.prototype, "getAllInlineToolsSanitizeConfig", null), t334.exports = e227.default;
            }) ? o155.apply(e227, r85) : o155) || (t334.exports = i86);
        },
        function(t343, e229, n177) {
            var o158, r87, i88;
            "undefined" != typeof globalThis || "undefined", r87 = [
                e229,
                n177(30),
                n177(2),
                n177(3),
                n177(5),
                n177(6),
                n177(4),
                n177(150)
            ], void 0 === (i88 = "function" == typeof (o158 = function(o159, r, i, a, s, l, c, u) {
                var f = n177(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o159, "__esModule", {
                    value: !0
                }), o159.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t344) {
                    (0, s.default)(o160, t344);
                    var e, n178 = (e = o160, function() {
                        var t, n = (0, c.default)(e);
                        if (d()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o160() {
                        return (0, i.default)(this, o160), n178.apply(this, arguments);
                    }
                    return (0, a.default)(o160, [
                        {
                            key: "blockTools",
                            get: function() {
                                return new o160(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isBlock();
                                }));
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return new o160(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInline();
                                }));
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return new o160(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isTune();
                                }));
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return new o160(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        },
                        {
                            key: "externalTools",
                            get: function() {
                                return new o160(Array.from(this.entries()).filter(function(t) {
                                    return !(0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        }
                    ]), o160;
                }((0, (u = f(u)).default)(Map));
                o159.default = p, p.displayName = "ToolsCollection", t343.exports = e229.default;
            }) ? o158.apply(e229, r87) : o158) || (t343.exports = i88);
        },
        function(t345, e230, n179) {
            var o161, r88, i89;
            "undefined" != typeof globalThis || "undefined", r88 = [
                e230,
                n179(30),
                n179(42),
                n179(23),
                n179(24),
                n179(2),
                n179(3),
                n179(5),
                n179(6),
                n179(4),
                n179(396),
                n179(9),
                n179(15),
                n179(7),
                n179(25),
                n179(66),
                n179(60)
            ], void 0 === (i89 = "function" == typeof (o161 = function(o162, r89, i90, a36, s28, l22, c17, u15, f, d, p, h5, v, g, y, b, m) {
                var k3 = n179(8), x = n179(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o162, "__esModule", {
                    value: !0
                }), o162.default = void 0, r89 = x(r89), i90 = x(i90), a36 = x(a36), s28 = x(s28), l22 = x(l22), c17 = x(c17), u15 = x(u15), f = x(f), d = x(d), p = x(p), h5 = x(h5), v = x(v), g = k3(g), y = x(y), b = x(b), m = x(m);
                var S = function(t346) {
                    (0, u15.default)(k, t346);
                    var e231, o163, h = (e231 = k, function() {
                        var t, n = (0, d.default)(e231);
                        if (w()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function k() {
                        var t;
                        return (0, l22.default)(this, k), (t = h.apply(this, arguments)).isMobile = !1, t.contentRectCache = void 0, t.resizeDebouncer = g.debounce(function() {
                            t.windowResize();
                        }, 200), t;
                    }
                    return (0, c17.default)(k, [
                        {
                            key: "addLoader",
                            value: function() {
                                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "removeLoader",
                            value: function() {
                                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "prepare",
                            value: (o163 = (0, s28.default)(a36.default.mark(function t347() {
                                return a36.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                                        case 5:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t347, this);
                            })), function() {
                                return o163.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "checkEmptiness",
                            value: function() {
                                var t = this.Editor.BlockManager;
                                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.nodes.holder.innerHTML = "";
                            }
                        },
                        {
                            key: "closeAllToolbars",
                            value: function() {
                                var t = this.Editor, e = t.Toolbox, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                n.close(), o.close(), r.close(), e.close();
                            }
                        },
                        {
                            key: "checkIsMobile",
                            value: function() {
                                this.isMobile = window.innerWidth < 650;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [
                                    this.CSS.editorWrapper
                                ].concat((0, i90.default)(this.isRtl ? [
                                    this.CSS.editorRtlFix
                                ] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
                            }
                        },
                        {
                            key: "loadStyles",
                            value: function() {
                                var t = n179(397);
                                if (!v.default.get("editor-js-styles")) {
                                    var e = v.default.make("style", null, {
                                        id: "editor-js-styles",
                                        textContent: t.toString()
                                    });
                                    v.default.prepend(document.head, e);
                                }
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(e) {
                                    t.redactorClicked(e);
                                }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "keydown", function(e) {
                                    t.documentKeydown(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "mousedown", function(e) {
                                    t.documentClicked(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", function(e) {
                                    t.selectionChanged(e);
                                }, !0), this.readOnlyMutableListeners.on(window, "resize", function() {
                                    t.resizeDebouncer();
                                }, {
                                    passive: !0
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "windowResize",
                            value: function() {
                                this.contentRectCache = null, this.checkIsMobile();
                            }
                        },
                        {
                            key: "documentKeydown",
                            value: function(t) {
                                switch(t.keyCode){
                                    case g.keyCodes.ENTER:
                                        this.enterPressed(t);
                                        break;
                                    case g.keyCodes.BACKSPACE:
                                        this.backspacePressed(t);
                                        break;
                                    case g.keyCodes.ESC:
                                        this.escapePressed(t);
                                        break;
                                    default:
                                        this.defaultBehaviour(t);
                                }
                            }
                        },
                        {
                            key: "defaultBehaviour",
                            value: function(t) {
                                var e = this.Editor.BlockManager.currentBlock, n = t.target.closest(".".concat(this.CSS.editorWrapper)), o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                                void 0 === e || null !== n ? n || e && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t);
                            }
                        },
                        {
                            key: "backspacePressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) {
                                    var i = n.removeSelectedBlocks();
                                    r.setToBlock(n.insertDefaultBlockAtIndex(i, !0), r.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                                }
                            }
                        },
                        {
                            key: "escapePressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = n.currentBlockIndex >= 0;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) return o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
                                if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
                                    var i = this.Editor.BlockManager.insert();
                                    this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
                                }
                                this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "documentClicked",
                            value: function(t) {
                                if (t.isTrusted) {
                                    var e = t.target;
                                    this.nodes.holder.contains(e) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close()), this.Editor.BlockSelection.clearSelection(t);
                                }
                            }
                        },
                        {
                            key: "documentTouched",
                            value: function(t) {
                                var e = t.target;
                                if (e === this.nodes.redactor) {
                                    var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX, o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
                                    e = document.elementFromPoint(n, o);
                                }
                                try {
                                    this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
                                } catch (t348) {
                                    this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                                }
                                this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide();
                            }
                        },
                        {
                            key: "redactorClicked",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                if (y.default.isCollapsed) {
                                    var n = function() {
                                        t.stopImmediatePropagation(), t.stopPropagation();
                                    }, o = t.target, r = t.metaKey || t.ctrlKey;
                                    if (v.default.isAnchor(o) && r) {
                                        n();
                                        var i = o.getAttribute("href"), a = g.getValidUrl(i);
                                        g.openTab(a);
                                    } else {
                                        if (t.target instanceof Element && t.target.isEqualNode(this.nodes.redactor) && !e.anyBlockSelected) {
                                            n();
                                            var s = this.Editor, l = s.BlockManager, c = s.Caret, u = s.Toolbar;
                                            l.lastBlock.tool.isDefault && l.lastBlock.isEmpty || l.insertAtEnd(), c.setToTheLastBlock(), u.move();
                                        }
                                        this.Editor.BlockManager.currentBlock.tool.isDefault && (n(), this.Editor.BlockManager.currentBlock.isEmpty && this.Editor.Toolbar.plusButton.show());
                                    }
                                }
                            }
                        },
                        {
                            key: "selectionChanged",
                            value: function(t) {
                                var e = this.Editor, n = e.CrossBlockSelection, o = e.BlockSelection, r = y.default.anchorElement;
                                if (n.isCrossBlockSelectionStarted && o.anyBlockSelected && y.default.get().removeAllRanges(), r) {
                                    var i = null === r.closest(".".concat(b.default.CSS.content));
                                    if (i && (this.Editor.InlineToolbar.containsNode(r) || this.Editor.InlineToolbar.close(), "true" !== r.dataset.inlineToolbar)) return;
                                    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r);
                                    var a = !0 !== i;
                                    this.Editor.InlineToolbar.tryToShow(!0, a);
                                } else y.default.range || this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "appendSVGSprite",
                            value: function() {
                                var t = v.default.make("div");
                                t.hidden = !0, t.style.display = "none", t.innerHTML = p.default, v.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorWrapperNarrow: "codex-editor--narrow",
                                    editorZone: "codex-editor__redactor",
                                    editorZoneHidden: "codex-editor__redactor--hidden",
                                    editorLoader: "codex-editor__loader",
                                    editorEmpty: "codex-editor--empty",
                                    editorRtlFix: "codex-editor--rtl"
                                };
                            }
                        },
                        {
                            key: "contentRect",
                            get: function() {
                                if (this.contentRectCache) return this.contentRectCache;
                                var t = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));
                                return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
                                    width: 650,
                                    left: 0,
                                    right: 0
                                };
                            }
                        },
                        {
                            key: "someToolbarOpened",
                            get: function() {
                                var t = this.Editor, e = t.Toolbox, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                return n.opened || o.opened || r.opened || e.opened;
                            }
                        },
                        {
                            key: "someFlipperButtonFocused",
                            get: function() {
                                return Object.entries(this.Editor).filter(function(t) {
                                    var e = (0, r89.default)(t, 2);
                                    return e[0], e[1].flipper instanceof m.default;
                                }).some(function(t) {
                                    var e = (0, r89.default)(t, 2);
                                    return e[0], e[1].flipper.currentItem;
                                });
                            }
                        }
                    ]), k;
                }(h5.default);
                o162.default = S, S.displayName = "UI", t345.exports = e230.default;
            }) ? o161.apply(e230, r88) : o161) || (t345.exports = i89);
        },
        function(t, e, n) {
            n(187), t.exports = n(359);
        },
        function(t, e, n) {
            n(188);
        },
        function(t, e, n) {
            "use strict";
            n(189), n(332), n(334), n(337), n(339), n(341), n(343), n(345), n(347), n(349), n(351), n(353), n(355), n(144);
        },
        function(t, e, n) {
            n(190), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(271), n(272), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(105), n(295), n(133), n(296), n(134), n(297), n(298), n(299), n(300), n(135), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), t.exports = n(17);
        },
        function(t349, e232, n180) {
            "use strict";
            var o164 = n180(10), r90 = n180(26), i91 = n180(18), a37 = n180(0), s = n180(21), l = n180(41).KEY, c = n180(11), u = n180(68), f = n180(53), d = n180(44), p = n180(14), h = n180(86), v = n180(114), g = n180(192), y = n180(71), b = n180(12), m = n180(13), k = n180(20), x = n180(28), w = n180(40), S = n180(43), T = n180(48), E = n180(117), B = n180(34), C = n180(70), _ = n180(19), O = n180(46), I = B.f, M = _.f, R = E.f, A = o164.Symbol, N = o164.JSON, P = N && N.stringify, L = p("_hidden"), D = p("toPrimitive"), j = {
            }.propertyIsEnumerable, F = u("symbol-registry"), U = u("symbols"), H = u("op-symbols"), z = Object.prototype, W = "function" == typeof A && !!C.f, Y = o164.QObject, V = !Y || !Y.prototype || !Y.prototype.findChild, X = i91 && c(function() {
                return 7 != T(M({
                }, "a", {
                    get: function() {
                        return M(this, "a", {
                            value: 7
                        }).a;
                    }
                })).a;
            }) ? function(t, e, n) {
                var o = I(z, e);
                o && delete z[e], M(t, e, n), o && t !== z && M(z, e, o);
            } : M, G = function(t) {
                var e = U[t] = T(A.prototype);
                return e._k = t, e;
            }, K = W && "symbol" == typeof A.iterator ? function(t) {
                return "symbol" == typeof t;
            } : function(t) {
                return t instanceof A;
            }, Z = function(t, e, n) {
                return t === z && Z(H, e, n), b(t), e = w(e, !0), b(n), r90(U, e) ? (n.enumerable ? (r90(t, L) && t[L][e] && (t[L][e] = !1), n = T(n, {
                    enumerable: S(0, !1)
                })) : (r90(t, L) || M(t, L, S(1, {
                })), t[L][e] = !0), X(t, e, n)) : M(t, e, n);
            }, q = function(t, e) {
                b(t);
                for(var n, o = g(e = x(e)), r = 0, i = o.length; i > r;)Z(t, n = o[r++], e[n]);
                return t;
            }, J = function(t) {
                var e = j.call(this, t = w(t, !0));
                return !(this === z && r90(U, t) && !r90(H, t)) && (!(e || !r90(this, t) || !r90(U, t) || r90(this, L) && this[L][t]) || e);
            }, $ = function(t, e) {
                if (t = x(t), e = w(e, !0), t !== z || !r90(U, e) || r90(H, e)) {
                    var n = I(t, e);
                    return !n || !r90(U, e) || r90(t, L) && t[L][e] || (n.enumerable = !0), n;
                }
            }, Q = function(t) {
                for(var e, n = R(x(t)), o = [], i = 0; n.length > i;)r90(U, e = n[i++]) || e == L || e == l || o.push(e);
                return o;
            }, tt = function(t) {
                for(var e, n = t === z, o = R(n ? H : x(t)), i = [], a = 0; o.length > a;)!r90(U, e = o[a++]) || n && !r90(z, e) || i.push(U[e]);
                return i;
            };
            W || (s((A = function() {
                if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
                    this === z && e.call(H, n), r90(this, L) && r90(this[L], t) && (this[L][t] = !1), X(this, t, S(1, n));
                };
                return i91 && V && X(z, t, {
                    configurable: !0,
                    set: e
                }), G(t);
            }).prototype, "toString", function() {
                return this._k;
            }), B.f = $, _.f = Z, n180(49).f = E.f = Q, n180(62).f = J, C.f = tt, i91 && !n180(45) && s(z, "propertyIsEnumerable", J, !0), h.f = function(t) {
                return G(p(t));
            }), a37(a37.G + a37.W + a37.F * !W, {
                Symbol: A
            });
            for(var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)p(et[nt++]);
            for(var ot = O(p.store), rt = 0; ot.length > rt;)v(ot[rt++]);
            a37(a37.S + a37.F * !W, "Symbol", {
                for: function(t) {
                    return r90(F, t += "") ? F[t] : F[t] = A(t);
                },
                keyFor: function(t) {
                    if (!K(t)) throw TypeError(t + " is not a symbol!");
                    for(var e in F)if (F[e] === t) return e;
                },
                useSetter: function() {
                    V = !0;
                },
                useSimple: function() {
                    V = !1;
                }
            }), a37(a37.S + a37.F * !W, "Object", {
                create: function(t, e) {
                    return void 0 === e ? T(t) : q(T(t), e);
                },
                defineProperty: Z,
                defineProperties: q,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: tt
            });
            var it = c(function() {
                C.f(1);
            });
            a37(a37.S + a37.F * it, "Object", {
                getOwnPropertySymbols: function(t) {
                    return C.f(k(t));
                }
            }), N && a37(a37.S + a37.F * (!W || c(function() {
                var t = A();
                return "[null]" != P([
                    t
                ]) || "{}" != P({
                    a: t
                }) || "{}" != P(Object(t));
            })), "JSON", {
                stringify: function(t350) {
                    for(var e233, n, o = [
                        t350
                    ], r = 1; arguments.length > r;)o.push(arguments[r++]);
                    if (n = e233 = o[1], (m(e233) || void 0 !== t350) && !K(t350)) return y(e233) || (e233 = function(t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e;
                    }), o[1] = e233, P.apply(N, o);
                }
            }), A.prototype[D] || n180(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(o164.JSON, "JSON", !0);
        },
        function(t, e, n) {
            t.exports = n(68)("native-function-to-string", Function.toString);
        },
        function(t351, e234, n181) {
            var o = n181(46), r = n181(70), i = n181(62);
            t351.exports = function(t) {
                var e = o(t), n = r.f;
                if (n) for(var a, s = n(t), l = i.f, c = 0; s.length > c;)l.call(t, a = s[c++]) && e.push(a);
                return e;
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                create: n(48)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperty: n(19).f
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperties: n(116)
            });
        },
        function(t352, e235, n) {
            var o = n(28), r = n(34).f;
            n(35)("getOwnPropertyDescriptor", function() {
                return function(t, e) {
                    return r(o(t), e);
                };
            });
        },
        function(t353, e, n) {
            var o = n(20), r = n(50);
            n(35)("getPrototypeOf", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t354, e, n) {
            var o = n(20), r = n(46);
            n(35)("keys", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t, e, n) {
            n(35)("getOwnPropertyNames", function() {
                return n(117).f;
            });
        },
        function(t355, e236, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("freeze", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t356, e237, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("seal", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t357, e238, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("preventExtensions", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t358, e239, n) {
            var o = n(13);
            n(35)("isFrozen", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t359, e240, n) {
            var o = n(13);
            n(35)("isSealed", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t360, e241, n) {
            var o = n(13);
            n(35)("isExtensible", function(t) {
                return function(e) {
                    return !!o(e) && (!t || t(e));
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F, "Object", {
                assign: n(118)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                is: n(119)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                setPrototypeOf: n(90).set
            });
        },
        function(t, e, n) {
            "use strict";
            var o = n(63), r = {
            };
            r[n(14)("toStringTag")] = "z", r + "" != "[object z]" && n(21)(Object.prototype, "toString", function() {
                return "[object " + o(this) + "]";
            }, !0);
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Function", {
                bind: n(120)
            });
        },
        function(t, e, n) {
            var o = n(19).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
            "name" in r || n(18) && o(r, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(i)[1];
                    } catch (t) {
                        return "";
                    }
                }
            });
        },
        function(t361, e, n) {
            "use strict";
            var o = n(13), r = n(50), i = n(14)("hasInstance"), a = Function.prototype;
            i in a || n(19).f(a, i, {
                value: function(t) {
                    if ("function" != typeof this || !o(t)) return !1;
                    if (!o(this.prototype)) return t instanceof this;
                    for(; t = r(t);)if (this.prototype === t) return !0;
                    return !1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(122);
            o(o.G + o.F * (parseInt != r), {
                parseInt: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(123);
            o(o.G + o.F * (parseFloat != r), {
                parseFloat: r
            });
        },
        function(t362, e242, n182) {
            "use strict";
            var o165 = n182(10), r91 = n182(26), i92 = n182(37), a38 = n182(92), s = n182(40), l23 = n182(11), c18 = n182(49).f, u16 = n182(34).f, f = n182(19).f, d = n182(54).trim, p = o165.Number, h = p, v = p.prototype, g = "Number" == i92(n182(48)(v)), y = "trim" in String.prototype, b = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, o, r, i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === i) {
                        switch(e.charCodeAt(1)){
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +e;
                        }
                        for(var a, l = e.slice(2), c = 0, u = l.length; c < u; c++)if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                        return parseInt(l, o);
                    }
                }
                return +e;
            };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function(t) {
                    var e = arguments.length < 1 ? 0 : t, n = this;
                    return n instanceof p && (g ? l23(function() {
                        v.valueOf.call(n);
                    }) : "Number" != i92(n)) ? a38(new h(b(e)), n, p) : b(e);
                };
                for(var m, k = n182(18) ? c18(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)r91(h, m = k[x]) && !r91(p, m) && f(p, m, u16(h, m));
                p.prototype = v, v.constructor = p, n182(21)(o165, "Number", p);
            }
        },
        function(t363, e243, n183) {
            "use strict";
            var o166 = n183(0), r = n183(33), i = n183(124), a = n183(93), s29 = 1..toFixed, l24 = Math.floor, c19 = [
                0,
                0,
                0,
                0,
                0,
                0
            ], u = "Number.toFixed: incorrect invocation!", f = function(t, e) {
                for(var n = -1, o = e; ++n < 6;)o += t * c19[n], c19[n] = o % 10000000, o = l24(o / 10000000);
            }, d = function(t) {
                for(var e = 6, n = 0; --e >= 0;)n += c19[e], c19[e] = l24(n / t), n = n % t * 10000000;
            }, p = function() {
                for(var t = 6, e = ""; --t >= 0;)if ("" !== e || 0 === t || 0 !== c19[t]) {
                    var n = String(c19[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
                }
                return e;
            }, h = function(t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
            };
            o166(o166.P + o166.F * (!!s29 && ("0.000" !== 0.00008.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100..toFixed(0)) || !n183(11)(function() {
                s29.call({
                });
            })), "Number", {
                toFixed: function(t364) {
                    var e244, n184, o, s, l = i(this, u), c = r(t364), v = "", g = "0";
                    if (c < 0 || c > 20) throw RangeError(u);
                    if (l != l) return "NaN";
                    if (l <= -1000000000000000000000 || l >= 1000000000000000000000) return String(l);
                    if (l < 0 && (v = "-", l = -l), l > 0.000000000000000000001) {
                        if (n184 = (e244 = (function(t) {
                            for(var e = 0, n = t; n >= 4096;)e += 12, n /= 4096;
                            for(; n >= 2;)e += 1, n /= 2;
                            return e;
                        })(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e244, 1) : l / h(2, e244, 1), n184 *= 4503599627370496, (e244 = 52 - e244) > 0) {
                            for(f(0, n184), o = c; o >= 7;)f(10000000, 0), o -= 7;
                            for(f(h(10, o, 1), 0), o = e244 - 1; o >= 23;)d(8388608), o -= 23;
                            d(1 << o), f(1, 1), d(2), g = p();
                        } else f(0, n184), f(1 << -e244, 0), g = p() + a.call("0", c);
                    }
                    return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
                }
            });
        },
        function(t365, e245, n) {
            "use strict";
            var o = n(0), r = n(11), i = n(124), a = 1..toPrecision;
            o(o.P + o.F * (r(function() {
                return "1" !== a.call(1, void 0);
            }) || !r(function() {
                a.call({
                });
            })), "Number", {
                toPrecision: function(t) {
                    var e = i(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === t ? a.call(e) : a.call(e, t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                EPSILON: Math.pow(2, -52)
            });
        },
        function(t366, e, n) {
            var o = n(0), r = n(10).isFinite;
            o(o.S, "Number", {
                isFinite: function(t) {
                    return "number" == typeof t && r(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isInteger: n(125)
            });
        },
        function(t367, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isNaN: function(t) {
                    return t != t;
                }
            });
        },
        function(t368, e, n) {
            var o = n(0), r = n(125), i = Math.abs;
            o(o.S, "Number", {
                isSafeInteger: function(t) {
                    return r(t) && i(t) <= 9007199254740991;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(123);
            o(o.S + o.F * (Number.parseFloat != r), "Number", {
                parseFloat: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(122);
            o(o.S + o.F * (Number.parseInt != r), "Number", {
                parseInt: r
            });
        },
        function(t369, e, n) {
            var o = n(0), r = n(126), i = Math.sqrt, a = Math.acosh;
            o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function(t) {
                    return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1));
                }
            });
        },
        function(t370, e246, n) {
            var o = n(0), r = Math.asinh;
            o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
                asinh: function t(e) {
                    return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
                }
            });
        },
        function(t371, e, n) {
            var o = n(0), r = Math.atanh;
            o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
                atanh: function(t) {
                    return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
                }
            });
        },
        function(t372, e, n) {
            var o = n(0), r = n(94);
            o(o.S, "Math", {
                cbrt: function(t) {
                    return r(t = +t) * Math.pow(Math.abs(t), 1 / 3);
                }
            });
        },
        function(t373, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                clz32: function(t) {
                    return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
                }
            });
        },
        function(t374, e, n) {
            var o = n(0), r = Math.exp;
            o(o.S, "Math", {
                cosh: function(t) {
                    return (r(t = +t) + r(-t)) / 2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(95);
            o(o.S + o.F * (r != Math.expm1), "Math", {
                expm1: r
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                fround: n(235)
            });
        },
        function(t375, e247, n185) {
            var o = n185(94), r92 = Math.pow, i = r92(2, -52), a = r92(2, -23), s = r92(2, 127) * (2 - a), l = r92(2, -126);
            t375.exports = Math.fround || function(t) {
                var e, n, r = Math.abs(t), c = o(t);
                return r < l ? c * (r / l / a + 1 / i - 1 / i) * l * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? c * (1 / 0) : c * n;
            };
        },
        function(t, e, n186) {
            var o167 = n186(0), r = Math.abs;
            o167(o167.S, "Math", {
                hypot: function(t, e) {
                    for(var n, o, i = 0, a = 0, s = arguments.length, l = 0; a < s;)l < (n = r(arguments[a++])) ? (i = i * (o = l / n) * o + 1, l = n) : i += n > 0 ? (o = n / l) * o : n;
                    return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
                }
            });
        },
        function(t376, e248, n187) {
            var o168 = n187(0), r93 = Math.imul;
            o168(o168.S + o168.F * n187(11)(function() {
                return -5 != r93(4294967295, 5) || 2 != r93.length;
            }), "Math", {
                imul: function(t, e) {
                    var n = +t, o = +e, r = 65535 & n, i = 65535 & o;
                    return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0);
                }
            });
        },
        function(t377, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log10: function(t) {
                    return Math.log(t) * Math.LOG10E;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log1p: n(126)
            });
        },
        function(t378, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log2: function(t) {
                    return Math.log(t) / Math.LN2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                sign: n(94)
            });
        },
        function(t379, e, n) {
            var o = n(0), r = n(95), i = Math.exp;
            o(o.S + o.F * n(11)(function() {
                return -0.00000000000000002 != !Math.sinh(-0.00000000000000002);
            }), "Math", {
                sinh: function(t) {
                    return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2);
                }
            });
        },
        function(t380, e249, n188) {
            var o = n188(0), r = n188(95), i = Math.exp;
            o(o.S, "Math", {
                tanh: function(t) {
                    var e = r(t = +t), n = r(-t);
                    return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
                }
            });
        },
        function(t381, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                trunc: function(t) {
                    return (t > 0 ? Math.floor : Math.ceil)(t);
                }
            });
        },
        function(t, e250, n189) {
            var o169 = n189(0), r = n189(47), i = String.fromCharCode, a39 = String.fromCodePoint;
            o169(o169.S + o169.F * (!!a39 && 1 != a39.length), "String", {
                fromCodePoint: function(t) {
                    for(var e, n = [], o = arguments.length, a = 0; o > a;){
                        if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                        n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
                    }
                    return n.join("");
                }
            });
        },
        function(t382, e251, n190) {
            var o170 = n190(0), r = n190(28), i = n190(16);
            o170(o170.S, "String", {
                raw: function(t) {
                    for(var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;)a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
                    return a.join("");
                }
            });
        },
        function(t383, e, n) {
            "use strict";
            n(54)("trim", function(t) {
                return function() {
                    return t(this, 3);
                };
            });
        },
        function(t384, e252, n191) {
            "use strict";
            var o = n191(96)(!0);
            n191(97)(String, "String", function(t) {
                this._t = String(t), this._i = 0;
            }, function() {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = o(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                });
            });
        },
        function(t385, e, n) {
            "use strict";
            var o = n(0), r = n(96)(!1);
            o(o.P, "String", {
                codePointAt: function(t) {
                    return r(this, t);
                }
            });
        },
        function(t386, e253, n192) {
            "use strict";
            var o171 = n192(0), r = n192(16), i = n192(98), a = "".endsWith;
            o171(o171.P + o171.F * n192(100)("endsWith"), "String", {
                endsWith: function(t) {
                    var e = i(this, t, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, o = r(e.length), s = void 0 === n ? o : Math.min(r(n), o), l = String(t);
                    return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
                }
            });
        },
        function(t387, e, n) {
            "use strict";
            var o = n(0), r = n(98);
            o(o.P + o.F * n(100)("includes"), "String", {
                includes: function(t) {
                    return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "String", {
                repeat: n(93)
            });
        },
        function(t388, e254, n193) {
            "use strict";
            var o172 = n193(0), r = n193(16), i = n193(98), a = "".startsWith;
            o172(o172.P + o172.F * n193(100)("startsWith"), "String", {
                startsWith: function(t) {
                    var e = i(this, t, "startsWith"), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), o = String(t);
                    return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
                }
            });
        },
        function(t389, e255, n) {
            "use strict";
            n(22)("anchor", function(t) {
                return function(e) {
                    return t(this, "a", "name", e);
                };
            });
        },
        function(t390, e, n) {
            "use strict";
            n(22)("big", function(t) {
                return function() {
                    return t(this, "big", "", "");
                };
            });
        },
        function(t391, e, n) {
            "use strict";
            n(22)("blink", function(t) {
                return function() {
                    return t(this, "blink", "", "");
                };
            });
        },
        function(t392, e, n) {
            "use strict";
            n(22)("bold", function(t) {
                return function() {
                    return t(this, "b", "", "");
                };
            });
        },
        function(t393, e, n) {
            "use strict";
            n(22)("fixed", function(t) {
                return function() {
                    return t(this, "tt", "", "");
                };
            });
        },
        function(t394, e256, n) {
            "use strict";
            n(22)("fontcolor", function(t) {
                return function(e) {
                    return t(this, "font", "color", e);
                };
            });
        },
        function(t395, e257, n) {
            "use strict";
            n(22)("fontsize", function(t) {
                return function(e) {
                    return t(this, "font", "size", e);
                };
            });
        },
        function(t396, e, n) {
            "use strict";
            n(22)("italics", function(t) {
                return function() {
                    return t(this, "i", "", "");
                };
            });
        },
        function(t397, e258, n) {
            "use strict";
            n(22)("link", function(t) {
                return function(e) {
                    return t(this, "a", "href", e);
                };
            });
        },
        function(t398, e, n) {
            "use strict";
            n(22)("small", function(t) {
                return function() {
                    return t(this, "small", "", "");
                };
            });
        },
        function(t399, e, n) {
            "use strict";
            n(22)("strike", function(t) {
                return function() {
                    return t(this, "strike", "", "");
                };
            });
        },
        function(t400, e, n) {
            "use strict";
            n(22)("sub", function(t) {
                return function() {
                    return t(this, "sub", "", "");
                };
            });
        },
        function(t401, e, n) {
            "use strict";
            n(22)("sup", function(t) {
                return function() {
                    return t(this, "sup", "", "");
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Date", {
                now: function() {
                    return (new Date).getTime();
                }
            });
        },
        function(t, e259, n194) {
            "use strict";
            var o = n194(0), r = n194(20), i = n194(40);
            o(o.P + o.F * n194(11)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1;
                    }
                });
            }), "Date", {
                toJSON: function(t) {
                    var e = r(this), n = i(e);
                    return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(270);
            o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
                toISOString: r
            });
        },
        function(t402, e260, n195) {
            "use strict";
            var o173 = n195(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(t) {
                return t > 9 ? t : "0" + t;
            };
            t402.exports = o173(function() {
                return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
            }) || !o173(function() {
                i.call(new Date(NaN));
            }) ? function() {
                if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
                var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), o = e < 0 ? "-" : e > 9999 ? "+" : "";
                return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
            } : i;
        },
        function(t403, e, n) {
            var o = Date.prototype, r = o.toString, i = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(21)(o, "toString", function() {
                var t = i.call(this);
                return t == t ? r.call(this) : "Invalid Date";
            });
        },
        function(t, e, n) {
            var o = n(14)("toPrimitive"), r = Date.prototype;
            o in r || n(27)(r, o, n(273));
        },
        function(t404, e, n) {
            "use strict";
            var o = n(12), r = n(40);
            t404.exports = function(t) {
                if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
                return r(o(this), "number" != t);
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Array", {
                isArray: n(71)
            });
        },
        function(t405, e261, n196) {
            "use strict";
            var o = n196(31), r94 = n196(0), i = n196(20), a = n196(128), s = n196(101), l = n196(16), c = n196(102), u = n196(103);
            r94(r94.S + r94.F * !n196(72)(function(t) {
                Array.from(t);
            }), "Array", {
                from: function(t) {
                    var e, n, r, f, d = i(t), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, b = u(d);
                    if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for(n = new p(e = l(d.length)); e > y; y++)c(n, y, g ? v(d[y], y) : d[y]);
                    else for(f = b.call(d), n = new p; !(r = f.next()).done; y++)c(n, y, g ? a(f, v, [
                        r.value,
                        y
                    ], !0) : r.value);
                    return n.length = y, n;
                }
            });
        },
        function(t406, e262, n197) {
            "use strict";
            var o = n197(0), r = n197(102);
            o(o.S + o.F * n197(11)(function() {
                function t() {
                }
                return !(Array.of.call(t) instanceof t);
            }), "Array", {
                of: function() {
                    for(var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;)r(n, t, arguments[t++]);
                    return n.length = e, n;
                }
            });
        },
        function(t407, e, n) {
            "use strict";
            var o = n(0), r = n(28), i = [].join;
            o(o.P + o.F * (n(61) != Object || !n(29)(i)), "Array", {
                join: function(t) {
                    return i.call(r(this), void 0 === t ? "," : t);
                }
            });
        },
        function(t408, e263, n198) {
            "use strict";
            var o174 = n198(0), r95 = n198(89), i = n198(37), a = n198(47), s = n198(16), l = [].slice;
            o174(o174.P + o174.F * n198(11)(function() {
                r95 && l.call(r95);
            }), "Array", {
                slice: function(t, e) {
                    var n = s(this.length), o = i(this);
                    if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);
                    for(var r = a(t, n), c = a(e, n), u = s(c - r), f = new Array(u), d = 0; d < u; d++)f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                    return f;
                }
            });
        },
        function(t409, e, n) {
            "use strict";
            var o = n(0), r = n(32), i = n(20), a = n(11), s = [].sort, l = [
                1,
                2,
                3
            ];
            o(o.P + o.F * (a(function() {
                l.sort(void 0);
            }) || !a(function() {
                l.sort(null);
            }) || !n(29)(s)), "Array", {
                sort: function(t) {
                    return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t));
                }
            });
        },
        function(t410, e, n) {
            "use strict";
            var o = n(0), r = n(36)(0), i = n(29)([].forEach, !0);
            o(o.P + o.F * !i, "Array", {
                forEach: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t411, e264, n) {
            var o = n(13), r = n(71), i = n(14)("species");
            t411.exports = function(t) {
                var e;
                return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
            };
        },
        function(t412, e, n) {
            "use strict";
            var o = n(0), r = n(36)(1);
            o(o.P + o.F * !n(29)([].map, !0), "Array", {
                map: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t413, e, n) {
            "use strict";
            var o = n(0), r = n(36)(2);
            o(o.P + o.F * !n(29)([].filter, !0), "Array", {
                filter: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t414, e, n) {
            "use strict";
            var o = n(0), r = n(36)(3);
            o(o.P + o.F * !n(29)([].some, !0), "Array", {
                some: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t415, e, n) {
            "use strict";
            var o = n(0), r = n(36)(4);
            o(o.P + o.F * !n(29)([].every, !0), "Array", {
                every: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t416, e, n) {
            "use strict";
            var o = n(0), r = n(130);
            o(o.P + o.F * !n(29)([].reduce, !0), "Array", {
                reduce: function(t) {
                    return r(this, t, arguments.length, arguments[1], !1);
                }
            });
        },
        function(t417, e, n) {
            "use strict";
            var o = n(0), r = n(130);
            o(o.P + o.F * !n(29)([].reduceRight, !0), "Array", {
                reduceRight: function(t) {
                    return r(this, t, arguments.length, arguments[1], !0);
                }
            });
        },
        function(t418, e, n) {
            "use strict";
            var o = n(0), r = n(69)(!1), i = [].indexOf, a = !!i && 1 / [
                1
            ].indexOf(1, -0) < 0;
            o(o.P + o.F * (a || !n(29)(i)), "Array", {
                indexOf: function(t) {
                    return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1]);
                }
            });
        },
        function(t419, e265, n199) {
            "use strict";
            var o175 = n199(0), r = n199(28), i = n199(33), a = n199(16), s = [].lastIndexOf, l = !!s && 1 / [
                1
            ].lastIndexOf(1, -0) < 0;
            o175(o175.P + o175.F * (l || !n199(29)(s)), "Array", {
                lastIndexOf: function(t) {
                    if (l) return s.apply(this, arguments) || 0;
                    var e = r(this), n = a(e.length), o = n - 1;
                    for(arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)if (o in e && e[o] === t) return o || 0;
                    return -1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                copyWithin: n(131)
            }), n(51)("copyWithin");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                fill: n(104)
            }), n(51)("fill");
        },
        function(t420, e, n) {
            "use strict";
            var o = n(0), r = n(36)(5), i = !0;
            "find" in [] && Array(1).find(function() {
                i = !1;
            }), o(o.P + o.F * i, "Array", {
                find: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("find");
        },
        function(t421, e, n) {
            "use strict";
            var o = n(0), r = n(36)(6), i = "findIndex", a = !0;
            i in [] && Array(1)[i](function() {
                a = !1;
            }), o(o.P + o.F * a, "Array", {
                findIndex: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)(i);
        },
        function(t, e, n) {
            n(56)("Array");
        },
        function(t422, e266, n200) {
            var o176 = n200(10), r = n200(92), i93 = n200(19).f, a = n200(49).f, s = n200(99), l = n200(73), c = o176.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
            if (n200(18) && (!h || n200(11)(function() {
                return p[n200(14)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
            }))) {
                c = function(t, e) {
                    var n = this instanceof c, o = s(t), i = void 0 === e;
                    return !n && o && t.constructor === c && i ? t : r(h ? new u(o && !i ? t.source : t, e) : u((o = t instanceof c) ? t.source : t, o && i ? l.call(t) : e), n ? this : f, c);
                };
                for(var v = function(t) {
                    (t in c) || i93(c, t, {
                        configurable: !0,
                        get: function() {
                            return u[t];
                        },
                        set: function(e) {
                            u[t] = e;
                        }
                    });
                }, g = a(u), y = 0; g.length > y;)v(g[y++]);
                f.constructor = c, c.prototype = f, n200(21)(o176, "RegExp", c);
            }
            n200(56)("RegExp");
        },
        function(t423, e, n) {
            "use strict";
            n(134);
            var o = n(12), r = n(73), i = n(18), a = /./.toString, s = function(t) {
                n(21)(RegExp.prototype, "toString", t, !0);
            };
            n(11)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                });
            }) ? s(function() {
                var t = o(this);
                return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0);
            }) : "toString" != a.name && s(function() {
                return a.call(this);
            });
        },
        function(t424, e267, n201) {
            "use strict";
            var o177 = n201(12), r96 = n201(16), i = n201(107), a = n201(74);
            n201(75)("match", 1, function(t425, e268, n202, s) {
                return [
                    function(n) {
                        var o = t425(this), r = null == n ? void 0 : n[e268];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e268](String(o));
                    },
                    function(t) {
                        var e = s(n202, t, this);
                        if (e.done) return e.value;
                        var l = o177(t), c = String(this);
                        if (!l.global) return a(l, c);
                        var u = l.unicode;
                        l.lastIndex = 0;
                        for(var f, d = [], p = 0; null !== (f = a(l, c));){
                            var h = String(f[0]);
                            d[p] = h, "" === h && (l.lastIndex = i(c, r96(l.lastIndex), u)), p++;
                        }
                        return 0 === p ? null : d;
                    }
                ];
            });
        },
        function(t426, e269, n203) {
            "use strict";
            var o178 = n203(12), r97 = n203(20), i94 = n203(16), a40 = n203(33), s30 = n203(107), l25 = n203(74), c20 = Math.max, u17 = Math.min, f14 = Math.floor, d11 = /\$([$&`']|\d\d?|<[^>]*>)/g, p10 = /\$([$&`']|\d\d?)/g;
            n203(75)("replace", 2, function(t427, e270, n204, h) {
                function v(t, e, o, i, a, s31) {
                    var l = o + t.length, c = i.length, u18 = p10;
                    return void 0 !== a && (a = r97(a), u18 = d11), n204.call(s31, u18, function(n, r) {
                        var s;
                        switch(r.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, o);
                            case "'":
                                return e.slice(l);
                            case "<":
                                s = a[r.slice(1, -1)];
                                break;
                            default:
                                var u = +r;
                                if (0 === u) return n;
                                if (u > c) {
                                    var d = f14(u / 10);
                                    return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n;
                                }
                                s = i[u - 1];
                        }
                        return void 0 === s ? "" : s;
                    });
                }
                return [
                    function(o, r) {
                        var i = t427(this), a = null == o ? void 0 : o[e270];
                        return void 0 !== a ? a.call(o, i, r) : n204.call(String(i), o, r);
                    },
                    function(t, e) {
                        var r = h(n204, t, this, e);
                        if (r.done) return r.value;
                        var f = o178(t), d = String(this), p = "function" == typeof e;
                        p || (e = String(e));
                        var g = f.global;
                        if (g) {
                            var y = f.unicode;
                            f.lastIndex = 0;
                        }
                        for(var b = [];;){
                            var m = l25(f, d);
                            if (null === m) break;
                            if (b.push(m), !g) break;
                            "" === String(m[0]) && (f.lastIndex = s30(d, i94(f.lastIndex), y));
                        }
                        for(var k, x = "", w = 0, S = 0; S < b.length; S++){
                            m = b[S];
                            for(var T = String(m[0]), E = c20(u17(a40(m.index), d.length), 0), B = [], C = 1; C < m.length; C++)B.push(void 0 === (k = m[C]) ? k : String(k));
                            var _ = m.groups;
                            if (p) {
                                var O = [
                                    T
                                ].concat(B, E, d);
                                void 0 !== _ && O.push(_);
                                var I = String(e.apply(void 0, O));
                            } else I = v(T, d, E, B, _, e);
                            E >= w && (x += d.slice(w, E) + I, w = E + T.length);
                        }
                        return x + d.slice(w);
                    }
                ];
            });
        },
        function(t428, e271, n205) {
            "use strict";
            var o179 = n205(12), r98 = n205(119), i = n205(74);
            n205(75)("search", 1, function(t429, e272, n206, a) {
                return [
                    function(n) {
                        var o = t429(this), r = null == n ? void 0 : n[e272];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e272](String(o));
                    },
                    function(t) {
                        var e = a(n206, t, this);
                        if (e.done) return e.value;
                        var s = o179(t), l = String(this), c = s.lastIndex;
                        r98(c, 0) || (s.lastIndex = 0);
                        var u = i(s, l);
                        return r98(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
                    }
                ];
            });
        },
        function(t430, e273, n207) {
            "use strict";
            var o180 = n207(99), r99 = n207(12), i95 = n207(64), a41 = n207(107), s32 = n207(16), l26 = n207(74), c21 = n207(106), u19 = n207(11), f15 = Math.min, d12 = [].push, p11 = "length", h6 = !u19(function() {
                RegExp(4294967295, "y");
            });
            n207(75)("split", 2, function(t431, e274, n208, u20) {
                var v2;
                return v2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p11] || 2 != "ab".split(/(?:ab)*/)[p11] || 4 != ".".split(/(.?)(.?)/)[p11] || ".".split(/()()/)[p11] > 1 || "".split(/.?/)[p11] ? function(t, e) {
                    var r = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o180(t)) return n208.call(r, t, e);
                    for(var i, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, h = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, u + "g"); (i = c21.call(v, r)) && !((a = v.lastIndex) > f && (l.push(r.slice(f, i.index)), i[p11] > 1 && i.index < r[p11] && d12.apply(l, i.slice(1)), s = i[0][p11], f = a, l[p11] >= h));)v.lastIndex === i.index && v.lastIndex++;
                    return f === r[p11] ? !s && v.test("") || l.push("") : l.push(r.slice(f)), l[p11] > h ? l.slice(0, h) : l;
                } : "0".split(void 0, 0)[p11] ? function(t, e) {
                    return void 0 === t && 0 === e ? [] : n208.call(this, t, e);
                } : n208, [
                    function(n, o) {
                        var r = t431(this), i = null == n ? void 0 : n[e274];
                        return void 0 !== i ? i.call(n, r, o) : v2.call(String(r), n, o);
                    },
                    function(t, e) {
                        var o = u20(v2, t, this, e, v2 !== n208);
                        if (o.done) return o.value;
                        var c = r99(t), d = String(this), p = i95(c, RegExp), g = c.unicode, y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h6 ? "y" : "g"), b = new p(h6 ? c : "^(?:" + c.source + ")", y), m = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === m) return [];
                        if (0 === d.length) return null === l26(b, d) ? [
                            d
                        ] : [];
                        for(var k = 0, x = 0, w = []; x < d.length;){
                            b.lastIndex = h6 ? x : 0;
                            var S, T = l26(b, h6 ? d : d.slice(x));
                            if (null === T || (S = f15(s32(b.lastIndex + (h6 ? 0 : x)), d.length)) === k) x = a41(d, x, g);
                            else {
                                if (w.push(d.slice(k, x)), w.length === m) return w;
                                for(var E = 1; E <= T.length - 1; E++)if (w.push(T[E]), w.length === m) return w;
                                x = k = S;
                            }
                        }
                        return w.push(d.slice(k)), w;
                    }
                ];
            });
        },
        function(t432, e275, n209) {
            var o181 = n209(10), r100 = n209(108).set, i = o181.MutationObserver || o181.WebKitMutationObserver, a = o181.process, s = o181.Promise, l = "process" == n209(37)(a);
            t432.exports = function() {
                var t, e, n, c = function() {
                    var o, r;
                    for(l && (o = a.domain) && o.exit(); t;){
                        r = t.fn, t = t.next;
                        try {
                            r();
                        } catch (o) {
                            throw t ? n() : e = void 0, o;
                        }
                    }
                    e = void 0, o && o.enter();
                };
                if (l) n = function() {
                    a.nextTick(c);
                };
                else if (!i || o181.navigator && o181.navigator.standalone) {
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c);
                        };
                    } else n = function() {
                        r100.call(o181, c);
                    };
                } else {
                    var f = !0, d = document.createTextNode("");
                    new i(c).observe(d, {
                        characterData: !0
                    }), n = function() {
                        d.data = f = !f;
                    };
                }
                return function(o) {
                    var r = {
                        fn: o,
                        next: void 0
                    };
                    e && (e.next = r), t || (t = r, n()), e = r;
                };
            };
        },
        function(t433, e) {
            t433.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    };
                } catch (t434) {
                    return {
                        e: !0,
                        v: t434
                    };
                }
            };
        },
        function(t435, e276, n) {
            "use strict";
            var o = n(138), r = n(52);
            t435.exports = n(78)("Map", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                get: function(t) {
                    var e = o.getEntry(r(this, "Map"), t);
                    return e && e.v;
                },
                set: function(t, e) {
                    return o.def(r(this, "Map"), 0 === t ? 0 : t, e);
                }
            }, o, !0);
        },
        function(t436, e, n) {
            "use strict";
            var o = n(138), r = n(52);
            t436.exports = n(78)("Set", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t);
                }
            }, o);
        },
        function(t437, e277, n210) {
            "use strict";
            var o, r101 = n210(10), i96 = n210(36)(0), a = n210(21), s = n210(41), l = n210(118), c = n210(139), u = n210(13), f = n210(52), d = n210(52), p = !r101.ActiveXObject && "ActiveXObject" in r101, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, b = {
                get: function(t) {
                    if (u(t)) {
                        var e = h(t);
                        return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
                    }
                },
                set: function(t, e) {
                    return c.def(f(this, "WeakMap"), t, e);
                }
            }, m = t437.exports = n210(78)("WeakMap", y, b, c, !0, !0);
            d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, i96([
                "delete",
                "has",
                "get",
                "set"
            ], function(t) {
                var e278 = m.prototype, n = e278[t];
                a(e278, t, function(e, r) {
                    if (u(e) && !v(e)) {
                        this._f || (this._f = new o);
                        var i = this._f[t](e, r);
                        return "set" == t ? this : i;
                    }
                    return n.call(this, e, r);
                });
            }));
        },
        function(t438, e, n) {
            "use strict";
            var o = n(139), r = n(52);
            n(78)("WeakSet", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "WeakSet"), t, !0);
                }
            }, o, !1, !0);
        },
        function(t439, e279, n211) {
            "use strict";
            var o182 = n211(0), r102 = n211(79), i97 = n211(109), a = n211(12), s = n211(47), l = n211(16), c22 = n211(13), u21 = n211(10).ArrayBuffer, f = n211(64), d = i97.ArrayBuffer, p = i97.DataView, h7 = r102.ABV && u21.isView, v = d.prototype.slice, g = r102.VIEW;
            o182(o182.G + o182.W + o182.F * (u21 !== d), {
                ArrayBuffer: d
            }), o182(o182.S + o182.F * !r102.CONSTR, "ArrayBuffer", {
                isView: function(t) {
                    return h7 && h7(t) || c22(t) && g in t;
                }
            }), o182(o182.P + o182.U + o182.F * n211(11)(function() {
                return !new d(2).slice(1, void 0).byteLength;
            }), "ArrayBuffer", {
                slice: function(t, e) {
                    if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                    for(var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new (f(this, d))(l(r - o)), c = new p(this), u = new p(i), h = 0; o < r;)u.setUint8(h++, c.getUint8(o++));
                    return i;
                }
            }), n211(56)("ArrayBuffer");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.G + o.W + o.F * !n(79).ABV, {
                DataView: n(109).DataView
            });
        },
        function(t440, e280, n212) {
            n212(39)("Int8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t441, e281, n213) {
            n213(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t442, e282, n214) {
            n214(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            }, !0);
        },
        function(t443, e283, n215) {
            n215(39)("Int16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t444, e284, n216) {
            n216(39)("Uint16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t445, e285, n217) {
            n217(39)("Int32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t446, e286, n218) {
            n218(39)("Uint32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t447, e287, n219) {
            n219(39)("Float32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t448, e288, n220) {
            n220(39)("Float64", 8, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t449, e289, n221) {
            var o183 = n221(0), r = n221(32), i = n221(12), a = (n221(10).Reflect || {
            }).apply, s = Function.apply;
            o183(o183.S + o183.F * !n221(11)(function() {
                a(function() {
                });
            }), "Reflect", {
                apply: function(t, e, n) {
                    var o = r(t), l = i(n);
                    return a ? a(o, e, l) : s.call(o, e, l);
                }
            });
        },
        function(t450, e290, n222) {
            var o184 = n222(0), r = n222(48), i = n222(32), a = n222(12), s = n222(13), l27 = n222(11), c = n222(120), u = (n222(10).Reflect || {
            }).construct, f = l27(function() {
                function t() {
                }
                return !(u(function() {
                }, [], t) instanceof t);
            }), d = !l27(function() {
                u(function() {
                });
            });
            o184(o184.S + o184.F * (f || d), "Reflect", {
                construct: function(t, e) {
                    i(t), a(e);
                    var n = arguments.length < 3 ? t : i(arguments[2]);
                    if (d && !f) return u(t, e, n);
                    if (t == n) {
                        switch(e.length){
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                        }
                        var o = [
                            null
                        ];
                        return o.push.apply(o, e), new (c.apply(t, o));
                    }
                    var l = n.prototype, p = r(s(l) ? l : Object.prototype), h = Function.apply.call(t, p, e);
                    return s(h) ? h : p;
                }
            });
        },
        function(t451, e291, n223) {
            var o = n223(19), r = n223(0), i = n223(12), a = n223(40);
            r(r.S + r.F * n223(11)(function() {
                Reflect.defineProperty(o.f({
                }, 1, {
                    value: 1
                }), 1, {
                    value: 2
                });
            }), "Reflect", {
                defineProperty: function(t, e, n) {
                    i(t), e = a(e, !0), i(n);
                    try {
                        return o.f(t, e, n), !0;
                    } catch (t452) {
                        return !1;
                    }
                }
            });
        },
        function(t453, e292, n224) {
            var o = n224(0), r = n224(34).f, i = n224(12);
            o(o.S, "Reflect", {
                deleteProperty: function(t, e) {
                    var n = r(i(t), e);
                    return !(n && !n.configurable) && delete t[e];
                }
            });
        },
        function(t454, e293, n225) {
            "use strict";
            var o = n225(0), r = n225(12), i = function(t) {
                this._t = r(t), this._i = 0;
                var e, n = this._k = [];
                for(e in t)n.push(e);
            };
            n225(127)(i, "Object", function() {
                var t, e = this._k;
                do {
                    if (this._i >= e.length) return {
                        value: void 0,
                        done: !0
                    };
                }while (!((t = e[this._i++]) in this._t))
                return {
                    value: t,
                    done: !1
                };
            }), o(o.S, "Reflect", {
                enumerate: function(t) {
                    return new i(t);
                }
            });
        },
        function(t455, e294, n226) {
            var o = n226(34), r = n226(50), i = n226(26), a42 = n226(0), s = n226(13), l = n226(12);
            a42(a42.S, "Reflect", {
                get: function t(e, n) {
                    var a, c, u = arguments.length < 3 ? e : arguments[2];
                    return l(e) === u ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = r(e)) ? t(c, n, u) : void 0;
                }
            });
        },
        function(t456, e295, n) {
            var o = n(34), r = n(0), i = n(12);
            r(r.S, "Reflect", {
                getOwnPropertyDescriptor: function(t, e) {
                    return o.f(i(t), e);
                }
            });
        },
        function(t457, e, n) {
            var o = n(0), r = n(50), i = n(12);
            o(o.S, "Reflect", {
                getPrototypeOf: function(t) {
                    return r(i(t));
                }
            });
        },
        function(t458, e296, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                has: function(t, e) {
                    return e in t;
                }
            });
        },
        function(t459, e, n) {
            var o = n(0), r = n(12), i = Object.isExtensible;
            o(o.S, "Reflect", {
                isExtensible: function(t) {
                    return r(t), !i || i(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                ownKeys: n(141)
            });
        },
        function(t460, e, n) {
            var o = n(0), r = n(12), i = Object.preventExtensions;
            o(o.S, "Reflect", {
                preventExtensions: function(t) {
                    r(t);
                    try {
                        return i && i(t), !0;
                    } catch (t461) {
                        return !1;
                    }
                }
            });
        },
        function(t462, e297, n227) {
            var o = n227(19), r = n227(34), i = n227(50), a = n227(26), s33 = n227(0), l = n227(43), c = n227(12), u = n227(13);
            s33(s33.S, "Reflect", {
                set: function t(e, n, s) {
                    var f, d, p = arguments.length < 4 ? e : arguments[3], h = r.f(c(e), n);
                    if (!h) {
                        if (u(d = i(e))) return t(d, n, s, p);
                        h = l(0);
                    }
                    if (a(h, "value")) {
                        if (!1 === h.writable || !u(p)) return !1;
                        if (f = r.f(p, n)) {
                            if (f.get || f.set || !1 === f.writable) return !1;
                            f.value = s, o.f(p, n, f);
                        } else o.f(p, n, l(0, s));
                        return !0;
                    }
                    return void 0 !== h.set && (h.set.call(p, s), !0);
                }
            });
        },
        function(t463, e298, n) {
            var o = n(0), r = n(90);
            r && o(o.S, "Reflect", {
                setPrototypeOf: function(t, e) {
                    r.check(t, e);
                    try {
                        return r.set(t, e), !0;
                    } catch (t464) {
                        return !1;
                    }
                }
            });
        },
        function(t, e, n) {
            n(333), t.exports = n(17).Array.includes;
        },
        function(t465, e, n) {
            "use strict";
            var o = n(0), r = n(69)(!0);
            o(o.P, "Array", {
                includes: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("includes");
        },
        function(t, e, n) {
            n(335), t.exports = n(17).Array.flatMap;
        },
        function(t466, e299, n228) {
            "use strict";
            var o185 = n228(0), r = n228(336), i = n228(20), a = n228(16), s = n228(32), l = n228(129);
            o185(o185.P, "Array", {
                flatMap: function(t) {
                    var e, n, o = i(this);
                    return s(t), e = a(o.length), n = l(o, 0), r(n, o, o, e, 0, 1, t, arguments[1]), n;
                }
            }), n228(51)("flatMap");
        },
        function(t467, e300, n229) {
            "use strict";
            var o = n229(71), r = n229(13), i = n229(16), a = n229(31), s = n229(14)("isConcatSpreadable");
            t467.exports = function t(e, n, l, c, u, f, d, p) {
                for(var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;){
                    if (y in l) {
                        if (h = b ? b(l[y], y, n) : l[y], v = !1, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, i(h.length), g, f - 1) - 1;
                        else {
                            if (g >= 9007199254740991) throw TypeError();
                            e[g] = h;
                        }
                        g++;
                    }
                    y++;
                }
                return g;
            };
        },
        function(t, e, n) {
            n(338), t.exports = n(17).String.padStart;
        },
        function(t468, e, n) {
            "use strict";
            var o = n(0), r = n(142), i = n(77), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padStart: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
                }
            });
        },
        function(t, e, n) {
            n(340), t.exports = n(17).String.padEnd;
        },
        function(t469, e, n) {
            "use strict";
            var o = n(0), r = n(142), i = n(77), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padEnd: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
                }
            });
        },
        function(t, e, n) {
            n(342), t.exports = n(17).String.trimLeft;
        },
        function(t470, e, n) {
            "use strict";
            n(54)("trimLeft", function(t) {
                return function() {
                    return t(this, 1);
                };
            }, "trimStart");
        },
        function(t, e, n) {
            n(344), t.exports = n(17).String.trimRight;
        },
        function(t471, e, n) {
            "use strict";
            n(54)("trimRight", function(t) {
                return function() {
                    return t(this, 2);
                };
            }, "trimEnd");
        },
        function(t, e, n) {
            n(346), t.exports = n(86).f("asyncIterator");
        },
        function(t, e, n) {
            n(114)("asyncIterator");
        },
        function(t, e, n) {
            n(348), t.exports = n(17).Object.getOwnPropertyDescriptors;
        },
        function(t472, e301, n230) {
            var o186 = n230(0), r = n230(141), i = n230(28), a = n230(34), s = n230(102);
            o186(o186.S, "Object", {
                getOwnPropertyDescriptors: function(t) {
                    for(var e, n, o = i(t), l = a.f, c = r(o), u = {
                    }, f = 0; c.length > f;)void 0 !== (n = l(o, e = c[f++])) && s(u, e, n);
                    return u;
                }
            });
        },
        function(t, e, n) {
            n(350), t.exports = n(17).Object.values;
        },
        function(t473, e, n) {
            var o = n(0), r = n(143)(!1);
            o(o.S, "Object", {
                values: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            n(352), t.exports = n(17).Object.entries;
        },
        function(t474, e, n) {
            var o = n(0), r = n(143)(!0);
            o(o.S, "Object", {
                entries: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            "use strict";
            n(135), n(354), t.exports = n(17).Promise.finally;
        },
        function(t475, e302, n231) {
            "use strict";
            var o = n231(0), r = n231(17), i = n231(10), a = n231(64), s = n231(137);
            o(o.P + o.R, "Promise", {
                finally: function(t) {
                    var e = a(this, r.Promise || i.Promise), n232 = "function" == typeof t;
                    return this.then(n232 ? function(n) {
                        return s(e, t()).then(function() {
                            return n;
                        });
                    } : t, n232 ? function(n) {
                        return s(e, t()).then(function() {
                            throw n;
                        });
                    } : t);
                }
            });
        },
        function(t, e, n) {
            n(356), n(357), n(358), t.exports = n(17);
        },
        function(t476, e303, n233) {
            var o187 = n233(10), r103 = n233(0), i = n233(77), a = [].slice, s = /MSIE .\./.test(i), l = function(t) {
                return function(e, n) {
                    var o = arguments.length > 2, r = !!o && a.call(arguments, 2);
                    return t(o ? function() {
                        ("function" == typeof e ? e : Function(e)).apply(this, r);
                    } : e, n);
                };
            };
            r103(r103.G + r103.B + r103.F * s, {
                setTimeout: l(o187.setTimeout),
                setInterval: l(o187.setInterval)
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(108);
            o(o.G + o.B, {
                setImmediate: r.set,
                clearImmediate: r.clear
            });
        },
        function(t, e, n) {
            for(var o = n(105), r = n(46), i = n(21), a = n(10), s = n(27), l = n(55), c = n(14), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), v = 0; v < h.length; v++){
                var g, y = h[v], b = p[y], m = a[y], k = m && m.prototype;
                if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b)) for(g in o)k[g] || i(k, g, o[g], !0);
            }
        },
        function(t477, e304, n234) {
            var o188, r104, i98;
            "undefined" != typeof globalThis || "undefined", r104 = [
                e304,
                n234(30),
                n234(2),
                n234(3),
                n234(363),
                n234(365),
                n234(366),
                n234(7)
            ], void 0 === (i98 = "function" == typeof (o188 = function(o189, r105, i, a43, s, l, c, u) {
                var f = n234(8), d = n234(1);
                Object.defineProperty(o189, "__esModule", {
                    value: !0
                }), o189.default = void 0, r105 = d(r105), i = d(i), a43 = d(a43), c = d(c), u = f(u);
                var p = function() {
                    function t478(e) {
                        var n = this;
                        (0, i.default)(this, t478);
                        var o = function() {
                        };
                        u.isObject(e) && u.isFunction(e.onReady) && (o = e.onReady);
                        var r = new c.default(e);
                        this.isReady = r.isReady.then(function() {
                            n.exportAPI(r), o();
                        });
                    }
                    return (0, a43.default)(t478, [
                        {
                            key: "exportAPI",
                            value: function(t479) {
                                var e = this;
                                [
                                    "configuration"
                                ].forEach(function(n) {
                                    e[n] = t479[n];
                                }), this.destroy = function() {
                                    for(var n in Object.values(t479.moduleInstances).forEach(function(t) {
                                        u.isFunction(t.destroy) && t.destroy(), t.listeners.removeAll();
                                    }), t479 = null, e)Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
                                    Object.setPrototypeOf(e, null);
                                }, Object.setPrototypeOf(this, t479.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                                    blocks: {
                                        clear: "clear",
                                        render: "render"
                                    },
                                    caret: {
                                        focus: "focus"
                                    },
                                    events: {
                                        on: "on",
                                        off: "off",
                                        emit: "emit"
                                    },
                                    saver: {
                                        save: "save"
                                    }
                                }).forEach(function(n235) {
                                    var o190 = (0, r105.default)(n235, 2), i = o190[0], a = o190[1];
                                    Object.entries(a).forEach(function(n) {
                                        var o = (0, r105.default)(n, 2), a = o[0], s = o[1];
                                        e[s] = t479.moduleInstances.API.methods[i][a];
                                    });
                                });
                            }
                        }
                    ], [
                        {
                            key: "version",
                            get: function() {
                                return "2.22.2";
                            }
                        }
                    ]), t478;
                }();
                o189.default = p, p.displayName = "EditorJS", t477.exports = e304.default;
            }) ? o188.apply(e304, r104) : o188) || (t477.exports = i98);
        },
        function(t480, e) {
            t480.exports = function(t) {
                if (Array.isArray(t)) return t;
            };
        },
        function(t481, e305) {
            t481.exports = function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [], o = !0, r = !1, i = void 0;
                    try {
                        for(var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
                    } catch (t) {
                        r = !0, i = t;
                    } finally{
                        try {
                            o || null == s.return || s.return();
                        } finally{
                            if (r) throw i;
                        }
                    }
                    return n;
                }
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t482, e, n) {
            (e = t482.exports = function(...t) {
                return r(...t);
            }).__esModule = !0;
            const o = n(364), r = o.default;
            Object.assign(e, o);
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
            }, e.revert = function() {
            };
        },
        function(t483, e306, n236) {
            var o, r, i;
            "undefined" != typeof globalThis || "undefined", r = [], void 0 === (i = "function" == typeof (o = function() {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                    for(var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
                    return n > -1;
                }), Element.prototype.closest || (Element.prototype.closest = function(t) {
                    var e = this;
                    if (!document.documentElement.contains(e)) return null;
                    do {
                        if (e.matches(t)) return e;
                        e = e.parentElement || e.parentNode;
                    }while (null !== e)
                    return null;
                }), Element.prototype.prepend || (Element.prototype.prepend = function(t484) {
                    var e = document.createDocumentFragment();
                    Array.isArray(t484) || (t484 = [
                        t484
                    ]), t484.forEach(function(t) {
                        var n = t instanceof Node;
                        e.appendChild(n ? t : document.createTextNode(t));
                    }), this.insertBefore(e, this.firstChild);
                });
            }) ? o.apply(e306, r) : o) || (t483.exports = i);
        },
        function(t485, e307, n237) {
            var o191, r106, i99;
            "undefined" != typeof globalThis || "undefined", r106 = [
                e307,
                n237(23),
                n237(24),
                n237(2),
                n237(3),
                n237(15),
                n237(7),
                n237(59),
                n237(148),
                n237(151)
            ], void 0 === (i99 = "function" == typeof (o191 = function(o192, r, i100, a, s34, l, c, u, f, d) {
                var p = n237(8), h = n237(1);
                Object.defineProperty(o192, "__esModule", {
                    value: !0
                }), o192.default = void 0, r = h(r), i100 = h(i100), a = h(a), s34 = h(s34), l = h(l), c = p(c), u = h(u), d = h(d);
                var v = n237(374), g = [];
                v.keys().forEach(function(t) {
                    t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && g.push(v(t));
                });
                var y = function() {
                    function t486(e309) {
                        var n, o193, s = this;
                        (0, a.default)(this, t486), this.moduleInstances = {
                        }, this.eventsDispatcher = new d.default, this.isReady = new Promise(function(t, e) {
                            n = t, o193 = e;
                        }), Promise.resolve().then((0, i100.default)(r.default.mark(function t487() {
                            return r.default.wrap(function(t488) {
                                for(;;)switch(t488.prev = t488.next){
                                    case 0:
                                        return s.configuration = e309, t488.next = 3, s.validate();
                                    case 3:
                                        return t488.next = 5, s.init();
                                    case 5:
                                        return t488.next = 7, s.start();
                                    case 7:
                                        c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout((0, i100.default)(r.default.mark(function t489() {
                                            var e, o, i;
                                            return r.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, s.render();
                                                    case 2:
                                                        s.configuration.autofocus && (e = s.moduleInstances, o = e.BlockManager, (i = e.Caret).setToBlock(o.blocks[0], i.positions.START), o.highlightCurrentNode()), s.moduleInstances.UI.removeLoader(), n();
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t489);
                                        })), 500);
                                    case 9:
                                    case "end":
                                        return t488.stop();
                                }
                            }, t487);
                        }))).catch(function(t) {
                            c.log("Editor.js is not ready because of ".concat(t), "error"), o193(t);
                        });
                    }
                    var e308, n238;
                    return (0, s34.default)(t486, [
                        {
                            key: "validate",
                            value: (n238 = (0, i100.default)(r.default.mark(function t490() {
                                var e, n, o;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (e = this.config, n = e.holderId, o = e.holder, !n || !o) {
                                                t.next = 3;
                                                break;
                                            }
                                            throw Error("«holderId» and «holder» param can't assign at the same time.");
                                        case 3:
                                            if (!c.isString(o) || l.default.get(o)) {
                                                t.next = 5;
                                                break;
                                            }
                                            throw Error("element with ID «".concat(o, "» is missing. Pass correct holder's ID."));
                                        case 5:
                                            if (!o || !c.isObject(o) || l.default.isElement(o)) {
                                                t.next = 7;
                                                break;
                                            }
                                            throw Error("«holder» value must be an Element node");
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t490, this);
                            })), function() {
                                return n238.apply(this, arguments);
                            })
                        },
                        {
                            key: "init",
                            value: function() {
                                this.constructModules(), this.configureModules();
                            }
                        },
                        {
                            key: "start",
                            value: (e308 = (0, i100.default)(r.default.mark(function t491() {
                                var e310, n = this;
                                return r.default.wrap(function(t492) {
                                    for(;;)switch(t492.prev = t492.next){
                                        case 0:
                                            return e310 = [
                                                "Tools",
                                                "UI",
                                                "BlockManager",
                                                "Paste",
                                                "BlockSelection",
                                                "RectangleSelection",
                                                "CrossBlockSelection",
                                                "ReadOnly"
                                            ], t492.next = 3, e310.reduce(function(t493, e) {
                                                return t493.then((0, i100.default)(r.default.mark(function t494() {
                                                    return r.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();
                                                            case 3:
                                                                t.next = 10;
                                                                break;
                                                            case 5:
                                                                if (t.prev = 5, t.t0 = t.catch(0), !(t.t0 instanceof f.CriticalError)) {
                                                                    t.next = 9;
                                                                    break;
                                                                }
                                                                throw new Error(t.t0.message);
                                                            case 9:
                                                                c.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);
                                                            case 10:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t494, null, [
                                                        [
                                                            0,
                                                            5
                                                        ]
                                                    ]);
                                                })));
                                            }, Promise.resolve());
                                        case 3:
                                        case "end":
                                            return t492.stop();
                                    }
                                }, t491);
                            })), function() {
                                return e308.apply(this, arguments);
                            })
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.moduleInstances.Renderer.render(this.config.data.blocks);
                            }
                        },
                        {
                            key: "constructModules",
                            value: function() {
                                var t495 = this;
                                g.forEach(function(e) {
                                    var n = c.isFunction(e) ? e : e.default;
                                    try {
                                        t495.moduleInstances[n.displayName] = new n({
                                            config: t495.configuration,
                                            eventsDispatcher: t495.eventsDispatcher
                                        });
                                    } catch (t) {
                                        c.log("Module ".concat(n.displayName, " skipped because"), "warn", t);
                                    }
                                });
                            }
                        },
                        {
                            key: "configureModules",
                            value: function() {
                                for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
                            }
                        },
                        {
                            key: "getModulesDiff",
                            value: function(t) {
                                var e = {
                                };
                                for(var n in this.moduleInstances)n !== t && (e[n] = this.moduleInstances[n]);
                                return e;
                            }
                        },
                        {
                            key: "configuration",
                            set: function(t) {
                                var e, n;
                                c.isObject(t) ? this.config = Object.assign({
                                }, t) : this.config = {
                                    holder: t
                                }, c.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), c.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                                var o = {
                                    type: this.config.defaultBlock,
                                    data: {
                                    }
                                };
                                this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                                    p: !0,
                                    b: !0,
                                    a: !0
                                }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {
                                }, this.config.i18n = this.config.i18n || {
                                }, this.config.data = this.config.data || {
                                    blocks: []
                                }, this.config.onReady = this.config.onReady || function() {
                                }, this.config.onChange = this.config.onChange || function() {
                                }, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !c.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = {
                                    blocks: [
                                        o
                                    ]
                                }), this.config.readOnly = this.config.readOnly || !1, (null === (e = this.config.i18n) || void 0 === e ? void 0 : e.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n = this.config.i18n) || void 0 === n ? void 0 : n.direction) || "ltr";
                            },
                            get: function() {
                                return this.config;
                            }
                        }
                    ]), t486;
                }();
                o192.default = y, y.displayName = "Core", t485.exports = e307.default;
            }) ? o191.apply(e307, r106) : o191) || (t485.exports = i99);
        },
        function(t496, e, n) {
            var o = n(146);
            t496.exports = function(t) {
                if (Array.isArray(t)) return o(t);
            };
        },
        function(t497, e) {
            t497.exports = function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t498, e311) {
            t498.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            };
        },
        function(t499, e) {
            t499.exports = function(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]");
            };
        },
        function(t500, e312, n239) {
            var o = n239(110), r107 = n239(373);
            function i101(e313, n240, a) {
                return r107() ? t500.exports = i101 = Reflect.construct : t500.exports = i101 = function(t, e, n) {
                    var r = [
                        null
                    ];
                    r.push.apply(r, e);
                    var i = new (Function.bind.apply(t, r));
                    return n && o(i, n.prototype), i;
                }, i101.apply(null, arguments);
            }
            t500.exports = i101;
        },
        function(t, e) {
            t.exports = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                } catch (t) {
                    return !1;
                }
            };
        },
        function(t501, e314, n) {
            var o = {
                "./api": 81,
                "./api/": 81,
                "./api/blocks": 152,
                "./api/blocks.ts": 152,
                "./api/caret": 153,
                "./api/caret.ts": 153,
                "./api/events": 154,
                "./api/events.ts": 154,
                "./api/i18n": 155,
                "./api/i18n.ts": 155,
                "./api/index": 81,
                "./api/index.ts": 81,
                "./api/inlineToolbar": 156,
                "./api/inlineToolbar.ts": 156,
                "./api/listeners": 157,
                "./api/listeners.ts": 157,
                "./api/notifier": 158,
                "./api/notifier.ts": 158,
                "./api/readonly": 159,
                "./api/readonly.ts": 159,
                "./api/sanitizer": 160,
                "./api/sanitizer.ts": 160,
                "./api/saver": 161,
                "./api/saver.ts": 161,
                "./api/selection": 162,
                "./api/selection.ts": 162,
                "./api/styles": 163,
                "./api/styles.ts": 163,
                "./api/toolbar": 164,
                "./api/toolbar.ts": 164,
                "./api/tooltip": 165,
                "./api/tooltip.ts": 165,
                "./blockEvents": 166,
                "./blockEvents.ts": 166,
                "./blockManager": 167,
                "./blockManager.ts": 167,
                "./blockSelection": 169,
                "./blockSelection.ts": 169,
                "./caret": 170,
                "./caret.ts": 170,
                "./crossBlockSelection": 171,
                "./crossBlockSelection.ts": 171,
                "./dragNDrop": 172,
                "./dragNDrop.ts": 172,
                "./modificationsObserver": 173,
                "./modificationsObserver.ts": 173,
                "./paste": 174,
                "./paste.ts": 174,
                "./readonly": 175,
                "./readonly.ts": 175,
                "./rectangleSelection": 176,
                "./rectangleSelection.ts": 176,
                "./renderer": 177,
                "./renderer.ts": 177,
                "./saver": 178,
                "./saver.ts": 178,
                "./toolbar": 83,
                "./toolbar/": 83,
                "./toolbar/blockSettings": 179,
                "./toolbar/blockSettings.ts": 179,
                "./toolbar/conversion": 180,
                "./toolbar/conversion.ts": 180,
                "./toolbar/index": 83,
                "./toolbar/index.ts": 83,
                "./toolbar/inline": 181,
                "./toolbar/inline.ts": 181,
                "./toolbar/toolbox": 182,
                "./toolbar/toolbox.ts": 182,
                "./tools": 183,
                "./tools.ts": 183,
                "./ui": 185,
                "./ui.ts": 185
            };
            function r(t) {
                var e = i(t);
                return n(e);
            }
            function i(t) {
                if (!n.o(o, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                return o[t];
            }
            r.keys = function() {
                return Object.keys(o);
            }, r.resolve = i, t501.exports = r, r.id = 374;
        },
        function(t502, e315, n241) {
            var o194, r108, i102;
            "undefined" != typeof globalThis || "undefined", r108 = [
                e315,
                n241(2),
                n241(3),
                n241(7)
            ], void 0 === (i102 = "function" == typeof (o194 = function(o195, r109, i103, a) {
                var s35 = n241(8), l = n241(1);
                Object.defineProperty(o195, "__esModule", {
                    value: !0
                }), o195.default = void 0, r109 = l(r109), i103 = l(i103), a = s35(a);
                var c = function() {
                    function t503() {
                        (0, r109.default)(this, t503), this.allListeners = [];
                    }
                    return (0, i103.default)(t503, [
                        {
                            key: "on",
                            value: function(t, e, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = a.generateId("l"), i = {
                                    id: r,
                                    element: t,
                                    eventType: e,
                                    handler: n,
                                    options: o
                                }, s = this.findOne(t, e, n);
                                if (!s) return this.allListeners.push(i), t.addEventListener(e, n, o), r;
                            }
                        },
                        {
                            key: "off",
                            value: function(t504, e, n242, o) {
                                var r = this, i = this.findAll(t504, e, n242);
                                i.forEach(function(t, e) {
                                    var n = r.allListeners.indexOf(i[e]);
                                    n > -1 && (r.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options));
                                });
                            }
                        },
                        {
                            key: "offById",
                            value: function(t) {
                                var e = this.findById(t);
                                e && e.element.removeEventListener(e.eventType, e.handler, e.options);
                            }
                        },
                        {
                            key: "findOne",
                            value: function(t, e, n) {
                                var o = this.findAll(t, e, n);
                                return o.length > 0 ? o[0] : null;
                            }
                        },
                        {
                            key: "findAll",
                            value: function(t505, e, n) {
                                var o = t505 ? this.findByEventTarget(t505) : [];
                                return t505 && e && n ? o.filter(function(t) {
                                    return t.eventType === e && t.handler === n;
                                }) : t505 && e ? o.filter(function(t) {
                                    return t.eventType === e;
                                }) : o;
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.allListeners.map(function(t) {
                                    t.element.removeEventListener(t.eventType, t.handler, t.options);
                                }), this.allListeners = [];
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAll();
                            }
                        },
                        {
                            key: "findByEventTarget",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.element === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByType",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.eventType === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByHandler",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.handler === t) return e;
                                });
                            }
                        },
                        {
                            key: "findById",
                            value: function(t) {
                                return this.allListeners.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        }
                    ]), t503;
                }();
                o195.default = c, c.displayName = "Listeners", t502.exports = e315.default;
            }) ? o194.apply(e315, r108) : o194) || (t502.exports = i102);
        },
        function(t506, e, n) {
            var o196, r110, i104;
            "undefined" != typeof globalThis || "undefined", r110 = [
                e,
                n(2),
                n(3),
                n(377)
            ], void 0 === (i104 = "function" == typeof (o196 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t507() {
                        (0, r.default)(this, t507);
                    }
                    return (0, i.default)(t507, [
                        {
                            key: "show",
                            value: function(t) {
                                a.default.show(t);
                            }
                        }
                    ]), t507;
                }();
                o.default = l, l.displayName = "Notifier", t506.exports = e.default;
            }) ? o196.apply(e, r110) : o196) || (t506.exports = i104);
        },
        function(t508, e316, n243) {
            t508.exports = (function(t509) {
                var e317 = {
                };
                function n(o) {
                    if (e317[o]) return e317[o].exports;
                    var r = e317[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t509[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t509, n.c = e317, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            })([
                function(t510, e318, n244) {
                    "use strict";
                    n244(1), t510.exports = (function() {
                        var t = n244(6), e = null;
                        return {
                            show: function(n) {
                                if (n.message) {
                                    !function() {
                                        if (e) return !0;
                                        e = t.getWrapper(), document.body.appendChild(e);
                                    }();
                                    var o = null, r = n.time || 8000;
                                    switch(n.type){
                                        case "confirm":
                                            o = t.confirm(n);
                                            break;
                                        case "prompt":
                                            o = t.prompt(n);
                                            break;
                                        default:
                                            o = t.alert(n), window.setTimeout(function() {
                                                o.remove();
                                            }, r);
                                    }
                                    e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                                }
                            }
                        };
                    })();
                },
                function(t, e, n) {
                    var o = n(2);
                    "string" == typeof o && (o = [
                        [
                            t.i,
                            o,
                            ""
                        ]
                    ]), n(4)(o, {
                        hmr: !0,
                        transform: void 0,
                        insertInto: void 0
                    }), o.locals && (t.exports = o.locals);
                },
                function(t, e, n) {
                    (t.exports = n(3)(!1)).push([
                        t.i,
                        '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',
                        ""
                    ]);
                },
                function(t511, e319) {
                    t511.exports = function(t512) {
                        var e320 = [];
                        return e320.toString = function() {
                            return this.map(function(e321) {
                                var n245 = function(t513, e) {
                                    var n, o = t513[1] || "", r = t513[3];
                                    if (!r) return o;
                                    if (e && "function" == typeof btoa) {
                                        var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), a = r.sources.map(function(t) {
                                            return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                        });
                                        return [
                                            o
                                        ].concat(a).concat([
                                            i
                                        ]).join("\n");
                                    }
                                    return [
                                        o
                                    ].join("\n");
                                }(e321, t512);
                                return e321[2] ? "@media " + e321[2] + "{" + n245 + "}" : n245;
                            }).join("");
                        }, e320.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            for(var o = {
                            }, r = 0; r < this.length; r++){
                                var i = this[r][0];
                                "number" == typeof i && (o[i] = !0);
                            }
                            for(r = 0; r < t.length; r++){
                                var a = t[r];
                                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e320.push(a));
                            }
                        }, e320;
                    };
                },
                function(t514, e322, n246) {
                    var o197, r111, i105 = {
                    }, a44 = (o197 = function() {
                        return window && document && document.all && !window.atob;
                    }, function() {
                        return void 0 === r111 && (r111 = o197.apply(this, arguments)), r111;
                    }), s36 = function(t515) {
                        var e = {
                        };
                        return function(t516) {
                            if ("function" == typeof t516) return t516();
                            if (void 0 === e[t516]) {
                                var n = (function(t) {
                                    return document.querySelector(t);
                                }).call(this, t516);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                                e[t516] = n;
                            }
                            return e[t516];
                        };
                    }(), l28 = null, c = 0, u = [], f = n246(5);
                    function d(t, e) {
                        for(var n = 0; n < t.length; n++){
                            var o = t[n], r = i105[o.id];
                            if (r) {
                                r.refs++;
                                for(var a = 0; a < r.parts.length; a++)r.parts[a](o.parts[a]);
                                for(; a < o.parts.length; a++)r.parts.push(b(o.parts[a], e));
                            } else {
                                var s = [];
                                for(a = 0; a < o.parts.length; a++)s.push(b(o.parts[a], e));
                                i105[o.id] = {
                                    id: o.id,
                                    refs: 1,
                                    parts: s
                                };
                            }
                        }
                    }
                    function p(t, e) {
                        for(var n = [], o = {
                        }, r = 0; r < t.length; r++){
                            var i = t[r], a = e.base ? i[0] + e.base : i[0], s = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            };
                            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                                id: a,
                                parts: [
                                    s
                                ]
                            });
                        }
                        return n;
                    }
                    function h(t, e) {
                        var n = s36(t.insertInto);
                        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var o = u[u.length - 1];
                        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                        else if ("bottom" === t.insertAt) n.appendChild(e);
                        else {
                            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                            var r = s36(t.insertInto + " " + t.insertAt.before);
                            n.insertBefore(e, r);
                        }
                    }
                    function v(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t);
                        var e = u.indexOf(t);
                        e >= 0 && u.splice(e, 1);
                    }
                    function g(t) {
                        var e = document.createElement("style");
                        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
                    }
                    function y(t, e) {
                        Object.keys(e).forEach(function(n) {
                            t.setAttribute(n, e[n]);
                        });
                    }
                    function b(t517, e323) {
                        var n247, o198, r112, i106;
                        if (e323.transform && t517.css) {
                            if (!(i106 = e323.transform(t517.css))) return function() {
                            };
                            t517.css = i106;
                        }
                        if (e323.singleton) {
                            var a = c++;
                            n247 = l28 || (l28 = g(e323)), o198 = x.bind(null, n247, a, !1), r112 = x.bind(null, n247, a, !0);
                        } else t517.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n247 = (function(t) {
                            var e = document.createElement("link");
                            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
                        })(e323), o198 = (function(t, e, n) {
                            var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
                            (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                            var a = new Blob([
                                o
                            ], {
                                type: "text/css"
                            }), s = t.href;
                            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                        }).bind(null, n247, e323), r112 = function() {
                            v(n247), n247.href && URL.revokeObjectURL(n247.href);
                        }) : (n247 = g(e323), o198 = (function(t, e) {
                            var n = e.css, o = e.media;
                            if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                            else {
                                for(; t.firstChild;)t.removeChild(t.firstChild);
                                t.appendChild(document.createTextNode(n));
                            }
                        }).bind(null, n247), r112 = function() {
                            v(n247);
                        });
                        return o198(t517), function(e) {
                            if (e) {
                                if (e.css === t517.css && e.media === t517.media && e.sourceMap === t517.sourceMap) return;
                                o198(t517 = e);
                            } else r112();
                        };
                    }
                    t514.exports = function(t518, e) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        (e = e || {
                        }).attrs = "object" == typeof e.attrs ? e.attrs : {
                        }, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a44()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                        var n = p(t518, e);
                        return d(n, e), function(t) {
                            for(var o = [], r = 0; r < n.length; r++){
                                var a = n[r];
                                (s = i105[a.id]).refs--, o.push(s);
                            }
                            for(t && d(p(t, e), e), r = 0; r < o.length; r++){
                                var s;
                                if (0 === (s = o[r]).refs) {
                                    for(var l = 0; l < s.parts.length; l++)s.parts[l]();
                                    delete i105[s.id];
                                }
                            }
                        };
                    };
                    var m, k = (m = [], function(t, e) {
                        return m[t] = e, m.filter(Boolean).join("\n");
                    });
                    function x(t, e, n, o) {
                        var r = n ? "" : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                },
                function(t519, e324) {
                    t519.exports = function(t520) {
                        var e325 = "undefined" != typeof window && window.location;
                        if (!e325) throw new Error("fixUrls requires window.location");
                        if (!t520 || "string" != typeof t520) return t520;
                        var n = e325.protocol + "//" + e325.host, o = n + e325.pathname.replace(/\/[^\/]*$/, "/");
                        return t520.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e326) {
                            var r, i = e326.trim().replace(/^"(.*)"$/, function(t, e) {
                                return e;
                            }).replace(/^'(.*)'$/, function(t, e) {
                                return e;
                            });
                            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
                        });
                    };
                },
                function(t521, e327, n248) {
                    "use strict";
                    var o199, r, i107, a45, s, l;
                    t521.exports = (o199 = "cdx-notify", r = "cdx-notify__cross", i107 = "cdx-notify__button--confirm", a45 = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                        alert: l = function(t) {
                            var e = document.createElement("DIV"), n = document.createElement("DIV"), i = t.message, a = t.style;
                            return e.classList.add(o199), a && e.classList.add(o199 + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
                        },
                        confirm: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("button"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a45), c.classList.add(a45), o.classList.add(i107), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e;
                        },
                        prompt: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("input"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a45), o.classList.add(i107), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function() {
                                d(c.value);
                            }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e;
                        },
                        getWrapper: function() {
                            var t = document.createElement("DIV");
                            return t.classList.add("cdx-notifies"), t;
                        }
                    });
                }
            ]);
        },
        function(t522, e328, n249) {
            var o200, r113;
            void 0 === (r113 = "function" == typeof (o200 = function() {
                function t523(t524) {
                    var e = t524.tags;
                    if (!Object.keys(e).map(function(t) {
                        return typeof e[t];
                    }).every(function(t) {
                        return "object" === t || "boolean" === t || "function" === t;
                    })) throw new Error("The configuration was invalid");
                    this.config = t524;
                }
                var e329 = [
                    "P",
                    "LI",
                    "TD",
                    "TH",
                    "DIV",
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
                    "H6",
                    "PRE"
                ];
                function n250(t) {
                    return -1 !== e329.indexOf(t.nodeName);
                }
                var o201 = [
                    "A",
                    "B",
                    "STRONG",
                    "I",
                    "EM",
                    "SUB",
                    "SUP",
                    "U",
                    "STRIKE"
                ];
                function r(t) {
                    return -1 !== o201.indexOf(t.nodeName);
                }
                function i(t, e, n) {
                    return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
                }
                function a(t, e) {
                    return void 0 === e || "boolean" == typeof e && !e;
                }
                function s(t, e, n) {
                    var o = t.name.toLowerCase();
                    return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
                }
                return t523.prototype.clean = function(t) {
                    const e = document.implementation.createHTMLDocument(), n = e.createElement("div");
                    return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
                }, t523.prototype._sanitize = function(t525, e330) {
                    var o = function(t, e) {
                        return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
                    }(t525, e330), l = o.firstChild();
                    if (l) do {
                        if (l.nodeType !== Node.TEXT_NODE) {
                            if (l.nodeType === Node.COMMENT_NODE) {
                                e330.removeChild(l), this._sanitize(t525, e330);
                                break;
                            }
                            var c, u = r(l);
                            u && (c = Array.prototype.some.call(l.childNodes, n250));
                            var f = !!e330.parentNode, d = n250(e330) && n250(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for(; l.childNodes.length > 0;)e330.insertBefore(l.childNodes[0], l);
                                e330.removeChild(l), this._sanitize(t525, e330);
                                break;
                            }
                            for(var v = 0; v < l.attributes.length; v += 1){
                                var g = l.attributes[v];
                                s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                            }
                            this._sanitize(t525, l);
                        } else if ("" === l.data.trim() && (l.previousElementSibling && n250(l.previousElementSibling) || l.nextElementSibling && n250(l.nextElementSibling))) {
                            e330.removeChild(l), this._sanitize(t525, e330);
                            break;
                        }
                    }while (l = o.nextSibling())
                }, t523;
            }) ? o200.call(e328, n249, e328, t522) : o200) || (t522.exports = r113);
        },
        function(t526, e331, n251) {
            t526.exports = (function(t527) {
                var e332 = {
                };
                function n(o) {
                    if (e332[o]) return e332[o].exports;
                    var r = e332[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t527[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t527, n.c = e332, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            })([
                function(t, e, n) {
                    t.exports = n(1);
                },
                function(t, e342, n) {
                    "use strict";
                    n.r(e342), n.d(e342, "default", function() {
                        return o;
                    });
                    class o {
                        constructor(){
                            this.nodes = {
                                wrapper: null,
                                content: null
                            }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                                this.showed && this.hide(!0);
                            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                                passive: !0
                            });
                        }
                        get CSS() {
                            return {
                                tooltip: "ct",
                                tooltipContent: "ct__content",
                                tooltipShown: "ct--shown",
                                placement: {
                                    left: "ct--left",
                                    bottom: "ct--bottom",
                                    right: "ct--right",
                                    top: "ct--top"
                                }
                            };
                        }
                        show(t528, e333, n252) {
                            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                            const o = Object.assign({
                                placement: "bottom",
                                marginTop: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                delay: 70,
                                hidingDelay: 0
                            }, n252);
                            if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e333) this.nodes.content.appendChild(document.createTextNode(e333));
                            else {
                                if (!(e333 instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof e333 + " given.");
                                this.nodes.content.appendChild(e333);
                            }
                            switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement){
                                case "top":
                                    this.placeTop(t528, o);
                                    break;
                                case "left":
                                    this.placeLeft(t528, o);
                                    break;
                                case "right":
                                    this.placeRight(t528, o);
                                    break;
                                case "bottom":
                                default:
                                    this.placeBottom(t528, o);
                            }
                            o && o.delay ? this.showingTimeout = setTimeout(()=>{
                                this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                            }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                        }
                        hide(t529 = !1) {
                            if (this.hidingDelay && !t529) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                                this.hide(!0);
                            }, this.hidingDelay));
                            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                        }
                        onHover(t530, e334, n253) {
                            t530.addEventListener("mouseenter", ()=>{
                                this.show(t530, e334, n253);
                            }), t530.addEventListener("mouseleave", ()=>{
                                this.hide();
                            });
                        }
                        destroy() {
                            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                        }
                        prepare() {
                            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                        }
                        loadStyles() {
                            const t = "codex-tooltips-style";
                            if (document.getElementById(t)) return;
                            const e = n(2), o = this.make("style", null, {
                                textContent: e.toString(),
                                id: t
                            });
                            this.prepend(document.head, o);
                        }
                        placeBottom(t531, e335) {
                            const n = t531.getBoundingClientRect(), o = n.left + t531.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.bottom + window.pageYOffset + this.offsetTop + e335.marginTop;
                            this.applyPlacement("bottom", o, r);
                        }
                        placeTop(t532, e336) {
                            const n = t532.getBoundingClientRect(), o = n.left + t532.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                            this.applyPlacement("top", o, r);
                        }
                        placeLeft(t533, e337) {
                            const n = t533.getBoundingClientRect(), o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e337.marginLeft, r = n.top + window.pageYOffset + t533.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("left", o, r);
                        }
                        placeRight(t534, e338) {
                            const n = t534.getBoundingClientRect(), o = n.right + this.offsetRight + e338.marginRight, r = n.top + window.pageYOffset + t534.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("right", o, r);
                        }
                        applyPlacement(t535, e339, n254) {
                            this.nodes.wrapper.classList.add(this.CSS.placement[t535]), this.nodes.wrapper.style.left = e339 + "px", this.nodes.wrapper.style.top = n254 + "px";
                        }
                        make(t536, e340 = null, n255 = {
                        }) {
                            const o = document.createElement(t536);
                            Array.isArray(e340) ? o.classList.add(...e340) : e340 && o.classList.add(e340);
                            for(const t in n255)n255.hasOwnProperty(t) && (o[t] = n255[t]);
                            return o;
                        }
                        append(t537, e341) {
                            Array.isArray(e341) ? e341.forEach((e)=>t537.appendChild(e)
                            ) : t537.appendChild(e341);
                        }
                        prepend(t538, e343) {
                            Array.isArray(e343) ? (e343 = e343.reverse()).forEach((e)=>t538.prepend(e)
                            ) : t538.prepend(e343);
                        }
                    }
                },
                function(t, e) {
                    t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
                }
            ]).default;
        },
        function(t539, e344, n256) {
            var o202, r114, i108;
            "undefined" != typeof globalThis || "undefined", r114 = [
                e344,
                n256(2),
                n256(3),
                n256(15),
                n256(7),
                n256(25)
            ], void 0 === (i108 = "function" == typeof (o202 = function(o203, r, i, a, s, l) {
                var c = n256(8), u = n256(1);
                Object.defineProperty(o203, "__esModule", {
                    value: !0
                }), o203.default = void 0, r = u(r), i = u(i), a = u(a), s = c(s), l = u(l);
                var f = function() {
                    function t540(e, n) {
                        (0, r.default)(this, t540), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n;
                    }
                    return (0, i.default)(t540, [
                        {
                            key: "setItems",
                            value: function(t) {
                                this.items = t;
                            }
                        },
                        {
                            key: "next",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t540.directions.RIGHT);
                            }
                        },
                        {
                            key: "previous",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t540.directions.LEFT);
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
                            }
                        },
                        {
                            key: "leafNodesAndReturnIndex",
                            value: function(e) {
                                var n = this;
                                if (0 === this.items.length) return this.cursor;
                                var o = this.cursor;
                                return -1 === o ? o = e === t540.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), o = e === t540.directions.RIGHT ? (o + 1) % this.items.length : (this.items.length + o - 1) % this.items.length, a.default.canSetCaret(this.items[o]) && s.delay(function() {
                                    return l.default.setCursor(n.items[o]);
                                }, 50)(), this.items[o].classList.add(this.focusedCssClass), o;
                            }
                        },
                        {
                            key: "currentItem",
                            get: function() {
                                return -1 === this.cursor ? null : this.items[this.cursor];
                            }
                        }
                    ]), t540;
                }();
                o203.default = f, f.displayName = "DomIterator", f.directions = {
                    RIGHT: "right",
                    LEFT: "left"
                }, t539.exports = e344.default;
            }) ? o202.apply(e344, r114) : o202) || (t539.exports = i108);
        },
        function(t541, e345, n) {
            var o = n(4);
            t541.exports = function(t, e) {
                for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t)););
                return t;
            };
        },
        function(t542, e346, n257) {
            var o204, r115, i109;
            "undefined" != typeof globalThis || "undefined", r115 = [
                e346,
                n257(2),
                n257(3),
                n257(7),
                n257(15),
                n257(66)
            ], void 0 === (i109 = "function" == typeof (o204 = function(o205, r116, i110, a46, s, l) {
                var c = n257(8), u = n257(1);
                Object.defineProperty(o205, "__esModule", {
                    value: !0
                }), o205.default = void 0, r116 = u(r116), i110 = u(i110), a46 = c(a46), s = u(s);
                var f = function() {
                    function t543(e) {
                        (0, r116.default)(this, t543), this.blocks = [], this.workingArea = e;
                    }
                    return (0, i110.default)(t543, [
                        {
                            key: "push",
                            value: function(t) {
                                this.blocks.push(t), this.insertToDOM(t);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = this.blocks[e];
                                s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                var n = this.blocks.splice(e, 1)[0], o = t - 1, r = Math.max(0, o), i = this.blocks[r];
                                t > 0 ? this.insertToDOM(n, "afterend", i) : this.insertToDOM(n, "beforebegin", i), this.blocks.splice(t, 0, n);
                                var a = this.composeBlockEvent("move", {
                                    fromIndex: e,
                                    toIndex: t
                                });
                                n.call(l.BlockToolAPI.MOVED, a);
                            }
                        },
                        {
                            key: "insert",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (this.length) {
                                    t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
                                    var o = n ? 1 : 0;
                                    if (this.blocks.splice(t, o, e), t > 0) {
                                        var r = this.blocks[t - 1];
                                        this.insertToDOM(e, "afterend", r);
                                    } else {
                                        var i = this.blocks[t + 1];
                                        i ? this.insertToDOM(e, "beforebegin", i) : this.insertToDOM(e);
                                    }
                                } else this.push(e);
                            }
                        },
                        {
                            key: "remove",
                            value: function(t) {
                                isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1);
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.workingArea.innerHTML = "", this.blocks.forEach(function(t) {
                                    return t.call(l.BlockToolAPI.REMOVED);
                                }), this.blocks.length = 0;
                            }
                        },
                        {
                            key: "insertAfter",
                            value: function(t, e) {
                                var n = this.blocks.indexOf(t);
                                this.insert(n + 1, e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return this.blocks[t];
                            }
                        },
                        {
                            key: "indexOf",
                            value: function(t) {
                                return this.blocks.indexOf(t);
                            }
                        },
                        {
                            key: "insertToDOM",
                            value: function(t, e, n) {
                                e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED);
                            }
                        },
                        {
                            key: "composeBlockEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        },
                        {
                            key: "length",
                            get: function() {
                                return this.blocks.length;
                            }
                        },
                        {
                            key: "array",
                            get: function() {
                                return this.blocks;
                            }
                        },
                        {
                            key: "nodes",
                            get: function() {
                                return a46.array(this.workingArea.children);
                            }
                        }
                    ], [
                        {
                            key: "set",
                            value: function(t, e, n) {
                                return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0);
                            }
                        },
                        {
                            key: "get",
                            value: function(t, e) {
                                return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e);
                            }
                        }
                    ]), t543;
                }();
                o205.default = f, f.displayName = "Blocks", t542.exports = e346.default;
            }) ? o204.apply(e346, r115) : o204) || (t542.exports = i109);
        },
        function(t544, e347, n258) {
            t544.exports = (function(t545) {
                var e348 = {
                };
                function n(o) {
                    if (e348[o]) return e348[o].exports;
                    var r = e348[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t545[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t545, n.c = e348, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            })([
                function(t546, e349, n259) {
                    "use strict";
                    function o206(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r117(t, e, n) {
                        return e && o206(t.prototype, e), n && o206(t, n), t;
                    }
                    n259.r(e349);
                    var i111 = function() {
                        function t547(e350) {
                            var n = this;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t547), this.commands = {
                            }, this.keys = {
                            }, this.name = e350.name, this.parseShortcutName(e350.name), this.element = e350.on, this.callback = e350.callback, this.executeShortcut = function(t) {
                                n.execute(t);
                            }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                        }
                        return r117(t547, null, [
                            {
                                key: "supportedCommands",
                                get: function() {
                                    return {
                                        SHIFT: [
                                            "SHIFT"
                                        ],
                                        CMD: [
                                            "CMD",
                                            "CONTROL",
                                            "COMMAND",
                                            "WINDOWS",
                                            "CTRL"
                                        ],
                                        ALT: [
                                            "ALT",
                                            "OPTION"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "keyCodes",
                                get: function() {
                                    return {
                                        0: 48,
                                        1: 49,
                                        2: 50,
                                        3: 51,
                                        4: 52,
                                        5: 53,
                                        6: 54,
                                        7: 55,
                                        8: 56,
                                        9: 57,
                                        A: 65,
                                        B: 66,
                                        C: 67,
                                        D: 68,
                                        E: 69,
                                        F: 70,
                                        G: 71,
                                        H: 72,
                                        I: 73,
                                        J: 74,
                                        K: 75,
                                        L: 76,
                                        M: 77,
                                        N: 78,
                                        O: 79,
                                        P: 80,
                                        Q: 81,
                                        R: 82,
                                        S: 83,
                                        T: 84,
                                        U: 85,
                                        V: 86,
                                        W: 87,
                                        X: 88,
                                        Y: 89,
                                        Z: 90,
                                        BACKSPACE: 8,
                                        ENTER: 13,
                                        ESCAPE: 27,
                                        LEFT: 37,
                                        UP: 38,
                                        RIGHT: 39,
                                        DOWN: 40,
                                        INSERT: 45,
                                        DELETE: 46
                                    };
                                }
                            }
                        ]), r117(t547, [
                            {
                                key: "parseShortcutName",
                                value: function(e) {
                                    e = e.split("+");
                                    for(var n = 0; n < e.length; n++){
                                        e[n] = e[n].toUpperCase();
                                        var o = !1;
                                        for(var r in t547.supportedCommands)if (t547.supportedCommands[r].includes(e[n])) {
                                            o = this.commands[r] = !0;
                                            break;
                                        }
                                        o || (this.keys[e[n]] = !0);
                                    }
                                    for(var i in t547.supportedCommands)this.commands[i] || (this.commands[i] = !1);
                                }
                            },
                            {
                                key: "execute",
                                value: function(e) {
                                    var n, o = {
                                        CMD: e.ctrlKey || e.metaKey,
                                        SHIFT: e.shiftKey,
                                        ALT: e.altKey
                                    }, r = !0;
                                    for(n in this.commands)this.commands[n] !== o[n] && (r = !1);
                                    var i, a = !0;
                                    for(i in this.keys)a = a && e.keyCode === t547.keyCodes[i];
                                    r && a && this.callback(e);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    this.element.removeEventListener("keydown", this.executeShortcut);
                                }
                            }
                        ]), t547;
                    }();
                    e349.default = i111;
                }
            ]).default;
        },
        function(t548, e351, n260) {
            t548.exports = (function(t549) {
                var e352 = {
                };
                function n(o) {
                    if (e352[o]) return e352[o].exports;
                    var r = e352[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t549[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t549, n.c = e352, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            })([
                function(t550, e353, n261) {
                    function o207(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r118(t, e, n) {
                        return e && o207(t.prototype, e), n && o207(t, n), t;
                    }
                    n261(1).toString();
                    var i112 = function() {
                        function t551(e354) {
                            var n = e354.data, o = e354.config, r = e354.api, i = e354.readOnly;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t551), this.api = r, this.readOnly = i, this._CSS = {
                                block: this.api.styles.block,
                                wrapper: "ce-paragraph"
                            }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : t551.DEFAULT_PLACEHOLDER, this._data = {
                            }, this._element = this.drawView(), this._preserveBlank = void 0 !== o.preserveBlank && o.preserveBlank, this.data = n;
                        }
                        return r118(t551, null, [
                            {
                                key: "DEFAULT_PLACEHOLDER",
                                get: function() {
                                    return "";
                                }
                            }
                        ]), r118(t551, [
                            {
                                key: "onKeyUp",
                                value: function(t) {
                                    "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "");
                                }
                            },
                            {
                                key: "drawView",
                                value: function() {
                                    var t = document.createElement("DIV");
                                    return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !1, t.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t.contentEditable = !0, t.addEventListener("keyup", this.onKeyUp)), t;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this._element;
                                }
                            },
                            {
                                key: "merge",
                                value: function(t) {
                                    var e = {
                                        text: this.data.text + t.text
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "validate",
                                value: function(t) {
                                    return !("" === t.text.trim() && !this._preserveBlank);
                                }
                            },
                            {
                                key: "save",
                                value: function(t) {
                                    return {
                                        text: t.innerHTML
                                    };
                                }
                            },
                            {
                                key: "onPaste",
                                value: function(t) {
                                    var e = {
                                        text: t.detail.data.innerHTML
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "data",
                                get: function() {
                                    var t = this._element.innerHTML;
                                    return this._data.text = t, this._data;
                                },
                                set: function(t) {
                                    this._data = t || {
                                    }, this._element.innerHTML = this._data.text || "";
                                }
                            }
                        ], [
                            {
                                key: "conversionConfig",
                                get: function() {
                                    return {
                                        export: "text",
                                        import: "text"
                                    };
                                }
                            },
                            {
                                key: "sanitize",
                                get: function() {
                                    return {
                                        text: {
                                            br: !0
                                        }
                                    };
                                }
                            },
                            {
                                key: "isReadOnlySupported",
                                get: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "pasteConfig",
                                get: function() {
                                    return {
                                        tags: [
                                            "P"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "toolbox",
                                get: function() {
                                    return {
                                        icon: n261(5).default,
                                        title: "Text"
                                    };
                                }
                            }
                        ]), t551;
                    }();
                    t550.exports = i112;
                },
                function(t, e, n) {
                    var o = n(2), r = n(3);
                    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
                        [
                            t.i,
                            r,
                            ""
                        ]
                    ]), o(r, {
                        insert: "head",
                        singleton: !1
                    }), t.exports = r.locals || {
                    };
                },
                function(t552, e355, n262) {
                    "use strict";
                    var o208, r119 = function() {
                        var t = {
                        };
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t553) {
                                    n = null;
                                }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    }(), i113 = [];
                    function a47(t) {
                        for(var e = -1, n = 0; n < i113.length; n++)if (i113[n].identifier === t) {
                            e = n;
                            break;
                        }
                        return e;
                    }
                    function s37(t, e) {
                        for(var n = {
                        }, o = [], r = 0; r < t.length; r++){
                            var s = t[r], l = e.base ? s[0] + e.base : s[0], c = n[l] || 0, u = "".concat(l, " ").concat(c);
                            n[l] = c + 1;
                            var f = a47(u), d = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3]
                            };
                            -1 !== f ? (i113[f].references++, i113[f].updater(d)) : i113.push({
                                identifier: u,
                                updater: v(d, e),
                                references: 1
                            }), o.push(u);
                        }
                        return o;
                    }
                    function l29(t554) {
                        var e = document.createElement("style"), o = t554.attributes || {
                        };
                        if (void 0 === o.nonce) {
                            var i = n262.nc;
                            i && (o.nonce = i);
                        }
                        if (Object.keys(o).forEach(function(t) {
                            e.setAttribute(t, o[t]);
                        }), "function" == typeof t554.insert) t554.insert(e);
                        else {
                            var a = r119(t554.insert || "head");
                            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                            a.appendChild(e);
                        }
                        return e;
                    }
                    var c23, u22 = (c23 = [], function(t, e) {
                        return c23[t] = e, c23.filter(Boolean).join("\n");
                    });
                    function f16(t, e, n, o) {
                        var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = u22(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                    function d13(t, e, n) {
                        var o = n.css, r = n.media, i = n.sourceMap;
                        if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
                        else {
                            for(; t.firstChild;)t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(o));
                        }
                    }
                    var p = null, h = 0;
                    function v(t555, e356) {
                        var n, o, r;
                        if (e356.singleton) {
                            var i = h++;
                            n = p || (p = l29(e356)), o = f16.bind(null, n, i, !1), r = f16.bind(null, n, i, !0);
                        } else n = l29(e356), o = d13.bind(null, n, e356), r = function() {
                            !function(t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            }(n);
                        };
                        return o(t555), function(e) {
                            if (e) {
                                if (e.css === t555.css && e.media === t555.media && e.sourceMap === t555.sourceMap) return;
                                o(t555 = e);
                            } else r();
                        };
                    }
                    t552.exports = function(t556, e) {
                        (e = e || {
                        }).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o208 && (o208 = Boolean(window && document && document.all && !window.atob)), o208));
                        var n = s37(t556 = t556 || [], e);
                        return function(t) {
                            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                                for(var o = 0; o < n.length; o++){
                                    var r = a47(n[o]);
                                    i113[r].references--;
                                }
                                for(var l = s37(t, e), c = 0; c < n.length; c++){
                                    var u = a47(n[c]);
                                    0 === i113[u].references && (i113[u].updater(), i113.splice(u, 1));
                                }
                                n = l;
                            }
                        };
                    };
                },
                function(t, e, n) {
                    (e = n(4)(!1)).push([
                        t.i,
                        ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",
                        ""
                    ]), t.exports = e;
                },
                function(t557, e357, n263) {
                    "use strict";
                    t557.exports = function(t558) {
                        var e358 = [];
                        return e358.toString = function() {
                            return this.map(function(e359) {
                                var n264 = function(t559, e) {
                                    var n, o, r, i = t559[1] || "", a = t559[3];
                                    if (!a) return i;
                                    if (e && "function" == typeof btoa) {
                                        var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(t) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t, " */");
                                        });
                                        return [
                                            i
                                        ].concat(l).concat([
                                            s
                                        ]).join("\n");
                                    }
                                    return [
                                        i
                                    ].join("\n");
                                }(e359, t558);
                                return e359[2] ? "@media ".concat(e359[2], " {").concat(n264, "}") : n264;
                            }).join("");
                        }, e358.i = function(t, n, o) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            var r = {
                            };
                            if (o) for(var i = 0; i < this.length; i++){
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                            for(var s = 0; s < t.length; s++){
                                var l = [].concat(t[s]);
                                o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e358.push(l));
                            }
                        }, e358;
                    };
                },
                function(t, e, n) {
                    "use strict";
                    n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
                }
            ]);
        },
        function(t560, e360, n) {
            var o209, r120, i114;
            "undefined" != typeof globalThis || "undefined", r120 = [
                e360,
                n(2),
                n(3),
                n(15)
            ], void 0 === (i114 = "function" == typeof (o209 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "bold", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--bold"
                        }, this.nodes = {
                            button: void 0
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+B";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    b: {
                                    }
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t560.exports = e360.default;
            }) ? o209.apply(e360, r120) : o209) || (t560.exports = i114);
        },
        function(t561, e361, n) {
            var o210, r121, i115;
            "undefined" != typeof globalThis || "undefined", r121 = [
                e361,
                n(2),
                n(3),
                n(15)
            ], void 0 === (i115 = "function" == typeof (o210 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "italic", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--italic"
                        }, this.nodes = {
                            button: null
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+I";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    i: {
                                    }
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t561.exports = e361.default;
            }) ? o210.apply(e361, r121) : o210) || (t561.exports = i115);
        },
        function(t562, e362, n265) {
            var o211, r122, i116;
            "undefined" != typeof globalThis || "undefined", r122 = [
                e362,
                n265(2),
                n265(3),
                n265(25),
                n265(15),
                n265(7)
            ], void 0 === (i116 = "function" == typeof (o211 = function(o212, r, i, a, s, l) {
                var c = n265(8), u = n265(1);
                Object.defineProperty(o212, "__esModule", {
                    value: !0
                }), o212.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = c(l);
                var f = function() {
                    function t563(e) {
                        var n = e.api;
                        (0, r.default)(this, t563), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--link",
                            buttonUnlink: "ce-inline-tool--unlink",
                            input: "ce-inline-tool-input",
                            inputShowed: "ce-inline-tool-input--showed"
                        }, this.nodes = {
                            button: null,
                            input: null
                        }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.i18n = n.i18n, this.selection = new a.default;
                    }
                    return (0, i.default)(t563, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "renderActions",
                            value: function() {
                                var t = this;
                                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(e) {
                                    e.keyCode === t.ENTER_KEY && t.enterPressed(e);
                                }), this.nodes.input;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                if (t) {
                                    this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                                    var e = this.selection.findParentTag("A");
                                    if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                                }
                                this.toggleActions();
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                if (e) {
                                    this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                                    var n = e.getAttribute("href");
                                    this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
                                } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                                return !!e;
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.closeActions();
                            }
                        },
                        {
                            key: "toggleActions",
                            value: function() {
                                this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
                            }
                        },
                        {
                            key: "openActions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
                            }
                        },
                        {
                            key: "closeActions",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (this.selection.isFakeBackgroundEnabled) {
                                    var e = new a.default;
                                    e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
                                }
                                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.nodes.input.value || "";
                                return e.trim() ? this.validateURL(e) ? (e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({
                                    message: "Pasted link is not valid.",
                                    style: "error"
                                }), void l.log("Incorrect Link pasted", "warn", e)) : (this.selection.restore(), this.unlink(), t.preventDefault(), void this.closeActions());
                            }
                        },
                        {
                            key: "validateURL",
                            value: function(t) {
                                return !/\s/.test(t);
                            }
                        },
                        {
                            key: "prepareLink",
                            value: function(t) {
                                return t = t.trim(), t = this.addProtocol(t);
                            }
                        },
                        {
                            key: "addProtocol",
                            value: function(t) {
                                if (/^(\w+):(\/\/)?/.test(t)) return t;
                                var e = /^\/[^/\s]/.test(t), n = "#" === t.substring(0, 1), o = /^\/\/[^/\s]/.test(t);
                                return e || n || o || (t = "http://" + t), t;
                            }
                        },
                        {
                            key: "insertLink",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
                            }
                        },
                        {
                            key: "unlink",
                            value: function() {
                                document.execCommand(this.commandUnlink);
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+K";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    a: {
                                        href: !0,
                                        target: "_blank",
                                        rel: "nofollow"
                                    }
                                };
                            }
                        }
                    ]), t563;
                }();
                o212.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t562.exports = e362.default;
            }) ? o211.apply(e362, r122) : o211) || (t562.exports = i116);
        },
        function(t564, e363, n266) {
            var o213, r123, i117;
            "undefined" != typeof globalThis || "undefined", r123 = [
                e363,
                n266(2),
                n266(3),
                n266(15)
            ], void 0 === (i117 = "function" == typeof (o213 = function(o214, r124, i, a) {
                var s = n266(1);
                Object.defineProperty(o214, "__esModule", {
                    value: !0
                }), o214.default = void 0, r124 = s(r124), i = s(i), a = s(a);
                var l = function() {
                    function t565(e) {
                        var n = e.data, o = e.api;
                        (0, r124.default)(this, t565), this.CSS = {
                            wrapper: "ce-stub",
                            info: "ce-stub__info",
                            title: "ce-stub__title",
                            subtitle: "ce-stub__subtitle"
                        }, this.api = o, this.title = n.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n.savedData, this.wrapper = this.make();
                    }
                    return (0, i.default)(t565, [
                        {
                            key: "render",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                return this.savedData;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = a.default.make("div", this.CSS.wrapper), e = a.default.svg("sad-face", 52, 52), n = a.default.make("div", this.CSS.info), o = a.default.make("div", this.CSS.title, {
                                    textContent: this.title
                                }), r = a.default.make("div", this.CSS.subtitle, {
                                    textContent: this.subtitle
                                });
                                return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t;
                            }
                        }
                    ]), t565;
                }();
                o214.default = l, l.displayName = "Stub", l.isReadOnlySupported = !0, t564.exports = e363.default;
            }) ? o213.apply(e363, r123) : o213) || (t564.exports = i117);
        },
        function(t566, e364, n267) {
            var o215, r125, i118;
            "undefined" != typeof globalThis || "undefined", r125 = [
                e364,
                n267(2),
                n267(3),
                n267(67),
                n267(390),
                n267(391),
                n267(392)
            ], void 0 === (i118 = "function" == typeof (o215 = function(o216, r126, i119, a, s, l, c) {
                var u = n267(1);
                Object.defineProperty(o216, "__esModule", {
                    value: !0
                }), o216.default = void 0, r126 = u(r126), i119 = u(i119), s = u(s), l = u(l), c = u(c);
                var f = function(t, e) {
                    var n = {
                    };
                    for(var o in t)Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for(o = Object.getOwnPropertySymbols(t); r < o.length; r++)e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
                    }
                    return n;
                }, d = function() {
                    function t567(e, n, o) {
                        (0, r126.default)(this, t567), this.api = o, this.config = e, this.editorConfig = n;
                    }
                    return (0, i119.default)(t567, [
                        {
                            key: "get",
                            value: function(t) {
                                var e = this.config[t], n = e.class, o = e.isInternal, r = void 0 !== o && o, i = f(e, [
                                    "class",
                                    "isInternal"
                                ]);
                                return new (this.getConstructor(n))({
                                    name: t,
                                    constructable: n,
                                    config: i,
                                    api: this.api,
                                    isDefault: t === this.editorConfig.defaultBlock,
                                    defaultPlaceholder: this.editorConfig.placeholder,
                                    isInternal: r
                                });
                            }
                        },
                        {
                            key: "getConstructor",
                            value: function(t) {
                                switch(!0){
                                    case t[a.InternalInlineToolSettings.IsInline]:
                                        return s.default;
                                    case t[a.InternalTuneSettings.IsTune]:
                                        return l.default;
                                    default:
                                        return c.default;
                                }
                            }
                        }
                    ]), t567;
                }();
                o216.default = d, d.displayName = "ToolsFactory", t566.exports = e364.default;
            }) ? o215.apply(e364, r125) : o215) || (t566.exports = i118);
        },
        function(t568, e365, n268) {
            var o217, r127, i120;
            "undefined" != typeof globalThis || "undefined", r127 = [
                e365,
                n268(2),
                n268(3),
                n268(5),
                n268(6),
                n268(4),
                n268(67)
            ], void 0 === (i120 = "function" == typeof (o217 = function(o218, r, i, a, s, l, c) {
                var u = n268(8), f = n268(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o218, "__esModule", {
                    value: !0
                }), o218.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t569) {
                    (0, a.default)(o219, t569);
                    var e, n269 = (e = o219, function() {
                        var t, n = (0, l.default)(e);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o219() {
                        var t;
                        return (0, r.default)(this, o219), (t = n269.apply(this, arguments)).type = c.ToolType.Inline, t;
                    }
                    return (0, i.default)(o219, [
                        {
                            key: "create",
                            value: function() {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "title",
                            get: function() {
                                return this.constructable[c.InternalInlineToolSettings.Title];
                            }
                        }
                    ]), o219;
                }((c = u(c)).default);
                o218.default = p, p.displayName = "InlineTool", t568.exports = e365.default;
            }) ? o217.apply(e365, r127) : o217) || (t568.exports = i120);
        },
        function(t570, e366, n270) {
            var o220, r128, i121;
            "undefined" != typeof globalThis || "undefined", r128 = [
                e366,
                n270(2),
                n270(3),
                n270(5),
                n270(6),
                n270(4),
                n270(67)
            ], void 0 === (i121 = "function" == typeof (o220 = function(o221, r, i, a, s, l, c) {
                var u = n270(8), f = n270(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o221, "__esModule", {
                    value: !0
                }), o221.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t571) {
                    (0, a.default)(o222, t571);
                    var e367, n271 = (e367 = o222, function() {
                        var t, n = (0, l.default)(e367);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o222() {
                        var t;
                        return (0, r.default)(this, o222), (t = n271.apply(this, arguments)).type = c.ToolType.Tune, t;
                    }
                    return (0, i.default)(o222, [
                        {
                            key: "create",
                            value: function(t, e) {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings,
                                    block: e,
                                    data: t
                                });
                            }
                        }
                    ]), o222;
                }((c = u(c)).default);
                o221.default = p, p.displayName = "BlockTune", t570.exports = e366.default;
            }) ? o220.apply(e366, r128) : o220) || (t570.exports = i121);
        },
        function(t572, e368, n272) {
            var o223, r129, i122;
            "undefined" != typeof globalThis || "undefined", r129 = [
                e368,
                n272(2),
                n272(3),
                n272(168),
                n272(5),
                n272(6),
                n272(4),
                n272(80),
                n272(67),
                n272(7),
                n272(184)
            ], void 0 === (i122 = "function" == typeof (o223 = function(o224, r130, i123, a48, s38, l, c, u, f, d, p) {
                var h = n272(8), v = n272(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o224, "__esModule", {
                    value: !0
                }), o224.default = void 0, r130 = v(r130), i123 = v(i123), a48 = v(a48), s38 = v(s38), l = v(l), c = v(c), u = v(u), f = h(f), d = h(d), p = v(p);
                var y = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, b = function(t573) {
                    (0, s38.default)(o225, t573);
                    var e369, n273 = (e369 = o225, function() {
                        var t, n = (0, c.default)(e369);
                        if (g()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o225() {
                        var t;
                        return (0, r130.default)(this, o225), (t = n273.apply(this, arguments)).type = f.ToolType.Block, t.inlineTools = new p.default, t.tunes = new p.default, t;
                    }
                    return (0, i123.default)(o225, [
                        {
                            key: "create",
                            value: function(t, e, n) {
                                return new this.constructable({
                                    data: t,
                                    block: e,
                                    readOnly: n,
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isReadOnlySupported",
                            get: function() {
                                return !0 === this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported];
                            }
                        },
                        {
                            key: "isLineBreaksEnabled",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks];
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var t = this.constructable[f.InternalBlockToolSettings.Toolbox], e = this.config[f.UserSettings.Toolbox];
                                if (!d.isEmpty(t) && !1 !== (null != e ? e : t)) return Object.assign({
                                }, t, e);
                            }
                        },
                        {
                            key: "conversionConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.ConversionConfig];
                            }
                        },
                        {
                            key: "enabledInlineTools",
                            get: function() {
                                return this.config[f.UserSettings.EnabledInlineTools] || !1;
                            }
                        },
                        {
                            key: "enabledBlockTunes",
                            get: function() {
                                return this.config[f.UserSettings.EnabledBlockTunes];
                            }
                        },
                        {
                            key: "pasteConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.PasteConfig] || {
                                };
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                var t = (0, a48.default)((0, c.default)(o225.prototype), "sanitizeConfig", this), e = this.baseSanitizeConfig;
                                if (d.isEmpty(t)) return e;
                                var n = {
                                };
                                for(var r in t)if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = t[r];
                                    d.isObject(i) ? n[r] = Object.assign({
                                    }, e, i) : n[r] = i;
                                }
                                return n;
                            }
                        },
                        {
                            key: "baseSanitizeConfig",
                            get: function() {
                                var t = {
                                };
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), Array.from(this.tunes.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        }
                    ]), o225;
                }(f.default);
                o224.default = b, b.displayName = "BlockTool", y([
                    d.cacheable
                ], b.prototype, "sanitizeConfig", null), y([
                    d.cacheable
                ], b.prototype, "baseSanitizeConfig", null), t572.exports = e368.default;
            }) ? o223.apply(e368, r129) : o223) || (t572.exports = i122);
        },
        function(t574, e370, n274) {
            var o226, r131, i124;
            "undefined" != typeof globalThis || "undefined", r131 = [
                e370,
                n274(2),
                n274(3),
                n274(15)
            ], void 0 === (i124 = "function" == typeof (o226 = function(o227, r132, i125, a49) {
                var s39 = n274(1);
                Object.defineProperty(o227, "__esModule", {
                    value: !0
                }), o227.default = void 0, r132 = s39(r132), i125 = s39(i125), a49 = s39(a49);
                var l = function() {
                    function t575(e) {
                        var n = e.api;
                        (0, r132.default)(this, t575), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-down",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i125.default)(t575, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a49.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {
                                });
                                return e.appendChild(a49.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move down"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o + 1);
                                if (!r) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var i = r.holder, a = i.getBoundingClientRect(), s = Math.abs(window.innerHeight - i.offsetHeight);
                                a.top < window.innerHeight && (s = window.scrollY + i.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(o + 1), this.api.tooltip.hide();
                            }
                        }
                    ]), t575;
                }();
                o227.default = l, l.displayName = "MoveDownTune", l.isTune = !0, t574.exports = e370.default;
            }) ? o226.apply(e370, r131) : o226) || (t574.exports = i124);
        },
        function(t576, e371, n275) {
            var o228, r133, i126;
            "undefined" != typeof globalThis || "undefined", r133 = [
                e371,
                n275(2),
                n275(3),
                n275(15)
            ], void 0 === (i126 = "function" == typeof (o228 = function(o229, r, i, a) {
                var s = n275(1);
                Object.defineProperty(o229, "__esModule", {
                    value: !0
                }), o229.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t577(e) {
                        var n = this, o = e.api;
                        (0, r.default)(this, t577), this.CSS = {
                            button: "ce-settings__button",
                            buttonDelete: "ce-settings__button--delete",
                            buttonConfirm: "ce-settings__button--confirm"
                        }, this.nodes = {
                            button: null
                        }, this.api = o, this.resetConfirmation = function() {
                            n.setConfirmation(!1);
                        };
                    }
                    return (0, i.default)(t577, [
                        {
                            key: "render",
                            value: function() {
                                var t = this;
                                return this.nodes.button = a.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.buttonDelete
                                ], {
                                }), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function(e) {
                                    return t.handleClick(e);
                                }, !1), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete"), {
                                    hidingDelay: 300
                                }), this.nodes.button;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t) {
                                this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
                            }
                        },
                        {
                            key: "setConfirmation",
                            value: function(t) {
                                this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
                            }
                        }
                    ]), t577;
                }();
                o229.default = l, l.displayName = "DeleteTune", l.isTune = !0, t576.exports = e371.default;
            }) ? o228.apply(e371, r133) : o228) || (t576.exports = i126);
        },
        function(t578, e372, n276) {
            var o230, r134, i127;
            "undefined" != typeof globalThis || "undefined", r134 = [
                e372,
                n276(2),
                n276(3),
                n276(15)
            ], void 0 === (i127 = "function" == typeof (o230 = function(o231, r135, i128, a50) {
                var s40 = n276(1);
                Object.defineProperty(o231, "__esModule", {
                    value: !0
                }), o231.default = void 0, r135 = s40(r135), i128 = s40(i128), a50 = s40(a50);
                var l30 = function() {
                    function t579(e) {
                        var n = e.api;
                        (0, r135.default)(this, t579), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-up",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i128.default)(t579, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a50.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {
                                });
                                return e.appendChild(a50.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move up"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o), i = this.api.blocks.getBlockByIndex(o - 1);
                                if (0 === o || !r || !i) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var a, s = r.holder, l = i.holder, c = s.getBoundingClientRect(), u = l.getBoundingClientRect();
                                a = u.top > 0 ? Math.abs(c.top) - Math.abs(u.top) : window.innerHeight - Math.abs(c.top) + Math.abs(u.top), window.scrollBy(0, -1 * a), this.api.blocks.move(o - 1), this.api.tooltip.hide();
                            }
                        }
                    ]), t579;
                }();
                o231.default = l30, l30.displayName = "MoveUpTune", l30.isTune = !0, t578.exports = e372.default;
            }) ? o230.apply(e372, r134) : o230) || (t578.exports = i127);
        },
        function(t, e, n) {
            "use strict";
            n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
        },
        function(t, e) {
            t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}';
        },
        function(t580, e373, n277) {
            "use strict";
            n277.r(e373), n277.d(e373, "nanoid", function() {
                return s41;
            }), n277.d(e373, "customAlphabet", function() {
                return a;
            }), n277.d(e373, "customRandom", function() {
                return i129;
            }), n277.d(e373, "urlAlphabet", function() {
                return o232;
            }), n277.d(e373, "random", function() {
                return r136;
            });
            let o232 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
            let r136 = (t)=>crypto.getRandomValues(new Uint8Array(t))
            , i129 = (t, e, n)=>{
                let o = (2 << Math.log(t.length - 1) / Math.LN2) - 1, r = -~(1.6 * o * e / t.length);
                return ()=>{
                    let i = "";
                    for(;;){
                        let a = n(r), s = r;
                        for(; s--;)if (i += t[a[s] & o] || "", i.length === e) return i;
                    }
                };
            }, a = (t, e)=>i129(t, e, r136)
            , s41 = (t = 21)=>{
                let e = "", n = crypto.getRandomValues(new Uint8Array(t));
                for(; t--;){
                    let o = 63 & n[t];
                    e += o < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o < 63 ? "_" : "-";
                }
                return e;
            };
        }
    ]);
});

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequire0da0")

//# sourceMappingURL=index.38661719.js.map
