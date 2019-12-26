import * as core from '@actions/core';
import * as github from '@actions/github';
import Member from './module/Member';

const run = async () => {
    try {
        console.log('Hello');
        console.log(new Member().getHoge() + 'aaaa');
        console.log('Hello2');
        core.info('core info message');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();