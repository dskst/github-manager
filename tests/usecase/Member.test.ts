import Member from '../../src/usecase/Member';
import MemberRepositoryImpl from '../../src/infrastructure/repository/MemberRepositoryImpl'
import { EmailAddress } from '../../src/entity/EmailAddress';
import { GithubUser } from '../../src/entity/github/GithubUser'
import { UserName } from '../../src/entity/github/UserName';

describe('Member', () => {
     describe('exists', () => {
          test('Exists on GitHub', () => {
               // TODO: Change octkit to nock
               const user = GithubUser.build({
                    userName: UserName.of('hoge'),
                    emailAddress: EmailAddress.of('hogehoge@gmail.com')
               })
               console.log(user.emailAddress)
               console.log(user.userName)
               // return expect(new Member(new MemberRepositoryImpl()).exists()).resolves.toBeTruthy()
          })
     })
});