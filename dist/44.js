(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js ***!
  \********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '\\'',\n    },\n    brackets: [\n        ['(', ')'], ['[', ']'],\n        ['If', 'EndIf'],\n        ['While', 'EndWhile'],\n        ['For', 'EndFor'],\n        ['Sub', 'EndSub']\n    ],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sb',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        // Special bracket statement pairs\n        { token: 'keyword.tag-if', open: 'If', close: 'EndIf' },\n        { token: 'keyword.tag-while', open: 'While', close: 'EndWhile' },\n        { token: 'keyword.tag-for', open: 'For', close: 'EndFor' },\n        { token: 'keyword.tag-sub', open: 'Sub', close: 'EndSub' },\n    ],\n    keywords: [\n        'Else', 'ElseIf', 'EndFor', 'EndIf', 'EndSub', 'EndWhile',\n        'For', 'Goto', 'If', 'Step', 'Sub', 'Then', 'To', 'While'\n    ],\n    tagwords: [\n        'If', 'Sub', 'While', 'For'\n    ],\n    operators: ['>', '<', '<>', '<=', '>=', 'And', 'Or', '+', '-', '*', '/', '='],\n    // we include these common regular expressions\n    identifier: /[a-zA-Z_][\\w]*/,\n    symbols: /[=><:+\\-*\\/%\\.,]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // whitespace\n            { include: '@whitespace' },\n            // classes\n            [/(@identifier)(?=[.])/, 'type'],\n            // identifiers, tagwords, and keywords\n            [/@identifier/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@operators': 'operator',\n                        '@default': 'variable.name'\n                    }\n                }],\n            // methods, properties, and events\n            [/([.])(@identifier)/, {\n                    cases: {\n                        '$2': ['delimiter', 'type.member'],\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/\\d*\\.\\d+/, 'number.float'],\n            [/\\d+/, 'number'],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'operator',\n                        '@default': 'delimiter'\n                    }\n                }],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/(\\').*$/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"C?/, 'string', '@pop']\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NiL3NiLmpzLmpzIiwic291cmNlcyI6WyIvaG9tZS90cm95LmdpYmIvY29kZS9vcGVuX3NvdXJjZS93ZWJ2aXovbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zYi9zYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJ1xcJycsXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJygnLCAnKSddLCBbJ1snLCAnXSddLFxuICAgICAgICBbJ0lmJywgJ0VuZElmJ10sXG4gICAgICAgIFsnV2hpbGUnLCAnRW5kV2hpbGUnXSxcbiAgICAgICAgWydGb3InLCAnRW5kRm9yJ10sXG4gICAgICAgIFsnU3ViJywgJ0VuZFN1YiddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zYicsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmFycmF5Jywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgLy8gU3BlY2lhbCBicmFja2V0IHN0YXRlbWVudCBwYWlyc1xuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctaWYnLCBvcGVuOiAnSWYnLCBjbG9zZTogJ0VuZElmJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctd2hpbGUnLCBvcGVuOiAnV2hpbGUnLCBjbG9zZTogJ0VuZFdoaWxlJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJywgb3BlbjogJ0ZvcicsIGNsb3NlOiAnRW5kRm9yJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3ViJywgb3BlbjogJ1N1YicsIGNsb3NlOiAnRW5kU3ViJyB9LFxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ0Vsc2UnLCAnRWxzZUlmJywgJ0VuZEZvcicsICdFbmRJZicsICdFbmRTdWInLCAnRW5kV2hpbGUnLFxuICAgICAgICAnRm9yJywgJ0dvdG8nLCAnSWYnLCAnU3RlcCcsICdTdWInLCAnVGhlbicsICdUbycsICdXaGlsZSdcbiAgICBdLFxuICAgIHRhZ3dvcmRzOiBbXG4gICAgICAgICdJZicsICdTdWInLCAnV2hpbGUnLCAnRm9yJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbJz4nLCAnPCcsICc8PicsICc8PScsICc+PScsICdBbmQnLCAnT3InLCAnKycsICctJywgJyonLCAnLycsICc9J10sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIGlkZW50aWZpZXI6IC9bYS16QS1aX11bXFx3XSovLFxuICAgIHN5bWJvbHM6IC9bPT48OitcXC0qXFwvJVxcLixdKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBjbGFzc2VzXG4gICAgICAgICAgICBbLyhAaWRlbnRpZmllcikoPz1bLl0pLywgJ3R5cGUnXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzLCB0YWd3b3JkcywgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbL0BpZGVudGlmaWVyLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3ZhcmlhYmxlLm5hbWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIG1ldGhvZHMsIHByb3BlcnRpZXMsIGFuZCBldmVudHNcbiAgICAgICAgICAgIFsvKFsuXSkoQGlkZW50aWZpZXIpLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQyJzogWydkZWxpbWl0ZXInLCAndHlwZS5tZW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvWygpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZGVsaW1pdGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLyhcXCcpLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCJDPy8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js\n");

/***/ })

}]);