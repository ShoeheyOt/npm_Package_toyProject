interface LoggerOptions {
    output: 'console' | 'file';
    format: string;
}
declare class TestLogger {
    private options;
    private constructor();
    private formatLog;
    private log;
    before<T>(message: T, hasTimestamp?: boolean): void;
    after<T>(message: T, hasTimestamp?: boolean): void;
    error<T>(message: T, hasTimestamp?: boolean): void;
    static create(options?: Partial<LoggerOptions>): TestLogger;
}

export { TestLogger as default };
