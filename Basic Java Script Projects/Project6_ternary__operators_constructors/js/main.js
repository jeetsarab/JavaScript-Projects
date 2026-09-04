
//ternary
function Ride_Function(){

    var Height , Can_ride;

    Height=document.getElementById("Height").value;
    Can_ride= (Height<52) ? "you are too short" : "you are tall enough";

    document.getElementById("Ride").innerHTML=Can_ride + " "+ "to ride.";




}

function voteorNot(){
    
    var  age , can_vote ;

      age = document.getElementById("age").value;

     can_vote = (age>18) ? "you can vote" : " you can't vote";

      document.getElementById("voter").innerHTML=can_vote + " "+ "for elections.";


}

function vehical(Make , Model , Year ,Color){

              this.vehical_make= Make;
              this.vehical_model=Model;
               this.vehical_year=Year;
                this.vehical_color=Color; 

     



}

     var jack= new vehical ("dodge", "journey","2024","red");
     var emily = new vehical("ford","focus","2010","yellow");
     var robin = new vehical("honda","crv","2023","green");

     function myFunction(){

         document.getElementById("keywords_constructor")
         .innerHTML="Erik drives a "+" " +jack.vehical_make +" "+ "his model is" +"  "+jack.vehical_model +"  "+ "year is " +" "+ jack.vehical_year+" "+  " color is "+" "+ jack.vehical_color ;


     }
   


     //reserved keywords

     function checkkeyword(){
     let value = "return";


     document.getElementById("demo").innerHTML=value;


     }


     function car(brand){
                
        this.brand=brand;

               

     }

     let car1 = new car("honda");

      document.getElementById("demo2").innerHTML=car1.brand;



      //nested function


      function mynested(){

                let x= 1;

                 function nested2() {

                    let x = 3;

                     document.getElementById("for").innerHTML=x;     

                }

                nested2();


         }



          function time_Function(){

                var time= new Date().getHours();


             if( time < 12 && time < 0 ){

                reply ="good morning";

                
                
             }

             else if(time >=12 && time <18){


                reply="good after noon";

             }

             else{

                 reply= "good evening" ;

             }

              document.getElementById("greeting").innerHTML=reply;  

             }
   

         


          
