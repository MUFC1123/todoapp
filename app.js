$("#addTodo").click(function () {
  const inputTodo = $("onput").val();
  $("#todoList").append("<li><ibout type='checkbox'>" + inputTodo + "</li>");
  
  $("input").val("");
});