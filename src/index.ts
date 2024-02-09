interface LoggerOptions {
    output: 'console' | 'file';
    format: string;
  }
  
  enum LogLevel {
    BEFORE = "BEFORE",
    AFTER = "AFTER",
  }
  
  class VarChecker {
  
    private options: LoggerOptions
  
    private constructor(options: LoggerOptions) {
      this.options = options;
    }
  
    private formatLog<T>(options: Pick<LoggerOptions, "output">, messageString: string, message:T) {
      switch (options.output) {
        case 'console':
          console.log(messageString,message);
          break;
        case 'file':
          // write to file
          break;
        default:
          throw new Error('Invalid output type');
      }
    }
  
    private log<T>(message: T, level: LogLevel, enableTimestamp: boolean) {
      const timestamp = enableTimestamp ? new Date().toISOString() : '';
      const logMessage = this.options.format
        .replace('{timestamp}', timestamp)
        .replace('{level}', level)
        
  
      this.formatLog(this.options, logMessage, message);
    }
  
    before<T>(message: T, hasTimestamp: boolean = false) {
      this.log(message, LogLevel.BEFORE, hasTimestamp)
    }
    after<T>(message: T, hasTimestamp: boolean = false) {
      this.log(message, LogLevel.AFTER, hasTimestamp)
    }
  
    static create(options?: Partial<LoggerOptions>): VarChecker{
      const defaultConfig: LoggerOptions = {
        output: 'console',
        format: '{timestamp} [{level}]',
      }
  
      const mergeConfig = { ...defaultConfig, ...options };
  
      return new VarChecker(mergeConfig);
    }
  }
  
  export default VarChecker; 