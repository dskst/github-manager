import { Container } from 'inversify'

import Member from 'src/usecase/Member'
import MemberRepository from 'src/usecase/repository/MemberRepository'
import MemberRepositoryImpl from 'src/infrastructure/repository/MemberRepositoryImpl'

const container = new Container()
container
    .bind<MemberRepository>('MemberRepository')
    .to(MemberRepositoryImpl)
    .inRequestScope()
container.bind<Member>('Member').to(Member)

export default container
