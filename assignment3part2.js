	
//The Rock, Paper, Scissors Game (10 points)
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//•	Rock destroys scissors.
//•	Scissors cut paper.
//•	Paper covers rock.
//Our code will break the game into 3 phases:
//1.	User makes a choice. How will we collect the user’s choice?
//2.	Computer makes a choice. How will we collect the computer’s choice?
//3.	A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//1.	Begin by prompting the user for their choice.
//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

//var userChoice = prompt("Do you choose rock, paper or scissors?");
//userChoice = userChoice.toLowerCase(); 
//while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
//   userChoice = prompt("Do you choose rock, paper or scissors?"); 
//        
//    }
//    
//var computerChoice = Math.floor(Math.random()*90);
//// 0-30; 31-60; 61-90
//if (computerChoice < 30) {
//	computerChoice = "rock";
//} 
//else if(computerChoice <= 60) {
//	computerChoice = "paper";
//    } 
//    else {
//        computerChoice = "scissors";
//    }
//console.log("Computer picked " + computerChoice);
//var compare = function(choice1,choice2) {
//    if (choice1 === choice2) {
//        return "The result is a tie!"
//    }
//    else if (choice1 === "rock") {
//            if (choice2 === "scissors") {
//                return "rock wins"
//            }
//            else {
//                return "paper wins"
//            }
//        }     
//        else if (choice1 === "paper") {
//                if (choice2 === "rock") {
//                return "paper wins"
//                }
//                else {
//                    return "scissors wins"
//                }
//            }
//            else if (choice1 === "scissors") {
//                    if (choice2 === "paper") {
//                        return "scissors wins"
//                    }
//                    else {
//                        return "rock wins"
//                    }
//                }
//}
//window.console.log(compare(userChoice,computerChoice));


//The Basic Calculator (10 points)
//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
//1.	Prompt the user for a number and store that in a variable.
//2.	Prompt the user for a second number and store that in a variable.
//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//4.	Create a new named function called calculate() that accepts 3 parameters.
//5.	Call the calculate function and pass in the 3 variables as parameters. 
//HINT: You will need to convert the 2 numbers from strings to numbers. 
//6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.

//var x = parseInt(prompt("Enter any number")); 
//var y = parseInt(prompt("Enter any second number")); 
//var operation = prompt("Pick + - * /"); 
//while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
//    operation = prompt("Pick + - * /"); 
//}
//
//function calculate(a, b, c){
//    switch (c){
//        case "+": 
//            return a + b;
//            break; 
//        case "-": 
//            return a - b;
//            break;
//        case "*": 
//            return a * b;
//            break;
//        case "/": 
//            return a / b;
//            break; 
//        default:
//            window.alert("cannot do that"); 
//            break; 
//    }               
//}
//
//window.console.log(calculate(x, y, operation)); 


//Death by JavaScript (4 points each for 20 points total)
//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'

//function deathjs(x){
//    var myArray = x.split(""); 
//    myArray = myArray.sort(); 
//    x = myArray.join(""); 
//    return x; 
//}
//window.console.log(deathjs('webmaster')); 

//
//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'
// function uppercase(str)  
//{  
//  var array1 = str.split(' ');  
//  var newarray1 = [];  
//      
//  for(var i = 0; i < array1.length; i++){  
//      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));  
//  }  
//  return newarray1.join(' ');  
//}  
//console.log(uppercase("the quick brown fox"));  
//
//3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5
//


//function vowel_count(str1)  
//{  
//  var vowel_list = 'aeiouAEIOU';  
//  var vcount = 0;  
//    
//  for(var x = 0; x < str1.length ; x++)  
//  {  
//    if (vowel_list.indexOf(str1[x]) !== -1)  
//    {  
//      vcount += 1;  
//    }  
//    
//  }  
//  return vcount;  
//}  
//console.log(vowel_count("The quick brown fox"));  

//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
//
//function makeid(l)  
//{  
//var text = "";  
//var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
//for(var i=0; i < l; i++ )  
//{    
//text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
//}  
//return text;  
//}  
//console.log(makeid(8));  

//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"


//function Longest_Country_Name(country_name)  
//  {  
//  return country_name.reduce(function(name, country)   
//  {  
//    return name.length > country.length ? name : country;  
//  },   
//"");  
//}  
//console.log("The longest country name is " + Longest_Country_Name(["Australia", "Germany", "United States of America"]));  