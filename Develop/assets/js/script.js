$(document).ready(function () {
  //
  for (let i = 9; i < 19; i++) {
    let rowDiv = $("<div>").addClass("row time-block").attr("id", i);
    let hourDiv = $("<div>").addClass("col-2 hour").text(i);
    let textArea = $("<textarea>").addClass("col-8 description");
    let button = $("<button>")
      .addClass("col-2 saveBtn")
      .attr("id", i)
      .text("save")
      .on("click", function () {
        console.log(this);
      });
    $(".container").append(rowDiv.append(hourDiv, textArea, button));
  }
});
