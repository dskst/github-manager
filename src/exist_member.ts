import * as core from '@actions/core';
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