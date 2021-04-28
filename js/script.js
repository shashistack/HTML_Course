function submitForm() {
  // validation for name field
  if (document.getElementById("username").value == "") {
    alert("Please enter name");
    document.getElementById("username").focus();
    return false;
  }
  if (document.getElementById("city").value == "") {
    alert("Please enter city");
    document.getElementById("city").focus();
    return false;
  }
  return true;
}

function changeName() {
  document.getElementById("name").value = "Suresh";
}

function changeParagraphText() {
  document.getElementById("helloworld").innerHTML = "Hello JavaScript";
}

function onchange_mobile(mobile_number) {
  console.log(mobile_number);
}
