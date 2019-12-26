import core from '@actions/core';
import github from '@actions/github';
import Hoge from './module/hoge';

const run = async () => {
    try {
        console.log('Hello');
        console.log(new Hoge().getHoge() + 'aaaa');
        console.log('Hello2');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();