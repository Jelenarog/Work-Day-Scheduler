// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

newFunction();


function newFunction() {
  var hourList = $("#hour");
  var saveButton = $('.saveBtn');
  var wrap = $(".container-fluid");
  var currentDate = $('#currentDay');
  var currentBlock = $(".time-block");
  var userInput = $("<textarea>");
  var taskInput = $("#input");
  $(function () {

    //code to display the current date in the header of the page.
    var today = dayjs();
    currentDate.text(today.format('dddd ,MMMM DD YYYY'));
    saveButton.on('click', function (event) {
      //event.preventDefault()
      var target = event.target;
      if (target.matches('button')) {
        let text = [];
        for (let i = 0; i < taskInput.length; i++) {
          text.push(taskInput.val());
          console.log(text);
          localStorage.setItem("userInput", JSON.stringify(text));
          var task = JSON.parse(localStorage.getItem("userInput"));
          //console.log(task);
          taskInput.text(task);
          console.log("Button works");


        }
        //     text.push(taskInput.val());
        //     console.log(text);
        // localStorage.setItem("userInput",JSON.stringify(text))
        // var task = JSON.parse(localStorage.getItem("userInput"));
        // console.log(task);
        // taskInput.text(task);
        // console.log("Button works");  
      }
    });


    //save past tasks
    function pastTasks() {

      var storedTask = JSON.parse(localStorage.getItem("userInput"));
      if (storedTask !== null) {
        task = storedTask;
      }
    }
    pastTasks();

    currentBlock.each(function () {
      var blockID = $(this).attr('id');
      //console.log(blockID);
      //this is current time 
      var currentTime = dayjs().format('H');
      //console.log(currentTime);
      if (currentTime = blockID) {
        currentBlock.addClass('present');
      }
      else if (currentTime < blockID) {
        currentBlock.addClass('past');
      }
      else {
        currentBlock.addClass('future');
      }

    });
    pastTasks();
  });
}
//  var blockID = wrap.children().children(1).eq(0).val();
//  console.log(blockID);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

