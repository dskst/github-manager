"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const hoge_1 = __importDefault(require("./module/hoge"));
const run = async () => {
    try {
        console.log('Hello');
        console.log(new hoge_1.default().getHoge() + 'aaaa');
        console.log('Hello2');
        core.info('core info message');
    }
    catch (error) {
        core.setFailed(error.message);
    }
};
run();
