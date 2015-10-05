$(document).ready(function() {
	if(moment().month() == 9 && moment().date() == 5) {
		$.ajax({
			url: "test.html",
			success: function(data) {
				$("#main").html(data);
			},
			dataType: "html"
		});
	}
});
