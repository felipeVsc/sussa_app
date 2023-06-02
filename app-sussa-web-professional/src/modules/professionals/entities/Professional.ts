/* eslint-disable no-unused-vars */

export class Professional {
  constructor(
    readonly id: string,
    readonly crp: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly role: string,
    readonly description: string,
    readonly photo?: string | undefined,
  ) {}
}
