import GithubUser from 'src/entity/github/GithubUser'

export default interface MemberRepository {
    fetch(id: string): Promise<GithubUser>
}
