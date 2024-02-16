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
  
    private log(message: object, level: LogLevel, type:boolean ,enableTimestamp: boolean) {
      const timestamp = enableTimestamp ? new Date().toString() : '';
      const paramType = () => {
        if(!type) return '';
        const val = Object.values(message)[0]
        return typeof val
      } 

      const logMessage = this.options.format
        .replace('{timestamp}', timestamp)
        .replace('{level}', level)
        .replace('[{type}]', paramType)

      this.formatLog(this.options, logMessage, message,);
    }
  
    before(message: object, type: boolean = false, hasTimestamp: boolean = false) {
      this.log(message, LogLevel.BEFORE, type, hasTimestamp)
    }
    after(message: object, type:boolean = false, hasTimestamp: boolean = false) {
      this.log(message, LogLevel.AFTER, type, hasTimestamp)
    }
  
    static create(options?: Partial<LoggerOptions>): VarChecker{
      const defaultConfig: LoggerOptions = {
        output: 'console',
        format: '{timestamp} [{level}] [{type}]',
      }
  
      const mergeConfig = { ...defaultConfig, ...options };
  
      return new VarChecker(mergeConfig);
    }
  }
  
export default VarChecker;