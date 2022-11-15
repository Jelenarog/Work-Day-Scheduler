
$(function () {
 
  var saveButton = $(".saveBtn");
  var currentDate = $("#currentDay");
  var currentBlock = $(".time-block");
  //code to display the current date in the header of the page.
  var today = dayjs();
  currentDate.text(today.format("dddd ,MMMM DD YYYY"));// display current date as weekday, month,day in month and year

  saveButton.on("click", function () { //event listener for each button, function looks for buttons parents ID and for each it stores text area value
    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());//
  });


 for (let i = 0; i < localStorage.length; i++) {//for each local storage 
     currentTask = localStorage.key(i);
     //for each id with value of local storage key for html textarea value input local storage value of the same key
     $('#' + currentTask).children(1).val(localStorage.getItem(currentTask));
 }

  // this is current time
  var currentTime = dayjs().format("H");
  currentTime = Number(currentTime);
  //compare current time with id of each block and apply appropriate style class based on condition
  $(currentBlock).each(function () {
    var blockID = $(this).attr("id");
    blockID = Number(blockID);
    if (currentTime == blockID) {
      $(this).addClass("present");
    } else if (currentTime > blockID) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
});

