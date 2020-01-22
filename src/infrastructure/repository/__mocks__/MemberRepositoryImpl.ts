import { GithubUser } from '../../../entity/github/GithubUser'
import { UserName } from '../../../entity/github/UserName'
import { EmailAddress } from '../../../entity/EmailAddress'

const mock =  jest.fn().mockImplementation(() => {
        return {
            fetch: async (): Promise<GithubUser> => {
                return Promise.resolve().then(() => {
                    return GithubUser.build({
                        userName: UserName.of('mockuser'),
                        emailAddress: EmailAddress.of('mockuser@example.com')
                    })
                })
            }
        }
})

export default mock