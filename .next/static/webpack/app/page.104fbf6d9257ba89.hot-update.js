"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/firebase.ts":
/*!*************************!*\
  !*** ./src/firebase.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: function() { return /* binding */ analytics; },\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   db: function() { return /* binding */ db; },\n/* harmony export */   googleProvider: function() { return /* binding */ googleProvider; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"(app-pages-browser)/./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ db,auth,googleProvider,analytics auto */ // Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconsole.log(\"Firebase Config:\", {\n    apiKey: \"AIzaSyDQXol_dQKOmMCmb03WBevZctp7VYcYsDY\",\n    authDomain: \"household-app-cc619.firebaseapp.com\",\n    projectId: \"household-app-cc619\",\n    storageBucket: \"household-app-cc619.appspot.com\",\n    messagingSenderId: \"932363761379\",\n    appId: \"1:932363761379:web:9ca809bba5f9c097f677d6\",\n    measurementId: \"G-VG740H88JD\"\n});\n// if (typeof window !== 'undeifned')\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDQXol_dQKOmMCmb03WBevZctp7VYcYsDY\",\n    authDomain: \"household-app-cc619.firebaseapp.com\",\n    projectId: \"household-app-cc619\",\n    storageBucket: \"household-app-cc619.appspot.com\",\n    messagingSenderId: \"932363761379\",\n    appId: \"1:932363761379:web:9ca809bba5f9c097f677d6\",\n    measurementId: \"G-VG740H88JD\"\n};\nif (!firebaseConfig.apiKey) {\n    throw new Error(\"Missing Firebase API key\");\n}\n// Initialize Firebase\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nvar db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n// Initialize Analytics only if supported\nvar analytics;\nif (true) {\n    isSupported().then(function(supported) {\n        if (supported) {\n            analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\n        }\n    });\n}\n// 認証オブジェクトの準備\nvar auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\n// Google認証プロバイダの準備\nvar googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9maXJlYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztzRkFFQSx1REFBdUQ7QUFDVjtBQUNLO0FBQ0E7QUFDVTtBQUM1RCw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFFbkVLLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0I7SUFDOUJDLFFBQVFDLHlDQUF3QztJQUNoREcsWUFBWUgscUNBQTRDO0lBQ3hESyxXQUFXTCxxQkFBMkM7SUFDdERPLGVBQWVQLGlDQUErQztJQUM5RFMsbUJBQW1CVCxjQUFvRDtJQUN2RVcsT0FBT1gsMkNBQXVDO0lBQzlDYSxlQUFlYixjQUErQztBQUNoRTtBQUVBLHFDQUFxQztBQUNyQyxJQUFNZSxpQkFBaUI7SUFDckJoQixRQUFRQyx5Q0FBd0M7SUFDaERHLFlBQVlILHFDQUE0QztJQUN4REssV0FBV0wscUJBQTJDO0lBQ3RETyxlQUFlUCxpQ0FBK0M7SUFDOURTLG1CQUFtQlQsY0FBb0Q7SUFDdkVXLE9BQU9YLDJDQUF1QztJQUM5Q2EsZUFBZWIsY0FBK0M7QUFDaEU7QUFFQSxJQUFJLENBQUNlLGVBQWVoQixNQUFNLEVBQUU7SUFDMUIsTUFBTSxJQUFJaUIsTUFBTTtBQUNsQjtBQUVBLHNCQUFzQjtBQUN0QixJQUFNQyxNQUFNekIsMkRBQWFBLENBQUN1QjtBQUMxQixJQUFNRyxLQUFLeEIsZ0VBQVlBLENBQUN1QjtBQUV4Qix5Q0FBeUM7QUFDekMsSUFBSUU7QUFDSixJQUFJLElBQWtCLEVBQWE7SUFDakNDLGNBQWNDLElBQUksQ0FBQ0MsU0FBQUE7UUFDakIsSUFBSUEsV0FBVztZQUNiSCxZQUFZMUIsZ0VBQVlBLENBQUN3QjtRQUMzQjtJQUNGO0FBQ0Y7QUFFQSxjQUFjO0FBQ2QsSUFBTU0sT0FBTzVCLHNEQUFPQSxDQUFDc0I7QUFFckIsbUJBQW1CO0FBQ25CLElBQU1PLGlCQUFpQixJQUFJNUIsNkRBQWtCQTtBQUVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9maXJlYmFzZS50cz81ZDZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuXHJcbmNvbnNvbGUubG9nKCdGaXJlYmFzZSBDb25maWc6Jywge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcclxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCxcclxufSk7XHJcblxyXG4vLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVpZm5lZCcpXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcclxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCxcclxufTtcclxuXHJcbmlmICghZmlyZWJhc2VDb25maWcuYXBpS2V5KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIEZpcmViYXNlIEFQSSBrZXknKTtcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuXHJcbi8vIEluaXRpYWxpemUgQW5hbHl0aWNzIG9ubHkgaWYgc3VwcG9ydGVkXHJcbmxldCBhbmFseXRpY3M7XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGlzU3VwcG9ydGVkKCkudGhlbihzdXBwb3J0ZWQgPT4ge1xyXG4gICAgaWYgKHN1cHBvcnRlZCkge1xyXG4gICAgICBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8g6KqN6Ki844Kq44OW44K444Kn44Kv44OI44Gu5rqW5YKZXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4vLyBHb29nbGXoqo3oqLzjg5fjg63jg5DjgqTjg4Djga7mupblgplcclxuY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQgeyBkYiwgYXV0aCwgZ29vZ2xlUHJvdmlkZXIsIGFuYWx5dGljcyB9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImZpcmViYXNlQ29uZmlnIiwiRXJyb3IiLCJhcHAiLCJkYiIsImFuYWx5dGljcyIsImlzU3VwcG9ydGVkIiwidGhlbiIsInN1cHBvcnRlZCIsImF1dGgiLCJnb29nbGVQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/firebase.ts\n"));

/***/ })

});