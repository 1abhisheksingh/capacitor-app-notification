'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppNotification = core.registerPlugin('AppNotification', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppNotificationWeb()),
});

class AppNotificationWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppNotificationWeb: AppNotificationWeb
});

exports.AppNotification = AppNotification;
//# sourceMappingURL=plugin.cjs.js.map
