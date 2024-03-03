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
  if(n === 0){
    return "0.00";
  }
  let total = Math.abs(1/(1+3*(1-1)));
  let container = "";
  for(let i = 2; i <= n+1; i++){
    total+=Math.abs(1/(1+3*(i-1)))
    let rounded = total.toFixed(2);
    console.log(rounded.toString());
    container = rounded.toString();
  }
  return container;

}

//SeriesSum(1);
SeriesSum(2);
SeriesSum(0);

//Math.abs(1/(1+3*(n-1)))

/* // Initialize
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
console.log('\n');

let total2 = Math.abs(1/(1+3*(1-1)));
for(let j = 2; j <= 3; j++){
  total2+=Math.abs(1/(1+3*(j-1)))
  console.log(total2);
} */