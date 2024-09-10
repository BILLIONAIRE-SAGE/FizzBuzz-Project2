//This is the FizzBuzz Problem. If the number is divisible by 3, the output will be "Fizz", if the number is divisible by 5, the output will be "Buzz". But if the number is divisible by both 3 and 5, the output will be "FizzBuzz".
//If the number meets none of the conditions stated above, the output will be the number itself. 

//The range of numbers have been defined

const startNumb = 0;
const endNumb = 100;


for (let a = startNumb; a <= endNumb; a++){
    let output = '';

   
    if(a % 3 === 0 && a % 5 === 0){
     output = "FizzBuzz"
    }
    
    if(a % 3 === 0){

        output = "Fizz";
   }
   
   if(a % 5 === 0){
        output = "Buzz";
   }
   
   else if(output === ''){
        output = a;
   }

    console.log(output);

}