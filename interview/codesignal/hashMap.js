class HashMap{
    theMap = {}

    insert(x,y){
        this.theMap[x] = y;
    }

    get(x){
        console.log(this.theMap);
        return this.theMap[x];
    }

    addToKey(x){
        const newMap = {}
        for (const key in this.theMap) {
            newMap[Number(x) + Number(key)] = this.theMap[key];
        }
        this.theMap = newMap;
    }

    addToValue(y){
        for (const key in this.theMap) {
            this.theMap[key] = Number(y);
        }
    }


}

function hashMap(queryType, query) {
    let hashMap = new HashMap();
    let res = 0;

    for(let i = 0; i < queryType.length; i++){
        if(queryType[i] == 'get'){
            res += hashMap[queryType[i]](...query[i]);
        } else {
            hashMap[queryType[i]](...query[i]);
        }
    }
    return res;
}
