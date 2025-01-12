import { __commonJS } from './chunk-LNEMQRCO.js';

// node_modules/opencage-api-client/dist/opencage-api.min.js
var require_opencage_api_min = __commonJS({
  'node_modules/opencage-api-client/dist/opencage-api.min.js'(exports, module) {
    !(function (t, e) {
      'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
          ? define([], e)
          : 'object' == typeof exports
            ? (exports.opencage = e())
            : (t.opencage = e());
    })(self, () =>
      (() => {
        var t = {
            324: (t2, e2, r2) => {
              var o =
                  ('undefined' != typeof globalThis && globalThis) ||
                  ('undefined' != typeof self && self) ||
                  (void 0 !== r2.g && r2.g),
                n = (function () {
                  function t3() {
                    (this.fetch = false), (this.DOMException = o.DOMException);
                  }
                  return (t3.prototype = o), new t3();
                })();
              !(function (t3) {
                !(function (e3) {
                  var r3 =
                      (void 0 !== t3 && t3) ||
                      ('undefined' != typeof self && self) ||
                      (void 0 !== r3 && r3),
                    o2 = 'URLSearchParams' in r3,
                    n2 = 'Symbol' in r3 && 'iterator' in Symbol,
                    s2 =
                      'FileReader' in r3 &&
                      'Blob' in r3 &&
                      (function () {
                        try {
                          return new Blob(), true;
                        } catch (t4) {
                          return false;
                        }
                      })(),
                    i = 'FormData' in r3,
                    a = 'ArrayBuffer' in r3;
                  if (a)
                    var u = [
                        '[object Int8Array]',
                        '[object Uint8Array]',
                        '[object Uint8ClampedArray]',
                        '[object Int16Array]',
                        '[object Uint16Array]',
                        '[object Int32Array]',
                        '[object Uint32Array]',
                        '[object Float32Array]',
                        '[object Float64Array]',
                      ],
                      f =
                        ArrayBuffer.isView ||
                        function (t4) {
                          return (
                            t4 &&
                            u.indexOf(Object.prototype.toString.call(t4)) > -1
                          );
                        };
                  function h(t4) {
                    if (
                      ('string' != typeof t4 && (t4 = String(t4)),
                      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t4) || '' === t4)
                    )
                      throw new TypeError(
                        'Invalid character in header field name: "' + t4 + '"'
                      );
                    return t4.toLowerCase();
                  }
                  function c(t4) {
                    return 'string' != typeof t4 && (t4 = String(t4)), t4;
                  }
                  function d(t4) {
                    var e4 = {
                      next: function () {
                        var e5 = t4.shift();
                        return { done: void 0 === e5, value: e5 };
                      },
                    };
                    return (
                      n2 &&
                        (e4[Symbol.iterator] = function () {
                          return e4;
                        }),
                      e4
                    );
                  }
                  function p(t4) {
                    (this.map = {}),
                      t4 instanceof p
                        ? t4.forEach(function (t5, e4) {
                            this.append(e4, t5);
                          }, this)
                        : Array.isArray(t4)
                          ? t4.forEach(function (t5) {
                              this.append(t5[0], t5[1]);
                            }, this)
                          : t4 &&
                            Object.getOwnPropertyNames(t4).forEach(function (
                              e4
                            ) {
                              this.append(e4, t4[e4]);
                            }, this);
                  }
                  function y(t4) {
                    if (t4.bodyUsed)
                      return Promise.reject(new TypeError('Already read'));
                    t4.bodyUsed = true;
                  }
                  function l(t4) {
                    return new Promise(function (e4, r4) {
                      (t4.onload = function () {
                        e4(t4.result);
                      }),
                        (t4.onerror = function () {
                          r4(t4.error);
                        });
                    });
                  }
                  function b(t4) {
                    var e4 = new FileReader(),
                      r4 = l(e4);
                    return e4.readAsArrayBuffer(t4), r4;
                  }
                  function m(t4) {
                    if (t4.slice) return t4.slice(0);
                    var e4 = new Uint8Array(t4.byteLength);
                    return e4.set(new Uint8Array(t4)), e4.buffer;
                  }
                  function w() {
                    return (
                      (this.bodyUsed = false),
                      (this._initBody = function (t4) {
                        var e4;
                        (this.bodyUsed = this.bodyUsed),
                          (this._bodyInit = t4),
                          t4
                            ? 'string' == typeof t4
                              ? (this._bodyText = t4)
                              : s2 && Blob.prototype.isPrototypeOf(t4)
                                ? (this._bodyBlob = t4)
                                : i && FormData.prototype.isPrototypeOf(t4)
                                  ? (this._bodyFormData = t4)
                                  : o2 &&
                                      URLSearchParams.prototype.isPrototypeOf(
                                        t4
                                      )
                                    ? (this._bodyText = t4.toString())
                                    : a &&
                                        s2 &&
                                        (e4 = t4) &&
                                        DataView.prototype.isPrototypeOf(e4)
                                      ? ((this._bodyArrayBuffer = m(t4.buffer)),
                                        (this._bodyInit = new Blob([
                                          this._bodyArrayBuffer,
                                        ])))
                                      : a &&
                                          (ArrayBuffer.prototype.isPrototypeOf(
                                            t4
                                          ) ||
                                            f(t4))
                                        ? (this._bodyArrayBuffer = m(t4))
                                        : (this._bodyText = t4 =
                                            Object.prototype.toString.call(t4))
                            : (this._bodyText = ''),
                          this.headers.get('content-type') ||
                            ('string' == typeof t4
                              ? this.headers.set(
                                  'content-type',
                                  'text/plain;charset=UTF-8'
                                )
                              : this._bodyBlob && this._bodyBlob.type
                                ? this.headers.set(
                                    'content-type',
                                    this._bodyBlob.type
                                  )
                                : o2 &&
                                  URLSearchParams.prototype.isPrototypeOf(t4) &&
                                  this.headers.set(
                                    'content-type',
                                    'application/x-www-form-urlencoded;charset=UTF-8'
                                  ));
                      }),
                      s2 &&
                        ((this.blob = function () {
                          var t4 = y(this);
                          if (t4) return t4;
                          if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                          if (this._bodyArrayBuffer)
                            return Promise.resolve(
                              new Blob([this._bodyArrayBuffer])
                            );
                          if (this._bodyFormData)
                            throw new Error(
                              'could not read FormData body as blob'
                            );
                          return Promise.resolve(new Blob([this._bodyText]));
                        }),
                        (this.arrayBuffer = function () {
                          return this._bodyArrayBuffer
                            ? y(this) ||
                                (ArrayBuffer.isView(this._bodyArrayBuffer)
                                  ? Promise.resolve(
                                      this._bodyArrayBuffer.buffer.slice(
                                        this._bodyArrayBuffer.byteOffset,
                                        this._bodyArrayBuffer.byteOffset +
                                          this._bodyArrayBuffer.byteLength
                                      )
                                    )
                                  : Promise.resolve(this._bodyArrayBuffer))
                            : this.blob().then(b);
                        })),
                      (this.text = function () {
                        var t4,
                          e4,
                          r4,
                          o3 = y(this);
                        if (o3) return o3;
                        if (this._bodyBlob)
                          return (
                            (t4 = this._bodyBlob),
                            (r4 = l((e4 = new FileReader()))),
                            e4.readAsText(t4),
                            r4
                          );
                        if (this._bodyArrayBuffer)
                          return Promise.resolve(
                            (function (t5) {
                              for (
                                var e5 = new Uint8Array(t5),
                                  r5 = new Array(e5.length),
                                  o4 = 0;
                                o4 < e5.length;
                                o4++
                              )
                                r5[o4] = String.fromCharCode(e5[o4]);
                              return r5.join('');
                            })(this._bodyArrayBuffer)
                          );
                        if (this._bodyFormData)
                          throw new Error(
                            'could not read FormData body as text'
                          );
                        return Promise.resolve(this._bodyText);
                      }),
                      i &&
                        (this.formData = function () {
                          return this.text().then(g);
                        }),
                      (this.json = function () {
                        return this.text().then(JSON.parse);
                      }),
                      this
                    );
                  }
                  (p.prototype.append = function (t4, e4) {
                    (t4 = h(t4)), (e4 = c(e4));
                    var r4 = this.map[t4];
                    this.map[t4] = r4 ? r4 + ', ' + e4 : e4;
                  }),
                    (p.prototype.delete = function (t4) {
                      delete this.map[h(t4)];
                    }),
                    (p.prototype.get = function (t4) {
                      return (t4 = h(t4)), this.has(t4) ? this.map[t4] : null;
                    }),
                    (p.prototype.has = function (t4) {
                      return this.map.hasOwnProperty(h(t4));
                    }),
                    (p.prototype.set = function (t4, e4) {
                      this.map[h(t4)] = c(e4);
                    }),
                    (p.prototype.forEach = function (t4, e4) {
                      for (var r4 in this.map)
                        this.map.hasOwnProperty(r4) &&
                          t4.call(e4, this.map[r4], r4, this);
                    }),
                    (p.prototype.keys = function () {
                      var t4 = [];
                      return (
                        this.forEach(function (e4, r4) {
                          t4.push(r4);
                        }),
                        d(t4)
                      );
                    }),
                    (p.prototype.values = function () {
                      var t4 = [];
                      return (
                        this.forEach(function (e4) {
                          t4.push(e4);
                        }),
                        d(t4)
                      );
                    }),
                    (p.prototype.entries = function () {
                      var t4 = [];
                      return (
                        this.forEach(function (e4, r4) {
                          t4.push([r4, e4]);
                        }),
                        d(t4)
                      );
                    }),
                    n2 && (p.prototype[Symbol.iterator] = p.prototype.entries);
                  var v = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                  function x(t4, e4) {
                    if (!(this instanceof x))
                      throw new TypeError(
                        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                      );
                    var r4,
                      o3,
                      n3 = (e4 = e4 || {}).body;
                    if (t4 instanceof x) {
                      if (t4.bodyUsed) throw new TypeError('Already read');
                      (this.url = t4.url),
                        (this.credentials = t4.credentials),
                        e4.headers || (this.headers = new p(t4.headers)),
                        (this.method = t4.method),
                        (this.mode = t4.mode),
                        (this.signal = t4.signal),
                        n3 ||
                          null == t4._bodyInit ||
                          ((n3 = t4._bodyInit), (t4.bodyUsed = true));
                    } else this.url = String(t4);
                    if (
                      ((this.credentials =
                        e4.credentials || this.credentials || 'same-origin'),
                      (!e4.headers && this.headers) ||
                        (this.headers = new p(e4.headers)),
                      (this.method =
                        ((o3 = (r4 =
                          e4.method || this.method || 'GET').toUpperCase()),
                        v.indexOf(o3) > -1 ? o3 : r4)),
                      (this.mode = e4.mode || this.mode || null),
                      (this.signal = e4.signal || this.signal),
                      (this.referrer = null),
                      ('GET' === this.method || 'HEAD' === this.method) && n3)
                    )
                      throw new TypeError(
                        'Body not allowed for GET or HEAD requests'
                      );
                    if (
                      (this._initBody(n3),
                      !(
                        ('GET' !== this.method && 'HEAD' !== this.method) ||
                        ('no-store' !== e4.cache && 'no-cache' !== e4.cache)
                      ))
                    ) {
                      var s3 = /([?&])_=[^&]*/;
                      s3.test(this.url)
                        ? (this.url = this.url.replace(
                            s3,
                            '$1_=' + /* @__PURE__ */ new Date().getTime()
                          ))
                        : (this.url +=
                            (/\?/.test(this.url) ? '&' : '?') +
                            '_=' +
                            /* @__PURE__ */ new Date().getTime());
                    }
                  }
                  function g(t4) {
                    var e4 = new FormData();
                    return (
                      t4
                        .trim()
                        .split('&')
                        .forEach(function (t5) {
                          if (t5) {
                            var r4 = t5.split('='),
                              o3 = r4.shift().replace(/\+/g, ' '),
                              n3 = r4.join('=').replace(/\+/g, ' ');
                            e4.append(
                              decodeURIComponent(o3),
                              decodeURIComponent(n3)
                            );
                          }
                        }),
                      e4
                    );
                  }
                  function E(t4, e4) {
                    if (!(this instanceof E))
                      throw new TypeError(
                        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                      );
                    e4 || (e4 = {}),
                      (this.type = 'default'),
                      (this.status = void 0 === e4.status ? 200 : e4.status),
                      (this.ok = this.status >= 200 && this.status < 300),
                      (this.statusText =
                        void 0 === e4.statusText ? '' : '' + e4.statusText),
                      (this.headers = new p(e4.headers)),
                      (this.url = e4.url || ''),
                      this._initBody(t4);
                  }
                  (x.prototype.clone = function () {
                    return new x(this, { body: this._bodyInit });
                  }),
                    w.call(x.prototype),
                    w.call(E.prototype),
                    (E.prototype.clone = function () {
                      return new E(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new p(this.headers),
                        url: this.url,
                      });
                    }),
                    (E.error = function () {
                      var t4 = new E(null, { status: 0, statusText: '' });
                      return (t4.type = 'error'), t4;
                    });
                  var A = [301, 302, 303, 307, 308];
                  (E.redirect = function (t4, e4) {
                    if (-1 === A.indexOf(e4))
                      throw new RangeError('Invalid status code');
                    return new E(null, {
                      status: e4,
                      headers: { location: t4 },
                    });
                  }),
                    (e3.DOMException = r3.DOMException);
                  try {
                    new e3.DOMException();
                  } catch (t4) {
                    (e3.DOMException = function (t5, e4) {
                      (this.message = t5), (this.name = e4);
                      var r4 = Error(t5);
                      this.stack = r4.stack;
                    }),
                      (e3.DOMException.prototype = Object.create(
                        Error.prototype
                      )),
                      (e3.DOMException.prototype.constructor = e3.DOMException);
                  }
                  function T(t4, o3) {
                    return new Promise(function (n3, i2) {
                      var u2 = new x(t4, o3);
                      if (u2.signal && u2.signal.aborted)
                        return i2(new e3.DOMException('Aborted', 'AbortError'));
                      var f2 = new XMLHttpRequest();
                      function h2() {
                        f2.abort();
                      }
                      (f2.onload = function () {
                        var t5,
                          e4,
                          r4 = {
                            status: f2.status,
                            statusText: f2.statusText,
                            headers:
                              ((t5 = f2.getAllResponseHeaders() || ''),
                              (e4 = new p()),
                              t5
                                .replace(/\r?\n[\t ]+/g, ' ')
                                .split('\r')
                                .map(function (t6) {
                                  return 0 === t6.indexOf('\n')
                                    ? t6.substr(1, t6.length)
                                    : t6;
                                })
                                .forEach(function (t6) {
                                  var r5 = t6.split(':'),
                                    o5 = r5.shift().trim();
                                  if (o5) {
                                    var n4 = r5.join(':').trim();
                                    e4.append(o5, n4);
                                  }
                                }),
                              e4),
                          };
                        r4.url =
                          'responseURL' in f2
                            ? f2.responseURL
                            : r4.headers.get('X-Request-URL');
                        var o4 =
                          'response' in f2 ? f2.response : f2.responseText;
                        setTimeout(function () {
                          n3(new E(o4, r4));
                        }, 0);
                      }),
                        (f2.onerror = function () {
                          setTimeout(function () {
                            i2(new TypeError('Network request failed'));
                          }, 0);
                        }),
                        (f2.ontimeout = function () {
                          setTimeout(function () {
                            i2(new TypeError('Network request failed'));
                          }, 0);
                        }),
                        (f2.onabort = function () {
                          setTimeout(function () {
                            i2(new e3.DOMException('Aborted', 'AbortError'));
                          }, 0);
                        }),
                        f2.open(
                          u2.method,
                          (function (t5) {
                            try {
                              return '' === t5 && r3.location.href
                                ? r3.location.href
                                : t5;
                            } catch (e4) {
                              return t5;
                            }
                          })(u2.url),
                          true
                        ),
                        'include' === u2.credentials
                          ? (f2.withCredentials = true)
                          : 'omit' === u2.credentials &&
                            (f2.withCredentials = false),
                        'responseType' in f2 &&
                          (s2
                            ? (f2.responseType = 'blob')
                            : a &&
                              u2.headers.get('Content-Type') &&
                              -1 !==
                                u2.headers
                                  .get('Content-Type')
                                  .indexOf('application/octet-stream') &&
                              (f2.responseType = 'arraybuffer')),
                        !o3 ||
                        'object' != typeof o3.headers ||
                        o3.headers instanceof p
                          ? u2.headers.forEach(function (t5, e4) {
                              f2.setRequestHeader(e4, t5);
                            })
                          : Object.getOwnPropertyNames(o3.headers).forEach(
                              function (t5) {
                                f2.setRequestHeader(t5, c(o3.headers[t5]));
                              }
                            ),
                        u2.signal &&
                          (u2.signal.addEventListener('abort', h2),
                          (f2.onreadystatechange = function () {
                            4 === f2.readyState &&
                              u2.signal.removeEventListener('abort', h2);
                          })),
                        f2.send(void 0 === u2._bodyInit ? null : u2._bodyInit);
                    });
                  }
                  (T.polyfill = true),
                    r3.fetch ||
                      ((r3.fetch = T),
                      (r3.Headers = p),
                      (r3.Request = x),
                      (r3.Response = E)),
                    (e3.Headers = p),
                    (e3.Request = x),
                    (e3.Response = E),
                    (e3.fetch = T);
                })({});
              })(n),
                (n.fetch.ponyfill = true),
                delete n.fetch.polyfill;
              var s = o.fetch ? o : n;
              ((e2 = s.fetch).default = s.fetch),
                (e2.fetch = s.fetch),
                (e2.Headers = s.Headers),
                (e2.Request = s.Request),
                (e2.Response = s.Response),
                (t2.exports = e2);
            },
            150: (t2) => {
              t2.exports = (t3, e2) => {
                const r2 = new Error(e2),
                  o = { code: t3, message: e2 };
                return (r2.response = { status: o }), r2;
              };
            },
            404: (t2, e2, r2) => {
              const o = r2(324),
                n = (t3) => {
                  if (t3.status >= 200 && t3.status < 300) return t3;
                  const e3 = new Error(t3.statusText);
                  throw (
                    ((e3.status = { code: t3.status, message: t3.statusText }),
                    e3)
                  );
                },
                s = (t3) => t3.json(),
                i = (t3) => o(t3);
              (t2.exports = (t3, e3, r3) => {
                i(t3)
                  .then(n)
                  .then(s)
                  .then((t4) => {
                    e3(t4);
                  })
                  .catch((t4) => {
                    r3(t4);
                  });
              }),
                (t2.exports.fetchUrl = i),
                (t2.exports.parseJSON = s),
                (t2.exports.checkStatus = n);
            },
            984: (t2, e2, r2) => {
              const o = r2(89),
                n = r2(282),
                s = r2(404),
                i = r2(150);
              t2.exports = (t3) =>
                new Promise((e3, r3) => {
                  if (o.isUndefinedOrNull(t3))
                    return void r3(i(400, 'missing or bad query'));
                  const a = ((t4) => {
                    const e4 = { ...t4 };
                    let r4 = 'https://api.opencagedata.com/geocode/v1/json',
                      n2 = false;
                    return (
                      o.isUndefinedOrEmpty(t4.proxyURL)
                        ? (o.isUndefinedOrEmpty(t4.key) &&
                            (e4.key =
                              process.env.OPENCAGE_API_KEY ||
                              process.env.OCD_API_KEY),
                          o.isUndefinedOrEmpty(e4.key) && (n2 = true))
                        : ((r4 = t4.proxyURL), delete e4.proxyURL),
                      { missingKey: n2, endpoint: r4, query: e4 }
                    );
                  })(t3);
                  if (a.missingKey) return void r3(i(401, 'missing API key'));
                  const { query: u, endpoint: f } = a,
                    h = n(u);
                  s(`${f}?${h}`, e3, r3);
                });
            },
            89: (t2) => {
              t2.exports = {
                isNumber: (t3) => 'number' == typeof t3 && !Number.isNaN(t3),
                isArray: (t3) => !!t3 && Array.isArray(t3),
                isUndefinedOrEmpty: (t3) => void 0 === t3 || '' === t3,
                isUndefinedOrNull: (t3) => null == t3,
              };
            },
            44: (t2, e2, r2) => {
              const o = r2(984);
              t2.exports = { geocode: o };
            },
            282: (t2, e2, r2) => {
              const o = r2(89);
              t2.exports = (t3) =>
                o.isUndefinedOrNull(t3)
                  ? ''
                  : Object.keys(t3)
                      .map(
                        (e3) =>
                          `${encodeURIComponent(e3)}=${encodeURIComponent(t3[e3])}`
                      )
                      .join('&');
            },
          },
          e = {};
        function r(o) {
          var n = e[o];
          if (void 0 !== n) return n.exports;
          var s = (e[o] = { exports: {} });
          return t[o](s, s.exports, r), s.exports;
        }
        return (
          (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
              return this || new Function('return this')();
            } catch (t2) {
              if ('object' == typeof window) return window;
            }
          })()),
          r(44)
        );
      })()
    );
  },
});
export default require_opencage_api_min();
//# sourceMappingURL=opencage-api-client.js.map
