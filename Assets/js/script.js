// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hourList= $("#hour");
var saveButton = $('.saveBtn');
var wrap= $(".container-fluid");
var currentDate= $('#currentDay');
var currentBlock = $(".time-block");

 $(function () {
  
 saveButton.on('click',function(){
  console.log("Button works");
 }
 )
  // var hours= 1;  
  // var createHourList=function(){
  //  for (let i = 0; i < 23; i++) {
     
  //   wrap.children().children().eq().text(hours);
  //   hours+= 1; 
  //  } 
  // }
  //  createHourList();
// //   }

  //code to display the current date in the header of the page.
  var today = dayjs();
  currentDate.text(today.format('dddd ,MMMM DD YYYY'));

//this is current time 
var currentTime = dayjs().format('H');
console.log(currentTime);
//console.log(wrap.children().length); ***number of hours in a day

$('div').children().each(function () {
  var blockID = $(this).attr('id');
  console.log(blockID);
 
  if (currentTime === blockID){
    currentBlock.addClass('present');
  }
  else if (currentTime < blockID){
     currentBlock.addClass('past');
     }  
     else  {
      currentBlock.addClass('future');
      }
});



});


//var blockID = wrap.children().attr('id');
//console.log(blockID);
//Change COLOR
// if (blockID = currentTime ){
//   console.log(blockID);
//   //console.log(currentTime);
//   //console.log(blockID);
//     currentBlock.addClass('present');
//   }



 


//  var blockID = wrap.children().children(1).eq(0).val();
//  console.log(blockID);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //







  
//   var hours= 1;  
//   var createHourList=function(){
//     for (let i = 0; i < 23; i++) {
//      hourList += hourList;
     
//      container.append(hourList);
//      hours+= 1;  
//      timeClock.text(hours + ":00")
//     }
//   }
//   createHourList();
// //   }

//   var listHours=function(){
//     var everyHourList = $("<li>");//in loop add class time-block past or current or future
//     everyHourList.append(hourList);
//         // var everyHour = $("<div>");//in loop add classcol-2 col-md-1 hour text-center py-3
//     // everyHourList.append(everyHour);
//     // var textArea = $("<textarea>"); 
//     // everyHourList.append(textArea);
//     // var button = $("<button>");
//     // everyHourList.append(button);
//     // container.append(everyHourList);
//   }
//   listHours();
