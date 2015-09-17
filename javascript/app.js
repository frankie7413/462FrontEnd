var main = function() {
	var college, 
		major, 
		course,
		subject,
		message;


	function SectionMissing(){
		$('#fillSection').append('Please fill in area with *.');
	};

	$("#button").click(function(){
		//alert("button press");
		console.log("button press")
		if ($('#colleges').val() === "college")
		{
			console.log("Select a college");
			// alert("Select a college");
			$('#collegeOption').empty();
			$('#collegeOption').append("College*");
			SectionMissing();

		}
		else if {
			
		}
		
	});
}

$(document).ready(main);