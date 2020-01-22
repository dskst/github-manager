import 'reflect-metadata'
import container from '../inversify.config'

import * as core from '@actions/core';
import Member from '../usecase/Member'
import { UserName } from '../entity/github/UserName';

const run = async () => {
    try {
        console.log(await container.get<Member>('Member').exists(UserName.of('dskst')))
        core.info('core info message')
    } catch (error) {
        core.setFailed(error.message)
    }
}

run();