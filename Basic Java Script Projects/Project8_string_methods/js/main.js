
//concat() method joins two or more strings and returns a new joined string.
function fullsentence(){
 
    var part1="hello";
    var part2="my name is John";
   var part3="I am learning JavaScript";
    var whole_sentence=part1.concat(" ",part2," ",part3);
    document.getElementById("sentence").innerHTML=whole_sentence;

}


//slice() method extracts a part of a string and returns the extracted part in a new string.
function sliceString(){
    var str="Hello, World!";
    var sliced=str.slice(7,12);
    document.getElementById("slice_result").innerHTML=sliced;
}

//uppercase() method converts a string to uppercase letters.
function toUpperCase(){
    var str="hello world";
    var upper=str.toUpperCase();
    document.getElementById("upper_result").innerHTML=upper;
}

//search() method searches a string for a specified value and returns the position of the match.
function searchString(){

    var str="Hello, welcome to my world.";
    var pos=str.search("world");
    document.getElementById("search_result").innerHTML=pos;


}

//number to string() method converts a number to a string.

function numberToString(){
     var x=123;
     
     document.getElementById("number_result").innerHTML=typeof x.toString() ;//typeof operator returns the data type of a variable or an expression.

}


//precision() method formats a number to a specified length.
function precisionmethod(){

    var x=123.432789;

    document.getElementById("precision_result").innerHTML=x.toPrecision(5);





}


//tofixed() method formats a number to a specified number of decimal places.
function tofixedmethod(){

    var x=123.456789;
    document.getElementById("tofixed_result").innerHTML=x.toFixed(2);

}

// thevalueof() method returns the primitive value of a string.
function valueofmethod(){

    var str="Hello, World!";
    document.getElementById("valueof_result").innerHTML=str.valueOf();
}