function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let item of array){
 
    for(i=0; i<array.length; i++){
    const add = array[i]+item
    
      if(add===target) {
      return true
      }
    }
  return false
}

};

// const yo = [0,1,2,3,4] // has length 5
// const num = yo.length

// console.log(num)

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

 for each item in array
 add each item to each other
 if value equals to target number
 return truue
 else
 return false






*/

/*
  Add written explanation of your solution here

  Write a function that takes in an array as the first argument and the target number as the second arguement. The function should return true if any of the pairs equal to the target number. Get each number in the array and add it to each number in the array. Then compare to the target number, If it equals, return true. If not return false.



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
