//for loop odd number



for(let i=1; i<=20; i+=2){

document.getElementById("demo").innerHTML  +="odd number: "+ i + "<br>";

}

//for loop even number

let j=2;

for(let j=2; j<=20; j+=2){
   
document.getElementById("demo2").innerHTML  +="even number: "+ j + "<br>";

}


//while loop odd number

function call_loop(){

    let number=1;

    while(number<=10){

      
        document.getElementById("loop").innerHTML  +="number: "+ number + "<br>";
              number++;


    }

}
// array length

let cars = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];

document.getElementById("demo3").innerHTML = "Number of cars: " + cars.length;


//for loop array


function call_loop_array(){

let array = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];


for(let i=0; i<array.length; i++){

    document.getElementById("demo4").innerHTML  +="car: "+ array[i] + "<br>";
}

}

//arrays and objects

function cat_pics() {

    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";

    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[2] + ".";
    
};



//canvas

function draw() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World", 10, 50);


}

draw();



