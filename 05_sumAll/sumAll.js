const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number") return "ERROR";
    if(start<0 || end<0) return "ERROR";
    if(start>end){
        let mid = start;
        start=end;
        end = mid;
    }
    let sum = 0;
    while(start<=end){
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
