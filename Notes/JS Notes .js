// Prevents the page from going to another link
event.preventDefault();


//  To get innerText of an element by id:
//      - this will return the plain text of whatever that is within the <id> tags
document.getElementById("id_name").innerText

// TO get innerHTML
//  - This will return the innerHTML of the <id> that is chosen 
document.getElementById("id_name").innerHTML


// Adding a new <p> ... </p> tag to existing list of paragraphs 

step 1: create the <p> element object 
let para = document.createElement("p")

Step 2: Create a textnode that will contain the text that you want to add to the paragraph
let textnode = document.createTextNode("input text here") 

Step 3: Append created textnode to the paragraph that has been created in step 1
para.appendChild(textnode)

Step 4: Append Para into whatever is the parent division, the tag that is above the <p> element 
let parent_div = document.getElementById("parent")
parent_div.appendChild(para) 

// Removing elements from a list base on the index number 

Step 1: get the element id of the list 
let whatever_list.getElementById("list_id")

step 2: 
remove the fruit base on the index number 
whatever_list.children[index].remove()


// Adding a listener to the form from input fields 

Step 1: Get the tag name <input> of the text input field 

var inputs = document.getElementsByTagName("input");
var input1 = inputs[0];
var input2 = inputs[1];

Step 2: add event listener to the two inputs 

input1.addEventListener("input", getName);
input2.addEventListener("input", getName);

Step 3: create a function to add the listener into the browser

function getName() {
    // Add Code here
    var fName = input1.value;
    var lName = input2.value;

    var name = document.getElementById("name")
    name.innerHTML = "You entered: " + fName + " " + lName;
}

// Adding Event Listener #addEventListener()

Step 1: Create your target 

Step 2: Create addEventListener
target.addEventListener(type, listener) https://www.w3schools.com/jsref/dom_obj_event.asp (Types of event listener) 

Step 3: Creater your listener (Function) 








 



