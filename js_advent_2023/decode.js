function decode(message) {
    let words = message.split(" ");
    if (words.length > 1) {
        let result = [];
        words.forEach(word => {
            result = result.concat(decode(word));
        });
        return result.join(" ");
    }
    let p1 = -1;
    let p2 = -1;
    let index = 0;
    while(index<message.length){
        if(message.charAt(index) == '(') {
            p1 = index;
            break;
        }
        index++;
    }
    if (p1 != -1 ) {
        index = p1;
        while(index<message.length){
            if(message.charAt(index) == ')') p2 = index;
            index++;
        }
        let temp = message.substring(0,p1);
        let toBeReversed = message.substring(p1+1,p2);
        let rest = message.substring(p2+1);
        toBeReversed = decode(toBeReversed).split("").reverse().join("");
        return temp + toBeReversed + rest;
    }
    return message;
}