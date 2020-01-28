export default class UserName {
    // eslint-disable-next-line no-useless-constructor
    private constructor(private _userName: string) {
        // do nothing
    }

    static of(userName: string): UserName {
        return new UserName(userName)
    }

    toString = (): string => this._userName;

    equals = (param: any): boolean => (
        param instanceof UserName
            ? param.toString() === this._userName.toString()
            : false
    );
}
