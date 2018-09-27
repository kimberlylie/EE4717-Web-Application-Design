//registers the event handlers

var nameNode = document.getElementById("name");
var emailNode = document.getElementById("email");
var dateNode = document.getElementById("startDate");

nameNode.addEventListener("change", chkName, false);
emailNode.addEventListener("change", chkEmail, false);
dateNode.addEventListener("change", chkDate, false);