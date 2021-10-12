// Add Code here

// step 1: get the input tag 

let inputs = document.getElementsByTagName("input")
let fname = inputs[0]
let lname = inputs[1]

fname.addEventListener("input", text)
lname.addEventListener("input", text)

function text(){
    fname_value = fname.value
    lname_value = lname.value

    let text = `You have entered: ${fname_value} ${lname_value}`
    document.getElementById("name").innerHTML = text
}