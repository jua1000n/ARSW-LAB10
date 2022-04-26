var bigInt = require("big-integer");
var memo = [bigInt.zero, bigInt.one];
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log(req.body.nth);
    context.log(req);

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;


    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        answer = fibonacci(nth, context);
    }
    context.log(answer);
    context.log(answer.toString());

    context.res = {
        body: answer.toString()
    };
}

// program to display fibonacci sequence using recursion
function fibonacci(num, context) {
    if(memo[num]!=undefined){
        return memo[num];
    }else {
        if(BigInt(num) < bigInt.two) {
            return num;
        }
        else {
            var m = fibonacci(num-1).add(fibonacci(num-2));
            memo.push(m);
            return m;
        }
    }
}