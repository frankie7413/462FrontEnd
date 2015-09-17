var main = function() {
	var college, 
		major, 
		course,
		subject,
		message,
		missingField;


	function SectionmissingField(check){
		if(check === false){
			$('#fillSection').empty();
			$('#fillSection').append('Please fill in area with *.');
		} else {
			console.log('Inputs are complete');
		}

		
	};

	$('#button').click(function(){
		//alert('button press');
		console.log('button press')
		if ($('#colleges').val() === 'college')
		{
			missingField = false;
			console.log('Select a college');
			// alert('Select a college');
			$('#collegeOption').empty();
			$('#collegeOption').append('College*');
		}else{
			$('#collegeOption').empty();
			$('#collegeOption').append('College');
		} 

		if ($('#major').val() === 'major'){
			missingField = false;
			console.log('Select a major');
			$('#majorOption').empty();
			$('#majorOption').append('Major*');
		} else{
			$('#majorOption').empty();
			$('#majorOption').append('Major');
		}

		if($('#course').val() === 'course'){
			missingField = false;
			console.log('Select class');
			$('#courseOption').empty();
			$('#courseOption').append('Course*');
		} else {
			$('#courseOption').empty();
			$('#courseOption').append('Course');
		}
		
		SectionmissingField(missingField);

	});
}

$(document).ready(main);