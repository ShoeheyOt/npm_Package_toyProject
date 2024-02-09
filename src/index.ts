interface LoggerOptions {
    output: 'console' | 'file';
    format: string;
  }
  
  enum LogLevel {
    BEFORE = "BEFORE",
    AFTER = "AFTER",
  }
  
  class TestLogger {
  
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
  
    static create(options?: Partial<LoggerOptions>): TestLogger{
      const defaultConfig: LoggerOptions = {
        output: 'console',
        format: '{timestamp} [{level}]',
      }
  
      const mergeConfig = { ...defaultConfig, ...options };
  
      return new TestLogger(mergeConfig);
    }
  }
  
  export default TestLogger; 

const myTest = TestLogger.create();
let num = 4 * 5;
myTest.before({num});
num = 5* 8;
myTest.after({num});
function stringTest (person:string):string  {
  return `Hello, ${person}`
}

const smith = stringTest("Smith")
myTest.before({smith},true);