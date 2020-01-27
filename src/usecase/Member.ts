import { injectable, inject } from 'inversify'
import MemberRepository from './repository/MemberRepository'
import UserName from '../entity/github/UserName'

@injectable()
export default class Member {
    private readonly _memberRepository: MemberRepository

    constructor(
        @inject('MemberRepository') memberRepository: MemberRepository,
    ) {
        this._memberRepository = memberRepository
    }

    async exists(userName: UserName): Promise<boolean> {
        const user = await this._memberRepository.fetch(userName.toString())

        // TODO: Fix draft
        return Promise.resolve().then(() => user.userName.equals(userName.toString()))
    }
}
