import GithubUser from 'src/entity/github/GithubUser'
import UserName from 'src/entity/github/UserName'
import EmailAddress from 'src/entity/EmailAddress'

// eslint-disable-next-line no-undef
const mock = jest.fn().mockImplementation(() => ({
    // eslint-disable-next-line arrow-body-style
    fetch: async (username: string): Promise<GithubUser> => {
        // eslint-disable-next-line arrow-body-style
        return Promise.resolve().then(() => {
            return GithubUser.build({
                userName: UserName.of(username),
                emailAddress: EmailAddress.of('mockuser@example.com'),
            })
        })
    },
}))

export default mock
