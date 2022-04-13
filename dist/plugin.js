var capacitorAppNotification = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
