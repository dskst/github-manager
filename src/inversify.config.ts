import { Container } from "inversify"

import Member from "./usecase/Member"
import MemberRepository from "./usecase/repository/MemberRepository"
import MemberRepositoryImpl from "./infrastructure/repository/MemberRepositoryImpl"

const container = new Container()
container
    .bind<MemberRepository>("MemberRepository")
    .to(MemberRepositoryImpl)
    .inRequestScope()
container.bind<Member>("Member").to(Member)

export default container