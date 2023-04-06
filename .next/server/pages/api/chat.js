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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/callbacks":
/*!**************************************!*\
  !*** external "langchain/callbacks" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("langchain/callbacks");;

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings":
/*!***************************************!*\
  !*** external "langchain/embeddings" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings");;

/***/ }),

/***/ "langchain/llms":
/*!*********************************!*\
  !*** external "langchain/llms" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("langchain/llms");;

/***/ }),

/***/ "langchain/prompts":
/*!************************************!*\
  !*** external "langchain/prompts" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("langchain/prompts");;

/***/ }),

/***/ "langchain/vectorstores":
/*!*****************************************!*\
  !*** external "langchain/vectorstores" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"pdf-test\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLFlBQVksd0NBQXdDO0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU09QLVNlYXJjaC8uL2NvbmZpZy9waW5lY29uZS50cz82ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hhbmdlIHRoZSBuYW1lc3BhY2UgdG8gdGhlIG5hbWVzcGFjZSBvbiBQaW5lY29uZSB5b3UnZCBsaWtlIHRvIHN0b3JlIHlvdXIgZW1iZWRkaW5ncy5cbiAqL1xuXG5pZiAoIXByb2Nlc3MuZW52LlBJTkVDT05FX0lOREVYX05BTUUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFBpbmVjb25lIGluZGV4IG5hbWUgaW4gLmVudiBmaWxlJyk7XG59XG5cbmNvbnN0IFBJTkVDT05FX0lOREVYX05BTUUgPSBwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FID8/ICcnO1xuXG5jb25zdCBQSU5FQ09ORV9OQU1FX1NQQUNFID0gJ3BkZi10ZXN0JzsgLy9uYW1lc3BhY2UgaXMgb3B0aW9uYWwgZm9yIHlvdXIgdmVjdG9yc1xuXG5leHBvcnQgeyBQSU5FQ09ORV9JTkRFWF9OQU1FLCBQSU5FQ09ORV9OQU1FX1NQQUNFIH07XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0lOREVYX05BTUUiLCJFcnJvciIsIlBJTkVDT05FX05BTUVfU1BBQ0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n    /* create vectorstore*/ const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n        pineconeIndex: index,\n        textKey: \"text\",\n        namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n    });\n    res.writeHead(200, {\n        \"Content-Type\": \"text/event-stream\",\n        \"Cache-Control\": \"no-cache, no-transform\",\n        Connection: \"keep-alive\"\n    });\n    const sendData = (data)=>{\n        res.write(`data: ${data}\\n\\n`);\n    };\n    sendData(JSON.stringify({\n        data: \"\"\n    }));\n    //create chain\n    const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore, (token)=>{\n        sendData(JSON.stringify({\n            data: token\n        }));\n    });\n    try {\n        //Ask a question\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        sendData(JSON.stringify({\n            sourceDocs: response.sourceDocuments\n        }));\n    } catch (error) {\n        console.log(\"error\", error);\n    } finally{\n        sendData(\"[DONE]\");\n        res.end();\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDRDtBQUNUO0FBQ0s7QUFDMEI7QUFFOUQsZUFBZU0sUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUV0QyxJQUFJLENBQUNGLFVBQVU7UUFDYixPQUFPRCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JOLFNBQVNPLElBQUksR0FBR0MsVUFBVSxDQUFDLE1BQU07SUFFM0QsTUFBTUMsUUFBUWYsa0VBQWMsQ0FBQ0MsaUVBQW1CQTtJQUVoRCxxQkFBcUIsR0FDckIsTUFBTWdCLGNBQWMsTUFBTW5CLG1GQUErQixDQUN2RCxJQUFJRCxrRUFBZ0JBLENBQUMsQ0FBQyxJQUN0QjtRQUNFc0IsZUFBZUo7UUFDZkssU0FBUztRQUNUQyxXQUFXbkIsaUVBQW1CQTtJQUNoQztJQUdGRyxJQUFJaUIsU0FBUyxDQUFDLEtBQUs7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsV0FBVyxDQUFDQyxPQUFpQjtRQUNqQ3BCLElBQUlxQixLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUVELEtBQUssSUFBSSxDQUFDO0lBQy9CO0lBRUFELFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztRQUFFSCxNQUFNO0lBQUc7SUFFbkMsY0FBYztJQUNkLE1BQU1JLFFBQVE5QiwyREFBU0EsQ0FBQ2tCLGFBQWEsQ0FBQ2EsUUFBa0I7UUFDdEROLFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztZQUFFSCxNQUFNSztRQUFNO0lBQ3hDO0lBRUEsSUFBSTtRQUNGLGdCQUFnQjtRQUNoQixNQUFNQyxXQUFXLE1BQU1GLE1BQU1HLElBQUksQ0FBQztZQUNoQzFCLFVBQVVNO1lBQ1ZxQixjQUFjMUIsV0FBVyxFQUFFO1FBQzdCO1FBRUEyQixRQUFRQyxHQUFHLENBQUMsWUFBWUo7UUFDeEJQLFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztZQUFFUSxZQUFZTCxTQUFTTSxlQUFlO1FBQUM7SUFDakUsRUFBRSxPQUFPQyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRztJQUN2QixTQUFVO1FBQ1JkLFNBQVM7UUFDVG5CLElBQUlrQyxHQUFHO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU09QLVNlYXJjaC8uL3BhZ2VzL2FwaS9jaGF0LnRzP2M1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSAnbGFuZ2NoYWluL2VtYmVkZGluZ3MnO1xuaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gJ2xhbmdjaGFpbi92ZWN0b3JzdG9yZXMnO1xuaW1wb3J0IHsgbWFrZUNoYWluIH0gZnJvbSAnQC91dGlscy9tYWtlY2hhaW4nO1xuaW1wb3J0IHsgcGluZWNvbmUgfSBmcm9tICdAL3V0aWxzL3BpbmVjb25lLWNsaWVudCc7XG5pbXBvcnQgeyBQSU5FQ09ORV9JTkRFWF9OQU1FLCBQSU5FQ09ORV9OQU1FX1NQQUNFIH0gZnJvbSAnQC9jb25maWcvcGluZWNvbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuICBjb25zdCB7IHF1ZXN0aW9uLCBoaXN0b3J5IH0gPSByZXEuYm9keTtcblxuICBpZiAoIXF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ05vIHF1ZXN0aW9uIGluIHRoZSByZXF1ZXN0JyB9KTtcbiAgfVxuICAvLyBPcGVuQUkgcmVjb21tZW5kcyByZXBsYWNpbmcgbmV3bGluZXMgd2l0aCBzcGFjZXMgZm9yIGJlc3QgcmVzdWx0c1xuICBjb25zdCBzYW5pdGl6ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uLnRyaW0oKS5yZXBsYWNlQWxsKCdcXG4nLCAnICcpO1xuXG4gIGNvbnN0IGluZGV4ID0gcGluZWNvbmUuSW5kZXgoUElORUNPTkVfSU5ERVhfTkFNRSk7XG5cbiAgLyogY3JlYXRlIHZlY3RvcnN0b3JlKi9cbiAgY29uc3QgdmVjdG9yU3RvcmUgPSBhd2FpdCBQaW5lY29uZVN0b3JlLmZyb21FeGlzdGluZ0luZGV4KFxuICAgIG5ldyBPcGVuQUlFbWJlZGRpbmdzKHt9KSxcbiAgICB7XG4gICAgICBwaW5lY29uZUluZGV4OiBpbmRleCxcbiAgICAgIHRleHRLZXk6ICd0ZXh0JyxcbiAgICAgIG5hbWVzcGFjZTogUElORUNPTkVfTkFNRV9TUEFDRSxcbiAgICB9LFxuICApO1xuXG4gIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2V2ZW50LXN0cmVhbScsXG4gICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXRyYW5zZm9ybScsXG4gICAgQ29ubmVjdGlvbjogJ2tlZXAtYWxpdmUnLFxuICB9KTtcblxuICBjb25zdCBzZW5kRGF0YSA9IChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICByZXMud3JpdGUoYGRhdGE6ICR7ZGF0YX1cXG5cXG5gKTtcbiAgfTtcblxuICBzZW5kRGF0YShKU09OLnN0cmluZ2lmeSh7IGRhdGE6ICcnIH0pKTtcblxuICAvL2NyZWF0ZSBjaGFpblxuICBjb25zdCBjaGFpbiA9IG1ha2VDaGFpbih2ZWN0b3JTdG9yZSwgKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICBzZW5kRGF0YShKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHRva2VuIH0pKTtcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICAvL0FzayBhIHF1ZXN0aW9uXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFpbi5jYWxsKHtcbiAgICAgIHF1ZXN0aW9uOiBzYW5pdGl6ZWRRdWVzdGlvbixcbiAgICAgIGNoYXRfaGlzdG9yeTogaGlzdG9yeSB8fCBbXSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICBzZW5kRGF0YShKU09OLnN0cmluZ2lmeSh7IHNvdXJjZURvY3M6IHJlc3BvbnNlLnNvdXJjZURvY3VtZW50cyB9KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICB9IGZpbmFsbHkge1xuICAgIHNlbmREYXRhKCdbRE9ORV0nKTtcbiAgICByZXMuZW5kKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGVuQUlFbWJlZGRpbmdzIiwiUGluZWNvbmVTdG9yZSIsIm1ha2VDaGFpbiIsInBpbmVjb25lIiwiUElORUNPTkVfSU5ERVhfTkFNRSIsIlBJTkVDT05FX05BTUVfU1BBQ0UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlc3Rpb24iLCJoaXN0b3J5IiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic2FuaXRpemVkUXVlc3Rpb24iLCJ0cmltIiwicmVwbGFjZUFsbCIsImluZGV4IiwiSW5kZXgiLCJ2ZWN0b3JTdG9yZSIsImZyb21FeGlzdGluZ0luZGV4IiwicGluZWNvbmVJbmRleCIsInRleHRLZXkiLCJuYW1lc3BhY2UiLCJ3cml0ZUhlYWQiLCJDb25uZWN0aW9uIiwic2VuZERhdGEiLCJkYXRhIiwid3JpdGUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhaW4iLCJ0b2tlbiIsInJlc3BvbnNlIiwiY2FsbCIsImNoYXRfaGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJzb3VyY2VEb2NzIiwic291cmNlRG9jdW1lbnRzIiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms */ \"langchain/llms\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\n/* harmony import */ var langchain_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/prompts */ \"langchain/prompts\");\n/* harmony import */ var langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! langchain/callbacks */ \"langchain/callbacks\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__, langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_llms__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__, langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst CONDENSE_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.\n\nChat History:\n{chat_history}\nFollow Up Input: {question}\nStandalone question:`);\nconst QA_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`You are an AI assistant providing helpful advice. You are given the following extracted parts of a long document and a question. Provide a conversational answer based on the context provided.\nYou should only provide hyperlinks that reference the context below. Do NOT make up hyperlinks.\nIf you can't find the answer in the context below, just say \"Hmm, I'm not sure.\" Don't try to make up an answer.\nIf the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.\n\nQuestion: {question}\n=========\n{context}\n=========\nAnswer in Markdown:`);\nconst makeChain = (vectorstore, onTokenStream)=>{\n    const questionGenerator = new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.LLMChain({\n        llm: new langchain_llms__WEBPACK_IMPORTED_MODULE_0__.OpenAIChat({\n            temperature: 0\n        }),\n        prompt: CONDENSE_PROMPT\n    });\n    const docChain = (0,langchain_chains__WEBPACK_IMPORTED_MODULE_1__.loadQAChain)(new langchain_llms__WEBPACK_IMPORTED_MODULE_0__.OpenAIChat({\n        temperature: 0,\n        modelName: \"gpt-3.5-turbo\",\n        streaming: Boolean(onTokenStream),\n        callbackManager: onTokenStream ? langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__.CallbackManager.fromHandlers({\n            async handleLLMNewToken (token) {\n                onTokenStream(token);\n                console.log(token);\n            }\n        }) : undefined\n    }), {\n        prompt: QA_PROMPT\n    });\n    return new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ChatVectorDBQAChain({\n        vectorstore,\n        combineDocumentsChain: docChain,\n        questionGeneratorChain: questionGenerator,\n        returnSourceDocuments: true,\n        k: 2\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDa0M7QUFFM0I7QUFDRztBQUV0RCxNQUFNTSxrQkFDSkYsMEVBQTJCLENBQUMsQ0FBQzs7Ozs7b0JBS1gsQ0FBQztBQUVyQixNQUFNSSxZQUFZSiwwRUFBMkIsQ0FDM0MsQ0FBQzs7Ozs7Ozs7O21CQVNnQixDQUFDO0FBR2IsTUFBTUssWUFBWSxDQUN2QkMsYUFDQUMsZ0JBQ0c7SUFDSCxNQUFNQyxvQkFBb0IsSUFBSVgsc0RBQVFBLENBQUM7UUFDckNZLEtBQUssSUFBSWIsc0RBQVVBLENBQUM7WUFBRWMsYUFBYTtRQUFFO1FBQ3JDQyxRQUFRVDtJQUNWO0lBQ0EsTUFBTVUsV0FBV2IsNkRBQVdBLENBQzFCLElBQUlILHNEQUFVQSxDQUFDO1FBQ2JjLGFBQWE7UUFDYkcsV0FBVztRQUNYQyxXQUFXQyxRQUFRUjtRQUNuQlMsaUJBQWlCVCxnQkFDYk4sNkVBQTRCLENBQUM7WUFDM0IsTUFBTWlCLG1CQUFrQkMsS0FBSyxFQUFFO2dCQUM3QlosY0FBY1k7Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGLEtBQ0FHLFNBQVM7SUFDZixJQUNBO1FBQUVYLFFBQVFQO0lBQVU7SUFHdEIsT0FBTyxJQUFJTixpRUFBbUJBLENBQUM7UUFDN0JRO1FBQ0FpQix1QkFBdUJYO1FBQ3ZCWSx3QkFBd0JoQjtRQUN4QmlCLHVCQUF1QixJQUFJO1FBQzNCQyxHQUFHO0lBQ0w7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU09QLVNlYXJjaC8uL3V0aWxzL21ha2VjaGFpbi50cz9jZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5BSUNoYXQgfSBmcm9tICdsYW5nY2hhaW4vbGxtcyc7XG5pbXBvcnQgeyBMTE1DaGFpbiwgQ2hhdFZlY3RvckRCUUFDaGFpbiwgbG9hZFFBQ2hhaW4gfSBmcm9tICdsYW5nY2hhaW4vY2hhaW5zJztcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tICdsYW5nY2hhaW4vdmVjdG9yc3RvcmVzJztcbmltcG9ydCB7IFByb21wdFRlbXBsYXRlIH0gZnJvbSAnbGFuZ2NoYWluL3Byb21wdHMnO1xuaW1wb3J0IHsgQ2FsbGJhY2tNYW5hZ2VyIH0gZnJvbSAnbGFuZ2NoYWluL2NhbGxiYWNrcyc7XG5cbmNvbnN0IENPTkRFTlNFX1BST01QVCA9XG4gIFByb21wdFRlbXBsYXRlLmZyb21UZW1wbGF0ZShgR2l2ZW4gdGhlIGZvbGxvd2luZyBjb252ZXJzYXRpb24gYW5kIGEgZm9sbG93IHVwIHF1ZXN0aW9uLCByZXBocmFzZSB0aGUgZm9sbG93IHVwIHF1ZXN0aW9uIHRvIGJlIGEgc3RhbmRhbG9uZSBxdWVzdGlvbi5cblxuQ2hhdCBIaXN0b3J5Olxue2NoYXRfaGlzdG9yeX1cbkZvbGxvdyBVcCBJbnB1dDoge3F1ZXN0aW9ufVxuU3RhbmRhbG9uZSBxdWVzdGlvbjpgKTtcblxuY29uc3QgUUFfUFJPTVBUID0gUHJvbXB0VGVtcGxhdGUuZnJvbVRlbXBsYXRlKFxuICBgWW91IGFyZSBhbiBBSSBhc3Npc3RhbnQgcHJvdmlkaW5nIGhlbHBmdWwgYWR2aWNlLiBZb3UgYXJlIGdpdmVuIHRoZSBmb2xsb3dpbmcgZXh0cmFjdGVkIHBhcnRzIG9mIGEgbG9uZyBkb2N1bWVudCBhbmQgYSBxdWVzdGlvbi4gUHJvdmlkZSBhIGNvbnZlcnNhdGlvbmFsIGFuc3dlciBiYXNlZCBvbiB0aGUgY29udGV4dCBwcm92aWRlZC5cbllvdSBzaG91bGQgb25seSBwcm92aWRlIGh5cGVybGlua3MgdGhhdCByZWZlcmVuY2UgdGhlIGNvbnRleHQgYmVsb3cuIERvIE5PVCBtYWtlIHVwIGh5cGVybGlua3MuXG5JZiB5b3UgY2FuJ3QgZmluZCB0aGUgYW5zd2VyIGluIHRoZSBjb250ZXh0IGJlbG93LCBqdXN0IHNheSBcIkhtbSwgSSdtIG5vdCBzdXJlLlwiIERvbid0IHRyeSB0byBtYWtlIHVwIGFuIGFuc3dlci5cbklmIHRoZSBxdWVzdGlvbiBpcyBub3QgcmVsYXRlZCB0byB0aGUgY29udGV4dCwgcG9saXRlbHkgcmVzcG9uZCB0aGF0IHlvdSBhcmUgdHVuZWQgdG8gb25seSBhbnN3ZXIgcXVlc3Rpb25zIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNvbnRleHQuXG5cblF1ZXN0aW9uOiB7cXVlc3Rpb259XG49PT09PT09PT1cbntjb250ZXh0fVxuPT09PT09PT09XG5BbnN3ZXIgaW4gTWFya2Rvd246YCxcbik7XG5cbmV4cG9ydCBjb25zdCBtYWtlQ2hhaW4gPSAoXG4gIHZlY3RvcnN0b3JlOiBQaW5lY29uZVN0b3JlLFxuICBvblRva2VuU3RyZWFtPzogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQsXG4pID0+IHtcbiAgY29uc3QgcXVlc3Rpb25HZW5lcmF0b3IgPSBuZXcgTExNQ2hhaW4oe1xuICAgIGxsbTogbmV3IE9wZW5BSUNoYXQoeyB0ZW1wZXJhdHVyZTogMCB9KSxcbiAgICBwcm9tcHQ6IENPTkRFTlNFX1BST01QVCxcbiAgfSk7XG4gIGNvbnN0IGRvY0NoYWluID0gbG9hZFFBQ2hhaW4oXG4gICAgbmV3IE9wZW5BSUNoYXQoe1xuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtb2RlbE5hbWU6ICdncHQtMy41LXR1cmJvJywgLy9jaGFuZ2UgdGhpcyB0byBvbGRlciB2ZXJzaW9ucyAoZS5nLiBncHQtMy41LXR1cmJvKSBpZiB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gZ3B0LTRcbiAgICAgIHN0cmVhbWluZzogQm9vbGVhbihvblRva2VuU3RyZWFtKSxcbiAgICAgIGNhbGxiYWNrTWFuYWdlcjogb25Ub2tlblN0cmVhbVxuICAgICAgICA/IENhbGxiYWNrTWFuYWdlci5mcm9tSGFuZGxlcnMoe1xuICAgICAgICAgICAgYXN5bmMgaGFuZGxlTExNTmV3VG9rZW4odG9rZW4pIHtcbiAgICAgICAgICAgICAgb25Ub2tlblN0cmVhbSh0b2tlbik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfSksXG4gICAgeyBwcm9tcHQ6IFFBX1BST01QVCB9LFxuICApO1xuXG4gIHJldHVybiBuZXcgQ2hhdFZlY3RvckRCUUFDaGFpbih7XG4gICAgdmVjdG9yc3RvcmUsXG4gICAgY29tYmluZURvY3VtZW50c0NoYWluOiBkb2NDaGFpbixcbiAgICBxdWVzdGlvbkdlbmVyYXRvckNoYWluOiBxdWVzdGlvbkdlbmVyYXRvcixcbiAgICByZXR1cm5Tb3VyY2VEb2N1bWVudHM6IHRydWUsXG4gICAgazogMiwgLy9udW1iZXIgb2Ygc291cmNlIGRvY3VtZW50cyB0byByZXR1cm5cbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIk9wZW5BSUNoYXQiLCJMTE1DaGFpbiIsIkNoYXRWZWN0b3JEQlFBQ2hhaW4iLCJsb2FkUUFDaGFpbiIsIlByb21wdFRlbXBsYXRlIiwiQ2FsbGJhY2tNYW5hZ2VyIiwiQ09OREVOU0VfUFJPTVBUIiwiZnJvbVRlbXBsYXRlIiwiUUFfUFJPTVBUIiwibWFrZUNoYWluIiwidmVjdG9yc3RvcmUiLCJvblRva2VuU3RyZWFtIiwicXVlc3Rpb25HZW5lcmF0b3IiLCJsbG0iLCJ0ZW1wZXJhdHVyZSIsInByb21wdCIsImRvY0NoYWluIiwibW9kZWxOYW1lIiwic3RyZWFtaW5nIiwiQm9vbGVhbiIsImNhbGxiYWNrTWFuYWdlciIsImZyb21IYW5kbGVycyIsImhhbmRsZUxMTU5ld1Rva2VuIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiY29tYmluZURvY3VtZW50c0NoYWluIiwicXVlc3Rpb25HZW5lcmF0b3JDaGFpbiIsInJldHVyblNvdXJjZURvY3VtZW50cyIsImsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU09QLVNlYXJjaC8uL3V0aWxzL3BpbmVjb25lLWNsaWVudC50cz9kZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpbmVjb25lQ2xpZW50IH0gZnJvbSAnQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lJztcblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9FTlZJUk9OTUVOVCB8fCAhcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BpbmVjb25lIGVudmlyb25tZW50IG9yIGFwaSBrZXkgdmFycyBtaXNzaW5nJyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRQaW5lY29uZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZUNsaWVudCgpO1xuXG4gICAgYXdhaXQgcGluZWNvbmUuaW5pdCh7XG4gICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuUElORUNPTkVfRU5WSVJPTk1FTlQgPz8gJycsIC8vdGhpcyBpcyBpbiB0aGUgZGFzaGJvYXJkXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkgPz8gJycsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGluZWNvbmU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgUGluZWNvbmUgQ2xpZW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBpbmVjb25lID0gYXdhaXQgaW5pdFBpbmVjb25lKCk7XG4iXSwibmFtZXMiOlsiUGluZWNvbmVDbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUElORUNPTkVfRU5WSVJPTk1FTlQiLCJQSU5FQ09ORV9BUElfS0VZIiwiRXJyb3IiLCJpbml0UGluZWNvbmUiLCJwaW5lY29uZSIsImluaXQiLCJlbnZpcm9ubWVudCIsImFwaUtleSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();