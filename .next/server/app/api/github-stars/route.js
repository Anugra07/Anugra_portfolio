/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/github-stars/route";
exports.ids = ["app/api/github-stars/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_anugragupta_Desktop_portfolio_src_app_api_github_stars_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/github-stars/route.ts */ \"(rsc)/./src/app/api/github-stars/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/github-stars/route\",\n        pathname: \"/api/github-stars\",\n        filename: \"route\",\n        bundlePath: \"app/api/github-stars/route\"\n    },\n    resolvedPagePath: \"/Users/anugragupta/Desktop/portfolio/src/app/api/github-stars/route.ts\",\n    nextConfigOutput,\n    userland: _Users_anugragupta_Desktop_portfolio_src_app_api_github_stars_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjNfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4wX3JlYWN0LWRvbUAxOS4wLjBfcmVhY3RAMTkuMC4wX19yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGZ2l0aHViLXN0YXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnaXRodWItc3RhcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnaXRodWItc3RhcnMlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZhbnVncmFndXB0YSUyRkRlc2t0b3AlMkZwb3J0Zm9saW8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYW51Z3JhZ3VwdGElMkZEZXNrdG9wJTJGcG9ydGZvbGlvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNzQjtBQUNuRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FudWdyYWd1cHRhL0Rlc2t0b3AvcG9ydGZvbGlvL3NyYy9hcHAvYXBpL2dpdGh1Yi1zdGFycy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2l0aHViLXN0YXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2l0aHViLXN0YXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9naXRodWItc3RhcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYW51Z3JhZ3VwdGEvRGVza3RvcC9wb3J0Zm9saW8vc3JjL2FwcC9hcGkvZ2l0aHViLXN0YXJzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/github-stars/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/github-stars/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(req) {\n    const res = await fetch('https://api.github.com/repos/Anugra07/portfolio', {\n        headers: {\n            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`\n        }\n    });\n    if (!res.ok) {\n        return new Response('Failed to fetch stars', {\n            status: res.status\n        });\n    }\n    const data = await res.json();\n    return Response.json({\n        stars: data.stargazers_count\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9naXRodWItc3RhcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG1EQUFtRDtRQUN6RUMsU0FBUztZQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksRUFBRTtRQUNyRDtJQUNGO0lBRUEsSUFBSSxDQUFDTixJQUFJTyxFQUFFLEVBQUU7UUFDWCxPQUFPLElBQUlDLFNBQVMseUJBQXlCO1lBQUVDLFFBQVFULElBQUlTLE1BQU07UUFBQztJQUNwRTtJQUVBLE1BQU1DLE9BQU8sTUFBTVYsSUFBSVcsSUFBSTtJQUMzQixPQUFPSCxTQUFTRyxJQUFJLENBQUM7UUFBRUMsT0FBT0YsS0FBS0csZ0JBQWdCO0lBQUM7QUFDdEQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVncmFndXB0YS9EZXNrdG9wL3BvcnRmb2xpby9zcmMvYXBwL2FwaS9naXRodWItc3RhcnMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvQW51Z3JhMDcvcG9ydGZvbGlvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU59YCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXJlcy5vaykge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ0ZhaWxlZCB0byBmZXRjaCBzdGFycycsIHsgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBSZXNwb25zZS5qc29uKHsgc3RhcnM6IGRhdGEuc3RhcmdhemVyc19jb3VudCB9KTtcbn0iXSwibmFtZXMiOlsiR0VUIiwicmVxIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfVE9LRU4iLCJvayIsIlJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJzdGFycyIsInN0YXJnYXplcnNfY291bnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/github-stars/route.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/@opentelemetry+api@1.9.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fanugragupta%2FDesktop%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();