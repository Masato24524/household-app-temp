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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: function() { return /* binding */ analytics; },\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   db: function() { return /* binding */ db; },\n/* harmony export */   googleProvider: function() { return /* binding */ googleProvider; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"(app-pages-browser)/./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ db,auth,googleProvider,analytics auto */ // Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconsole.log(\"Firebase Config:\", {\n    apiKey: \"AIzaSyDQXol_dQKOmMCmb03WBevZctp7VYcYsDY\",\n    authDomain: \"household-app-cc619.firebaseapp.com\",\n    projectId: \"household-app-cc619\",\n    storageBucket: \"household-app-cc619.appspot.com\",\n    messagingSenderId: \"932363761379\",\n    appId: \"1:932363761379:web:9ca809bba5f9c097f677d6\",\n    measurementId: \"G-VG740H88JD\"\n});\n// if (typeof window !== 'undeifned')\nvar firebaseConfig = {\n    apiKey: \"AIzaSyDQXol_dQKOmMCmb03WBevZctp7VYcYsDY\",\n    authDomain: \"household-app-cc619.firebaseapp.com\",\n    projectId: \"household-app-cc619\",\n    storageBucket: \"household-app-cc619.appspot.com\",\n    messagingSenderId: \"932363761379\",\n    appId: \"1:932363761379:web:9ca809bba5f9c097f677d6\",\n    measurementId: \"G-VG740H88JD\"\n};\nif (!firebaseConfig.apiKey) {\n    throw new Error(\"Missing Firebase API key\");\n}\n// Initialize Firebase\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nvar db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n// Initialize Analytics only if supported\nvar analytics;\nif (true) {\n    (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.isSupported)().then(function(supported) {\n        if (supported) {\n            analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\n        }\n    });\n}\n// 認証オブジェクトの準備\nvar auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\n// Google認証プロバイダの準備\nvar googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9maXJlYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztzRkFFQSx1REFBdUQ7QUFDVjtBQUNrQjtBQUNiO0FBQ1U7QUFDNUQsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBRW5FTSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CO0lBQzlCQyxRQUFRQyx5Q0FBd0M7SUFDaERHLFlBQVlILHFDQUE0QztJQUN4REssV0FBV0wscUJBQTJDO0lBQ3RETyxlQUFlUCxpQ0FBK0M7SUFDOURTLG1CQUFtQlQsY0FBb0Q7SUFDdkVXLE9BQU9YLDJDQUF1QztJQUM5Q2EsZUFBZWIsY0FBK0M7QUFDaEU7QUFFQSxxQ0FBcUM7QUFDckMsSUFBTWUsaUJBQWlCO0lBQ3JCaEIsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxxQ0FBNEM7SUFDeERLLFdBQVdMLHFCQUEyQztJQUN0RE8sZUFBZVAsaUNBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7SUFDOUNhLGVBQWViLGNBQStDO0FBQ2hFO0FBRUEsSUFBSSxDQUFDZSxlQUFlaEIsTUFBTSxFQUFFO0lBQzFCLE1BQU0sSUFBSWlCLE1BQU07QUFDbEI7QUFFQSxzQkFBc0I7QUFDdEIsSUFBTUMsTUFBTTFCLDJEQUFhQSxDQUFDd0I7QUFDMUIsSUFBTUcsS0FBS3hCLGdFQUFZQSxDQUFDdUI7QUFFeEIseUNBQXlDO0FBQ3pDLElBQUlFO0FBQ0osSUFBSSxJQUFrQixFQUFhO0lBQ2pDMUIsK0RBQVdBLEdBQUcyQixJQUFJLENBQUNDLFNBQUFBO1FBQ2pCLElBQUlBLFdBQVc7WUFDYkYsWUFBWTNCLGdFQUFZQSxDQUFDeUI7UUFDM0I7SUFDRjtBQUNGO0FBRUEsY0FBYztBQUNkLElBQU1LLE9BQU8zQixzREFBT0EsQ0FBQ3NCO0FBRXJCLG1CQUFtQjtBQUNuQixJQUFNTSxpQkFBaUIsSUFBSTNCLDZEQUFrQkE7QUFFRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmlyZWJhc2UudHM/NWQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MsIGlzU3VwcG9ydGVkIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5cclxuY29uc29sZS5sb2coJ0ZpcmViYXNlIENvbmZpZzonLCB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxyXG59KTtcclxuXHJcbi8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWlmbmVkJylcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxyXG59O1xyXG5cclxuaWYgKCFmaXJlYmFzZUNvbmZpZy5hcGlLZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgRmlyZWJhc2UgQVBJIGtleScpO1xyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBBbmFseXRpY3Mgb25seSBpZiBzdXBwb3J0ZWRcclxubGV0IGFuYWx5dGljcztcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgaXNTdXBwb3J0ZWQoKS50aGVuKHN1cHBvcnRlZCA9PiB7XHJcbiAgICBpZiAoc3VwcG9ydGVkKSB7XHJcbiAgICAgIGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDoqo3oqLzjgqrjg5bjgrjjgqfjgq/jg4jjga7mupblgplcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuXHJcbi8vIEdvb2dsZeiqjeiovOODl+ODreODkOOCpOODgOOBrua6luWCmVxyXG5jb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoLCBnb29nbGVQcm92aWRlciwgYW5hbHl0aWNzIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBbmFseXRpY3MiLCJpc1N1cHBvcnRlZCIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJmaXJlYmFzZUNvbmZpZyIsIkVycm9yIiwiYXBwIiwiZGIiLCJhbmFseXRpY3MiLCJ0aGVuIiwic3VwcG9ydGVkIiwiYXV0aCIsImdvb2dsZVByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/firebase.ts\n"));

/***/ })

});