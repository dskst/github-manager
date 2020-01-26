import UserName  from './UserName'
import { EmailAddress } from '../EmailAddress'

interface GithubUserProps {
    readonly userName: UserName
    readonly emailAddress: EmailAddress
}

export class GithubUser {

    private constructor(private props: GithubUserProps) {
    }

    public static build(props: GithubUserProps) {
        return new GithubUser(props)
    }

    get userName(): UserName {
        return this.props.userName
    }

    get emailAddress(): EmailAddress {
        return this.props.emailAddress
    }
}