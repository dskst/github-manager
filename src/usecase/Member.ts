import { injectable, inject } from "inversify"
import MemberRepository from "../entity/repository/MemberRepository"

@injectable()
export default class Member {
    private readonly memberRepository: MemberRepository

    constructor(
        @inject('MemberRepository') memberRepository: MemberRepository
    ) {
        this.memberRepository = memberRepository
    }

    exists(): Promise<boolean> {
        return this.memberRepository.exists()
    }
}