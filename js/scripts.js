function Task(taskTitle, startTime, endTime, details) {
  this.taskTitle = taskTitle;
  this.startTime = startTime;
  this.endTime = endTime;
  this.details = details;
}

$(document).ready(function(){
  $('#toDoForm').submit(function(event) {
    event.preventDefault();
    var taskTitle = $('#taskTitle').val();
    var startTime = $('#startTime').val();
    var endTime = $('#endTime').val();
    var details = $('#details').val();
    var newTask = new Task(taskTitle, startTime, endTime, details);

    $('#taskList').append("<li><span class ='taskClick'>"+ newTask.taskTitle +"</span><span class='removeButton glyphicon glyphicon-remove'></span></li>");

    $('.taskClick').last().click(function() {
      $('#taskDetails').show();
      $('.taskTitle').text(newTask.taskTitle);
      $('.startTime').text(newTask.startTime);
      $('.endTime').text(newTask.endTime);
      $('.details').text(newTask.details);
    });

    $('.removeButton').last().click(function(){
      $(this).parent().remove();
    });
  });
});
