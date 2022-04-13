import { WebPlugin } from '@capacitor/core';
import type { AppNotificationPlugin } from './definitions';
export declare class AppNotificationWeb extends WebPlugin implements AppNotificationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
