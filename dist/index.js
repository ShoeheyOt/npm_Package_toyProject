"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var VarChecker = class _VarChecker {
  constructor(options) {
    this.options = options;
  }
  formatLog(options, messageString, message) {
    switch (options.output) {
      case "console":
        console.log(messageString, message);
        break;
      case "file":
        break;
      default:
        throw new Error("Invalid output type");
    }
  }
  log(message, level, enableTimestamp) {
    const timestamp = enableTimestamp ? (/* @__PURE__ */ new Date()).toString() : "";
    const logMessage = this.options.format.replace("{timestamp}", timestamp).replace("{level}", level);
    this.formatLog(this.options, logMessage, message);
  }
  before(message, hasTimestamp = false) {
    this.log(message, "BEFORE" /* BEFORE */, hasTimestamp);
  }
  after(message, hasTimestamp = false) {
    this.log(message, "AFTER" /* AFTER */, hasTimestamp);
  }
  static create(options) {
    const defaultConfig = {
      output: "console",
      format: "{timestamp} [{level}]"
    };
    const mergeConfig = __spreadValues(__spreadValues({}, defaultConfig), options);
    return new _VarChecker(mergeConfig);
  }
};
var src_default = VarChecker;
//# sourceMappingURL=index.js.map