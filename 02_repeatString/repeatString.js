const repeatString = function(str, repititions) {
    if(repititions<0) return "ERROR";
    let res = "";
    while(repititions>0){
        res += str;
        repititions--;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
