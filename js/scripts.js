function Task(title, startTime, endTime, details) {
  this.title = title;
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
  });
});
