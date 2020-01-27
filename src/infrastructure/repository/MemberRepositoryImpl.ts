import { injectable } from 'inversify'
import * as github from '@actions/github'
import GithubUser from 'src/entity/github/GithubUser'
import UserName from 'src/entity/github/UserName'
import EmailAddress from 'src/entity/EmailAddress'
import MemberRepository from 'src/usecase/repository/MemberRepository'

// const HttpsProxyAgent = require("https-proxy-agent");

@injectable()
export default class MemberRepositoryImpl implements MemberRepository {
    async fetch(id: string): Promise<GithubUser> {

        // TODO: GitHub exists use secret
        const gitMember = new github.GitHub(
            ''
            // ,{request: {agent: new HttpsProxyAgent(process.env.https_proxy)}}
        )
        const response = gitMember.users.getByUsername({username:'dskst'});

        // TODO: Fix Draft
        return response.then((value) => {
            return GithubUser.build({
                userName: UserName.of(value.data.login),
                emailAddress: EmailAddress.of(value.data.email)
            })
        }).catch((error) => {
            return GithubUser.build({
                userName: UserName.of(''),
                emailAddress: EmailAddress.of('')
            }) 
        })
    }
}