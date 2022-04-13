export interface AppNotificationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
