const core = require('@actions/core');
const github = require('@actions/github');
const { Hoge } = require('./module/hoge');

const run = async () => {
    try {
        console.log('Hello');
        console.log(new Hoge().getHoge());
        Promise.resolve(true);
    } catch (error) {
        core.setFailed(error.message);
        PromiseRejectionEvent(false);
    }
}

run();