function countdown() {
    var seconds = document.getElementById("seconds").value;


    function tick() {


        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }

    }

    tick();

}


// test 

function start() {

    var timer = setTimeout(showmessage, 3000);

    function showmessage() {
        var message = "Hello World!";

        document.getElementById("fortest").innerHTML = message;

        setTimeout(saybye, 2000);
        function saybye() {

            alert("bye");
          

        }



    }

}

// rocket launch countdown

function launch(){

    
   
   var count = 5 ;

   function countdown(){

      

    document.getElementById("screen").innerHTML = count;

     count= count - 1;
      if (count === 0) {
            
            document.getElementById("screen").innerHTML = "launch";

   }
   else if(count === 3){

           document.getElementById("screen").innerHTML = "get ready";
           setTimeout(countdown, 1000);
   }


   else{
       setTimeout(countdown, 1000);
   }
   

}
 countdown();
}



// slideshow
let slideIndex = 1;

function showSlides() {
let slides =document.getElementsByClassName("mySlides");

for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = 1;
}
slides[slideIndex - 1].style.display = "block";

setTimeout(showSlides, 2000); // Change image every 4 seconds
}

showSlides();




document.getElementById("p1").innerHTML ;