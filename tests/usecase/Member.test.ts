import Member from '../../src/usecase/Member'
import MemberRepositoryImpl from '../../src/infrastructure/repository/MemberRepositoryImpl'
import { UserName } from '../../src/entity/github/UserName';

// Make mock
jest.mock('../../src/infrastructure/repository/MemberRepositoryImpl')

describe('Member', () => {
     beforeEach(() => {
          // TODO: Clear data at mock
     })

     describe('exists', () => {
          test('Exists on GitHub', async () => {
               return await expect(new Member(new MemberRepositoryImpl()).exists(UserName.of('hogeuser'))).resolves.toBeTruthy()
          })
     })
});