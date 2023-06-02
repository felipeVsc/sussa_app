/* eslint-disable no-unused-vars */

export class Professional {
  constructor(
    readonly id: string,
    readonly crp: string,
    readonly status: boolean,
    readonly firstName: string,
    readonly lastName: string,
    readonly description: string,
    readonly role: string,
    readonly photo?: string | undefined
  ) {}
}

