function stringMatching(long, pattern){
    let count = 0;
    for(let i=0; i< long.length; i++){
        for(let j=0; j< pattern.length; j++){
            if(long[i+j]!==pattern[j]) break;
            if(j === pattern.length-1) count++;
        }
    }
    return count;
}