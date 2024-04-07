$("#addTodo").click(function () {
  const inputTodo = $("onput").val();
  $("#todoList").append("<li><ibout type='checkbox'>" + inputTodo + "</li>");
  
  $("input").val("");
});

$(document).on("change", "input[type=checkbox]", function() {
  if($(this).is(":checked")) {
    $(this).parent().css("text-decoration", "line-through");
    $(this),prarent().css("color","#ccc" )
  } else {
    $(this).parent().css("text-decoration", "none");
    $(this),prarent().css("color","#000" )
  }
});