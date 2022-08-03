$(document).ready(function () {
  //
  for (let i = 9; i < 19; i++) {
    let hourDisplay = "";
    if (i < 12) {
      hourDisplay = i + "am";
    } else if (i === 12) {
      hourDisplay = i + "pm";
    } else {
      hourDisplay = i - 12 + "pm";
    }

    let rowDiv = $("<div>").addClass("row time-block").attr("id", i);
    let hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay);
    let textArea = $("<textarea>")
      .addClass("col-8 description")
      .val(localStorage.getItem(i));
    let button = $("<button>")
      .addClass("col-2 saveBtn")
      .attr("id", i)
      .text("save")
      .on("click", function () {
        let hourKey = $(this).attr("id");
        let activity = $(this).siblings(".description").val();
        localStorage.setItem(hourKey, activity);
      });
    $(".container").append(rowDiv.append(hourDiv, textArea, button));
  }
});

//change color
