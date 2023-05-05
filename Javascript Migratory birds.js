function migratoryBirds(arr) {
    // Write your code here
  
let birds = {};
    let max = Number.MIN_SAFE_INTEGER;
    let maxIds = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in birds){
            birds[arr[i]]++;
        }
        else{
            birds[arr[i]] = 1;
        }
    }
    
    for(let i in birds){
        if(birds[i] > max){
            max = birds[i];
            maxIds = i;
        }
        if(birds[i] == max && i < maxIds){
            maxIds = i;
        }
    }
    return maxIds




}
