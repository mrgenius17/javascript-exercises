const reverseString = function(str) {
    const letters = [];
    for(let i=0; i<str.length; i++){
        letters.push(str.charAt(i));
    }
    let reverse = "";
    for(let i=letters.length - 1; i>=0; i--){
        reverse += letters[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
