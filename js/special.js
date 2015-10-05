$(document).ready(function() {
	var today = moment().format("MM-DD");
	if(today == "10-05") {
		$.ajax({
			url: "test.html",
			success: function(data) {
				$("#main").html(data);
			},
			dataType: "html"
		});
	}
});
