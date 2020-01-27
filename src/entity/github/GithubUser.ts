/* eslint-disable no-unused-vars */
import UserName from 'src/entity/github/UserName'
import EmailAddress from 'src/entity/EmailAddress'

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
        return new GithubUser(props)
    }

    get userName(): UserName {
        return this._props.userName
    }

    get emailAddress(): EmailAddress {
        return this._props.emailAddress
    }
}
