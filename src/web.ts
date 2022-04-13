import { WebPlugin } from '@capacitor/core';

import type { AppNotificationPlugin } from './definitions';

export class AppNotificationWeb extends WebPlugin implements AppNotificationPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
