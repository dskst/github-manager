export default class EmailAddress {
    // eslint-disable-next-line no-useless-constructor
    private constructor(private _emailAddress: string) {
        // do nothing
    }

    static of(emailAddress: string): EmailAddress {
        // TODO: validation
        return new EmailAddress(emailAddress)
    }

    toString = (): string => this._emailAddress
}
