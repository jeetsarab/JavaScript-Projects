// window.alert("Hello world");
//document.write("Hello World");
/*var A = "this is a string";

document.write(A); */

//var A = "this is a string";

//window.alert(A);



//var message = 'john said, "I\'m learning java script "';

//window.alert(message);


//var message = "hello" + " " + "javascript";

//document.write(message);

var firstName = "john";
var age = 25 ;
var city = "toronto"; 

document.write ("My name is "+firstName+", " + "I am "+ age + " years old" + " "+ "and i live in "+ city +".");





var number = 3;
var number2 = 4 ;

document.write(number+number2);

//creating two variables
var sent1 = "This is Sent 1";  
var sent2 = "This is sent 2"; 

//displaying the variables using documnet.write method
document.write(sent1+" "+sent2);

function showHello(){

    
    window.alert("hello");

}

function showAge(){

    let age=31;

    
    window.alert("my age is"+age);

}

function checkAge(){

    let age = 15;

  if( age >=18){
        alert("you are an adult");

  }
  else{
     alert("you are minor");
  }


}


function checkScore(){
 
        let score =75;
        if(score>=50){
              alert("pass");
        }

        else{
             alert("fail");
        }
    

}



function checkGrades(){
 
        let score =75;
        if(score>=80){
              alert("A grade");
        }

        else if(score >=60){
             alert("B grade");
        }

        else{

            alert("fail");
        }
    

}

function operator(){

      var sentence= "i am working ";

        sentence += "but working at home";

        document.getElementById("find").innerHTML=sentence;

}

//add function
function addition(){
         
    var plus= 2 + 2 ;

     document.getElementById("math").innerHTML= "2+2=" + plus;

    

}

//subtraction function
function subtraction(){
         
    var minus= 8 - 2 ;

     document.getElementById("math2").innerHTML= "8 - 2=" + minus;

    



}



//multiplication function
function multiplication(){
         
    var multi= 8 * 2 ;

     document.getElementById("math3").innerHTML= "8 * 2=" + multi;

    

}
//division function
function division(){
         
    var divide= 8 / 2 ;

     document.getElementById("math4").innerHTML= "8 / 2=" + divide;

    

}

//multiple operators function
function multiple(){
         
    var calc=  (1+2) * 10  / ( 2 - 5)  ;

     document.getElementById("math5").innerHTML= calc;

    

}

//modulus operators function
function modulus(){
         
    var mod=  25 % 6  ;

     document.getElementById("math6").innerHTML= mod;

    



}



//percentage operators function
function percentage(){
         
    var per=  (45/60)  * 100  ;

     document.getElementById("math7").innerHTML= per;

    

}
//incriment function
function incriment(){
         
    var x = 3.6 ;
    var result = ++x;  

     document.getElementById("inc").innerHTML= result;

    

}

// number between 0 and 1000000   for 0 and Math.random() 
window.alert(Math.random() * 1000000);