import { UserName }  from './UserName'
import { ValueObject } from '../ValueObject'

interface GithubUserProps {
    userName: UserName
}

export class GithubUser extends ValueObject<GithubUserProps>{

    get userName(): UserName {
        return this.props.userName
    }

    private constructor(props: GithubUserProps) {
        super(props)
    }

    public static build(userName: UserName) {
        return new GithubUser({
            userName
        })
    }
}