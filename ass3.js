//Practice with Arrays (5 points)

//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var movies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her"]; 
//window.console.log("Second movie in my array is "+ movies[1]); 

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = []; 
//movies [0] = "Last Night"; 
//movies [1] = "Vicky Christina Barcelona";
//movies [2] = "Midnight is New York"; 
//movies [3] = "Eat, Pray, Love"; 
//movies [5] = "Her"
//window.console.log("First movie in my array is "+ movies[0]); 



//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = []; 
//movies [0] = "Last Night"; 
//movies [1] = "Vicky Christina Barcelona";
//movies [2] = "Yolki"
//movies [3] = "Midnight is New York"; 
//movies [4] = "Eat, Pray, Love"; 
//movies [5] = "Her"
//window.console.log(movies.length); 


//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = []; 
//movies [0] = "Last Night"; 
//movies [1] = "Vicky Christina Barcelona";
//movies [2] = "Yolki"
//movies [3] = "Midnight is New York"; 
//movies [4] = "Eat, Pray, Love"; 
//delete movies [0]
//
//window.console.log(movies); 

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//for (var i = 0; i < movies.length; i++) {
//    console.log(movies[i]); 
//}

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//for (var index in movies) {
//    console.log(movies[index]); 
//}
    

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//var movies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//movies.sort(); 
//for (var index in movies) {
//    console.log(movies[index]); 
//}


//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3

//var favMovies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", ];
//var notMovies = ["Superman", "Superhero", "Home Alone"]; 
//var strFavMovies = favMovies.join("\n"); 
//var strNotMovies = notMovies.join("\n"); 
//window.console.log("Movies I like: \n" + strFavMovies ); 
//window.console.log("Movies I regret watching: \n" + strNotMovies); 

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

//var favMovies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//var notMovies = ["Superman", "Superhero", "Home Alone"]; 
//var allMovies = favMovies.concat(notMovies); 
//allMovies.reverse(); 
//for (index in allMovies) {
//    window.console.log(allMovies[index]); 
//}

//10.	Return just the last item in the array and display it within the console window.


//var favMovies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//favourite = favMovies.pop(); 
//window.console.log(favourite); 




//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.

//var favMovies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//favourite = favMovies.shift(); 
//window.console.log(favourite); 



//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var favMovies = ["Last Night", "Vicky Christina Barcelona", "Midnight is New York", "Eat, Pray, Love", "Her", "Yolki", "S Lyogkim Parom!"];
//var notMovies = ["Superman", "Superhero", "Home Alone"]; 
//window.console.log(notMovies.indexOf("Superman"));  window.console.log(notMovies.indexOf("Superhero")); 
//window.console.log(notMovies.indexOf("Home Alone")); 


//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

//var employee1 = [];
//employee1["id"] = 4235;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 666;
//employee2["name"] = "Petr Ivanov";
//employee2["title"] = "UX Designer";
//employee2["department"] = "IT";
//employee2["isCurrent"] = true;
//
////var employees = employee1.concat(employee2); 
//var employees = []; 
//employees[0] = employee1; 
//employees[1] = employee2; 
//window.console.log(employees[1] ["name"]); 

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

//var employee1 = [];
//employee1["id"] = 4235;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 666;
//employee2["name"] = "Petr Ivanov";
//employee2["title"] = "UX Designer";
//employee2["department"] = "IT";
//employee2["isCurrent"] = true;
//
//var employees = []; 
//employees[0] = employee1; 
//employees[1] = employee2; 
//for (i=0; i < employees.length; i++){
//
//window.console.log(employees[i] ["name"]); 
//}

//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

//var movies = [["Silent Hill", 3], ["Summer Hit", 5], ["Home Alone", 3], ["Forest Gump", 5], ["Tourist", 3]];
//
//   var names = movies.filter(function(item) {
//       return typeof item == "string";
//   } ); 
//    window.console.log(names); 
    


//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.


//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

//var displayMessage = function(s) {
//  window.console.log(s);
//}
//displayMessage('Hello world');

//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

//function calculate(color, year) {
//    "use strict"; 
//    window.console.log("I own a " + color + " " + year + " cat" );
//}
//calculate("blue", "2015");


//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY

//var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"]; 
//var showEmployee = function(x){
//
//    for (var i = 0; i < x.length; i++){
//        window.console.log(x[i] + "\n"); 
//    }
//}
//showEmployee(employees); 
