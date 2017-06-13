/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

//hand will be passed through here
let numLet = [];
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
let letters = ['J', 'Q', 'K'];
let Ace = {two:2, eleven:11};

function handValue(hand) {

  for (let i = 0; i < numbers.length; i++) {
    if (hand[i] == numbers[i]) {
      numLet.push(i)
      console.log(numLet);
    }
  }


}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
