"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const hoge_1 = __importDefault(require("./module/hoge"));
const run = async () => {
    try {
        console.log('Hello');
        console.log(new hoge_1.default().getHoge() + 'aaaa');
        console.log('Hello2');
    }
    catch (error) {
        core_1.default.setFailed(error.message);
    }
};
run();
