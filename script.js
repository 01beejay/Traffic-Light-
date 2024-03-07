(function() {
  const frame1_red = document.getElementById('frame1_red');
  const frame1_yellow = document.getElementById('frame1_yellow');
  const frame1_green = document.getElementById('frame1_green');
  const frame2_red = document.getElementById('frame2_red');
  const frame2_yellow = document.getElementById('frame2_yellow');
  const frame2_green = document.getElementById('frame2_green');

  // blur all colors
  resetFrameColors();

  startFrame1Green()



  
  
  function startFrame1Green()
  {
    frame2_countdown.style.color= "red";
    frame1_countdown.style.color= "green";
    frame1_countdown.style.textAlign="center"
    frame2_countdown.style.textAlign= "center";
    frame1_countdown.style.fontSize= "3rem";
    frame2_countdown.style.fontSize= "3rem";
    frame1_countdown.style.fontWeight= "bold";
    frame2_countdown.style.fontWeight= "bold";

    start(frame1_green, frame2_red, 30, 'green', startFrame1Yellow)
  }

  function startFrame1Yellow()
  {

    frame1_countdown.style.color= "yellow";
    frame2_countdown.style.color= "yellow";
    frame1_countdown.style.textAlign="center"
    frame2_countdown.style.textAlign= "center";
    frame1_countdown.style.fontSize= "3rem";
    frame2_countdown.style.fontSize= "3rem";
    frame1_countdown.style.fontWeight= "bold";
    frame2_countdown.style.fontWeight= "bold";
    start(frame1_yellow, frame2_yellow, 5, 'yellow', startFrame1Red)
  }

  function startFrame1Red()
  {
    frame1_countdown.style.color= "red";
    frame2_countdown.style.color= "green";
    frame1_countdown.style.textAlign="center"
    frame2_countdown.style.textAlign= "center";
    frame1_countdown.style.fontSize= "3rem";
    frame2_countdown.style.fontSize= "3rem";
    frame1_countdown.style.fontWeight= "bold";
    frame2_countdown.style.fontWeight= "bold";
    
    start(frame2_green, frame1_red, 30, 'green', startFrame1Green)
  }

  
  function resetFrameColors()
  {
    frame1_red.style.opacity= 0.3;
    frame1_yellow.style.opacity = 0.3;
    frame1_green.style.opacity= 0.3;
    frame2_red.style.opacity= 0.3;
    frame2_yellow.style.opacity = 0.3;
    frame2_green.style.opacity= 0.3;
  }

  
  function start(light1, light2, countdown, countdown_color, next) {
    resetFrameColors();
    light1.style.opacity = light2.style.opacity = 1;
    
    const frame1_countdown = document.getElementById('frame1_countdown');
    const frame2_countdown = document.getElementById('frame2_countdown');
    frame1_countdown.color = frame2_countdown.color = countdown_color;

    const timer = setInterval(function() { 
      countdown--; 
      frame1_countdown.innerHTML = frame2_countdown.innerHTML=countdown;
      
      console.log(countdown)
      if (countdown === 0) { 
        clearInterval(timer); 
        next();
      }
    },  1000); 
  }
  


  
}())



// function startTraficSignal () {
   
//   //First Traffic Signal
//     const red = document.getElementById('red');
//     const yellow = document.getElementById('yellow');
//     const green = document.getElementById('green');


//        //Light Indicators 
            
//               if  (green.style.opacity = 1 ) {
//                 //Green Light indicator
//                   setTimeout (function() {
//                       red.style.opacity= 0.3;
//                       green.style.opacity =1;
//                       yellow.style.opacity= 0.3;

              
//                    //Green Countdown
//                         let count = 30;
//                         const timer = setInterval(function() { count--; 
//                         document.getElementById('redcountdown').innerHTML=count;
//                         redcountdown.style.color="green";
//                         redcountdown.style.textAlign="center";
//                         redcountdown.style.paddingTop="px";
//                         redcountdown.style.fontSize="3rem";
                        
//                         console. log(count); 
//                         if (count === 0) { 
//                           clearInterval(timer); 
//                           console. log("Time's up!"); 
//                         }
//                         },  1000); 
                      
//           //
//             },30000)  
          
  
//         //Yellow Light Indicator
        
