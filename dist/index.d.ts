interface LoggerOptions {
    output: 'console' | 'file';
    format: string;
}
declare class VarChecker {
    private options;
    private constructor();
    private formatLog;
    private log;
    before<T>(message: T, hasTimestamp?: boolean): void;
    after<T>(message: T, hasTimestamp?: boolean): void;
    static create(options?: Partial<LoggerOptions>): VarChecker;
}

export { VarChecker as default };
