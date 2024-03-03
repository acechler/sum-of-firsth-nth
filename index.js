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
  // Happy Coding ^_^

  /// Initialize
  // s1 = 1
  // s2 = 1/4

  const s1 = 1;
  const s2 = 1.25;

  /// Subtract s2 with s1
  // 1 - 1/4
  let difference = Math.abs(s1-s2);
  let sn = difference + s1;

  
  

  console.log(difference);
  console.log(sn);
  console.log(n);
}

SeriesSum(5);