import Member from '../../src/usecase/Member';
import MemberRepositoryImpl from '../../src/infrastructure/repository/MemberRepositoryImpl'

describe('Member', () => {
     describe('isExists', () => {
          test('Is exist on GitHub', () => {
               // TODO: Change octkit to nock
               return expect(new Member(new MemberRepositoryImpl()).exists()).resolves.toBeTruthy()
          })
     })
});