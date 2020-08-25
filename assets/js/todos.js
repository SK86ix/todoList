// Check Off Specific Todos By Clicking
$("ul").on("click", ".checkbox", function(){
  $(this).parent().toggleClass("completed");
  count();
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
      $(this).remove();
      count();
      displayTrashCan();
    });
    event.stopPropagation();
});

// Add New Todos
$('.new-todos').keypress(function(event){
  if(event.which === 13){ // whether the key is ENTER
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    console.log(todoText);
    // check if inside the input is blank or not
    if(todoText.match(/^[ 　\r\n\t]*$/)){
      alert("Please type something ;(");
    }else{
      // create a new li and add to ul
      $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span><input type='checkbox' class='checkbox'></input> " + todoText + "</li>");
    }
    count();
  }
  displayTrashCan();
});

// Mode Buttons
$(".mode").click(function(){
  $('.fa-plus').toggleClass('none');
  $('.fa-minus').toggleClass('none');
  $('.new-todos').toggleClass('none');
  displayTrashCan();
});

// Delete Button
$('.delete-all').on('click', function(){
  if($('li').length>0){
    var choice = confirm("Are you sure to delete all the list?");
    if(choice){
      $('.list').empty();
      displayTrashCan();
      alert("Well done!");
      $('.message-display').html('<div class="counter">Let\'s get it started :)</div>');
    }
  }
});


function count(){
  var num = $('li').length - $('.completed').length;
  if(num === 0){
    $('.message-display').html('<div class="counter">All Done :)</div>');
  }else if(num === 1){
    $('.message-display').html('<div class="counter">You have<span class="num"> ' + num + '</span> todo left!</div>');
  }else{
    $('.message-display').html('<div class="counter">You have<span class="num"> ' + num + '</span> todos left!</div>');
  }
}

function displayTrashCan(){
  if($('li').length>0){
    $('.delete-all').css('opacity', 1.0);
  }else{
    $('.delete-all').css('opacity', 0);
  }
}

// Display today's date
var today = new Date();
var day;
if(today.getDay()===1){
  day = "Mon.";
}else if(today.getDay()===2){
  day = "Tue.";
}else if(today.getDay()===3){
  day = "Wed.";
}else if(today.getDay()===4){
  day = "Thu.";
}else if(today.getDay()===5){
  day = "Fri.";
}else if(today.getDay()===6){
  day = "Sat.";
}else{
  day = "Sun.";
}
var date = today.getFullYear() + "/" +  (today.getMonth() + 1) + "/"+ today.getDate() + "/" + day;

$('.displayDate').text(date);
