function submitForm() {
  // validation for name field
  if (document.getElementById("username").value == "") {
    alert("Please enter name");
    document.getElementById("username").focus();
    return false;
  }
  if (document.getElementById("mobile_no").value.length != 10) {
    alert("Mobile number should be 10 digits length");
    document.getElementById("mobile_no").focus();
    return false;
  }
  if (document.getElementById("city").value == "") {
    alert("Please enter city");
    document.getElementById("city").focus();
    return false;
  }
  if (
    !document.getElementById("vehicle1").checked &&
    !document.getElementById("vehicle2").checked &&
    !document.getElementById("vehicle3").checked
  ) {
    alert("Please check at least one option");
    return false;
  }
  if (document.getElementById("biography").value == "") {
    alert("Please enter your biography");
    return false;
  }
  if (document.getElementById("lang_dropdown").value == "") {
    alert("Please select the language");
    return false;
  }
  if (document.getElementById("lang_dropdown").value == "") {
    alert("Please select the language");
    return false;
  }
  if (
    !document.getElementById("tamil").checked &&
    !document.getElementById("kannada").checked &&
    !document.getElementById("malayalam").checked
  ) {
    alert("Please select a language");
    return false;
  }
  return true;
}

function blur_name() {
  console.log("Name field has lost focus");
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

function click_btn() {
  console.log('Button is clicked');
  return false;
}
