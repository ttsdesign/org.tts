(function () {function anonymous(){return module={exports:{}},function(e,n,r,t,o){(0,module.exports)("./org.tts.js.core.js"),function(e){var r=0,t=!1,o=!0,u=!0;function LogTest(e,n){if(r++,t&&!e)throw"undefined"!=typeof Error?new Error(n||"Assertion Failed"):n;return n=(e?"(PASS)":"(FAIL)")+r+":"+(n||"Assertion failed"),u&&e&&LOG(n),o&&!e&&("NodeJS"===GetContext()?LOG("[31m"+n+"[0m"):LOG(n)),n}var n={};Object.defineProperty(n,"ErrorOnFail",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){return t=e,this}}),Object.defineProperty(n,"LogFail",{enumerable:!1,configurable:!1,get:function(){return o},set:function(e){return o=e,this}}),Object.defineProperty(n,"LogPass",{enumerable:!1,configurable:!1,get:function(){return u},set:function(e){return u=e,this}}),Object.defineProperty(n,"Count",{enumerable:!1,configurable:!1,get:function(){return r},set:function(e){return r=e,this}}),Object.defineProperty(n,"Equal",{enumerable:!1,configurable:!1,value:function(e,n,r){return LogTest(e===n,r)}}),Object.defineProperty(n,"IsEqual",{enumerable:!1,configurable:!1,value:function(e,n,r){return LogTest(IsEqual(e,n),r)}}),Object.defineProperty(n,"Ok",{enumerable:!1,configurable:!1,value:function(e,n){return LogTest(!!e,n)}}),e.hasOwnProperty("Test")||Object.defineProperty(e,"Test",{configurable:!1,enumerable:!1,value:n})}("undefined"!=typeof window?window:"undefined"!=typeof global?global:this)}(module),module.exports}}())