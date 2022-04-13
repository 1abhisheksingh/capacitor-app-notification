import { registerPlugin } from '@capacitor/core';
const AppNotification = registerPlugin('AppNotification', {
    web: () => import('./web').then(m => new m.AppNotificationWeb()),
});
export * from './definitions';
export { AppNotification };
//# sourceMappingURL=index.js.map