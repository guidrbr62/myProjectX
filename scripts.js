
!function n(o, r, a) {
    function s(t, e) {
        if (!r[t]) {
            if (!o[t]) {
                var i = "function" == typeof require && require;
                if (!e && i)
                    return i(t, !0);
                if (l)
                    return l(t, !0);
                throw (i = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                i
            }
            i = r[t] = {
                exports: {}
            },
            o[t][0].call(i.exports, function(e) {
                return s(o[t][1][e] || e)
            }, i, i.exports, n, o, r, a)
        }
        return r[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < a.length; e++)
        s(a[e]);
    return s
}({
    1: [function(e, t, i) {
        "use strict";
        function o(e) {
            return function(e) {
                if (Array.isArray(e))
                    return n(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return n(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function r(e, t) {
            for (var i, n = 0; n < t.length; n++)
                (i = t[n]).enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
        }
        function a(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        var s, l, u, d = (s = c,
        (l = [{
            key: "registerWindowEvent",
            value: function() {}
        }, {
            key: "unregisterWindowEvent",
            value: function() {
                var e;
                "undefined" == typeof window || !window._zoomUpdateEvents || 0 <= (e = window._zoomUpdateEvents.indexOf(this.triggerWindowEvent)) && window._zoomUpdateEvents.splice(e, 1)
            }
        }, {
            key: "dispose",
            value: function() {
                this.recheckMode = null,
                this.unregisterWindowEvent()
            }
        }, {
            key: "afterRender",
            value: function(e, t) {
                var i, n, o = this;
                !t.parentElement || ((n = (i = t.parentElement.parentElement).querySelectorAll("li")) || n.length) && (this.builderApi.isInOnboarding() ? i.classList.add("kv-ee-no-animation") : i.classList.remove("kv-ee-no-animation"),
                this.settings.isCarouselSection ? setTimeout(function() {
                    o.checkMobileMode(i),
                    o.setHeaderHeight(e, t)
                }, 300) : !this.builderApi.isInOnboarding() || t.offsetHeight ? (this.checkMobileMode(i),
                this.setHeaderHeight(e, t),
                window.addEventListener("resize", function() {
                    o.__resizeTimeout && window.clearTimeout(o.__resizeTimeout),
                    o.__resizeTimeout = window.setTimeout(function() {
                        o.checkMobileMode(i),
                        o.setHeaderHeight(e, t)
                    }, o.resizeWaitTimeout)
                }),
                this.recheckMode = this.builderApi.debounce(function() {
                    o.checkMobileMode(i),
                    o.setHeaderHeight(e, t)
                }, 300)) : setTimeout(function() {
                    o.checkMobileMode(i),
                    o.setHeaderHeight(e, t)
                }, 2e3))
            }
        }, {
            key: "setSectionPadding",
            value: function(e, t) {
                e.nextElementSibling.querySelector(".kv-background").style.top = -t + "px"
            }
        }, {
            key: "setHeaderHeightInternal",
            value: function(e, t) {
                var i = "navigation" === this.builderApi.controller.parentController.model.category && this.isRuntimeSite;
                if (0 < e.offsetHeight || i) {
                    i = this.builderApi.controller.parentController.model.layout.section.id;
                    if ("dubemo66" === i)
                        return n = e.querySelector("header"),
                        void (t.style.height = n.offsetHeight + "px");
                    var n = (n = e.querySelector(".kv-ee-navigation") || e.querySelector("header")).offsetHeight
                      , e = this.isPreviewOrPublishedWebsite && "navigation-1" === i && !this.settings.model._toggle["global.logo"] ? Math.ceil(n + e.offsetHeight) : Math.max(n, e.offsetHeight);
                    t.style.height = e + "px",
                    document.documentElement.style.setProperty("--navigation-height", e + "px")
                }
            }
        }, {
            key: "setHeaderHeight",
            value: function(e, r) {
                var a = this
                  , e = e.model.isFloatingSection || !1 === e.model.cover && !0 === e.model.fixedNavigation;
                r.parentElement && e && !this.settings.isCarouselSection && function() {
                    for (var e = r.parentElement.parentElement, t = r.querySelectorAll("img"), i = 0; i < t.length; i++) {
                        var n = t[i].src
                          , o = new window.Image;
                        o.onload = function() {
                            setTimeout(function() {
                                a.setHeaderHeightInternal(r, e)
                            })
                        }
                        ,
                        o.src = n
                    }
                    a.setHeaderHeightInternal(r, e),
                    setTimeout(function() {
                        r.classList.contains("kv-scrolled") || a.setHeaderHeightInternal(r, e)
                    }, 1e3)
                }()
            }
        }, {
            key: "getNavigationWidth",
            value: function(e) {
                var t = 0;
                return e.forEach(function(e) {
                    t += e.offsetWidth
                }),
                t + 40
            }
        }, {
            key: "determineContainerWidth",
            value: function(e, t) {
                var i = e.querySelector("nav") || e
                  , n = e.querySelector('[data-dynamic-navigation-element="logo"]')
                  , o = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]')
                  , o = o ? o.offsetWidth : 0
                  , n = n ? n.offsetWidth : 0
                  , i = i.offsetWidth - o;
                return {
                    containerSize: i,
                    logoWidth: n,
                    ctaWidth: o,
                    headerWith: e.offsetWidth,
                    navigationToWide: t + n + o >= e.offsetWidth - 20,
                    headerToWide: i + n >= e.offsetWidth
                }
            }
        }, {
            key: "shouldMinimizeMenu",
            value: function(e) {
                if (((null == e ? void 0 : e.clientWidth) || window.innerWidth) < this.mobileBreakpoint)
                    return !0;
                var t = e.querySelectorAll(".kv-ee-menu-item-wrapper > li");
                this.currentElementWidth = this.getNavigationWidth(t);
                var i = this.determineContainerWidth(e, this.currentElementWidth)
                  , t = i.containerSize
                  , e = i.headerToWide
                  , i = i.navigationToWide;
                return t < 100 && !this.builderApi.controller.getSiteController().hasSectionBasedNavigation() || e || i
            }
        }, {
            key: "checkMobileMode",
            value: function(e) {
                var t = (t = e.querySelector(".kv-ee-check-mobile")) || e;
                window.innerWidth < this.mobileBreakpoint ? t.classList.contains("kv-ee-mobile") || t.classList.add("kv-ee-mobile") : (t.classList.remove("kv-ee-mobile"),
                e = this.shouldMinimizeMenu(e),
                t = t.classList,
                e && t.add("kv-ee-mobile"),
                e || t.remove("kv-ee-mobile"))
            }
        }, {
            key: "updateProperty",
            value: function(e, t, i) {
                var n;
                "layout.section.id" !== t || (t = o((n = document.querySelector(".kv-page-content")).classList).find(function(e) {
                    return e.includes("with-navigation")
                })) && (n.classList.remove(t),
                n.classList.add("kv-ee-with-" + i))
            }
        }]) && r(s.prototype, l),
        u && r(s, u),
        c);
        function c(e, t) {
            var i = this;
            (function(e) {
                if (!(e instanceof c))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this),
            a(this, "getRenderModel", function() {
                return {}
            }),
            a(this, "triggerWindowEvent", function() {
                i.recheckMode && i.recheckMode()
            }),
            this.isRuntimeSite = t.isRuntimeSite,
            this.builderApi = e,
            this.currentElementWidth = 0,
            this.checkTimeout = 0,
            this.settings = t;
            e = !this.editor && window.self !== window.top;
            this.isPreviewOrPublishedWebsite = t.isRuntimeSite,
            this.mobileBreakpoint = 991,
            this.resizeWaitTimeout = e ? 0 : 300,
            "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [],
            window._zoomUpdateEvents.push(this.triggerWindowEvent))
        }
        window.__features = window.__features || {},
        window.__features.navigation = d
    }
    , {}]
}, {}, [1]);
;!function o(n, i, a) {
    function c(t, e) {
        if (!i[t]) {
            if (!n[t]) {
                var r = "function" == typeof require && require;
                if (!e && r)
                    return r(t, !0);
                if (s)
                    return s(t, !0);
                throw (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                r
            }
            r = i[t] = {
                exports: {}
            },
            n[t][0].call(r.exports, function(e) {
                return c(n[t][1][e] || e)
            }, r, r.exports, o, n, i, a)
        }
        return i[t].exports
    }
    for (var s = "function" == typeof require && require, e = 0; e < a.length; e++)
        c(a[e]);
    return c
}({
    1: [function(e, t, r) {
        "use strict";
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function n(e, t) {
            for (var r, o = 0; o < t.length; o++)
                (r = t[o]).enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
        var i, a, c, s = (i = l,
        (a = [{
            key: "validateForm",
            value: function(e) {
                var n = this
                  , i = {
                    data: [],
                    errors: []
                };
                return e.forEach(function(e) {
                    var t = e.getAttribute("id")
                      , r = e.value
                      , o = e.dataset.namelabel;
                    if (!t.includes("g-recaptcha-response"))
                        if ("fieldSubscribe" === t && (r = "none" === e.style.display || e.checked),
                        n.isEmpty(r))
                            i.errors.push({
                                key: t,
                                errorMessage: "required"
                            });
                        else {
                            if ("fieldEmail" === t) {
                                if (r = "string" == typeof r && r.replace(/\s+/g, ""),
                                !/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((r + "").toLowerCase()))
                                    return void i.errors.push({
                                        key: t,
                                        errorMessage: "invalidEmail"
                                    });
                                r = r.replace(/\s+/g, "")
                            }
                            i.data.push({
                                name: o,
                                field: t,
                                value: r,
                                type: n.mapInputType(t)
                            })
                        }
                }),
                i
            }
        }, {
            key: "showSuccesMessage",
            value: function(e) {
                var t = e.querySelector(".kv-ee-contact-form-success");
                t && t.classList.add("kv-ee-show"),
                this.setButtonState(e.querySelector(".kv-ee-button.kv-ee-submit"), this.builderApi.localize("editorTemplates.features.subscription.sent")),
                e.classList.add(this.promoCodeClass)
            }
        }, {
            key: "handlePreview",
            value: function(e) {
                var t;
                document.querySelector(".kv-ee-preview-form-container") || (t = e.querySelector(".kv-ee-form-container") || e) && ((e = document && document.createElement("div")).className = "kv-ee-preview-form-container",
                e.innerHTML = this.builderApi.localize("editorTemplates.features.form.preview.message"),
                t.querySelector(".kv-ee-preview-form-container") || t.appendChild(e))
            }
        }, {
            key: "confirmForm",
            value: function(e, t, r, o, n, i) {
                var a, c = this, s = this.builderApi.controller.model, l = s.theme.fonts.heading.name, s = s.theme.fonts.body.name, i = i.backgroundControl.controller.getCssId(), d = this.builderApi.showModal({
                    content: '<div class="'.concat(i, '">\n        <div style="background-color: var(--kv-ee-card); padding: 24px 24px 4px 24px; border-radius: 4px; max-height: 50vh; overflow: scroll;">\n          <h3 style="font-family: ').concat(l, '; font-weight: bold; color: var(--kv-ee-text1-card);">\n            ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmTitle"), '\n          </h3>\n          <p style="font-family: ').concat(s, '; color: rgba(var(--kv-ee-text1-card-rgb), 0.6);">\n            ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmMessage"), '\n          </p>\n          <div style="padding: 16px; background-color: #F6F6F6; border-radius: 4px; margin-bottom: 24px;" id="kv-ee-input-data"></div>\n            <div style="\n              border-top: 1px solid rgba(0,0,0,0.04);\n              display: flex;\n              justify-content: flex-end;\n              margin-left: -24px;\n              margin-right: -24px;\n              padding: 8px;"\n            >\n              <button style="\n                background-color: var(--kv-ee-text1-accent1);\n                border: 1px solid rgba(var(--kv-ee-accent1-rgb), 0.5);\n                border-radius: 4px;\n                color: var(--kv-ee-accent1);\n                font-size: 16px;\n                font-weight: 700;\n                height: 40px;\n                padding: 5px 15px;\n                margin-right: 8px;"\n                id="kv-ee-closeButton"\n              >\n                ').concat(this.builderApi.localize("editorTemplates.features.confirm.confirmCancel"), '\n            </button>\n            <button style="\n              background-color: var(--kv-ee-accent1);\n              border: var(--kv-ee-accent1);\n              color:  var(--kv-ee-text1-accent1);\n              font-size: 16px;\n              font-weight: 700;\n              height: 40px;\n              padding: 6px 16px;\n              min-width: auto;\n              border-radius: 4px;\n              cursor: pointer;\n              margin-right: 4px;"\n              id="kv-ee-confirmButton"\n            >\n              ').concat(this.builderApi.localize("editorTemplates.features.confirm.Accept"), "\n            </button>\n          </div>\n        </div>\n      </div>"),
                    fullscreenOnMobile: !0,
                    onClose: null
                }), l = document.getElementById("kv-ee-input-data");
                l && (s = document.createElement("table"),
                a = document.createElement("tbody"),
                e.forEach(function(e) {
                    var t, r, o;
                    "fieldSubscribe" !== e.field && (t = document.createElement("tr"),
                    (o = document.createElement("td")).style.color = "rgba(0, 0, 0, 0.6)",
                    o.style.padding = window.innerWidth < 768 ? "6px 12px" : "8px 16px",
                    o.style.verticalAlign = "top",
                    r = document.createTextNode(e.name),
                    o.appendChild(r),
                    t.appendChild(o),
                    (o = document.createElement("td")).style.maxWidth = "300px",
                    e = document.createTextNode(e.value),
                    o.appendChild(e),
                    t.appendChild(o),
                    a.appendChild(t))
                }),
                s.appendChild(a),
                l.appendChild(s)),
                document.getElementById("kv-ee-confirmButton").onclick = function() {
                    return c.closeAndSubmitForm(e, t, r, o, n, d)
                }
                ,
                document.getElementById("kv-ee-closeButton").onclick = function() {
                    return c.builderApi.closeModal(d)
                }
            }
        }, {
            key: "closeAndSubmitForm",
            value: function(e, t, r, o, n, i) {
                this.builderApi.closeModal(i),
                this.submitForm(e, t, r, o, n)
            }
        }, {
            key: "submitForm",
            value: function(e, r, t, o, n) {
                var i = this
                  , a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
                if (!this.editor && window.self !== window.top)
                    return this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.form.preview.button")),
                    void this.handlePreview(r);
                e.forEach(function(e) {
                    e.name && (e.name = e.name.slice(0, 254))
                });
                var c = window._site && window._site.siteId || ""
                  , s = window._site && window._site.partnerId || 0
                  , l = window._site && window._site.useHostingApi || !1
                  , d = n.env.env || window._site && window._site.environment || ""
                  , u = "/v1.0/contactform";
                (100 <= s || l) && (u = "dev" === d || "latest" === d ? "https://hostingapi.latest.mywebsitebuilder.com" + u : "qa" === d ? "https://hostingapi.qa.mywebsitebuilder.com" + u : "uat" === d ? "https://hostingapi.uat.mywebsitebuilder.com" + u : "https://hostingapi.mywebsitebuilder.com" + u);
                var p = r.querySelector("form")
                  , f = r.querySelector(".kv-ee-hidden-form-data").dataset.sectionid
                  , s = r.querySelector(".kv-ee-hidden-form-data").dataset.pageid
                  , l = !!r.querySelector('[data-type="subscribe"]')
                  , d = !!r.querySelector('[data-type="promotion"]')
                  , e = {
                    fields: e,
                    site_id: c,
                    recaptcha_code: t,
                    section_id: f,
                    form_id: f,
                    page_id: s + "",
                    is_subscription: l || d,
                    contact_list_id: e.contactList
                };
                this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.subscription.sending")),
                n.fetch(u, {
                    method: "POST",
                    body: JSON.stringify(e),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(e) {
                    if (!e.ok)
                        throw new Error(e.statusText);
                    var t = r.querySelector(".kv-ee-contact-form-success")
                      , e = r.closest("section");
                    t && t.classList.add("kv-ee-show"),
                    i.setButtonState(o.target, i.builderApi.localize("editorTemplates.features.subscription.sent")),
                    p.reset(),
                    a.promoCode ? (i.useLocalStorage && window.localStorage.setItem("showpromo", !0),
                    e.classList.add(i.promoCodeClass)) : t.addEventListener("click", function() {
                        t.classList.remove("kv-ee-show")
                    }),
                    e.classList.add("submitted")
                }).catch(function() {
                    i.setButtonState(o.target, i.builderApi.localize("editorTemplates.features.subscription.sendingError"))
                })
            }
        }, {
            key: "clearErrors",
            value: function(e, t) {
                var r = this
                  , o = t.querySelector(".kv-ee-error-captcha-container");
                e && e.length && e.forEach(function(e) {
                    r.setErrorStyling(t.querySelector(".kv-ee-" + e.id + "-container"), !1)
                }),
                o && o.setAttribute("style", "display: none")
            }
        }, {
            key: "showErrors",
            value: function(e, t, r) {
                var o = this;
                e && e.length && e.forEach(function(e) {
                    o.setErrorStyling(t.querySelector(".kv-ee-" + e.key + "-container"), !0, e.errorMessage)
                }),
                r || ((e = t.querySelector(".kv-ee-error-captcha-container")) ? e.setAttribute("style", "display: block") : (r = t.querySelector(".kv-ee-captcha-field-wrapper"),
                (e = document.createElement("div")).className = "kv-ee-error-captcha-container",
                e.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.couldNotVerify"),
                r.appendChild(e)))
            }
        }, {
            key: "isEmpty",
            value: function(e) {
                return null == e || "object" === o(e) && 0 === Object.keys(e).length || "string" == typeof e && 0 === e.trim().length
            }
        }, {
            key: "tryRenderCaptcha",
            value: function(e, t) {
                var r, o = this;
                window.hasCaptcha || (window.captchaInstanceQueue = [],
                window.onCaptchaLoadCallback = function() {
                    window.captchaInstanceQueue.forEach(function(e) {
                        o.renderCaptcha(e, t)
                    })
                }
                ,
                (r = document.createElement("script")).src = "https://www.google.com/recaptcha/api.js?onload=onCaptchaLoadCallback",
                r.setAttribute("async", !0),
                r.setAttribute("defer", !0),
                document.body.appendChild(r),
                window.hasCaptcha = !0),
                window.grecaptcha ? this.renderCaptcha(e, t) : window.captchaInstanceQueue.push(e)
            }
        }, {
            key: "renderCaptcha",
            value: function(e, t) {
                e = e.querySelector(".kv-ee-captcha-field-wrapper");
                window.grecaptcha && e && !e.querySelector("iframe") && (e.innerHTML = "",
                e = window.grecaptcha.render(e, {
                    sitekey: "6Ler7rYqAAAAALl5GDQnFkeKWv5A6swJAoyrxrDC",
                    callback: window.onCaptchaSubmit
                }),
                t._captchaWidgetId = e)
            }
        }, {
            key: "validateCaptcha",
            value: function(e, t) {
                return window.grecaptcha ? window.grecaptcha && window.grecaptcha.getResponse(e._captchaWidgetId) : (this.tryRenderCaptcha(t, e),
                !1)
            }
        }, {
            key: "setErrorStyling",
            value: function(e, t, r) {
                var o;
                e && (o = e.querySelector("input") || e.querySelector("textarea"),
                e = e.querySelector(".kv-ee-error-container"),
                o && e && (t && o ? (o.style.cssText = "border: 3px solid #F44336; border-radius: .25rem; box-sizing: border-box; outline: 0;",
                e.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.".concat(r || "required"))) : (o.style.cssText = "",
                e.innerHTML = "")))
            }
        }, {
            key: "setButtonState",
            value: function(e, t) {
                e && (e.innerHTML = t)
            }
        }, {
            key: "mapInputType",
            value: function(e) {
                return "fieldFirstName" !== e && "fieldlastName" !== e ? "fieldPhone" === e ? 6 : "fieldDate" === e ? 4 : "fieldEmail" === e ? 3 : 1 : 8
            }
        }]) && n(i.prototype, a),
        c && n(i, c),
        l);
        function l(e, t) {
            (function(e) {
                if (!(e instanceof l))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this),
            this.builderApi = e,
            this.view = t.view,
            this.localStorageHelper = this.builderApi.localStorageHelper,
            this.isTestMode = window.self !== window.top || !!e.editor,
            this.useLocalStorage = this.localStorageHelper.supportsLocalStorage && !this.isTestMode,
            this.promoCodeClass = "show-promo-code"
        }
        window.__features = window.__features || {},
        window.__features["form-core"] = s
    }
    , {}]
}, {}, [1]);
;!function i(n, o, s) {
    function a(e, t) {
        if (!o[e]) {
            if (!n[e]) {
                var r = "function" == typeof require && require;
                if (!t && r)
                    return r(e, !0);
                if (c)
                    return c(e, !0);
                throw (r = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                r
            }
            r = o[e] = {
                exports: {}
            },
            n[e][0].call(r.exports, function(t) {
                return a(n[e][1][t] || t)
            }, r, r.exports, i, n, o, s)
        }
        return o[e].exports
    }
    for (var c = "function" == typeof require && require, t = 0; t < s.length; t++)
        a(s[t]);
    return a
}({
    1: [function(t, e, r) {
        "use strict";
        function i(t) {
            return function(t) {
                if (Array.isArray(t))
                    return n(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Map" === (r = "Object" === r && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function n(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function o(t, e) {
            for (var r, i = 0; i < e.length; i++)
                (r = e[i]).enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
        }
        var s, a, c, u = (s = l,
        (a = [{
            key: "initializeForSection",
            value: function() {}
        }, {
            key: "updateProperty",
            value: function() {}
        }, {
            key: "afterRender",
            value: function(t, e) {
                var r = this
                  , i = e.querySelector('form [data-type="button"]')
                  , n = t.controller.parentController;
                !this.isForPreview && this.isRuntimeSite && i && (i.removeAttribute("href"),
                i.dataset.href = "",
                i.addEventListener("click", function(t) {
                    r.handleFormSubmission(t, n, e)
                }),
                e.addEventListener("click", function() {
                    r.formCore.tryRenderCaptcha(e, n)
                }))
            }
        }, {
            key: "fetchContactLists",
            value: function(t) {
                return this.fetch("".concat(t).concat(this.builderApi.getSiteId(), "/lists?exclude_system_lists=true&exclude_all_contacts=true")).then(function(t) {
                    return t.json()
                })
            }
        }, {
            key: "onLoadListIds",
            value: function() {
                var e = this
                  , r = {
                    label: this.builderApi.localize("editorTemplates.features.subscription.allContacts"),
                    value: ""
                };
                return this.builderApi.getSiteId() && this.contactsApi && !this.contactsListsOptions ? this.fetchContactLists(this.contactsApi).then(function(t) {
                    return e.contactsListsOptions = [r].concat(i(t.map(function(t) {
                        return {
                            label: t.name,
                            value: t.id
                        }
                    }))),
                    e.contactsListsOptions
                }).catch(function() {
                    return [r]
                }) : this.contactsListsOptions ? Promise.resolve(this.contactsListsOptions) : Promise.resolve([r])
            }
        }, {
            key: "handleFormSubmission",
            value: function(t, e, r) {
                var i, n, o;
                t.preventDefault(),
                "localhost" !== window.location.hostname && (n = r.querySelectorAll("input, textarea"),
                this.formCore.clearErrors(n, r),
                i = (o = this.formCore.validateForm(n)).data,
                n = o.errors,
                o = this.formCore.validateCaptcha(e, r),
                0 < n.length || !o ? this.formCore.showErrors(n, r, o) : this.formCore.submitForm(i, r, o, t, this.builderApi, e.model.binding))
            }
        }]) && o(s.prototype, a),
        c && o(s, c),
        l);
        function l(t, e, r) {
            (function(t) {
                if (!(t instanceof l))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this),
            this.builderApi = t,
            this.formCore = r["form-core"],
            this.isForPreview = t.isForPreview,
            this.isRuntimeSite = !t.editor,
            this.fetch = t.fetch,
            this.builderApi.apiUrl && !e.isWordpress && (this.contactsApi = this.builderApi.apiUrl("v2.0/", "contacts"))
        }
        window.__features = window.__features || {},
        window.__features.subscription = u
    }
    , {}]
}, {}, [1]);
;!function i(r, n, s) {
    function l(t, e) {
        if (!n[t]) {
            if (!r[t]) {
                var o = "function" == typeof require && require;
                if (!e && o)
                    return o(t, !0);
                if (a)
                    return a(t, !0);
                throw (o = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                o
            }
            o = n[t] = {
                exports: {}
            },
            r[t][0].call(o.exports, function(e) {
                return l(r[t][1][e] || e)
            }, o, o.exports, i, r, n, s)
        }
        return n[t].exports
    }
    for (var a = "function" == typeof require && require, e = 0; e < s.length; e++)
        l(s[e]);
    return l
}({
    1: [function(e, t, o) {
        "use strict";
        function i(e, t) {
            for (var o, i = 0; i < t.length; i++)
                (o = t[i]).enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        function r(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        var n, s, l, a = (n = u,
        (s = [{
            key: "dispose",
            value: function() {}
        }, {
            key: "getDisplayTime",
            value: function(e) {
                return 1e3 * parseInt(e.popoverTiming) || 0
            }
        }, {
            key: "rerender",
            value: function() {
                this.view.requestRender()
            }
        }, {
            key: "setTooltip",
            value: function() {
                var e = "";
                this.model.showPopover && (e = "leaveSite" === this.model.popoverDisplay ? this.builderApi.localize("editorTemplates.features.popover.tooltip.leaveSite") : (void 0 === this.model.popoverTiming && (this.model.popoverTiming = 10),
                0 < parseInt(this.model.popoverTiming) ? this.builderApi.localize("editorTemplates.features.popover.tooltip.afterX").replace("{time}", this.model.popoverTiming) : this.builderApi.localize("editorTemplates.features.popover.tooltip.immediately"))),
                this.editorContext.setSectionToolTip(this.builderApi.controller.parentController, e)
            }
        }, {
            key: "showModal",
            value: function(e) {
                var t = this;
                this.builderApi.showModal({
                    fullScreen: !0,
                    content: e,
                    closeButton: e.querySelector(".kv-ee-feature-modal-close-button"),
                    onClose: this.model.promoCode ? function() {
                        t.nextSectionElement.parentElement.insertBefore(e, t.nextSectionElement),
                        e.classList.remove("kv-ee-popover-mode")
                    }
                    : null
                }),
                this.mouseLeaveListener && document.body.removeEventListener("mouseleave", this.mouseLeaveListener),
                this.localStorageHelper.supportsLocalStorage && !this.isTestMode && window.localStorage.setItem(this.getUniqueId(), !0)
            }
        }, {
            key: "initializeForSection",
            value: function(e, t) {
                var o, i = this;
                this.inPopoverMode && (o = e.domElement.parentElement.parentElement,
                this.nextSectionElement = o.nextElementSibling,
                this.hasShownPopover() ? this.hasShownPopover() && t.promoCode ? this.useLocalStorage && window.localStorage.getItem("showpromo") ? this.view.features.subscription.formCore.showSuccesMessage(o) : o.style.display = "none" : this.hasShownPopover() && (o.style.display = "none") : (o.classList.add("kv-ee-popover-mode"),
                "leaveSite" === t.popoverDisplay ? setTimeout(function() {
                    i.mouseLeaveListener = function() {
                        return i.showModal(o)
                    }
                    ,
                    i.listener = document.body.addEventListener("mouseleave", i.mouseLeaveListener)
                }, 3e3) : (o.style.display = "none",
                t = this.getDisplayTime(t),
                setTimeout(function() {
                    i.showModal(o),
                    o.style.display = "flex"
                }, t))))
            }
        }, {
            key: "updateProperty",
            value: function(e, t, o) {
                return void 0 === o || (this.setTooltip(),
                !1)
            }
        }, {
            key: "getRenderModel",
            value: function() {}
        }, {
            key: "afterRender",
            value: function() {}
        }]) && i(n.prototype, s),
        l && i(n, l),
        u);
        function u(e, t) {
            var o = this;
            (function(e) {
                if (!(e instanceof u))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this),
            r(this, "getUniqueId", function() {
                return o.builderApi.getPageUri() + "-" + o.view.id
            }),
            r(this, "hasShownPopover", function() {
                return !!o.useLocalStorage && window.localStorage.getItem(o.getUniqueId())
            }),
            this.builderApi = e,
            this.model = e.controller.model,
            this.editMode = !!e.editor,
            this.viewerMode = !this.editMode,
            this.view = t.view,
            this.isTestMode = window.self !== window.top || !!e.editor,
            this.viewerMode && this.model.showPopover && (this.inPopoverMode = !0),
            this.editorContext = e.controller.editorContext,
            this.editMode && this.setTooltip(),
            this.localStorageHelper = this.builderApi.localStorageHelper,
            this.useLocalStorage = this.localStorageHelper.supportsLocalStorage && !this.isTestMode
        }
        window.__features = window.__features || {},
        window.__features.popover = a
    }
    , {}]
}, {}, [1]);
;window._featureSettings = {
    "navigation": {
        "settings": {}
    },
    "form-core": {
        "settings": {}
    },
    "translations": {
        "editorTemplates.features.subscription.couldNotVerify": "Could not verify if you were human",
        "editorTemplates.features.subscription.sent": "Sent!",
        "editorTemplates.features.subscription.sending": "Sending ...",
        "editorTemplates.features.subscription.sendingError": "Error sending form",
        "editorTemplates.features.subscription.required": "This field is required.",
        "editorTemplates.features.subscription.invalidEmail": "Invalid format.",
        "editorTemplates.features.subscription.subscribe": "By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.",
        "editorTemplates.features.subscription.subscribeToggle": "By checking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.",
        "editorTemplates.features.subscription.allContacts": "All contacts",
        "editorTemplates.features.form.preview.button": "Not sent!",
        "editorTemplates.features.form.preview.message": "Forms cannot be sent while in preview mode",
        "editorTemplates.features.confirm.Accept": "Send message",
        "editorTemplates.features.confirm.confirmCancel": "Go back",
        "editorTemplates.features.confirm.confirmMessage": "You are about to send a message with the following information:",
        "editorTemplates.features.confirm.confirmTitle": "Send this message?"
    },
    "subscription": {
        "settings": {
            "dependingGlobalFeatures": ["form-core"]
        }
    },
    "popover": {
        "settings": {}
    }
};

