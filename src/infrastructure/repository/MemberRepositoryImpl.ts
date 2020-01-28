import { injectable } from 'inversify'
import * as github from '@actions/github'
// eslint-disable-next-line import/no-extraneous-dependencies
// import HttpsProxyAgent from 'https-proxy-agent'
import GithubUser from '../../entity/github/GithubUser'
import UserName from '../../entity/github/UserName'
import EmailAddress from '../../entity/EmailAddress'
import MemberRepository from '../../usecase/repository/MemberRepository'

@injectable()
export default class MemberRepositoryImpl implements MemberRepository {
    fetch = async (id: string): Promise<GithubUser> => {
        // TODO: GitHub exists use secret
        const gitMember = new github.GitHub(
            process.env.GITHUB_TOKEN,
            // { request: { agent: new HttpsProxyAgent(process.env.https_proxy) } },
        )
        const response = gitMember.users.getByUsername({ username: id })

        // TODO: Fix Draft
        try {
            const value = await response
            return GithubUser.build({
                userName: UserName.of(value.data.login),
                emailAddress: EmailAddress.of(value.data.email),
            })
        } catch (e) {
            return GithubUser.build({
                userName: UserName.of(''),
                emailAddress: EmailAddress.of(''),
            })
        }
    }
}
