function mergeStrings(s1, s2) {
    if(!s1) return s2;
    if(!s2) return s1;

    let result = "";
    let s1K = s1.match(new RegExp(`${s1[0]}`, 'g')).length;
    let s2K = s2.match(new RegExp(`${s2[0]}`, 'g')).length;
    // throw(new Error(s2K));

    let s1I = 0;
    let s2I = 0;


    for(let i = 0; i < s1.length + s2.length; i++){
        if (s1I == s1.length) {
            result.concat(s2.slice(s2I));
            break;
        }
        if (s2I == s2.length) {
            result.concat(s1.slice(s1I));
            break;
        }

        if(s1K > s2K){
            result+=s2[s2I];
            s2I++;
            s2K = s2[s2I] ? s2.match(new RegExp(`${s2[s2I]}`, 'g')).length : 0;
        } else if(s2K > s1K){
            result+=s1[s1I];
            s1I++;
            s1K = s1[s1I] ? s1.match(new RegExp(`${s1[s1I]}`, 'g')).length : 0;
        } else {
            if(s1[s1I] > s2[s2I]){
                result+=s2[s2I];
                s2I++;
                s2K = s2[s2I] ? s2.match(new RegExp(`${s2[s2I]}`, 'g')).length : 0;
            } else {
                result+=s1[s1I];
                s1I++;
                s1K = s1[s1I] ? s1.match(new RegExp(`${s1[s1I]}`, 'g')).length : 0;
            }
        }
        // throw(new Error(result));
    }

    return result;

}
