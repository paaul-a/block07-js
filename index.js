//Secure the Vault
//Lock combination: 10 - 40 - 39
//Make three const variables that contain an equation for each number in the combination
//Using + arthematic operator to print the value of 10 num1 variable should equal 5 + 5
//Using * arthematic operator to print the value of 40 num2 variable should eaual 4 * 10
//Using const var num2 and - operator to print the value of 39 set num3 variable to equal num2 - 1
//Beacuse num2 equals 40 we can use that variable to subtract 1 from to get pring the final result 39

//This variable is equal to the string that should print a message before displaying your secret code 
const str1 = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'

//Variable contain the arthematic operators and calcualtions to output the final combination numbers
const num1 = 5 + 5;
const num2 = 4 * 10;
const num3 = num2 - 1;

//logged string that reveals the combination to user in dialog box and alert message 
console.log(`${str1} ${num1} - ${num2} - ${num3}`);
alert(`${str1} ${num1} - ${num2} - ${num3}`);



