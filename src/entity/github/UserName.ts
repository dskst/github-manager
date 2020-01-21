import { ValueObject } from '../ValueObject'

interface UserNameProps {
    value: string
}

export class UserName extends ValueObject<UserNameProps> {

    private constructor(props: UserNameProps) {
        super(props)
    }

    get value(): string {
        return this.props.value
    }

    public static of(userName: string): UserName {
        return new UserName({ value: userName})
    }
}