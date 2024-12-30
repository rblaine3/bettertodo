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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _langchain_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @langchain/openai */ \"(rsc)/./node_modules/@langchain/openai/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\nconst taskSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n    title: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n    description: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().optional(),\n    deadline: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().optional(),\n    priority: zod__WEBPACK_IMPORTED_MODULE_2__.z.enum([\n        \"low\",\n        \"medium\",\n        \"high\"\n    ]).optional()\n});\nconst tasksResponseSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    tasks: zod__WEBPACK_IMPORTED_MODULE_2__.z.array(taskSchema)\n});\nconst SYSTEM_PROMPT = `You are a task parsing assistant. Your job is to take user input (either text or transcribed audio) and break it down into a list of distinct tasks. For each task:\n\n1. Create a clear, concise title\n2. Extract or infer a description if possible\n3. Identify any mentioned deadlines or time constraints\n4. Infer a priority level (low, medium, high) based on language and context\n\nIMPORTANT DATE RULES:\n- Today's date and time will be provided in the user message\n- All dates MUST be in the future relative to today\n- For relative dates like \"tomorrow\" or \"next week\", convert them to actual dates\n- For time of day, use business hours (9:00-18:00)\n- If no specific time is mentioned, default to:\n  * 10:00 for morning tasks\n  * 14:00 for afternoon tasks\n  * 16:00 for end-of-day tasks\n- All dates should be within the next 30 days unless explicitly stated otherwise\n\nFormat your response as a JSON array of tasks, where each task has:\n- id: a unique string\n- title: the task title\n- description: additional details (optional)\n- deadline: ISO date string if mentioned (optional)\n- priority: \"low\", \"medium\", or \"high\" (optional)\n\nExample for today's date 2024-12-29:\nInput: \"I need to finish the presentation by next Friday, and don't forget to call mom tomorrow\"\n\nOutput:\n{\n  \"tasks\": [\n    {\n      \"id\": \"t1\",\n      \"title\": \"Finish presentation\",\n      \"description\": \"Complete and finalize presentation\",\n      \"deadline\": \"2025-01-03T16:00:00-05:00\",\n      \"priority\": \"high\"\n    },\n    {\n      \"id\": \"t2\",\n      \"title\": \"Call mom\",\n      \"deadline\": \"2024-12-30T10:00:00-05:00\",\n      \"priority\": \"medium\"\n    }\n  ]\n}`;\nasync function transcribeAudio(audioBlob) {\n    try {\n        const formData = new FormData();\n        formData.append(\"file\", audioBlob, \"audio.webm\");\n        formData.append(\"model\", \"whisper-1\");\n        const response = await fetch(\"https://api.openai.com/v1/audio/transcriptions\", {\n            method: \"POST\",\n            headers: {\n                \"Authorization\": `Bearer ${process.env.OPENAI_API_KEY}`\n            },\n            body: formData\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to transcribe audio\");\n        }\n        const data = await response.json();\n        return data.text;\n    } catch (error) {\n        console.error(\"Transcription error:\", error);\n        throw new Error(\"Failed to transcribe audio\");\n    }\n}\nasync function parseTasks(input) {\n    const model = new _langchain_openai__WEBPACK_IMPORTED_MODULE_1__.ChatOpenAI({\n        modelName: \"gpt-4\",\n        temperature: 0.7\n    });\n    // Get current date and time\n    const now = new Date();\n    const currentDate = now.toISOString().split(\"T\")[0];\n    const currentTime = now.toTimeString().split(\" \")[0].slice(0, 5);\n    const timeZone = now.toString().match(/\\(([^)]+)\\)$/)?.[1] || \"Local\";\n    const offset = now.getTimezoneOffset();\n    const tzOffset = `${offset <= 0 ? \"+\" : \"-\"}${String(Math.abs(Math.floor(offset / 60))).padStart(2, \"0\")}:${String(Math.abs(offset % 60)).padStart(2, \"0\")}`;\n    const response = await model.invoke([\n        {\n            role: \"system\",\n            content: SYSTEM_PROMPT\n        },\n        {\n            role: \"user\",\n            content: `CURRENT DATE AND TIME:\nToday's date: ${currentDate}\nCurrent time: ${currentTime}\nTime zone: ${timeZone}\nUTC offset: ${tzOffset}\n\nUSER INPUT:\n${input}`\n        }\n    ]);\n    try {\n        const parsed = JSON.parse(response.content);\n        const result = tasksResponseSchema.parse(parsed);\n        // Validate and adjust dates if needed\n        result.tasks = result.tasks.map((task)=>{\n            if (task.deadline) {\n                const deadlineDate = new Date(task.deadline);\n                const today = new Date();\n                today.setHours(0, 0, 0, 0);\n                // If date is in the past, set it to tomorrow\n                if (deadlineDate < today) {\n                    const tomorrow = new Date(today);\n                    tomorrow.setDate(tomorrow.getDate() + 1);\n                    tomorrow.setHours(14, 0, 0, 0); // Default to 2 PM\n                    task.deadline = tomorrow.toISOString();\n                }\n            }\n            return task;\n        });\n        return result;\n    } catch (error) {\n        console.error(\"Error parsing GPT response:\", error);\n        throw new Error(\"Failed to parse tasks from input\");\n    }\n}\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        let input;\n        // Handle both text and audio input\n        const text = formData.get(\"text\");\n        const audio = formData.get(\"audio\");\n        if (text && typeof text === \"string\") {\n            input = text;\n        } else if (audio && audio instanceof Blob) {\n            input = await transcribeAudio(audio);\n        } else {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid input: must provide either text or audio\"\n            }, {\n                status: 400\n            });\n        }\n        const result = await parseTasks(input);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(result);\n    } catch (error) {\n        console.error(\"Task parsing error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to process input\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9wYXJzZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0k7QUFDdkI7QUFFeEIsTUFBTUcsYUFBYUQsa0NBQUNBLENBQUNFLE1BQU0sQ0FBQztJQUMxQkMsSUFBSUgsa0NBQUNBLENBQUNJLE1BQU07SUFDWkMsT0FBT0wsa0NBQUNBLENBQUNJLE1BQU07SUFDZkUsYUFBYU4sa0NBQUNBLENBQUNJLE1BQU0sR0FBR0csUUFBUTtJQUNoQ0MsVUFBVVIsa0NBQUNBLENBQUNJLE1BQU0sR0FBR0csUUFBUTtJQUM3QkUsVUFBVVQsa0NBQUNBLENBQUNVLElBQUksQ0FBQztRQUFDO1FBQU87UUFBVTtLQUFPLEVBQUVILFFBQVE7QUFDdEQ7QUFFQSxNQUFNSSxzQkFBc0JYLGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDbkNVLE9BQU9aLGtDQUFDQSxDQUFDYSxLQUFLLENBQUNaO0FBQ2pCO0FBRUEsTUFBTWEsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZDdEIsQ0FBQztBQUVGLGVBQWVDLGdCQUFnQkMsU0FBZTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFILFdBQVc7UUFDbkNDLFNBQVNFLE1BQU0sQ0FBQyxTQUFTO1FBRXpCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxrREFBa0Q7WUFDN0VDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7WUFDekQ7WUFDQUMsTUFBTVY7UUFDUjtRQUVBLElBQUksQ0FBQ0csU0FBU1EsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTVYsU0FBU1csSUFBSTtRQUNoQyxPQUFPRCxLQUFLRSxJQUFJO0lB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Q2lDLElBQUksQ0FDdEI7Z0JBQUVFLE9BQU87WUFBbUQsR0FDNUQ7Z0JBQUU4QyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNZCxTQUFTLE1BQU05QixXQUFXQztRQUNoQyxPQUFPdEMsa0ZBQVlBLENBQUNpQyxJQUFJLENBQUNrQztJQUMzQixFQUFFLE9BQU9oQyxPQUFZO1FBQ25CQyxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxPQUFPbkMsa0ZBQVlBLENBQUNpQyxJQUFJLENBQ3RCO1lBQUVFLE9BQU9BLE1BQU0rQyxPQUFPLElBQUk7UUFBMEIsR0FDcEQ7WUFBRUQsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXR0ZXItdG9kby8uL3NyYy9hcHAvYXBpL3Rhc2tzL3BhcnNlL3JvdXRlLnRzP2QyYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgQ2hhdE9wZW5BSSB9IGZyb20gXCJAbGFuZ2NoYWluL29wZW5haVwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgdGFza1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFkbGluZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5lbnVtKFsnbG93JywgJ21lZGl1bScsICdoaWdoJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgdGFza3NSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGFza3M6IHouYXJyYXkodGFza1NjaGVtYSksXG59KTtcblxuY29uc3QgU1lTVEVNX1BST01QVCA9IGBZb3UgYXJlIGEgdGFzayBwYXJzaW5nIGFzc2lzdGFudC4gWW91ciBqb2IgaXMgdG8gdGFrZSB1c2VyIGlucHV0IChlaXRoZXIgdGV4dCBvciB0cmFuc2NyaWJlZCBhdWRpbykgYW5kIGJyZWFrIGl0IGRvd24gaW50byBhIGxpc3Qgb2YgZGlzdGluY3QgdGFza3MuIEZvciBlYWNoIHRhc2s6XG5cbjEuIENyZWF0ZSBhIGNsZWFyLCBjb25jaXNlIHRpdGxlXG4yLiBFeHRyYWN0IG9yIGluZmVyIGEgZGVzY3JpcHRpb24gaWYgcG9zc2libGVcbjMuIElkZW50aWZ5IGFueSBtZW50aW9uZWQgZGVhZGxpbmVzIG9yIHRpbWUgY29uc3RyYWludHNcbjQuIEluZmVyIGEgcHJpb3JpdHkgbGV2ZWwgKGxvdywgbWVkaXVtLCBoaWdoKSBiYXNlZCBvbiBsYW5ndWFnZSBhbmQgY29udGV4dFxuXG5JTVBPUlRBTlQgREFURSBSVUxFUzpcbi0gVG9kYXkncyBkYXRlIGFuZCB0aW1lIHdpbGwgYmUgcHJvdmlkZWQgaW4gdGhlIHVzZXIgbWVzc2FnZVxuLSBBbGwgZGF0ZXMgTVVTVCBiZSBpbiB0aGUgZnV0dXJlIHJlbGF0aXZlIHRvIHRvZGF5XG4tIEZvciByZWxhdGl2ZSBkYXRlcyBsaWtlIFwidG9tb3Jyb3dcIiBvciBcIm5leHQgd2Vla1wiLCBjb252ZXJ0IHRoZW0gdG8gYWN0dWFsIGRhdGVzXG4tIEZvciB0aW1lIG9mIGRheSwgdXNlIGJ1c2luZXNzIGhvdXJzICg5OjAwLTE4OjAwKVxuLSBJZiBubyBzcGVjaWZpYyB0aW1lIGlzIG1lbnRpb25lZCwgZGVmYXVsdCB0bzpcbiAgKiAxMDowMCBmb3IgbW9ybmluZyB0YXNrc1xuICAqIDE0OjAwIGZvciBhZnRlcm5vb24gdGFza3NcbiAgKiAxNjowMCBmb3IgZW5kLW9mLWRheSB0YXNrc1xuLSBBbGwgZGF0ZXMgc2hvdWxkIGJlIHdpdGhpbiB0aGUgbmV4dCAzMCBkYXlzIHVubGVzcyBleHBsaWNpdGx5IHN0YXRlZCBvdGhlcndpc2VcblxuRm9ybWF0IHlvdXIgcmVzcG9uc2UgYXMgYSBKU09OIGFycmF5IG9mIHRhc2tzLCB3aGVyZSBlYWNoIHRhc2sgaGFzOlxuLSBpZDogYSB1bmlxdWUgc3RyaW5nXG4tIHRpdGxlOiB0aGUgdGFzayB0aXRsZVxuLSBkZXNjcmlwdGlvbjogYWRkaXRpb25hbCBkZXRhaWxzIChvcHRpb25hbClcbi0gZGVhZGxpbmU6IElTTyBkYXRlIHN0cmluZyBpZiBtZW50aW9uZWQgKG9wdGlvbmFsKVxuLSBwcmlvcml0eTogXCJsb3dcIiwgXCJtZWRpdW1cIiwgb3IgXCJoaWdoXCIgKG9wdGlvbmFsKVxuXG5FeGFtcGxlIGZvciB0b2RheSdzIGRhdGUgMjAyNC0xMi0yOTpcbklucHV0OiBcIkkgbmVlZCB0byBmaW5pc2ggdGhlIHByZXNlbnRhdGlvbiBieSBuZXh0IEZyaWRheSwgYW5kIGRvbid0IGZvcmdldCB0byBjYWxsIG1vbSB0b21vcnJvd1wiXG5cbk91dHB1dDpcbntcbiAgXCJ0YXNrc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcInQxXCIsXG4gICAgICBcInRpdGxlXCI6IFwiRmluaXNoIHByZXNlbnRhdGlvblwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbXBsZXRlIGFuZCBmaW5hbGl6ZSBwcmVzZW50YXRpb25cIixcbiAgICAgIFwiZGVhZGxpbmVcIjogXCIyMDI1LTAxLTAzVDE2OjAwOjAwLTA1OjAwXCIsXG4gICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwidDJcIixcbiAgICAgIFwidGl0bGVcIjogXCJDYWxsIG1vbVwiLFxuICAgICAgXCJkZWFkbGluZVwiOiBcIjIwMjQtMTItMzBUMTA6MDA6MDAtMDU6MDBcIixcbiAgICAgIFwicHJpb3JpdHlcIjogXCJtZWRpdW1cIlxuICAgIH1cbiAgXVxufWA7XG5cbmFzeW5jIGZ1bmN0aW9uIHRyYW5zY3JpYmVBdWRpbyhhdWRpb0Jsb2I6IEJsb2IpOiBQcm9taXNlPHN0cmluZz4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYXVkaW9CbG9iLCAnYXVkaW8ud2VibScpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbW9kZWwnLCAnd2hpc3Blci0xJyk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2F1ZGlvL3RyYW5zY3JpcHRpb25zJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB0cmFuc2NyaWJlIGF1ZGlvJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS50ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zY3JpcHRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHRyYW5zY3JpYmUgYXVkaW8nKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZVRhc2tzKGlucHV0OiBzdHJpbmcpIHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgQ2hhdE9wZW5BSSh7XG4gICAgbW9kZWxOYW1lOiBcImdwdC00XCIsXG4gICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgfSk7XG5cbiAgLy8gR2V0IGN1cnJlbnQgZGF0ZSBhbmQgdGltZVxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbm93LnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF0uc2xpY2UoMCwgNSk7XG4gIGNvbnN0IHRpbWVab25lID0gbm93LnRvU3RyaW5nKCkubWF0Y2goL1xcKChbXildKylcXCkkLyk/LlsxXSB8fCAnTG9jYWwnO1xuICBjb25zdCBvZmZzZXQgPSBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgY29uc3QgdHpPZmZzZXQgPSBgJHtvZmZzZXQgPD0gMCA/ICcrJyA6ICctJ30ke1N0cmluZyhNYXRoLmFicyhNYXRoLmZsb29yKG9mZnNldCAvIDYwKSkpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKE1hdGguYWJzKG9mZnNldCAlIDYwKSkucGFkU3RhcnQoMiwgJzAnKX1gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbW9kZWwuaW52b2tlKFtcbiAgICB7IHJvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFNZU1RFTV9QUk9NUFQgfSxcbiAgICB7IFxuICAgICAgcm9sZTogXCJ1c2VyXCIsIFxuICAgICAgY29udGVudDogYENVUlJFTlQgREFURSBBTkQgVElNRTpcblRvZGF5J3MgZGF0ZTogJHtjdXJyZW50RGF0ZX1cbkN1cnJlbnQgdGltZTogJHtjdXJyZW50VGltZX1cblRpbWUgem9uZTogJHt0aW1lWm9uZX1cblVUQyBvZmZzZXQ6ICR7dHpPZmZzZXR9XG5cblVTRVIgSU5QVVQ6XG4ke2lucHV0fWBcbiAgICB9XG4gIF0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50KTtcbiAgICBjb25zdCByZXN1bHQgPSB0YXNrc1Jlc3BvbnNlU2NoZW1hLnBhcnNlKHBhcnNlZCk7XG5cbiAgICAvLyBWYWxpZGF0ZSBhbmQgYWRqdXN0IGRhdGVzIGlmIG5lZWRlZFxuICAgIHJlc3VsdC50YXNrcyA9IHJlc3VsdC50YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICBpZiAodGFzay5kZWFkbGluZSkge1xuICAgICAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZSh0YXNrLmRlYWRsaW5lKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyBJZiBkYXRlIGlzIGluIHRoZSBwYXN0LCBzZXQgaXQgdG8gdG9tb3Jyb3dcbiAgICAgICAgaWYgKGRlYWRsaW5lRGF0ZSA8IHRvZGF5KSB7XG4gICAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgICAgICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICB0b21vcnJvdy5zZXRIb3VycygxNCwgMCwgMCwgMCk7IC8vIERlZmF1bHQgdG8gMiBQTVxuICAgICAgICAgIHRhc2suZGVhZGxpbmUgPSB0b21vcnJvdy50b0lTT1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBHUFQgcmVzcG9uc2U6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHBhcnNlIHRhc2tzIGZyb20gaW5wdXQnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICAgIGxldCBpbnB1dDogc3RyaW5nO1xuXG4gICAgLy8gSGFuZGxlIGJvdGggdGV4dCBhbmQgYXVkaW8gaW5wdXRcbiAgICBjb25zdCB0ZXh0ID0gZm9ybURhdGEuZ2V0KCd0ZXh0Jyk7XG4gICAgY29uc3QgYXVkaW8gPSBmb3JtRGF0YS5nZXQoJ2F1ZGlvJyk7XG5cbiAgICBpZiAodGV4dCAmJiB0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlucHV0ID0gdGV4dDtcbiAgICB9IGVsc2UgaWYgKGF1ZGlvICYmIGF1ZGlvIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgaW5wdXQgPSBhd2FpdCB0cmFuc2NyaWJlQXVkaW8oYXVkaW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdJbnZhbGlkIGlucHV0OiBtdXN0IHByb3ZpZGUgZWl0aGVyIHRleHQgb3IgYXVkaW8nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXJzZVRhc2tzKGlucHV0KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1Rhc2sgcGFyc2luZyBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHByb2Nlc3MgaW5wdXQnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiQ2hhdE9wZW5BSSIsInoiLCJ0YXNrU2NoZW1hIiwib2JqZWN0IiwiaWQiLCJzdHJpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3B0aW9uYWwiLCJkZWFkbGluZSIsInByaW9yaXR5IiwiZW51bSIsInRhc2tzUmVzcG9uc2VTY2hlbWEiLCJ0YXNrcyIsImFycmF5IiwiU1lTVEVNX1BST01QVCIsInRyYW5zY3JpYmVBdWRpbyIsImF1ZGlvQmxvYiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImJvZHkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJ0ZXh0IiwiZXJyb3IiLCJjb25zb2xlIiwicGFyc2VUYXNrcyIsImlucHV0IiwibW9kZWwiLCJtb2RlbE5hbWUiLCJ0ZW1wZXJhdHVyZSIsIm5vdyIsIkRhdGUiLCJjdXJyZW50RGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJjdXJyZW50VGltZSIsInRvVGltZVN0cmluZyIsInNsaWNlIiwidGltZVpvbmUiLCJ0b1N0cmluZyIsIm1hdGNoIiwib2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0ek9mZnNldCIsIlN0cmluZyIsIk1hdGgiLCJhYnMiLCJmbG9vciIsInBhZFN0YXJ0IiwiaW52b2tlIiwicm9sZSIsImNvbnRlbnQiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJtYXAiLCJ0YXNrIiwiZGVhZGxpbmVEYXRlIiwidG9kYXkiLCJzZXRIb3VycyIsInRvbW9ycm93Iiwic2V0RGF0ZSIsImdldERhdGUiLCJQT1NUIiwicmVxIiwiZ2V0IiwiYXVkaW8iLCJCbG9iIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/parse/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/@langchain","vendor-chunks/openai","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/langsmith","vendor-chunks/form-data-encoder","vendor-chunks/@cfworker","vendor-chunks/node-fetch","vendor-chunks/uuid","vendor-chunks/agentkeepalive","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/js-tiktoken","vendor-chunks/zod","vendor-chunks/web-streams-polyfill","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/eventemitter3","vendor-chunks/event-target-shim","vendor-chunks/decamelize","vendor-chunks/camelcase","vendor-chunks/base64-js","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();