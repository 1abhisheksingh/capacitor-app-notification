import { registerPlugin } from '@capacitor/core';

import type { AppNotificationPlugin } from './definitions';

const AppNotification = registerPlugin<AppNotificationPlugin>('AppNotification', {
  web: () => import('./web').then(m => new m.AppNotificationWeb()),
});

export * from './definitions';
export { AppNotification };
