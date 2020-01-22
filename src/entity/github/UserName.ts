export class UserName {

    private constructor(private _userName: string) {
    }

    static of(userName: string): UserName {
        return new UserName(userName)
    }

    toString = (): string => {
        return this._userName
    }

    equals = (param: any): boolean => {
        return param != null && this._userName === param
    }
}