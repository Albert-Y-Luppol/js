function hummingDistance(x, y){
    x = (x >>> 0).toString(2).split('');
    y = (y >>> 0).toString(2).split('');

    let dist = 0;

    for(let i = 0; i < ((x.length > y.length)? x.length : y.length); ){

        if((x.pop() || "0") != (y.pop() || "0")) dist++;
    }

    return dist;
}

console.log(hummingDistance(256, 4));