import 'reflect-metadata'
import container from 'src/inversify.config'
import * as core from '@actions/core'
import Member from 'src/usecase/Member'
import UserName from 'src/entity/github/UserName'

const run = async () => {
    try {
        console.log(await container.get<Member>('Member').exists(UserName.of('dskst')))
        core.info('core info message')
    } catch (error) {
        core.setFailed(error.message)
    }
}
run()
