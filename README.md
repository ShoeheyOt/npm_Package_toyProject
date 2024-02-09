what I want to implement

const test = TestLogger.create();

let num = 3 * 5;
test.before(num)   //timestamp, [BEFORE] num 15
num = 4 * 5;
test.after(num)  //timestamp, [AFTER] num 20


