import { injectable } from 'inversify'
import Member from '../../entity/repository/MemberRepository'
import * as github from '@actions/github';

// const HttpsProxyAgent = require("https-proxy-agent");

@injectable()
export default class MemberRepositoryImpl implements Member {

    constructor() {}

    public exists(): Promise<boolean> {
        return Promise.resolve().then(() => { return true })

        // TODO: GitHub exists
        const gitMember = new github.GitHub(
            ''
            //,{request: {agent: new HttpsProxyAgent(process.env.https_proxy)}}
        );
        const response = gitMember.users.getByUsername({username:'dskst'});
        return response.then((value) => {
            return value.data.login != null;
        }).catch((error) => {
            return false;
        });
    }
}