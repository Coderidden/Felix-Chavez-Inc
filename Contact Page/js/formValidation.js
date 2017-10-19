/* JavaScript Email Validation */

document.addEventListener('DOMContentLoaded', function()
{
	var form1 = document.getElementById('form1');
	var name = document.getElementById('name');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');
	var subject = document.getElementById('subject');
	var message = document.getElementById('message');
	var button = document.getElementById('formButton');
	var errMsg = document.getElementById('errMessage');
	var errHTML = "";

	button.addEventListener('click', function(ev){
	var nameValid = name.value;
	var emailValid = email.value;
	var phoneValid = phone.value;
//	var subjectValid = subject.value;
//	var messageValid = message.value;

	if(nameValid == "")
	{
	 errHTML += '<span style="color: red">Please enter a name.</span><br/>' ;
//	 alert(errHTML);
	}
	if(emailValid == "")
	{
		errHTML += '<span style="color: red">Please enter a valid email.</span><br/>';
//		alert(errHTML);
	}
	if(phoneValid == "")
	{
		errHTML += '<span style="color: red">Please enter a valid phone.</span><br/>';
//		alert(errHTML);
	}
	if(errHTML == "")
	{
		window.location = "contact.html";
		errHTML = "";
		return true;
	}
	else
	{
		window.location = "contact.html";
		document.getElementById('errMessage').innerHTML = errHTML;
		console.log(errHTML);
		errHTML += "";
		return false;
	}
	
});
});