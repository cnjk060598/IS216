var input = document.getElementsByTagName("input");



var first_name = input[0]
var last_name = input[1]

first_name.addEventListener("input", getName)
last_name.addEventListener("input", getName)


function getName(){
    var result = document.getElementById("name");

    result.innerHTML = "You have entered: " + first_name.value + " " + last_name.value
}
