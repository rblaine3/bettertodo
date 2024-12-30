"use strict";
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
exports.id = "app/api/tasks/parse/route";
exports.ids = ["app/api/tasks/parse/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_robblaine_BetterToDo_src_app_api_tasks_parse_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/parse/route.ts */ \"(rsc)/./src/app/api/tasks/parse/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/parse/route\",\n        pathname: \"/api/tasks/parse\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/parse/route\"\n    },\n    resolvedPagePath: \"/Users/robblaine/BetterToDo/src/app/api/tasks/parse/route.ts\",\n    nextConfigOutput,\n    userland: _Users_robblaine_BetterToDo_src_app_api_tasks_parse_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tasks/parse/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnBhcnNlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0YXNrcyUyRnBhcnNlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGFza3MlMkZwYXJzZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJvYmJsYWluZSUyRkJldHRlclRvRG8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcm9iYmxhaW5lJTJGQmV0dGVyVG9EbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNZO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8vP2FjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JvYmJsYWluZS9CZXR0ZXJUb0RvL3NyYy9hcHAvYXBpL3Rhc2tzL3BhcnNlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90YXNrcy9wYXJzZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Rhc2tzL3BhcnNlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YXNrcy9wYXJzZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yb2JibGFpbmUvQmV0dGVyVG9Eby9zcmMvYXBwL2FwaS90YXNrcy9wYXJzZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90YXNrcy9wYXJzZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/tasks/parse/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/tasks/parse/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _langchain_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @langchain/openai */ \"(rsc)/./node_modules/@langchain/openai/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\nconst taskSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n    title: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n    description: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().optional(),\n    deadline: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().optional(),\n    priority: zod__WEBPACK_IMPORTED_MODULE_2__.z.enum([\n        \"low\",\n        \"medium\",\n        \"high\"\n    ]).optional()\n});\nconst tasksResponseSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    tasks: zod__WEBPACK_IMPORTED_MODULE_2__.z.array(taskSchema)\n});\nconst SYSTEM_PROMPT = `You are a task parsing assistant. Your job is to take user input (either text or transcribed audio) and break it down into a list of distinct tasks. For each task:\n\n1. Create a clear, concise title\n2. Extract or infer a description if possible\n3. Identify any mentioned deadlines or time constraints\n4. Infer a priority level (low, medium, high) based on language and context\n\nFormat your response as a JSON array of tasks, where each task has:\n- id: a unique string\n- title: the task title\n- description: additional details (optional)\n- deadline: ISO date string if mentioned (optional)\n- priority: \"low\", \"medium\", or \"high\" (optional)\n\nExample input: \"I need to finish the presentation by next Friday, and don't forget to call mom tomorrow\"\n\nExample output:\n{\n  \"tasks\": [\n    {\n      \"id\": \"t1\",\n      \"title\": \"Finish presentation\",\n      \"deadline\": \"2024-01-05T23:59:59Z\",\n      \"priority\": \"high\"\n    },\n    {\n      \"id\": \"t2\",\n      \"title\": \"Call mom\",\n      \"deadline\": \"2024-12-30T12:00:00Z\",\n      \"priority\": \"medium\"\n    }\n  ]\n}`;\nasync function transcribeAudio(audioBlob) {\n    try {\n        const formData = new FormData();\n        formData.append(\"file\", audioBlob, \"audio.webm\");\n        formData.append(\"model\", \"whisper-1\");\n        const response = await fetch(\"https://api.openai.com/v1/audio/transcriptions\", {\n            method: \"POST\",\n            headers: {\n                \"Authorization\": `Bearer ${process.env.OPENAI_API_KEY}`\n            },\n            body: formData\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to transcribe audio\");\n        }\n        const data = await response.json();\n        return data.text;\n    } catch (error) {\n        console.error(\"Transcription error:\", error);\n        throw new Error(\"Failed to transcribe audio\");\n    }\n}\nasync function parseTasks(input) {\n    const model = new _langchain_openai__WEBPACK_IMPORTED_MODULE_1__.ChatOpenAI({\n        modelName: \"gpt-4\",\n        temperature: 0.7\n    });\n    const response = await model.invoke([\n        {\n            role: \"system\",\n            content: SYSTEM_PROMPT\n        },\n        {\n            role: \"user\",\n            content: input\n        }\n    ]);\n    try {\n        const parsed = JSON.parse(response.content);\n        return tasksResponseSchema.parse(parsed);\n    } catch (error) {\n        console.error(\"Error parsing GPT response:\", error);\n        throw new Error(\"Failed to parse tasks from input\");\n    }\n}\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        let input;\n        // Handle both text and audio input\n        const text = formData.get(\"text\");\n        const audio = formData.get(\"audio\");\n        if (text && typeof text === \"string\") {\n            input = text;\n        } else if (audio && audio instanceof Blob) {\n            input = await transcribeAudio(audio);\n        } else {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid input: must provide either text or audio\"\n            }, {\n                status: 400\n            });\n        }\n        const result = await parseTasks(input);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(result);\n    } catch (error) {\n        console.error(\"Task parsing error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to process input\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9wYXJzZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0k7QUFDdkI7QUFFeEIsTUFBTUcsYUFBYUQsa0NBQUNBLENBQUNFLE1BQU0sQ0FBQztJQUMxQkMsSUFBSUgsa0NBQUNBLENBQUNJLE1BQU07SUFDWkMsT0FBT0wsa0NBQUNBLENBQUNJLE1BQU07SUFDZkUsYUFBYU4sa0NBQUNBLENBQUNJLE1BQU0sR0FBR0csUUFBUTtJQUNoQ0MsVUFBVVIsa0NBQUNBLENBQUNJLE1BQU0sR0FBR0csUUFBUTtJQUM3QkUsVUFBVVQsa0NBQUNBLENBQUNVLElBQUksQ0FBQztRQUFDO1FBQU87UUFBVTtLQUFPLEVBQUVILFFBQVE7QUFDdEQ7QUFFQSxNQUFNSSxzQkFBc0JYLGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDbkNVLE9BQU9aLGtDQUFDQSxDQUFDYSxLQUFLLENBQUNaO0FBQ2pCO0FBRUEsTUFBTWEsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0N0QixDQUFDO0FBRUYsZUFBZUMsZ0JBQWdCQyxTQUFlO0lBQzVDLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUUgsV0FBVztRQUNuQ0MsU0FBU0UsTUFBTSxDQUFDLFNBQVM7UUFFekIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGtEQUFrRDtZQUM3RUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGlCQUFpQixDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUN6RDtZQUNBQyxNQUFNVjtRQUNSO1FBRUEsSUFBSSxDQUFDRyxTQUFTUSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsTUFBTUMsT0FBTyxNQUFNVixTQUFTVyxJQUFJO1FBQ2hDLE9BQU9ELEtBQUtFLElBQUk7SUFDbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE1BQU0sSUFBSUosTUFBTTtJQUNsQjtBQUNGO0FBRUEsZUFBZU0sV0FBV0MsS0FBYTtJQUNyQyxNQUFNQyxRQUFRLElBQUl0Qyx5REFBVUEsQ0FBQztRQUMzQnVDLFdBQVc7UUFDWEMsYUFBYTtJQUNmO0lBRUEsTUFBTW5CLFdBQVcsTUFBTWlCLE1BQU1HLE1BQU0sQ0FBQztRQUNsQztZQUFFQyxNQUFNO1lBQVVDLFNBQVM1QjtRQUFjO1FBQ3pDO1lBQUUyQixNQUFNO1lBQVFDLFNBQVNOO1FBQU07S0FDaEM7SUFFRCxJQUFJO1FBQ0YsTUFBTU8sU0FBU0MsS0FBS0MsS0FBSyxDQUFDekIsU0FBU3NCLE9BQU87UUFDMUMsT0FBTy9CLG9CQUFvQmtDLEtBQUssQ0FBQ0Y7SUFDbkMsRUFBRSxPQUFPVixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE1BQU0sSUFBSUosTUFBTTtJQUNsQjtBQUNGO0FBRU8sZUFBZWlCLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU05QixXQUFXLE1BQU04QixJQUFJOUIsUUFBUTtRQUNuQyxJQUFJbUI7UUFFSixtQ0FBbUM7UUFDbkMsTUFBTUosT0FBT2YsU0FBUytCLEdBQUcsQ0FBQztRQUMxQixNQUFNQyxRQUFRaEMsU0FBUytCLEdBQUcsQ0FBQztRQUUzQixJQUFJaEIsUUFBUSxPQUFPQSxTQUFTLFVBQVU7WUFDcENJLFFBQVFKO1FBQ1YsT0FBTyxJQUFJaUIsU0FBU0EsaUJBQWlCQyxNQUFNO1lBQ3pDZCxRQUFRLE1BQU1yQixnQkFBZ0JrQztRQUNoQyxPQUFPO1lBQ0wsT0FBT25ELGtGQUFZQSxDQUFDaUMsSUFBSSxDQUN0QjtnQkFBRUUsT0FBTztZQUFtRCxHQUM1RDtnQkFBRWtCLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLFNBQVMsTUFBTWpCLFdBQVdDO1FBQ2hDLE9BQU90QyxrRkFBWUEsQ0FBQ2lDLElBQUksQ0FBQ3FCO0lBQzNCLEVBQUUsT0FBT25CLE9BQVk7UUFDbkJDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU9uQyxrRkFBWUEsQ0FBQ2lDLElBQUksQ0FDdEI7WUFBRUUsT0FBT0EsTUFBTW9CLE9BQU8sSUFBSTtRQUEwQixHQUNwRDtZQUFFRixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JldHRlci10b2RvLy4vc3JjL2FwcC9hcGkvdGFza3MvcGFyc2Uvcm91dGUudHM/ZDJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBDaGF0T3BlbkFJIH0gZnJvbSBcIkBsYW5nY2hhaW4vb3BlbmFpXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5jb25zdCB0YXNrU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWRsaW5lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LmVudW0oWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXSkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCB0YXNrc1Jlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICB0YXNrczogei5hcnJheSh0YXNrU2NoZW1hKSxcbn0pO1xuXG5jb25zdCBTWVNURU1fUFJPTVBUID0gYFlvdSBhcmUgYSB0YXNrIHBhcnNpbmcgYXNzaXN0YW50LiBZb3VyIGpvYiBpcyB0byB0YWtlIHVzZXIgaW5wdXQgKGVpdGhlciB0ZXh0IG9yIHRyYW5zY3JpYmVkIGF1ZGlvKSBhbmQgYnJlYWsgaXQgZG93biBpbnRvIGEgbGlzdCBvZiBkaXN0aW5jdCB0YXNrcy4gRm9yIGVhY2ggdGFzazpcblxuMS4gQ3JlYXRlIGEgY2xlYXIsIGNvbmNpc2UgdGl0bGVcbjIuIEV4dHJhY3Qgb3IgaW5mZXIgYSBkZXNjcmlwdGlvbiBpZiBwb3NzaWJsZVxuMy4gSWRlbnRpZnkgYW55IG1lbnRpb25lZCBkZWFkbGluZXMgb3IgdGltZSBjb25zdHJhaW50c1xuNC4gSW5mZXIgYSBwcmlvcml0eSBsZXZlbCAobG93LCBtZWRpdW0sIGhpZ2gpIGJhc2VkIG9uIGxhbmd1YWdlIGFuZCBjb250ZXh0XG5cbkZvcm1hdCB5b3VyIHJlc3BvbnNlIGFzIGEgSlNPTiBhcnJheSBvZiB0YXNrcywgd2hlcmUgZWFjaCB0YXNrIGhhczpcbi0gaWQ6IGEgdW5pcXVlIHN0cmluZ1xuLSB0aXRsZTogdGhlIHRhc2sgdGl0bGVcbi0gZGVzY3JpcHRpb246IGFkZGl0aW9uYWwgZGV0YWlscyAob3B0aW9uYWwpXG4tIGRlYWRsaW5lOiBJU08gZGF0ZSBzdHJpbmcgaWYgbWVudGlvbmVkIChvcHRpb25hbClcbi0gcHJpb3JpdHk6IFwibG93XCIsIFwibWVkaXVtXCIsIG9yIFwiaGlnaFwiIChvcHRpb25hbClcblxuRXhhbXBsZSBpbnB1dDogXCJJIG5lZWQgdG8gZmluaXNoIHRoZSBwcmVzZW50YXRpb24gYnkgbmV4dCBGcmlkYXksIGFuZCBkb24ndCBmb3JnZXQgdG8gY2FsbCBtb20gdG9tb3Jyb3dcIlxuXG5FeGFtcGxlIG91dHB1dDpcbntcbiAgXCJ0YXNrc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcInQxXCIsXG4gICAgICBcInRpdGxlXCI6IFwiRmluaXNoIHByZXNlbnRhdGlvblwiLFxuICAgICAgXCJkZWFkbGluZVwiOiBcIjIwMjQtMDEtMDVUMjM6NTk6NTlaXCIsXG4gICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwidDJcIixcbiAgICAgIFwidGl0bGVcIjogXCJDYWxsIG1vbVwiLFxuICAgICAgXCJkZWFkbGluZVwiOiBcIjIwMjQtMTItMzBUMTI6MDA6MDBaXCIsXG4gICAgICBcInByaW9yaXR5XCI6IFwibWVkaXVtXCJcbiAgICB9XG4gIF1cbn1gO1xuXG5hc3luYyBmdW5jdGlvbiB0cmFuc2NyaWJlQXVkaW8oYXVkaW9CbG9iOiBCbG9iKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGF1ZGlvQmxvYiwgJ2F1ZGlvLndlYm0nKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ21vZGVsJywgJ3doaXNwZXItMScpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9hdWRpby90cmFuc2NyaXB0aW9ucycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWX1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdHJhbnNjcmliZSBhdWRpbycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEudGV4dDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUcmFuc2NyaXB0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB0cmFuc2NyaWJlIGF1ZGlvJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VUYXNrcyhpbnB1dDogc3RyaW5nKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IENoYXRPcGVuQUkoe1xuICAgIG1vZGVsTmFtZTogXCJncHQtNFwiLFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbW9kZWwuaW52b2tlKFtcbiAgICB7IHJvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFNZU1RFTV9QUk9NUFQgfSxcbiAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBpbnB1dCB9XG4gIF0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50KTtcbiAgICByZXR1cm4gdGFza3NSZXNwb25zZVNjaGVtYS5wYXJzZShwYXJzZWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgR1BUIHJlc3BvbnNlOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSB0YXNrcyBmcm9tIGlucHV0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcbiAgICBsZXQgaW5wdXQ6IHN0cmluZztcblxuICAgIC8vIEhhbmRsZSBib3RoIHRleHQgYW5kIGF1ZGlvIGlucHV0XG4gICAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldCgndGV4dCcpO1xuICAgIGNvbnN0IGF1ZGlvID0gZm9ybURhdGEuZ2V0KCdhdWRpbycpO1xuXG4gICAgaWYgKHRleHQgJiYgdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnB1dCA9IHRleHQ7XG4gICAgfSBlbHNlIGlmIChhdWRpbyAmJiBhdWRpbyBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgIGlucHV0ID0gYXdhaXQgdHJhbnNjcmliZUF1ZGlvKGF1ZGlvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCBpbnB1dDogbXVzdCBwcm92aWRlIGVpdGhlciB0ZXh0IG9yIGF1ZGlvJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VUYXNrcyhpbnB1dCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUYXNrIHBhcnNpbmcgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBwcm9jZXNzIGlucHV0JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkNoYXRPcGVuQUkiLCJ6IiwidGFza1NjaGVtYSIsIm9iamVjdCIsImlkIiwic3RyaW5nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9wdGlvbmFsIiwiZGVhZGxpbmUiLCJwcmlvcml0eSIsImVudW0iLCJ0YXNrc1Jlc3BvbnNlU2NoZW1hIiwidGFza3MiLCJhcnJheSIsIlNZU1RFTV9QUk9NUFQiLCJ0cmFuc2NyaWJlQXVkaW8iLCJhdWRpb0Jsb2IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJib2R5Iiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwidGV4dCIsImVycm9yIiwiY29uc29sZSIsInBhcnNlVGFza3MiLCJpbnB1dCIsIm1vZGVsIiwibW9kZWxOYW1lIiwidGVtcGVyYXR1cmUiLCJpbnZva2UiLCJyb2xlIiwiY29udGVudCIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsIlBPU1QiLCJyZXEiLCJnZXQiLCJhdWRpbyIsIkJsb2IiLCJzdGF0dXMiLCJyZXN1bHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/parse/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/node-fetch","vendor-chunks/openai","vendor-chunks/web-streams-polyfill","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/abort-controller","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/@langchain","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/langsmith","vendor-chunks/@cfworker","vendor-chunks/uuid","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/js-tiktoken","vendor-chunks/zod","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/eventemitter3","vendor-chunks/decamelize","vendor-chunks/camelcase","vendor-chunks/base64-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();