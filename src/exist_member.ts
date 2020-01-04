import core from '@actions/core';
import github from '@actions/github';
import Member from './module/Member';

const run = async () => {
    try {
        console.log('Hello');
        core.info('core info message');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();