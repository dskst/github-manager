export class EmailAddress {

    private constructor(private _emailAddress: string) {
    }

    static of(emailAddress: string): EmailAddress {
        return new EmailAddress(emailAddress)
    }

    toString = (): string => {
        return this._emailAddress
    }
}