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
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_robblaine_BetterToDo_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chat/route.ts */ \"(rsc)/./src/app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/robblaine/BetterToDo/src/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_robblaine_BetterToDo_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJvYmJsYWluZSUyRkJldHRlclRvRG8lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcm9iYmxhaW5lJTJGQmV0dGVyVG9EbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNLO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8vP2RmODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JvYmJsYWluZS9CZXR0ZXJUb0RvL3NyYy9hcHAvYXBpL2NoYXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3JvYmJsYWluZS9CZXR0ZXJUb0RvL3NyYy9hcHAvYXBpL2NoYXQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hhdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chat/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/chat/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _langchain_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @langchain/openai */ \"(rsc)/./node_modules/@langchain/openai/index.js\");\n/* harmony import */ var langchain_agents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/agents */ \"(rsc)/./node_modules/langchain/agents.js\");\n/* harmony import */ var _langchain_core_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @langchain/core/prompts */ \"(rsc)/./node_modules/@langchain/core/prompts.js\");\n/* harmony import */ var _langchain_core_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @langchain/core/tools */ \"(rsc)/./node_modules/@langchain/core/tools.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./src/lib/mongoose.ts\");\n\n\n\n\n\n\n\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"Missing OPENAI_API_KEY environment variable\");\n}\nconst SYSTEM_PROMPT = `You are an expert task management assistant focused on understanding the user's needs.\nYour goal is to gather all necessary information through a friendly conversation before any task creation or modification.\n\nFollow these guidelines:\n1. Ask clear, focused questions one at a time\n2. Gather essential details: task title, description, priority, deadline, and any potential subtasks\n3. Help users break down complex tasks into manageable steps\n4. Validate and confirm information before proceeding\n5. Be conversational but efficient`;\nasync function createAgent() {\n    const model = new _langchain_openai__WEBPACK_IMPORTED_MODULE_1__.ChatOpenAI({\n        modelName: \"gpt-4\",\n        temperature: 0.7,\n        openAIApiKey: process.env.OPENAI_API_KEY\n    });\n    const collectTaskInfoTool = new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_4__.DynamicStructuredTool({\n        name: \"collect_task_info\",\n        description: \"Collect and structure task information from the user's responses\",\n        schema: zod__WEBPACK_IMPORTED_MODULE_6__.z.object({\n            title: zod__WEBPACK_IMPORTED_MODULE_6__.z.string(),\n            description: zod__WEBPACK_IMPORTED_MODULE_6__.z.string(),\n            priority: zod__WEBPACK_IMPORTED_MODULE_6__.z.enum([\n                \"low\",\n                \"medium\",\n                \"high\"\n            ]),\n            dueDate: zod__WEBPACK_IMPORTED_MODULE_6__.z.string(),\n            tags: zod__WEBPACK_IMPORTED_MODULE_6__.z.array(zod__WEBPACK_IMPORTED_MODULE_6__.z.string()),\n            substeps: zod__WEBPACK_IMPORTED_MODULE_6__.z.array(zod__WEBPACK_IMPORTED_MODULE_6__.z.object({\n                title: zod__WEBPACK_IMPORTED_MODULE_6__.z.string(),\n                description: zod__WEBPACK_IMPORTED_MODULE_6__.z.string().optional()\n            })).optional()\n        }),\n        func: async (input)=>{\n            await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            // Here you can add logic to create the task in the database\n            return JSON.stringify(input);\n        }\n    });\n    const prompt = _langchain_core_prompts__WEBPACK_IMPORTED_MODULE_3__.ChatPromptTemplate.fromMessages([\n        [\n            \"system\",\n            SYSTEM_PROMPT\n        ],\n        new _langchain_core_prompts__WEBPACK_IMPORTED_MODULE_3__.MessagesPlaceholder(\"chat_history\"),\n        [\n            \"human\",\n            \"{input}\"\n        ],\n        new _langchain_core_prompts__WEBPACK_IMPORTED_MODULE_3__.MessagesPlaceholder(\"agent_scratchpad\")\n    ]);\n    const agent = await (0,langchain_agents__WEBPACK_IMPORTED_MODULE_2__.createOpenAIFunctionsAgent)({\n        llm: model,\n        prompt,\n        tools: [\n            collectTaskInfoTool\n        ]\n    });\n    return new langchain_agents__WEBPACK_IMPORTED_MODULE_2__.AgentExecutor({\n        agent,\n        tools: [\n            collectTaskInfoTool\n        ]\n    });\n}\nasync function POST(req) {\n    if (!process.env.OPENAI_API_KEY) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"OpenAI API key not configured\"\n        }, {\n            status: 500\n        });\n    }\n    try {\n        const { messages } = await req.json();\n        if (!Array.isArray(messages) || messages.length === 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid messages format\"\n            }, {\n                status: 400\n            });\n        }\n        // Convert messages to the format expected by the agent\n        const chatHistory = messages.map((msg)=>({\n                type: msg.role === \"user\" ? \"human\" : \"assistant\",\n                content: msg.content\n            }));\n        const agent = await createAgent();\n        const response = await agent.invoke({\n            input: messages[messages.length - 1].content,\n            chat_history: chatHistory.slice(0, -1)\n        });\n        // Extract the text content from the response\n        const responseText = typeof response.output === \"string\" ? response.output : response.output?.content || \"I apologize, but I encountered an error processing your request.\";\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            response: responseText\n        });\n    } catch (error) {\n        console.error(\"Chat error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"An unexpected error occurred\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDTSxPQUFPO1lBQzVDRyxjQUFjUixZQUFZUyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RDO1FBRUEsNkNBQTZDO1FBQzdDLE1BQU1DLGVBQWUsT0FBT0osU0FBU0ssTUFBTSxLQUFLLFdBQzVDTCxTQUFTSyxNQUFNLEdBQ2ZMLFNBQVNLLE1BQU0sRUFBRU4sV0FBVztRQUVoQyxPQUFPeEQsa0ZBQVlBLENBQUM0QyxJQUFJLENBQUM7WUFBRWEsVUFBVUk7UUFBYTtJQUNwRCxFQUFFLE9BQU9oQixPQUFZO1FBQ25Ca0IsUUFBUWxCLEtBQUssQ0FBQyxlQUFlQTtRQUM3QixPQUFPN0Msa0ZBQVlBLENBQUM0QyxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLE1BQU1tQixPQUFPLElBQUk7UUFBK0IsR0FDekQ7WUFBRWxCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8vLi9zcmMvYXBwL2FwaS9jaGF0L3JvdXRlLnRzPzQ2YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgQ2hhdE9wZW5BSSB9IGZyb20gXCJAbGFuZ2NoYWluL29wZW5haVwiO1xuaW1wb3J0IHsgQWdlbnRFeGVjdXRvciwgY3JlYXRlT3BlbkFJRnVuY3Rpb25zQWdlbnQgfSBmcm9tIFwibGFuZ2NoYWluL2FnZW50c1wiO1xuaW1wb3J0IHsgQ2hhdFByb21wdFRlbXBsYXRlLCBNZXNzYWdlc1BsYWNlaG9sZGVyIH0gZnJvbSBcIkBsYW5nY2hhaW4vY29yZS9wcm9tcHRzXCI7XG5pbXBvcnQgeyBEeW5hbWljU3RydWN0dXJlZFRvb2wgfSBmcm9tIFwiQGxhbmdjaGFpbi9jb3JlL3Rvb2xzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2xpYi9tb25nb29zZSc7XG5cbmlmICghcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9QRU5BSV9BUElfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlJyk7XG59XG5cbmNvbnN0IFNZU1RFTV9QUk9NUFQgPSBgWW91IGFyZSBhbiBleHBlcnQgdGFzayBtYW5hZ2VtZW50IGFzc2lzdGFudCBmb2N1c2VkIG9uIHVuZGVyc3RhbmRpbmcgdGhlIHVzZXIncyBuZWVkcy5cbllvdXIgZ29hbCBpcyB0byBnYXRoZXIgYWxsIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiB0aHJvdWdoIGEgZnJpZW5kbHkgY29udmVyc2F0aW9uIGJlZm9yZSBhbnkgdGFzayBjcmVhdGlvbiBvciBtb2RpZmljYXRpb24uXG5cbkZvbGxvdyB0aGVzZSBndWlkZWxpbmVzOlxuMS4gQXNrIGNsZWFyLCBmb2N1c2VkIHF1ZXN0aW9ucyBvbmUgYXQgYSB0aW1lXG4yLiBHYXRoZXIgZXNzZW50aWFsIGRldGFpbHM6IHRhc2sgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGVhZGxpbmUsIGFuZCBhbnkgcG90ZW50aWFsIHN1YnRhc2tzXG4zLiBIZWxwIHVzZXJzIGJyZWFrIGRvd24gY29tcGxleCB0YXNrcyBpbnRvIG1hbmFnZWFibGUgc3RlcHNcbjQuIFZhbGlkYXRlIGFuZCBjb25maXJtIGluZm9ybWF0aW9uIGJlZm9yZSBwcm9jZWVkaW5nXG41LiBCZSBjb252ZXJzYXRpb25hbCBidXQgZWZmaWNpZW50YDtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWdlbnQoKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IENoYXRPcGVuQUkoe1xuICAgIG1vZGVsTmFtZTogXCJncHQtNFwiLFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgb3BlbkFJQXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgfSk7XG5cbiAgY29uc3QgY29sbGVjdFRhc2tJbmZvVG9vbCA9IG5ldyBEeW5hbWljU3RydWN0dXJlZFRvb2woe1xuICAgIG5hbWU6IFwiY29sbGVjdF90YXNrX2luZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2xsZWN0IGFuZCBzdHJ1Y3R1cmUgdGFzayBpbmZvcm1hdGlvbiBmcm9tIHRoZSB1c2VyJ3MgcmVzcG9uc2VzXCIsXG4gICAgc2NoZW1hOiB6Lm9iamVjdCh7XG4gICAgICB0aXRsZTogei5zdHJpbmcoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAgICAgcHJpb3JpdHk6IHouZW51bShbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdKSxcbiAgICAgIGR1ZURhdGU6IHouc3RyaW5nKCksXG4gICAgICB0YWdzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgICAgc3Vic3RlcHM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgICAgICB0aXRsZTogei5zdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pKS5vcHRpb25hbCgpLFxuICAgIH0pLFxuICAgIGZ1bmM6IGFzeW5jIChpbnB1dCkgPT4ge1xuICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICAvLyBIZXJlIHlvdSBjYW4gYWRkIGxvZ2ljIHRvIGNyZWF0ZSB0aGUgdGFzayBpbiB0aGUgZGF0YWJhc2VcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbnB1dCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvbXB0ID0gQ2hhdFByb21wdFRlbXBsYXRlLmZyb21NZXNzYWdlcyhbXG4gICAgW1wic3lzdGVtXCIsIFNZU1RFTV9QUk9NUFRdLFxuICAgIG5ldyBNZXNzYWdlc1BsYWNlaG9sZGVyKFwiY2hhdF9oaXN0b3J5XCIpLFxuICAgIFtcImh1bWFuXCIsIFwie2lucHV0fVwiXSxcbiAgICBuZXcgTWVzc2FnZXNQbGFjZWhvbGRlcihcImFnZW50X3NjcmF0Y2hwYWRcIiksXG4gIF0pO1xuXG4gIGNvbnN0IGFnZW50ID0gYXdhaXQgY3JlYXRlT3BlbkFJRnVuY3Rpb25zQWdlbnQoe1xuICAgIGxsbTogbW9kZWwsXG4gICAgcHJvbXB0LFxuICAgIHRvb2xzOiBbY29sbGVjdFRhc2tJbmZvVG9vbF0sXG4gIH0pO1xuXG4gIHJldHVybiBuZXcgQWdlbnRFeGVjdXRvcih7XG4gICAgYWdlbnQsXG4gICAgdG9vbHM6IFtjb2xsZWN0VGFza0luZm9Ub29sXSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBpZiAoIXByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ09wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZXMpIHx8IG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCBtZXNzYWdlcyBmb3JtYXQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IG1lc3NhZ2VzIHRvIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlIGFnZW50XG4gICAgY29uc3QgY2hhdEhpc3RvcnkgPSBtZXNzYWdlcy5tYXAoKG1zZzogYW55KSA9PiAoe1xuICAgICAgdHlwZTogbXNnLnJvbGUgPT09ICd1c2VyJyA/ICdodW1hbicgOiAnYXNzaXN0YW50JyxcbiAgICAgIGNvbnRlbnQ6IG1zZy5jb250ZW50LFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGFnZW50ID0gYXdhaXQgY3JlYXRlQWdlbnQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFnZW50Lmludm9rZSh7XG4gICAgICBpbnB1dDogbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV0uY29udGVudCxcbiAgICAgIGNoYXRfaGlzdG9yeTogY2hhdEhpc3Rvcnkuc2xpY2UoMCwgLTEpLFxuICAgIH0pO1xuXG4gICAgLy8gRXh0cmFjdCB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gdHlwZW9mIHJlc3BvbnNlLm91dHB1dCA9PT0gJ3N0cmluZycgXG4gICAgICA/IHJlc3BvbnNlLm91dHB1dCBcbiAgICAgIDogcmVzcG9uc2Uub3V0cHV0Py5jb250ZW50IHx8ICdJIGFwb2xvZ2l6ZSwgYnV0IEkgZW5jb3VudGVyZWQgYW4gZXJyb3IgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuJztcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHJlc3BvbnNlOiByZXNwb25zZVRleHQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDaGF0IGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkNoYXRPcGVuQUkiLCJBZ2VudEV4ZWN1dG9yIiwiY3JlYXRlT3BlbkFJRnVuY3Rpb25zQWdlbnQiLCJDaGF0UHJvbXB0VGVtcGxhdGUiLCJNZXNzYWdlc1BsYWNlaG9sZGVyIiwiRHluYW1pY1N0cnVjdHVyZWRUb29sIiwieiIsImRiQ29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIkVycm9yIiwiU1lTVEVNX1BST01QVCIsImNyZWF0ZUFnZW50IiwibW9kZWwiLCJtb2RlbE5hbWUiLCJ0ZW1wZXJhdHVyZSIsIm9wZW5BSUFwaUtleSIsImNvbGxlY3RUYXNrSW5mb1Rvb2wiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzY2hlbWEiLCJvYmplY3QiLCJ0aXRsZSIsInN0cmluZyIsInByaW9yaXR5IiwiZW51bSIsImR1ZURhdGUiLCJ0YWdzIiwiYXJyYXkiLCJzdWJzdGVwcyIsIm9wdGlvbmFsIiwiZnVuYyIsImlucHV0IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21wdCIsImZyb21NZXNzYWdlcyIsImFnZW50IiwibGxtIiwidG9vbHMiLCJQT1NUIiwicmVxIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJjaGF0SGlzdG9yeSIsIm1hcCIsIm1zZyIsInR5cGUiLCJyb2xlIiwiY29udGVudCIsInJlc3BvbnNlIiwiaW52b2tlIiwiY2hhdF9oaXN0b3J5Iiwic2xpY2UiLCJyZXNwb25zZVRleHQiLCJvdXRwdXQiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chat/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/langchain","vendor-chunks/formdata-node","vendor-chunks/@langchain","vendor-chunks/openai","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/langsmith","vendor-chunks/form-data-encoder","vendor-chunks/@cfworker","vendor-chunks/node-fetch","vendor-chunks/uuid","vendor-chunks/agentkeepalive","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/js-tiktoken","vendor-chunks/zod","vendor-chunks/web-streams-polyfill","vendor-chunks/mustache","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/ms","vendor-chunks/jsonpointer","vendor-chunks/humanize-ms","vendor-chunks/eventemitter3","vendor-chunks/event-target-shim","vendor-chunks/decamelize","vendor-chunks/camelcase","vendor-chunks/base64-js","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Frobblaine%2FBetterToDo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobblaine%2FBetterToDo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();