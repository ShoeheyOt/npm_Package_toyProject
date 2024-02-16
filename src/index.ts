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
  
    private log<T>(message: object, level: LogLevel, enableTimestamp: boolean,type:boolean) {
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
  
    before(message: object, hasTimestamp: boolean = false, type: boolean = false) {
      this.log(message, LogLevel.BEFORE, hasTimestamp, type)
    }
    after(message: object, hasTimestamp: boolean = false, type:boolean = false) {
      this.log(message, LogLevel.AFTER, hasTimestamp, type)
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

const test = VarChecker.create();

let num:number = 3 * 5;
test.before({num},false,true);