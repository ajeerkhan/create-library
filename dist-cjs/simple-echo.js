"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.echoV1 = exports.echo = void 0;
const echo = (message) => {
    console.log(`Received ${message} by ${Date.toString()}`);
    return message;
};
exports.echo = echo;
const echoV1 = (message) => {
    console.log(`Received ${message} by ${Date.toString()}`);
    return message;
};
exports.echoV1 = echoV1;
//# sourceMappingURL=simple-echo.js.map