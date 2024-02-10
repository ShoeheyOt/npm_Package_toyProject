# Variable Checker

### This is simple test logger which you can use it just like console.log() for checking your variables.

### 1. Install the package
```bash
npm i @shuota/variable-checker
```

### 2. Import to your file. and instantiation
```ts
import VarChecker from "@shuota/variable-checker";
const myLogger = VarChecker.create();
```

### 3. `.before({variable})`

```ts
let num:number = 4 * 5

myLogger.before({num}) 
//output in console:
// [BEFORE] {
//      num: "20",
//  }
```
if you use `.before({})`,  you will get `[BEFORE]` label in the console.   
Don't forget to include  `{}` inside `()`

### 4. `.after({variable})`

```ts
num = 6 * 8
//update the `num` variable

myLogger.after({num})
//output in console:
// [AFTER] {
//      num: "48",
//   }
```
with `.after({})`, you will get `[AFTER]` label in the console.  
same as above, please include `{}` inside `()`

### 5. with function 
Yes, you can use this package with function, but make sure you need to store your function to variable.

```ts
function greeting(greet:string):string{
    return `${greet}, everyone!!`
}
let morningGreet = greeting('Good morning')

myLogger.before({morningGreet})
// output in console:
//  [BEFORE] {
//       morningGreet: "Good morning, everyone!!",
//  }

morningGreet = greeting('Hello')

myLogger.after({morningGreet})
// output in console:
//  [AFTER] {
//       morningGreet: "Hello, everyone!!",
//  }
```

### 6 TimeStamp
For each function in this package, there is option which displays time in the console. you can type `true` as second argument.

```ts
const myLogger = TestLogger.create();
let num = 4 * 5
myLogger.before({num}, true)
//output in console:
//  Fri Feb 09 2024 17:24:07 GMT-0800 (Pacific Standard Time) [BEFORE] {
//      num: 20,
//  }


num = 6 * 8
myLogger.after({num}, true)
// ouput in console:
//  Fri Feb 09 2024 17:24:07 GMT-0800 (Pacific Standard Time) [AFTER] {
//      num: 48,
//  }

```

Thank you for reading!