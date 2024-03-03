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
  let container = "";
  if(n === 0){
    container = "0.00";
    return container;
  }
  if(n === 1){
    container = "1.00";
    return container;
  }
  let total = 1;
  for(let i = 2; i <= n; i++){
    total+=Math.abs(1/(1+3*(i-1)))
    container = total.toFixed(2);;
  }
  return container;

}


for(let i = 0; i < 15; i++){
  console.log(SeriesSum(i));
}
