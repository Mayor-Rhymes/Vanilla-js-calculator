

var screen = document.getElementById("screen");


var buttons = document.getElementsByTagName("p");
Array.from(buttons);
var reg1 = /0-9/;



for(let i = 0; i < (buttons.length) - 3; i++)
{
   
   
   buttons[i].onclick = () => 
   {

       if(screen.value === null)
       {


        screen.value = buttons[i].innerHTML;

       }
       else
       {


        screen.value += buttons[i].innerHTML;

       }

   }


   

}





buttons[buttons.length - 1].onclick = () =>
{
    var conv = String(screen.value);
    
   if(conv.indexOf("+") !== -1)
   {
     
      
      
      //console.log(conv.indexOf('+'))

      var x = Number(conv.slice(0, conv.indexOf('+')));
      var y = Number(conv.slice((conv.indexOf('+') + 1), conv.length + 1));
      var result = x + y
      screen.value = result;
      

      





     
   }
   else if(conv.indexOf("-") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('-')));
      var y = Number(conv.slice((conv.indexOf('-') + 1), conv.length + 1));
      var result = x - y
      screen.value = result;
      

      





     
   }

   else if(conv.indexOf("x") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('x')));
      var y = Number(conv.slice((conv.indexOf('x') + 1), conv.length + 1));
      var result = x * y
      screen.value = result;
      

      





     
   }
   
   else if(conv.indexOf("/") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('/')));
      var y = Number(conv.slice((conv.indexOf('/') + 1), conv.length + 1));
      var result = x / y
      screen.value = result;
      

      





     
   }

   else if(conv.indexOf("^") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('^')));
      var y = Number(conv.slice((conv.indexOf('^') + 1), conv.length + 1));
      var result = x ** y
      screen.value = result;
      

      





     
   }

   else if(conv.indexOf("%") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('x')));
      var result = x/100
      screen.value = result;
      

      





     
   }


   else if(conv.indexOf("!") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('!')));
      var result = factorial(x);
      screen.value = result;
      

      





     
   }

   else if(conv.indexOf("pi") !== -1)
   {
     
      
      
    

      var x = Number(conv.slice(0, conv.indexOf('pi')));
      var result = x*3.142
      screen.value = result;
      

      





     
   }

  

   


}




function factorial(d)
{

   if(d <= 0)
   {


       return 1;
   }
   else{


    return d*factorial(d - 1);

   }


};

buttons[buttons.length - 2].onclick = () =>
{


     var nope = Array.from(screen.value);
     
     
    
     



     
     

}

buttons[buttons.length - 3].onclick = () =>
{


     screen.value = null;

     
     

}












