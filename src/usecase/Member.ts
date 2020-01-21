import { injectable, inject } from "inversify"
import MemberRepository from "./repository/MemberRepository"
import { GithubUser } from "../entity/github/GithubUser"
import { UserName } from "../entity/github/UserName"

@injectable()
export default class Member {
    private readonly memberRepository: MemberRepository

    constructor(
        @inject('MemberRepository') memberRepository: MemberRepository
    ) {
        this.memberRepository = memberRepository
    }

    exists(): Promise<boolean> {
        this.memberRepository.fetch('hoge')

        // TODO: usecase
        return Promise.resolve().then(() => { return true })
    }
}