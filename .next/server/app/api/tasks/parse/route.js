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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\n/**\n * OpenAI client for processing text and voice inputs\n */ const openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\n/**\n * Process text or voice input to create structured task data\n */ async function POST(req) {\n    try {\n        console.log(\"Received parse request\");\n        const formData = await req.formData();\n        console.log(\"Form data entries:\", Array.from(formData.entries()));\n        let userInput = \"\";\n        // Handle voice or text input\n        const audioFile = formData.get(\"audio\");\n        const textInput = formData.get(\"text\");\n        console.log(\"Inputs received:\", {\n            hasAudio: !!audioFile,\n            textInput\n        });\n        if (audioFile) {\n            // Transcribe voice input\n            console.log(\"Processing audio file...\");\n            const transcription = await openai.audio.transcriptions.create({\n                file: audioFile,\n                model: \"whisper-1\"\n            });\n            userInput = transcription.text;\n            console.log(\"Transcribed audio:\", userInput);\n        } else if (textInput) {\n            userInput = textInput;\n            console.log(\"Processing text input:\", userInput);\n        } else {\n            console.log(\"No input found in request\");\n            throw new Error(\"No input provided\");\n        }\n        // Parse task details using GPT\n        console.log(\"Sending request to GPT...\");\n        const prompt = `Extract task details from this input. Return a JSON array of task objects. Each task should contain:\n- title (required): A clear, concise task title\n- notes (optional): Additional details or notes about the task, this should be to the level of granularity provided by the respondent.\n- priority (optional): \"low\", \"medium\", or \"high\"\n- dueDate (optional): Date in YYYY-MM-DD format\n- dueTime (optional): Time in HH:mm format (24-hour)\n\nIf multiple tasks are mentioned, create multiple task objects. If a task has a dependency or is related to another task, include it in the notes. Include information in the notes in a cleanly formatted way while ensuring the notes are comprehensive of what the user has mentioned.\n\nExample input: \"Buy groceries tomorrow morning. I need to get tomatoes, corn, and lettuce. Oh, and call mom in the evening\"\nExample response: [\n  {\n    \"title\": \"Buy groceries\",\n    \"notes\": \"Shopping list: tomatoes, corn, lettuce\",\n    \"priority\": \"medium\",\n    \"dueDate\": \"2024-12-31\",\n    \"dueTime\": \"09:00\"\n  },\n  {\n    \"title\": \"Call mom\",\n    \"notes\": \"Evening call\",\n    \"priority\": \"medium\",\n    \"dueDate\": \"2024-12-31\",\n    \"dueTime\": \"18:00\"\n  }\n]\n\nInput: ${userInput}`;\n        const completion = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    role: \"user\",\n                    content: prompt\n                }\n            ],\n            temperature: 0.7,\n            max_tokens: 500\n        });\n        const content = completion.choices[0].message.content;\n        console.log(\"GPT response:\", content);\n        // Parse and validate the response\n        let tasks = [];\n        try {\n            if (!content) {\n                console.error(\"Empty response from GPT\");\n                throw new Error(\"Empty response from GPT\");\n            }\n            tasks = JSON.parse(content);\n            console.log(\"Parsed GPT response:\", tasks);\n            // Validate the response format\n            if (!Array.isArray(tasks)) {\n                console.error(\"Response is not an array:\", tasks);\n                throw new Error(\"Invalid response format: not an array\");\n            }\n            if (tasks.length === 0) {\n                console.error(\"No tasks found in response\");\n                throw new Error(\"No tasks found in response\");\n            }\n            // Validate each task object\n            tasks.forEach((task, index)=>{\n                if (!task.title) {\n                    console.error(`Task ${index} missing title:`, task);\n                    throw new Error(`Task ${index} missing required title field`);\n                }\n            });\n            // Add unique IDs and ensure required fields\n            tasks = tasks.map((task)=>({\n                    id: Math.random().toString(36).substr(2, 9),\n                    title: task.title || \"Untitled Task\",\n                    notes: task.notes || \"\",\n                    priority: task.priority || \"medium\",\n                    dueDate: task.dueDate || null,\n                    dueTime: task.dueTime || null\n                }));\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                tasks,\n                rawInput: userInput\n            });\n        } catch (error) {\n            console.error(\"Error parsing GPT response:\", error);\n            console.error(\"Raw content:\", content);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: false,\n                error: error instanceof Error ? error.message : \"Failed to parse task details\",\n                rawContent: content\n            }, {\n                status: 400\n            });\n        }\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: false,\n            error: error instanceof Error ? error.message : \"Internal server error\",\n            details: error instanceof Error ? error.stack : undefined\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUEsTUFBTVUsR0FBRyxDQUFDSCxDQUFBQSxPQUFTO29CQUN6QkksSUFBSUMsS0FBS0MsTUFBTSxHQUFHQyxRQUFRLENBQUMsSUFBSUMsTUFBTSxDQUFDLEdBQUc7b0JBQ3pDTixPQUFPRixLQUFLRSxLQUFLLElBQUk7b0JBQ3JCTyxPQUFPVCxLQUFLUyxLQUFLLElBQUk7b0JBQ3JCQyxVQUFVVixLQUFLVSxRQUFRLElBQUk7b0JBQzNCQyxTQUFTWCxLQUFLVyxPQUFPLElBQUk7b0JBQ3pCQyxTQUFTWixLQUFLWSxPQUFPLElBQUk7Z0JBQzNCO1lBRUEsT0FBTzFELGtGQUFZQSxDQUFDMkQsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFNckI7Z0JBQU9zQixVQUFVOUM7WUFBVTtRQUN2RSxFQUFFLE9BQU95QixPQUFPO1lBQ2QvQixRQUFRK0IsS0FBSyxDQUFDLCtCQUErQkE7WUFDN0MvQixRQUFRK0IsS0FBSyxDQUFDLGdCQUFnQk47WUFDOUIsT0FBT2xDLGtGQUFZQSxDQUFDMkQsSUFBSSxDQUN0QjtnQkFDRUMsU0FBUztnQkFDVHBCLE9BQU9BLGlCQUFpQmIsUUFBUWEsTUFBTUYsT0FBTyxHQUFHO2dCQUNoRHdCLFlBQVk1QjtZQUNkLEdBQ0E7Z0JBQUU2QixRQUFRO1lBQUk7UUFFbEI7SUFDRixFQUFFLE9BQU92QixPQUFPO1FBQ2QvQixRQUFRK0IsS0FBSyxDQUFDLGNBQWNBO1FBQzVCLE9BQU94QyxrRkFBWUEsQ0FBQzJELElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNUcEIsT0FBT0EsaUJBQWlCYixRQUFRYSxNQUFNRixPQUFPLEdBQUc7WUFDaEQwQixTQUFTeEIsaUJBQWlCYixRQUFRYSxNQUFNeUIsS0FBSyxHQUFHQztRQUNsRCxHQUNBO1lBQUVILFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8vLi9zcmMvYXBwL2FwaS90YXNrcy9wYXJzZS9yb3V0ZS50cz9kMmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcblxuLyoqXG4gKiBPcGVuQUkgY2xpZW50IGZvciBwcm9jZXNzaW5nIHRleHQgYW5kIHZvaWNlIGlucHV0c1xuICovXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG4vKipcbiAqIFByb2Nlc3MgdGV4dCBvciB2b2ljZSBpbnB1dCB0byBjcmVhdGUgc3RydWN0dXJlZCB0YXNrIGRhdGFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHBhcnNlIHJlcXVlc3QnKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKCdGb3JtIGRhdGEgZW50cmllczonLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xuICAgIGxldCB1c2VySW5wdXQgPSAnJztcblxuICAgIC8vIEhhbmRsZSB2b2ljZSBvciB0ZXh0IGlucHV0XG4gICAgY29uc3QgYXVkaW9GaWxlID0gZm9ybURhdGEuZ2V0KCdhdWRpbycpIGFzIEZpbGU7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZm9ybURhdGEuZ2V0KCd0ZXh0JykgYXMgc3RyaW5nO1xuICAgIGNvbnNvbGUubG9nKCdJbnB1dHMgcmVjZWl2ZWQ6JywgeyBoYXNBdWRpbzogISFhdWRpb0ZpbGUsIHRleHRJbnB1dCB9KTtcblxuICAgIGlmIChhdWRpb0ZpbGUpIHtcbiAgICAgIC8vIFRyYW5zY3JpYmUgdm9pY2UgaW5wdXRcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIGF1ZGlvIGZpbGUuLi4nKTtcbiAgICAgIGNvbnN0IHRyYW5zY3JpcHRpb24gPSBhd2FpdCBvcGVuYWkuYXVkaW8udHJhbnNjcmlwdGlvbnMuY3JlYXRlKHtcbiAgICAgICAgZmlsZTogYXVkaW9GaWxlLFxuICAgICAgICBtb2RlbDogJ3doaXNwZXItMScsXG4gICAgICB9KTtcbiAgICAgIHVzZXJJbnB1dCA9IHRyYW5zY3JpcHRpb24udGV4dDtcbiAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2NyaWJlZCBhdWRpbzonLCB1c2VySW5wdXQpO1xuICAgIH0gZWxzZSBpZiAodGV4dElucHV0KSB7XG4gICAgICB1c2VySW5wdXQgPSB0ZXh0SW5wdXQ7XG4gICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyB0ZXh0IGlucHV0OicsIHVzZXJJbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnB1dCBmb3VuZCBpbiByZXF1ZXN0Jyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHByb3ZpZGVkJyk7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgdGFzayBkZXRhaWxzIHVzaW5nIEdQVFxuICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIHJlcXVlc3QgdG8gR1BULi4uJyk7XG4gICAgY29uc3QgcHJvbXB0ID0gYEV4dHJhY3QgdGFzayBkZXRhaWxzIGZyb20gdGhpcyBpbnB1dC4gUmV0dXJuIGEgSlNPTiBhcnJheSBvZiB0YXNrIG9iamVjdHMuIEVhY2ggdGFzayBzaG91bGQgY29udGFpbjpcbi0gdGl0bGUgKHJlcXVpcmVkKTogQSBjbGVhciwgY29uY2lzZSB0YXNrIHRpdGxlXG4tIG5vdGVzIChvcHRpb25hbCk6IEFkZGl0aW9uYWwgZGV0YWlscyBvciBub3RlcyBhYm91dCB0aGUgdGFzaywgdGhpcyBzaG91bGQgYmUgdG8gdGhlIGxldmVsIG9mIGdyYW51bGFyaXR5IHByb3ZpZGVkIGJ5IHRoZSByZXNwb25kZW50LlxuLSBwcmlvcml0eSAob3B0aW9uYWwpOiBcImxvd1wiLCBcIm1lZGl1bVwiLCBvciBcImhpZ2hcIlxuLSBkdWVEYXRlIChvcHRpb25hbCk6IERhdGUgaW4gWVlZWS1NTS1ERCBmb3JtYXRcbi0gZHVlVGltZSAob3B0aW9uYWwpOiBUaW1lIGluIEhIOm1tIGZvcm1hdCAoMjQtaG91cilcblxuSWYgbXVsdGlwbGUgdGFza3MgYXJlIG1lbnRpb25lZCwgY3JlYXRlIG11bHRpcGxlIHRhc2sgb2JqZWN0cy4gSWYgYSB0YXNrIGhhcyBhIGRlcGVuZGVuY3kgb3IgaXMgcmVsYXRlZCB0byBhbm90aGVyIHRhc2ssIGluY2x1ZGUgaXQgaW4gdGhlIG5vdGVzLiBJbmNsdWRlIGluZm9ybWF0aW9uIGluIHRoZSBub3RlcyBpbiBhIGNsZWFubHkgZm9ybWF0dGVkIHdheSB3aGlsZSBlbnN1cmluZyB0aGUgbm90ZXMgYXJlIGNvbXByZWhlbnNpdmUgb2Ygd2hhdCB0aGUgdXNlciBoYXMgbWVudGlvbmVkLlxuXG5FeGFtcGxlIGlucHV0OiBcIkJ1eSBncm9jZXJpZXMgdG9tb3Jyb3cgbW9ybmluZy4gSSBuZWVkIHRvIGdldCB0b21hdG9lcywgY29ybiwgYW5kIGxldHR1Y2UuIE9oLCBhbmQgY2FsbCBtb20gaW4gdGhlIGV2ZW5pbmdcIlxuRXhhbXBsZSByZXNwb25zZTogW1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkJ1eSBncm9jZXJpZXNcIixcbiAgICBcIm5vdGVzXCI6IFwiU2hvcHBpbmcgbGlzdDogdG9tYXRvZXMsIGNvcm4sIGxldHR1Y2VcIixcbiAgICBcInByaW9yaXR5XCI6IFwibWVkaXVtXCIsXG4gICAgXCJkdWVEYXRlXCI6IFwiMjAyNC0xMi0zMVwiLFxuICAgIFwiZHVlVGltZVwiOiBcIjA5OjAwXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJDYWxsIG1vbVwiLFxuICAgIFwibm90ZXNcIjogXCJFdmVuaW5nIGNhbGxcIixcbiAgICBcInByaW9yaXR5XCI6IFwibWVkaXVtXCIsXG4gICAgXCJkdWVEYXRlXCI6IFwiMjAyNC0xMi0zMVwiLFxuICAgIFwiZHVlVGltZVwiOiBcIjE4OjAwXCJcbiAgfVxuXVxuXG5JbnB1dDogJHt1c2VySW5wdXR9YDtcblxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBwcm9tcHQgfV0sXG4gICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgbWF4X3Rva2VuczogNTAwLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQ7XG4gICAgY29uc29sZS5sb2coJ0dQVCByZXNwb25zZTonLCBjb250ZW50KTtcblxuICAgIC8vIFBhcnNlIGFuZCB2YWxpZGF0ZSB0aGUgcmVzcG9uc2VcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICB0cnkge1xuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VtcHR5IHJlc3BvbnNlIGZyb20gR1BUJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgcmVzcG9uc2UgZnJvbSBHUFQnKTtcbiAgICAgIH1cblxuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgY29uc29sZS5sb2coJ1BhcnNlZCBHUFQgcmVzcG9uc2U6JywgdGFza3MpO1xuICAgICAgXG4gICAgICAvLyBWYWxpZGF0ZSB0aGUgcmVzcG9uc2UgZm9ybWF0XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3BvbnNlIGlzIG5vdCBhbiBhcnJheTonLCB0YXNrcyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQ6IG5vdCBhbiBhcnJheScpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRhc2tzIGZvdW5kIGluIHJlc3BvbnNlJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdGFza3MgZm91bmQgaW4gcmVzcG9uc2UnKTtcbiAgICAgIH1cblxuICAgICAgLy8gVmFsaWRhdGUgZWFjaCB0YXNrIG9iamVjdFxuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLnRpdGxlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgVGFzayAke2luZGV4fSBtaXNzaW5nIHRpdGxlOmAsIHRhc2spO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGFzayAke2luZGV4fSBtaXNzaW5nIHJlcXVpcmVkIHRpdGxlIGZpZWxkYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgdW5pcXVlIElEcyBhbmQgZW5zdXJlIHJlcXVpcmVkIGZpZWxkc1xuICAgICAgdGFza3MgPSB0YXNrcy5tYXAodGFzayA9PiAoe1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLFxuICAgICAgICB0aXRsZTogdGFzay50aXRsZSB8fCAnVW50aXRsZWQgVGFzaycsXG4gICAgICAgIG5vdGVzOiB0YXNrLm5vdGVzIHx8ICcnLFxuICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSB8fCAnbWVkaXVtJyxcbiAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlIHx8IG51bGwsXG4gICAgICAgIGR1ZVRpbWU6IHRhc2suZHVlVGltZSB8fCBudWxsXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRhc2tzLCByYXdJbnB1dDogdXNlcklucHV0IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIEdQVCByZXNwb25zZTonLCBlcnJvcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdSYXcgY29udGVudDonLCBjb250ZW50KTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBwYXJzZSB0YXNrIGRldGFpbHMnLFxuICAgICAgICAgIHJhd0NvbnRlbnQ6IGNvbnRlbnQgXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQVBJIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLFxuICAgICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiT3BlbkFJIiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiUE9TVCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJ1c2VySW5wdXQiLCJhdWRpb0ZpbGUiLCJnZXQiLCJ0ZXh0SW5wdXQiLCJoYXNBdWRpbyIsInRyYW5zY3JpcHRpb24iLCJhdWRpbyIsInRyYW5zY3JpcHRpb25zIiwiY3JlYXRlIiwiZmlsZSIsIm1vZGVsIiwidGV4dCIsIkVycm9yIiwicHJvbXB0IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJjaG9pY2VzIiwibWVzc2FnZSIsInRhc2tzIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiLCJpc0FycmF5IiwibGVuZ3RoIiwiZm9yRWFjaCIsInRhc2siLCJpbmRleCIsInRpdGxlIiwibWFwIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJub3RlcyIsInByaW9yaXR5IiwiZHVlRGF0ZSIsImR1ZVRpbWUiLCJqc29uIiwic3VjY2VzcyIsInJhd0lucHV0IiwicmF3Q29udGVudCIsInN0YXR1cyIsImRldGFpbHMiLCJzdGFjayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/parse/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/node-fetch","vendor-chunks/agentkeepalive","vendor-chunks/web-streams-polyfill","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fparse%2Froute&page=%2Fapi%2Ftasks%2Fparse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fparse%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();