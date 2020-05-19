function isMatch(a, b){

    b += "0";

    b = b.split("*");

    let finalB = ""

    b.forEach(sub => {
        let s = sub.slice(-1);
        sub = sub.slice(0, sub.length - 1);

        finalB += sub + "(" + s + "?)+"
    });

    finalB = finalB.slice(0, finalB.length - 1);

    let res = a.match(new RegExp(finalB));

    if(res && res[0] == a) return true;

    return false;
}

console.log(isMatch("aaabn", ".*a*b."));