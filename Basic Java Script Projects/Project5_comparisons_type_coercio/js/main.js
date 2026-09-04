//typeof assignment 
function show(){
var a =  "3";


document.getElementById("see").innerHTML= typeof a;

}


//coercion assignment

function add(){
var x = "10"+5;


document.getElementById("result").innerHTML=  x;

}
// nan display challenge
function nan(){
var x = 0/0;


document.getElementById("result2").innerHTML= x;

}

// true display challenge
function displaytrue(){
var x = "this is string";


document.getElementById("result3").innerHTML= isNaN(x);

}


// false display challenge
function displayfalse(){
var x = "10";


document.getElementById("result4").innerHTML= isNaN(x);

}


//infinity
function displayInfinity(){
var x = 2E310;
document.getElementById("result5").innerHTML=x;
}
//negative infinity
function displayInfinity2(){
var x = -2E310;
document.getElementById("result6").innerHTML=x;
}
 

//document.write(10>12 ," " ,20>11);


console.log(10>13);
console.log(10==10);


function displayequal(){
    var x= "neetu";
    var y =   "neetus";
    var z= (x===y)

    document.getElementById("result7").innerHTML= z;

}

//&&
function displayand(){

    let age = 18;

    dob =1994;

    let answer = age>=19 && dob >=1995;


    document.getElementById("result9").innerHTML=answer;



}



// || 

function displayor(){

    let age = 20;

    dob =1996;

    let answer = age>=19 || dob >=1995;


    document.getElementById("result8").innerHTML=answer;



}

// ! not

function displaynot(){

    document.getElementById("result10").innerHTML=  ! (20 >10);
}


// ternary 

function displayternary(){
let age = 17;
   result = age>=18 ? "adult" : "minor";

   document.getElementById("result11").innerHTML= result;

    
}

