var __defProp = Object.defineProperty;
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

// src/index.ts
var TestLogger = class _TestLogger {
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
    const timestamp = enableTimestamp ? (/* @__PURE__ */ new Date()).toISOString() : "";
    const logMessage = this.options.format.replace("{timestamp}", timestamp).replace("{level}", level);
    this.formatLog(this.options, logMessage, message);
  }
  before(message, hasTimestamp = false) {
    this.log(message, "BEFORE" /* BEFORE */, hasTimestamp);
  }
  after(message, hasTimestamp = false) {
    this.log(message, "AFTER" /* AFTER */, hasTimestamp);
  }
  error(message, hasTimestamp = false) {
    this.log(message, "ERROR" /* ERROR */, hasTimestamp);
  }
  static create(options) {
    const defaultConfig = {
      output: "console",
      format: "{timestamp} [{level}]"
    };
    const mergeConfig = __spreadValues(__spreadValues({}, defaultConfig), options);
    return new _TestLogger(mergeConfig);
  }
};
var src_default = TestLogger;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map