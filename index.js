// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
/**
 * - Variables
 * S[n] = sum of the first n terms
 *    a_1 = first term
 *    a_2 = second term
 *    a_n = the nth term
 *      d = the difference between each term
 *      n = number of terms
 * 
 * - EQUATION
 *  a_n = S[n] - S[n-1]
 * S[n] = a_1 + a_2 + a_n 
 * 
 */


/// Series to Compute: Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16
//                           1 = 1.00
//                     1 + 1/4 = 1.25
//               1 + 1/4 + 1/7 = 1.39
//        1 + 1/4 + 1/7 + 1/10 = 1.49
// 1 + 1/4 + 1/7 + 1/10 + 1/13 = 1.57



/// Example
//
// s1 = 1.00
// s2 = 1.25
// s3 = 1.39
// s4 = 1.49
//
// === FIRST CALCULATION ===
// * Subtract s2 with s1
//    -> 1.25 - 1.00 = 0.25
//  
// * Add s1 with result of (s2-s1)
//   -> 1.00 + 0.25 = 1.25
// 
// === SECOND CALCULATION ===
// * Subtract s3 with s2
//    -> 1.39 - 1.25 = 0.14
// 
// * Add s1 with s2 and result of (s3-s2)
//    -> 1.00 + 1.25 + 0.14 = 1.39  
// 
// === THIRD CALCULATION ===
// * Subtract s4 with s3
//    -> 1.49 - 1.39 = 0.1
//
// * Add  s3 and result of (s4-s3)
//    -> 1.39 + 0.1 = 1.49

function SeriesSum(n)
{
  // Happy Coding ^_^
}