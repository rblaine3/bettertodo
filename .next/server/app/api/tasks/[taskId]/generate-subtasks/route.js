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
exports.id = "app/api/tasks/[taskId]/generate-subtasks/route";
exports.ids = ["app/api/tasks/[taskId]/generate-subtasks/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_robblaine_BetterToDo_src_app_api_tasks_taskId_generate_subtasks_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/[taskId]/generate-subtasks/route.ts */ \"(rsc)/./src/app/api/tasks/[taskId]/generate-subtasks/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/[taskId]/generate-subtasks/route\",\n        pathname: \"/api/tasks/[taskId]/generate-subtasks\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/[taskId]/generate-subtasks/route\"\n    },\n    resolvedPagePath: \"/Users/robblaine/BetterToDo/src/app/api/tasks/[taskId]/generate-subtasks/route.ts\",\n    nextConfigOutput,\n    userland: _Users_robblaine_BetterToDo_src_app_api_tasks_taskId_generate_subtasks_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tasks/[taskId]/generate-subtasks/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRmdlbmVyYXRlLXN1YnRhc2tzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRmdlbmVyYXRlLXN1YnRhc2tzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGFza3MlMkYlNUJ0YXNrSWQlNUQlMkZnZW5lcmF0ZS1zdWJ0YXNrcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJvYmJsYWluZSUyRkJldHRlclRvRG8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcm9iYmxhaW5lJTJGQmV0dGVyVG9EbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQztBQUM5RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2JldHRlci10b2RvLz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9yb2JibGFpbmUvQmV0dGVyVG9Eby9zcmMvYXBwL2FwaS90YXNrcy9bdGFza0lkXS9nZW5lcmF0ZS1zdWJ0YXNrcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3MvW3Rhc2tJZF0vZ2VuZXJhdGUtc3VidGFza3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrcy9bdGFza0lkXS9nZW5lcmF0ZS1zdWJ0YXNrc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGFza3MvW3Rhc2tJZF0vZ2VuZXJhdGUtc3VidGFza3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvcm9iYmxhaW5lL0JldHRlclRvRG8vc3JjL2FwcC9hcGkvdGFza3MvW3Rhc2tJZF0vZ2VuZXJhdGUtc3VidGFza3Mvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGFza3MvW3Rhc2tJZF0vZ2VuZXJhdGUtc3VidGFza3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/tasks/[taskId]/generate-subtasks/route.ts":
/*!***************************************************************!*\
  !*** ./src/app/api/tasks/[taskId]/generate-subtasks/route.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./src/lib/mongoose.ts\");\n/* harmony import */ var _lib_models_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/models/Task */ \"(rsc)/./src/lib/models/Task.ts\");\n\n\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst SYSTEM_PROMPT = `You are a task breakdown assistant. Given a task title and description, break it down into logical subtasks.\nEach subtask should include:\n1. A clear, actionable title\n2. A suggested due date (YYYY-MM-DD format)\n3. A suggested due time (HH:mm format, optional)\n\nIMPORTANT DATE RULES:\n- Today's date is provided in the user message - DO NOT use any date before this\n- All suggested dates MUST be between today and the next 30 days\n- If a task seems urgent, schedule it within the next 7 days\n- If a task is less urgent, schedule it within 8-30 days\n- Times should be between 9:00 and 18:00 in the provided timezone\n\nFormat your response as a JSON array of objects with the following structure:\n[{\n  \"title\": \"string\",\n  \"dueDate\": \"YYYY-MM-DD\",\n  \"dueTime\": \"HH:mm\" (optional)\n}]\n\nExample response for today's date 2024-12-29:\n[{\n  \"title\": \"Research existing solutions\",\n  \"dueDate\": \"2024-12-30\",\n  \"dueTime\": \"14:00\"\n},\n{\n  \"title\": \"Create project timeline\",\n  \"dueDate\": \"2024-12-31\",\n  \"dueTime\": \"11:00\"\n}]`;\nasync function POST(req, { params }) {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // Get the task\n        const task = await _lib_models_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(params.taskId);\n        if (!task) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Task not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Get current date and format it\n        const now = new Date();\n        const currentDate = now.toISOString().split(\"T\")[0];\n        const currentTime = now.toTimeString().split(\" \")[0].slice(0, 5);\n        const timeZone = now.toString().match(/\\(([^)]+)\\)$/)?.[1] || \"Local\";\n        // Generate completion\n        const completion = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: SYSTEM_PROMPT\n                },\n                {\n                    role: \"user\",\n                    content: `CURRENT DATE AND TIME:\nToday's date: ${currentDate}\nCurrent time: ${currentTime}\nTime zone: ${timeZone}\n\nTASK DETAILS:\nTitle: ${task.title}\nDescription: ${task.description || \"No description provided\"}`\n                }\n            ],\n            temperature: 0.7\n        });\n        // Parse the response\n        const suggestedSubtasks = JSON.parse(completion.choices[0].message.content || \"[]\");\n        // Validate dates are in the future\n        const formattedSubtasks = suggestedSubtasks.map((subtask)=>{\n            const subtaskDate = new Date(subtask.dueDate);\n            const today = new Date();\n            today.setHours(0, 0, 0, 0);\n            // If date is in the past, set it to tomorrow\n            if (subtaskDate < today) {\n                const tomorrow = new Date(today);\n                tomorrow.setDate(tomorrow.getDate() + 1);\n                subtask.dueDate = tomorrow.toISOString().split(\"T\")[0];\n            }\n            return {\n                title: subtask.title,\n                status: \"not_started\",\n                dueDate: subtask.dueDate,\n                dueTime: subtask.dueTime,\n                createdAt: new Date()\n            };\n        });\n        // Create subtasks with not_started status\n        // Update the task with new subtasks using findByIdAndUpdate\n        const updatedTask = await _lib_models_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(params.taskId, {\n            $set: {\n                subTasks: formattedSubtasks\n            }\n        }, {\n            new: true,\n            runValidators: true\n        });\n        if (!updatedTask) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Failed to update task\"\n            }, {\n                status: 404\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(updatedTask);\n    } catch (error) {\n        console.error(\"Error generating subtasks:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to generate subtasks\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9bdGFza0lkXS9nZW5lcmF0ZS1zdWJ0YXNrcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNmO0FBQ1c7QUFDRjtBQUVyQyxNQUFNSSxTQUFTLElBQUlILDhDQUFNQSxDQUFDO0lBQ3hCSSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJyQixDQUFDO0FBRUksZUFBZUMsS0FDcEJDLEdBQVksRUFDWixFQUFFQyxNQUFNLEVBQWtDO0lBRTFDLElBQUk7UUFDRixNQUFNVix5REFBU0E7UUFFZixlQUFlO1FBQ2YsTUFBTVcsT0FBTyxNQUFNVix3REFBSUEsQ0FBQ1csUUFBUSxDQUFDRixPQUFPRyxNQUFNO1FBQzlDLElBQUksQ0FBQ0YsTUFBTTtZQUNULE9BQU9iLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLGlDQUFpQztRQUNqQyxNQUFNQyxNQUFNLElBQUlDO1FBQ2hCLE1BQU1DLGNBQWNGLElBQUlHLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ25ELE1BQU1DLGNBQWNMLElBQUlNLFlBQVksR0FBR0YsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNHLEtBQUssQ0FBQyxHQUFHO1FBQzlELE1BQU1DLFdBQVdSLElBQUlTLFFBQVEsR0FBR0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSTtRQUU5RCxzQkFBc0I7UUFDdEIsTUFBTUMsYUFBYSxNQUFNMUIsT0FBTzJCLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDdERDLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFBRUMsTUFBTTtvQkFBVUMsU0FBUzVCO2dCQUFjO2dCQUN6QztvQkFDRTJCLE1BQU07b0JBQ05DLFNBQVMsQ0FBQztjQUNOLEVBQUVoQixZQUFZO2NBQ2QsRUFBRUcsWUFBWTtXQUNqQixFQUFFRyxTQUFTOzs7T0FHZixFQUFFZCxLQUFLeUIsS0FBSyxDQUFDO2FBQ1AsRUFBRXpCLEtBQUswQixXQUFXLElBQUksMEJBQTBCLENBQUM7Z0JBQ3REO2FBQ0Q7WUFDREMsYUFBYTtRQUNmO1FBRUEscUJBQXFCO1FBQ3JCLE1BQU1DLG9CQUFvQkMsS0FBS0MsS0FBSyxDQUFDYixXQUFXYyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNSLE9BQU8sSUFBSTtRQUU5RSxtQ0FBbUM7UUFDbkMsTUFBTVMsb0JBQW9CTCxrQkFBa0JNLEdBQUcsQ0FBQyxDQUFDQztZQUMvQyxNQUFNQyxjQUFjLElBQUk3QixLQUFLNEIsUUFBUUUsT0FBTztZQUM1QyxNQUFNQyxRQUFRLElBQUkvQjtZQUNsQitCLE1BQU1DLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRztZQUV4Qiw2Q0FBNkM7WUFDN0MsSUFBSUgsY0FBY0UsT0FBTztnQkFDdkIsTUFBTUUsV0FBVyxJQUFJakMsS0FBSytCO2dCQUMxQkUsU0FBU0MsT0FBTyxDQUFDRCxTQUFTRSxPQUFPLEtBQUs7Z0JBQ3RDUCxRQUFRRSxPQUFPLEdBQUdHLFNBQVMvQixXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RDtZQUVBLE9BQU87Z0JBQ0xlLE9BQU9VLFFBQVFWLEtBQUs7Z0JBQ3BCcEIsUUFBUTtnQkFDUmdDLFNBQVNGLFFBQVFFLE9BQU87Z0JBQ3hCTSxTQUFTUixRQUFRUSxPQUFPO2dCQUN4QkMsV0FBVyxJQUFJckM7WUFDakI7UUFDRjtRQUVBLDBDQUEwQztRQUMxQyw0REFBNEQ7UUFDNUQsTUFBTXNDLGNBQWMsTUFBTXZELHdEQUFJQSxDQUFDd0QsaUJBQWlCLENBQzlDL0MsT0FBT0csTUFBTSxFQUNiO1lBQUU2QyxNQUFNO2dCQUFFQyxVQUFVZjtZQUFrQjtRQUFFLEdBQ3hDO1lBQUVnQixLQUFLO1lBQU1DLGVBQWU7UUFBSztRQUduQyxJQUFJLENBQUNMLGFBQWE7WUFDaEIsT0FBTzFELGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLE9BQU9sQixrRkFBWUEsQ0FBQ2dCLElBQUksQ0FBQzBDO0lBQzNCLEVBQUUsT0FBT3pDLE9BQVk7UUFDbkIrQyxRQUFRL0MsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT2pCLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUN0QjtZQUFFQyxPQUFPQSxNQUFNNEIsT0FBTyxJQUFJO1FBQThCLEdBQ3hEO1lBQUUzQixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JldHRlci10b2RvLy4vc3JjL2FwcC9hcGkvdGFza3MvW3Rhc2tJZF0vZ2VuZXJhdGUtc3VidGFza3Mvcm91dGUudHM/NjRiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL21vbmdvb3NlJztcbmltcG9ydCBUYXNrIGZyb20gJ0AvbGliL21vZGVscy9UYXNrJztcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3QgU1lTVEVNX1BST01QVCA9IGBZb3UgYXJlIGEgdGFzayBicmVha2Rvd24gYXNzaXN0YW50LiBHaXZlbiBhIHRhc2sgdGl0bGUgYW5kIGRlc2NyaXB0aW9uLCBicmVhayBpdCBkb3duIGludG8gbG9naWNhbCBzdWJ0YXNrcy5cbkVhY2ggc3VidGFzayBzaG91bGQgaW5jbHVkZTpcbjEuIEEgY2xlYXIsIGFjdGlvbmFibGUgdGl0bGVcbjIuIEEgc3VnZ2VzdGVkIGR1ZSBkYXRlIChZWVlZLU1NLUREIGZvcm1hdClcbjMuIEEgc3VnZ2VzdGVkIGR1ZSB0aW1lIChISDptbSBmb3JtYXQsIG9wdGlvbmFsKVxuXG5JTVBPUlRBTlQgREFURSBSVUxFUzpcbi0gVG9kYXkncyBkYXRlIGlzIHByb3ZpZGVkIGluIHRoZSB1c2VyIG1lc3NhZ2UgLSBETyBOT1QgdXNlIGFueSBkYXRlIGJlZm9yZSB0aGlzXG4tIEFsbCBzdWdnZXN0ZWQgZGF0ZXMgTVVTVCBiZSBiZXR3ZWVuIHRvZGF5IGFuZCB0aGUgbmV4dCAzMCBkYXlzXG4tIElmIGEgdGFzayBzZWVtcyB1cmdlbnQsIHNjaGVkdWxlIGl0IHdpdGhpbiB0aGUgbmV4dCA3IGRheXNcbi0gSWYgYSB0YXNrIGlzIGxlc3MgdXJnZW50LCBzY2hlZHVsZSBpdCB3aXRoaW4gOC0zMCBkYXlzXG4tIFRpbWVzIHNob3VsZCBiZSBiZXR3ZWVuIDk6MDAgYW5kIDE4OjAwIGluIHRoZSBwcm92aWRlZCB0aW1lem9uZVxuXG5Gb3JtYXQgeW91ciByZXNwb25zZSBhcyBhIEpTT04gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuW3tcbiAgXCJ0aXRsZVwiOiBcInN0cmluZ1wiLFxuICBcImR1ZURhdGVcIjogXCJZWVlZLU1NLUREXCIsXG4gIFwiZHVlVGltZVwiOiBcIkhIOm1tXCIgKG9wdGlvbmFsKVxufV1cblxuRXhhbXBsZSByZXNwb25zZSBmb3IgdG9kYXkncyBkYXRlIDIwMjQtMTItMjk6XG5be1xuICBcInRpdGxlXCI6IFwiUmVzZWFyY2ggZXhpc3Rpbmcgc29sdXRpb25zXCIsXG4gIFwiZHVlRGF0ZVwiOiBcIjIwMjQtMTItMzBcIixcbiAgXCJkdWVUaW1lXCI6IFwiMTQ6MDBcIlxufSxcbntcbiAgXCJ0aXRsZVwiOiBcIkNyZWF0ZSBwcm9qZWN0IHRpbWVsaW5lXCIsXG4gIFwiZHVlRGF0ZVwiOiBcIjIwMjQtMTItMzFcIixcbiAgXCJkdWVUaW1lXCI6IFwiMTE6MDBcIlxufV1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcbiAgcmVxOiBSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyB0YXNrSWQ6IHN0cmluZyB9IH1cbikge1xuICB0cnkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIFxuICAgIC8vIEdldCB0aGUgdGFza1xuICAgIGNvbnN0IHRhc2sgPSBhd2FpdCBUYXNrLmZpbmRCeUlkKHBhcmFtcy50YXNrSWQpO1xuICAgIGlmICghdGFzaykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdUYXNrIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCBkYXRlIGFuZCBmb3JtYXQgaXRcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5vdy50b1RpbWVTdHJpbmcoKS5zcGxpdCgnICcpWzBdLnNsaWNlKDAsIDUpO1xuICAgIGNvbnN0IHRpbWVab25lID0gbm93LnRvU3RyaW5nKCkubWF0Y2goL1xcKChbXildKylcXCkkLyk/LlsxXSB8fCAnTG9jYWwnO1xuXG4gICAgLy8gR2VuZXJhdGUgY29tcGxldGlvblxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBTWVNURU1fUFJPTVBUIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgcm9sZTogXCJ1c2VyXCIsIFxuICAgICAgICAgIGNvbnRlbnQ6IGBDVVJSRU5UIERBVEUgQU5EIFRJTUU6XG5Ub2RheSdzIGRhdGU6ICR7Y3VycmVudERhdGV9XG5DdXJyZW50IHRpbWU6ICR7Y3VycmVudFRpbWV9XG5UaW1lIHpvbmU6ICR7dGltZVpvbmV9XG5cblRBU0sgREVUQUlMUzpcblRpdGxlOiAke3Rhc2sudGl0bGV9XG5EZXNjcmlwdGlvbjogJHt0YXNrLmRlc2NyaXB0aW9uIHx8ICdObyBkZXNjcmlwdGlvbiBwcm92aWRlZCd9YFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICB9KTtcblxuICAgIC8vIFBhcnNlIHRoZSByZXNwb25zZVxuICAgIGNvbnN0IHN1Z2dlc3RlZFN1YnRhc2tzID0gSlNPTi5wYXJzZShjb21wbGV0aW9uLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50IHx8ICdbXScpO1xuXG4gICAgLy8gVmFsaWRhdGUgZGF0ZXMgYXJlIGluIHRoZSBmdXR1cmVcbiAgICBjb25zdCBmb3JtYXR0ZWRTdWJ0YXNrcyA9IHN1Z2dlc3RlZFN1YnRhc2tzLm1hcCgoc3VidGFzazogYW55KSA9PiB7XG4gICAgICBjb25zdCBzdWJ0YXNrRGF0ZSA9IG5ldyBEYXRlKHN1YnRhc2suZHVlRGF0ZSk7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgLy8gSWYgZGF0ZSBpcyBpbiB0aGUgcGFzdCwgc2V0IGl0IHRvIHRvbW9ycm93XG4gICAgICBpZiAoc3VidGFza0RhdGUgPCB0b2RheSkge1xuICAgICAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgc3VidGFzay5kdWVEYXRlID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogc3VidGFzay50aXRsZSxcbiAgICAgICAgc3RhdHVzOiAnbm90X3N0YXJ0ZWQnLFxuICAgICAgICBkdWVEYXRlOiBzdWJ0YXNrLmR1ZURhdGUsXG4gICAgICAgIGR1ZVRpbWU6IHN1YnRhc2suZHVlVGltZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN1YnRhc2tzIHdpdGggbm90X3N0YXJ0ZWQgc3RhdHVzXG4gICAgLy8gVXBkYXRlIHRoZSB0YXNrIHdpdGggbmV3IHN1YnRhc2tzIHVzaW5nIGZpbmRCeUlkQW5kVXBkYXRlXG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSBhd2FpdCBUYXNrLmZpbmRCeUlkQW5kVXBkYXRlKFxuICAgICAgcGFyYW1zLnRhc2tJZCxcbiAgICAgIHsgJHNldDogeyBzdWJUYXNrczogZm9ybWF0dGVkU3VidGFza3MgfSB9LFxuICAgICAgeyBuZXc6IHRydWUsIHJ1blZhbGlkYXRvcnM6IHRydWUgfVxuICAgICk7XG5cbiAgICBpZiAoIXVwZGF0ZWRUYXNrKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFzaycgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZFRhc2spO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdWJ0YXNrczonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGdlbmVyYXRlIHN1YnRhc2tzJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk9wZW5BSSIsImRiQ29ubmVjdCIsIlRhc2siLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJTWVNURU1fUFJPTVBUIiwiUE9TVCIsInJlcSIsInBhcmFtcyIsInRhc2siLCJmaW5kQnlJZCIsInRhc2tJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIm5vdyIsIkRhdGUiLCJjdXJyZW50RGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJjdXJyZW50VGltZSIsInRvVGltZVN0cmluZyIsInNsaWNlIiwidGltZVpvbmUiLCJ0b1N0cmluZyIsIm1hdGNoIiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZW1wZXJhdHVyZSIsInN1Z2dlc3RlZFN1YnRhc2tzIiwiSlNPTiIsInBhcnNlIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJmb3JtYXR0ZWRTdWJ0YXNrcyIsIm1hcCIsInN1YnRhc2siLCJzdWJ0YXNrRGF0ZSIsImR1ZURhdGUiLCJ0b2RheSIsInNldEhvdXJzIiwidG9tb3Jyb3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImR1ZVRpbWUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkVGFzayIsImZpbmRCeUlkQW5kVXBkYXRlIiwiJHNldCIsInN1YlRhc2tzIiwibmV3IiwicnVuVmFsaWRhdG9ycyIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/[taskId]/generate-subtasks/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/models/Task.ts":
/*!********************************!*\
  !*** ./src/lib/models/Task.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SubTaskSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"not_started\",\n            \"in_progress\",\n            \"completed\"\n        ],\n        default: \"not_started\"\n    },\n    dueDate: {\n        type: String\n    },\n    dueTime: {\n        type: String\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst TaskSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"in_progress\",\n            \"completed\",\n            \"archived\"\n        ],\n        default: \"pending\"\n    },\n    priority: {\n        type: String,\n        enum: [\n            \"low\",\n            \"medium\",\n            \"high\"\n        ],\n        default: \"medium\"\n    },\n    dueDate: {\n        type: String\n    },\n    dueTime: {\n        type: String\n    },\n    notes: {\n        type: String\n    },\n    subTasks: [\n        SubTaskSchema\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Update the updatedAt timestamp on save\nTaskSchema.pre(\"save\", function(next) {\n    this.updatedAt = new Date();\n    next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Task || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Task\", TaskSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy9UYXNrLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxnQkFBZ0IsSUFBSUQsd0RBQWUsQ0FBQztJQUN4Q0csT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENDLFFBQVE7UUFDTkgsTUFBTUM7UUFDTkcsTUFBTTtZQUFDO1lBQWU7WUFBZTtTQUFZO1FBQ2pEQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUFFTixNQUFNQztJQUFPO0lBQ3hCTSxTQUFTO1FBQUVQLE1BQU1DO0lBQU87SUFDeEJPLFdBQVc7UUFBRVIsTUFBTVM7UUFBTUosU0FBU0ksS0FBS0MsR0FBRztJQUFDO0FBQzdDO0FBRUEsTUFBTUMsYUFBYSxJQUFJZix3REFBZSxDQUFDO0lBQ3JDRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q1UsYUFBYTtRQUFFWixNQUFNQztJQUFPO0lBQzVCRSxRQUFRO1FBQ05ILE1BQU1DO1FBQ05HLE1BQU07WUFBQztZQUFXO1lBQWU7WUFBYTtTQUFXO1FBQ3pEQyxTQUFTO0lBQ1g7SUFDQVEsVUFBVTtRQUNSYixNQUFNQztRQUNORyxNQUFNO1lBQUM7WUFBTztZQUFVO1NBQU87UUFDL0JDLFNBQVM7SUFDWDtJQUNBQyxTQUFTO1FBQUVOLE1BQU1DO0lBQU87SUFDeEJNLFNBQVM7UUFBRVAsTUFBTUM7SUFBTztJQUN4QmEsT0FBTztRQUFFZCxNQUFNQztJQUFPO0lBQ3RCYyxVQUFVO1FBQUNsQjtLQUFjO0lBQ3pCVyxXQUFXO1FBQUVSLE1BQU1TO1FBQU1KLFNBQVNJLEtBQUtDLEdBQUc7SUFBQztJQUMzQ00sV0FBVztRQUFFaEIsTUFBTVM7UUFBTUosU0FBU0ksS0FBS0MsR0FBRztJQUFDO0FBQzdDO0FBRUEseUNBQXlDO0FBQ3pDQyxXQUFXTSxHQUFHLENBQUMsUUFBUSxTQUFTQyxJQUFJO0lBQ2xDLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUlQO0lBQ3JCUztBQUNGO0FBRUEsaUVBQWV0Qix3REFBZSxDQUFDd0IsSUFBSSxJQUFJeEIscURBQWMsQ0FBQyxRQUFRZSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8vLi9zcmMvbGliL21vZGVscy9UYXNrLnRzPzAxNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgU3ViVGFza1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHN0YXR1czogeyBcbiAgICB0eXBlOiBTdHJpbmcsIFxuICAgIGVudW06IFsnbm90X3N0YXJ0ZWQnLCAnaW5fcHJvZ3Jlc3MnLCAnY29tcGxldGVkJ10sXG4gICAgZGVmYXVsdDogJ25vdF9zdGFydGVkJ1xuICB9LFxuICBkdWVEYXRlOiB7IHR5cGU6IFN0cmluZyB9LFxuICBkdWVUaW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfVxufSk7XG5cbmNvbnN0IFRhc2tTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgc3RhdHVzOiB7IFxuICAgIHR5cGU6IFN0cmluZywgXG4gICAgZW51bTogWydwZW5kaW5nJywgJ2luX3Byb2dyZXNzJywgJ2NvbXBsZXRlZCcsICdhcmNoaXZlZCddLFxuICAgIGRlZmF1bHQ6ICdwZW5kaW5nJ1xuICB9LFxuICBwcmlvcml0eTogeyBcbiAgICB0eXBlOiBTdHJpbmcsIFxuICAgIGVudW06IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ10sXG4gICAgZGVmYXVsdDogJ21lZGl1bSdcbiAgfSxcbiAgZHVlRGF0ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgZHVlVGltZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgbm90ZXM6IHsgdHlwZTogU3RyaW5nIH0sXG4gIHN1YlRhc2tzOiBbU3ViVGFza1NjaGVtYV0sXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxuICB1cGRhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfVxufSk7XG5cbi8vIFVwZGF0ZSB0aGUgdXBkYXRlZEF0IHRpbWVzdGFtcCBvbiBzYXZlXG5UYXNrU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uKG5leHQpIHtcbiAgdGhpcy51cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICBuZXh0KCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlRhc2sgfHwgbW9uZ29vc2UubW9kZWwoJ1Rhc2snLCBUYXNrU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlN1YlRhc2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInN0YXR1cyIsImVudW0iLCJkZWZhdWx0IiwiZHVlRGF0ZSIsImR1ZVRpbWUiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwiVGFza1NjaGVtYSIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJub3RlcyIsInN1YlRhc2tzIiwidXBkYXRlZEF0IiwicHJlIiwibmV4dCIsIm1vZGVscyIsIlRhc2siLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models/Task.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongoose.ts":
/*!*****************************!*\
  !*** ./src/lib/mongoose.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        console.log(\"Connecting to MongoDB...\");\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw error;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        console.error(\"Failed to establish MongoDB connection:\", e);\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvb3NlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQztRQUNaUixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFjUyxNQUM3Q0ssSUFBSSxDQUFDLENBQUNmO1lBQ0xZLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9iO1FBQ1QsR0FDQ2dCLEtBQUssQ0FBQyxDQUFDQztZQUNOTCxRQUFRSyxLQUFLLENBQUMsNkJBQTZCQTtZQUMzQyxNQUFNQTtRQUNSO0lBQ0o7SUFFQSxJQUFJO1FBQ0ZaLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT1UsR0FBRztRQUNWYixPQUFPRyxPQUFPLEdBQUc7UUFDakJJLFFBQVFLLEtBQUssQ0FBQywyQ0FBMkNDO1FBQ3pELE1BQU1BO0lBQ1I7SUFFQSxPQUFPYixPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXR0ZXItdG9kby8uL3NyYy9saWIvbW9uZ29vc2UudHM/YmJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0aW5nIHRvIE1vbmdvREIuLi4nKTtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkhLCBvcHRzKVxuICAgICAgLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZXN0YWJsaXNoIE1vbmdvREIgY29ubmVjdGlvbjonLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongoose.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/node-fetch","vendor-chunks/openai","vendor-chunks/web-streams-polyfill","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/abort-controller","vendor-chunks/ms","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Fgenerate-subtasks%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();