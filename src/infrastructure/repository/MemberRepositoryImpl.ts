import { injectable } from 'inversify'
import Member from '../../usecase/repository/MemberRepository'
import { GithubUser } from '../../entity/github/GithubUser'
import { UserName } from '../../entity/github/UserName'
import * as github from '@actions/github';

// const HttpsProxyAgent = require("https-proxy-agent");

@injectable()
export default class MemberRepositoryImpl implements Member {

    constructor() {}

    async fetch(id: string): Promise<GithubUser> {

        // TODO: GitHub exists use secret
        const gitMember = new github.GitHub(
            ''
            //,{request: {agent: new HttpsProxyAgent(process.env.https_proxy)}}
        );
        const response = gitMember.users.getByUsername({username:'dskst'});

        return response.then((value) => {
            return GithubUser.build(
                UserName.of(value.data.login)
            )
        }).catch((error) => {
            return GithubUser.build(
                UserName.of('')
            ) 
        });
    }
}