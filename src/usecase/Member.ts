import { injectable, inject } from "inversify"
import MemberRepository from "./repository/MemberRepository"
import { UserName } from "../entity/github/UserName"

@injectable()
export default class Member {
    private readonly memberRepository: MemberRepository

    constructor(
        @inject('MemberRepository') memberRepository: MemberRepository
    ) {
        this.memberRepository = memberRepository
    }

    async exists(userName: UserName): Promise<boolean> {
        // FIXME: this is just test
        return Promise.resolve().then(() => { return true })

        const user = await this.memberRepository.fetch('hoge')

        // TODO: Fix draft
        return Promise.resolve().then(() => { return user.userName.equals('mockuser') })
    }
}