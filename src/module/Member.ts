import * as github from '@actions/github';
import { returnStatement } from '@babel/types';

class Member {

    constructor() {
    }

    public isExists(): boolean {
        return true;
    }
}

export = Member;