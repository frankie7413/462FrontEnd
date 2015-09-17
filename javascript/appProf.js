var main = function() {
	var college,
		fname,
		lname,
		email,
		password,
		missingField,
		$content;

	//makes sure that the fields have a valid input and fowards content to server
	function SectionmissingField(check){
		console.log('checking fields')
		if(check === false){
			$('#fillSection').empty(); //for when user does nor fill fields properly
			$('#fillSection').append('Please fill in area with *.');
		} else {
			console.log('Inputs are complete');
			PostInformation();
		}
	};

	//going to suppy information to sql server 
	function PostInformation () {
		console.log('suppose to empty');
		$('#submitForm').empty();
		$('#submitForm').append($('<p class="text-center">').text('Your infomation that you entered:'));

		$content = $('<ul class="text-center">');
		$content.append($('<li>').text('College: ' + college));
		$content.append($('<li>').text('First Name '+ fname));
		$content.append($('<li>').text('Last Name: '+ lname));
		$content.append($('<li>').text('Email: '+ email));
		$content.append($('<li>').text('password: '+ password));

		$('#submitForm').append($content);
	}


	//http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	function validateEmail(checkEmail) {
    	//var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	var re = /^([\w-]+(?:\.[\w-]+)*)@csu.fullerton\.edu/i;
    	return re.test(email);
	}


	//checks that all the fields have an input by user
	$('#Signbutton').click(function(){

		missingField = true;

		if($('#colleges').val() === 'college'){
			missingField = false;
			$('#collegeOption').empty();
			$('#collegeOption').append('College*');
		}else{
			college = $('#colleges').val();
			$('#collegeOption').empty();
			$('#collegeOption').append('College');
		}

		if($('#fname').val() === ''){
			missingField = false;
			$('#fnameText').empty();
			$('#fnameText').append('First Name:*');
		}else {
			fname = $('#fname').val();
			$('#fnameText').empty();
			$('#fnameText').append('First Name:');
		}

		if($('#lname').val() === ''){
			missingField = false;
			$('#lnameText').empty();
			$('#lnameText').append('Last Name:*');
		}else {
			lname = $('#lname').val();
			$('#lnameText').empty();
			$('#lnameText').append('Last Name:');
		}

		if($('#email').val() === ''){
			missingField = false;
			$('#emailText').empty();
			$('#emailText').append('Email:*');
		}else {
			email = $('#email').val();
			if(validateEmail(email)){
				$('#emailText').empty();
				$('#emailText').append('Last Name:');
				console.log(email);
				console.log('valid email');
			} else {
				missingField = false;
				$('#emailText').empty();
				$('#emailText').append('Email:* Enter Valid Email');
			}
		}

		if($('#password').val() === ''){
			missingField = false;
			$('#passwordText').empty();
			$('#passwordText').append('Password:*');
		}else {
			password = $('#password').val();
			$('#passwordText').empty();
			$('#passwordText').append('Password:');
		}


		SectionmissingField(missingField);

	});
}

$(document).ready(main);




























