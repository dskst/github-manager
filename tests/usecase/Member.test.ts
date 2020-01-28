/* eslint-disable no-undef */
import Member from '../../src/usecase/Member'
import MemberRepositoryImpl from '../../src/infrastructure/repository/MemberRepositoryImpl'
import UserName from '../../src/entity/github/UserName'

// eslint-disable-next-line no-undef
jest.mock('../../src/infrastructure/repository/MemberRepositoryImpl')

describe('Member', () => {
    beforeEach(() => {
        // TODO: Clear data at mock
    })

    describe('exists', () => {
        // eslint-disable-next-line arrow-body-style
        test('Exists on GitHub', async () => {
            // eslint-disable-next-line no-return-await
            return await expect(new Member(new MemberRepositoryImpl()).exists(UserName.of('dskst'))).resolves.toBeTruthy()
        })
    })
})
