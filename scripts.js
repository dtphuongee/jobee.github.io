window.addEventListener('load', function () {
    const name = document.getElementById("name");

    name.addEventListener("input", function (event) {
        document.getElementById('name-err').innerHTML="";
    });
})

function validateForm(){
    const name = document.getElementById("name").value;

    const valid = name !== null && name.includes(" ");

    if(!valid){
        document.getElementById('name-err').innerHTML="Please enter your full name";
    }

    return valid;
}