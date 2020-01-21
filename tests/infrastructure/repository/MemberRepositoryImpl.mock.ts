import MemberRepository from '../../../src/usecase/repository/MemberRepository'
import { GithubUser } from '../../../src/entity/github/GithubUser'
import { UserName } from '../../../src/entity/github/UserName'

class MemberRepositoryImplMock implements MemberRepository {
    constructor() {}

    async fetch(id: string): Promise<GithubUser> {

        return Promise.resolve().then(() => {
            return GithubUser.build(
                UserName.of('dskst')
            )
            //    {
            //     login: 'dskst',
            //     id: 10830352,
            //     url: 'https://api.github.com/users/dskst',
            //     organizations_url: 'https://api.github.com/users/dskst/orgs',
            //     type: 'User',
            //     name: 'Daisuke Sato',
            //     company: null,
            //     email: null,
            //     created_at: '2015-02-03T12:49:15Z',
            //     updated_at: '2020-01-04T07:23:54Z'
            //   }
        })
    }
}