/* eslint-disable no-unused-vars */
import UserName from './UserName'
import EmailAddress from '../EmailAddress'

interface GithubUserProps {
    readonly userName: UserName
    readonly emailAddress: EmailAddress
}

export default class GithubUser {
    // eslint-disable-next-line no-useless-constructor
    private constructor(private _props: GithubUserProps) {
        // do nothing
    }

    public static build(props: GithubUserProps) {
        // TODO: validation
        return new GithubUser(props)
    }

    get userName(): UserName {
        return this._props.userName
    }

    get emailAddress(): EmailAddress {
        return this._props.emailAddress
    }
}
