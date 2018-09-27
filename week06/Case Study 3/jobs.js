function chkName(event) {

// Get the target node of the event

  var myName = event.currentTarget;

// Test the format of the input name 
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

  var pos = myName.value.search(/^[A-Za-z\s]+$/);

  if (pos != 0) {
    alert("The name you entered (" + myName.value + 
          ") is not in the correct form. \n");
    myName.focus();
    myName.select();
	return false;
  } 
}

function chkEmail(event) {

// Get the target node of the event

  var myEmail = event.currentTarget;

// Test the format of the input name 
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

  var pos = myEmail.value.search(/^[\w.-]+@([\w]+\.){2,4}[\w]{2,3}$/);

  if (pos != 0) {
    alert("The email you entered (" + myEmail.value + 
          ") is not in the correct form.");
    myEmail.focus();
    myEmail.select();
	return false;
  } 
}

function chkDate(event) {
    var myDate = event.currentTarget;

    var pos = new Date(myDate.startDate.value);
    var today = new Date();
    if(pos <= today) {
        alert("The date you have entered (" + myDate.value + ") must from tomorrow onwards.")
    }
  
}