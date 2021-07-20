// NOTE: This script must be loaded *after* both jQuery and Bootstrap!
$(document).ready(function () {
    // Set the first changelog accordian to the "primary" class
    $('#accordion div').first().removeClass("panel-default").addClass("panel-primary");
});