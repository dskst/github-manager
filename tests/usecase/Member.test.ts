import Member from '../../src/usecase/Member'
import MemberRepositoryImpl from '../../src/infrastructure/repository/MemberRepositoryImpl'

// Make mock
jest.mock('../../src/infrastructure/repository/MemberRepositoryImpl')

describe('Member', () => {
     beforeEach(() => {
          // TODO: Clear data at mock
     })

     describe('exists', () => {
          test('Exists on GitHub', async () => {
               return await expect(new Member(new MemberRepositoryImpl()).exists()).resolves.toBeTruthy()
               
          })
     })
});