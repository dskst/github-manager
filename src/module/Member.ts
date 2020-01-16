import * as github from '@actions/github';
const HttpsProxyAgent = require("https-proxy-agent");

class Member {

    constructor() {
    }

    public isExists(): Promise<boolean> {
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

export = Member;