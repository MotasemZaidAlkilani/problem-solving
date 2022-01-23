'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max=arr[0];
    for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    }
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum=0;
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]==="number"){
            sum=sum+arr[i];
        }
    }
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    var third_var;
    for(var i=0;i<arr.length/2;i++){
      third_var=arr[i];
      arr[i]=arr[arr.length-i-1];
      arr[arr.length-i-1]=third_var;
    }
    return arr;
}

module.exports = {findMax , sumNums, reverseArray};