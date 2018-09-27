function validateForm() {
    var jobForm = document.getElementById('jobForm');
    // check name
    if (!(/^[a-zA-Z][a-zA-Z\s]*$/.test(jobForm.name.value))) {
        alert('Name is invalid.');
        return false;
    }
    // check email
    if (!(/^[\w.-]+@([\w]+\.){1,3}[\w]{2,3}$/.test(jobForm.email.value))){
        alert('Email is invalid.')
        return false;
    }
    // check date
    var inputDate = new Date(jobForm.startDate.value);
    var today = new Date();
    if (inputDate <= today) {
        alert('Date should be from tomorrow onwards.');
        return false;
    }
}
