import 'reflect-metadata'
import container from '../inversify.config'

import * as core from '@actions/core';
import Member from '../usecase/Member'

const run = async () => {
    try {
        console.log(await container.get<Member>('Member').exists())
        core.info('core info message')
    } catch (error) {
        core.setFailed(error.message)
    }
}

run();