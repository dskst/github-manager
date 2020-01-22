import { injectable } from 'inversify'
import * as github from '@actions/github';
import Member from '../../usecase/repository/MemberRepository'
import { GithubUser } from '../../entity/github/GithubUser'
import { UserName } from '../../entity/github/UserName'
import { EmailAddress } from '../../entity/EmailAddress';

// const HttpsProxyAgent = require("https-proxy-agent");

@injectable()
export default class MemberRepositoryImpl implements Member {

    constructor() {}

    async fetch(id: string): Promise<GithubUser> {

        // TODO: GitHub exists use secret
        const gitMember = new github.GitHub(
            ''
            // ,{request: {agent: new HttpsProxyAgent(process.env.https_proxy)}}
        );
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
        });
    }
}