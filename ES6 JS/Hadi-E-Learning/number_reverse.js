function numReverse(num) {
    let sign = Math.sign(num);
    let reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return sign * reversedNum;
}

console.log(numReverse(100)); 
console.log(numReverse(-51));
