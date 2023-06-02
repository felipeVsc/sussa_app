/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';

export class Notification {
  constructor(
    readonly title: string,
    readonly content: string,
    readonly notification_type: string
  ) {}
}
