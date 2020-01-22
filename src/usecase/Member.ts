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
        const user = await this.memberRepository.fetch(userName.toString())

        // TODO: Fix draft
        return Promise.resolve().then(() => { return user.userName.equals(userName.toString()) })
    }
}