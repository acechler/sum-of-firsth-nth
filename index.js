// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


// Resource: https://www.cuemath.com/algebra/arithmetic-sequence/



/// Series to Compute: Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16
//                           1 = 1.00
//                     1 + 1/4 = 1.25
//               1 + 1/4 + 1/7 = 1.39
//        1 + 1/4 + 1/7 + 1/10 = 1.49
// 1 + 1/4 + 1/7 + 1/10 + 1/13 = 1.57




function SeriesSum(n)
{
  let total = Math.abs(1/(1+3*(1-1)));
  let accumulator = 0;
  // Happy Coding ^_^
  for(let i = 1; i < n; i++){
    let prev = total;
    total+=Math.abs(1/(1+3*(n-1)));
    accumulator = prev+total;
    prev = total;
    console.log(total);
  }

}
//Math.abs(1/(1+3*(n-1)))

// Initialize
let total = Math.abs(1/(1+3*(1-1)));
let i = 2;
console.log(total);

// First Iteration
total += Math.abs(1/(1+3*(i-1)))
i+=1;
console.log(total);


// Second Iteration
total += Math.abs(1/(1+3*(i-1)))
i+=1;
console.log(total);


// Third Iteration
total += Math.abs(1/(1+3*(i-1)))
i+=1;
console.log(total);


