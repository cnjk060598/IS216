//=====================================================
// Example 1 (Access by id)
//=====================================================
var node = document.getElementById('title'); // IDs are unique 
console.log(node.innerText)
console.log(node.innerText.length) // returns the length of the string

// element will return you an object
// get innerText will return you the pure text and ignores the HTML  
// get innerHTML will return you the HTML tag 

console.log(node.innerHTML)
console.log(node.innerHTML)


//=====================================================
// Example 2 (Access by tag)
//=====================================================

var node2 = document.getElementsByTagName("h1")
console.log("====== TAG ======")
console.log(node2) 

// Get all instances of <p> tags 
// an array/collection of 0 or more element objects 
let p_elemetns = document.getElementsByTagName("p") //returns an array of all the <p> tag elements 
console.log(p_elemetns)

// loop through the p_elements
for(elem of p_elemetns){
    console.log(elem.innerText)
}



//=====================================================
// Example 3 (Access by class)
//=====================================================
        
let parent_class = document.getElementsByClassName("parent")

for(elem of parent_class){
    console.log(elem.innerText)
}

// Get all element with class female, INSIDE an element with ID="Troublemaker"
// Retrieve the ID first, and then the class 
console.log(
    document.getElementById("troublemaker").getElementsByClassName("female")
) 

// Chain call is important in Javascript

//=====================================================
// Example 4 (access attributes)
//=====================================================
let my_man_element = document.getElementById("myman")
let src_value = my_man_element.getAttribute("src") //  string 'images/kevin.jpg'

let style_width_value = my_man_element.style.width

// change src value to something else 

my_man_element.setAttribute("src", "images/hugh.jpg")
my_man_element.src = "images/hugh.jpg"

//===========================================================
// Example 5 (onclick + modifying elements/attributes/styles)
//===========================================================

function change_title(){
    document.getElementById("title").innerText = "Work From Home"
    document.getElementById("title").style.background = "aqua"
}
    



//=====================================================
// Pair Programming - Activity 1
//    exercise1.html
//=====================================================
        


//=====================================================
// Example 6 (add new elements)
//=====================================================
function add_pet(){
    let new_pet = "Monkey"


    // 1) Create <p> ... </p> element object
    let para = document.createElement("p")

    // 2) Create text node that will contain monkey

    let node = document.createTextNode(new_pet)
    // 3) append textnode to <p> ... </p> 

    para.appendChild(node)
    
    // 4) Append <p> monkey </p> to parent <div>
    let pet_box = document.getElementById("pet-box")
    pet_box.appendChild(pet_box) 
}

function add_pet_top(){
    new_pet = prompt("Add in new pet") 


    // 1) Create <p> ... </p> element object
    let para = document.createElement("p")

    // 2) Create text node that will contain monkey

    let node = document.createTextNode(new_pet)
    // 3) append textnode to <p> ... </p> 

    para.appendChild(node)
    // 4) Append <p> monkey </p> to parent <div>
    let pet_box = document.getElementById("pet-box");
    pet_box.insertBefore(para, pet_box.firstChild)
}

//=====================================================
// Example 7 (remove elements)
//=====================================================      
function remove_pet(){
    //remove_pet_id = prompt("Which pet died?")
    let remove_pet_id = prompt("which pet-id did you remove ")
    let pet_box = document.getElementById("pet-box")

    pet_box.children[remove_pet_id].remove()

}


//=====================================================
// Pair Programming - Activity 2
//    exercise2.html
//=====================================================



//=====================================================
// Example 8 (events) - Method 1
//=====================================================
        


//=====================================================
// Example 8 (events) - Method 2 - use event listeners
//=====================================================
        