//                     setTimeout (function() {
//                           red.style.opacity= 0.3;
//                           yellow.style.opacity=1;
//                           green.style.opacity=0.3;
                        
                          
//                             //Yellow Countdown
//                                 let count = 5;
//                                 const timer = setInterval(function() { count--; 
//                                 document.getElementById('redcountdown').innerHTML=count;
//                                 redcountdown.style.color="yellow";
//                                 redcountdown.style.textAlign="center";
//                                 redcountdown.style.paddingTop="px";
//                                 redcountdown.style.fontSize="3rem";
                                
//                                 console. log(count); 
//                                 if (count === 0) {
//                                   clearInterval(timer);
//                                     console. log("Time's up!"); 
//                                   } 
//                                 }, 1000); 
                              
//                         //

//                   }, 5000);
                              
                            


//         //Red Light Indicator
              
//                     setTimeout (function() {
                    
//                             green.style.opacity= 0.3;
//                             red.style.opacity=1;
//                             yellow.style.opacity= 0.3;

//                            //Red Countdown
//                                 let count = 30;
//                                 const timer = setInterval(function() { count--; 
//                                 document.getElementById('redcountdown').innerHTML=count;
//                                 redcountdown.style.color="red";
//                                 redcountdown.style.textAlign="center";
//                                 redcountdown.style.paddingTop="px";
//                                 redcountdown.style.fontSize="3rem";
                                  
//                                 console. log(count); 
//                                 if (count === 0) { 
//                                   clearInterval(timer); 
//                                   console. log("Time's up!");
//                                 } 
//                                 }, 1000); 
                              
//                                 //

//                 }, 40000);




//        };


// //////////////////////////////////////////////////////////////////////////





// //Second Traffc Signal
//     const red2 = document.getElementById('red2');
//     const yellow2 = document.getElementById('yellow2');
//     const green2 = document.getElementById('green2');


//         // Light  Indicators
//               if (red2.style.opacity= 1) {
//                 //Red light Indicator
//                   setTimeout (function() {
                    
//                             green2.style.opacity=0.3;
//                             red2.style.opacity=1;
//                             yellow2.style.opacity= 0.3;


                    
                            
//                             //countdown
//                             let count = 30;
//                             const timer = setInterval(function() { count--; 
//                             document.getElementById('redcountdown2').innerHTML=count;
//                             redcountdown2.style.color="red";
//                             redcountdown2.style.textAlign="center";
//                             redcountdown2.style.paddingTop="px";
//                             redcountdown2.style.fontSize="3rem";
                            
//                             console. log(count); 
//                             if (count === 0) { 
//                               clearInterval(timer); 
//                               console. log("Time's up!");
//                             } 
//                             }, 1000); 
                          
//                             //


//                }, 30000);

          


//        //Yellow Light Indicator
              
//                   setTimeout (function() {
//                         red2.style.opacity= 0.3;
//                         yellow2.style.opacity=1;
//                         green2.style.opacity= 0.3;
                
                  
//                         //countdown
//                         let count = 5;
//                         const timer = setInterval(function() { count--; 
//                         document.getElementById('redcountdown2').innerHTML=count;
//                         redcountdown2.style.color="yellow";
//                         redcountdown2.style.textAlign="center";
//                         redcountdown2.style.paddingTop="px";
//                         redcountdown2.style.fontSize="3rem";
                        
//                         console. log(count); 
//                         if (count === 0) {
//                           clearInterval(timer);
//                             console. log("Time's up!");
//                           } 
//                           }, 1000); 
                      
//                         //



//                 }, 5000);
            

//        //Green light Indicator
              
//                   setTimeout (function() {
//                         red2.style.opacity= 0.3;
//                         green2.style.opacity=1;
//                         yellow2.style.opacity= 0.3;





//                         //countdown
//                         let count = 30;
//                         const timer = setInterval(function() { count--; 
//                         document.getElementById('redcountdown2').innerHTML=count;
//                         redcountdown2.style.color="green";
//                         redcountdown2.style.textAlign="center";
//                         redcountdown2.style.paddingTop="px";
//                         redcountdown2.style.fontSize="3rem";

//                         console. log(count); 
//                         if (count === 0) { 
//                         clearInterval(timer); 
//                         console. log("Time's up!"); 
//                         } 
//                         }, 1000); 

//                         //



//               },30000);

              

//        }




// };










// //Time interval For Each Light
// var timer = setInterval(()=> {
//     startTraficSignal();
//   },65000);




// startTraficSignal();




