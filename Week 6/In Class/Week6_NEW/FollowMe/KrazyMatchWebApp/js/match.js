//=======================================================================================
// This function will be invoked when match.html loads
//    Check <body> tag in match.html
//
// It retrieves the currently logged in user's gender
// AND determine's Today's Pick (date) user's gender
//
// Lastly, it calls KrazyMatch API to get Today's Pick user profile.
//=======================================================================================
function display_default() {

    console.log("**** [START] display_default() *****")


    // 1) Get current user's gender
    
    // Getting the gender from the HTML page  
    let user_gender = document.getElementById("user-gender").innerText
    console.log("User gender: " + user_gender)


    /*
        2) Determine the gender of Today's Pick
                
        If the current user's gender is 'Female'
           Today's Pick User's gender will be 'm' (male)
        Else (if the current user's gender is 'Male')
            Today's Pick User's gender will be 'f' (female)
    */
    let today_pick_gender = '' //hard code for testing only 
    if(user_gender == "Female"){
        today_pick_gender = "m"
    } else {
        today_pick_gender = "f"
    }


    
    console.log("Today's Pick gender: " + today_pick_gender)
    

    // 3) Call API and get Today's Pick
    call_krazymatch_api(today_pick_gender);


    console.log("**** [END] display_default() *****")
}



//=======================================================================================
// This function calls KrazyMatch API
// API endpoint
//    http://krazywoman.com/krazymatch/api/profile/random.php?g=m    (or f for female)
//=======================================================================================
function call_krazymatch_api(gender) {

    console.log("**** [START] call_krazymatch_api() *****")


    console.log("Parameter gender: " + gender)  // Expecting 'm' or 'f'


    // 1) Complete the endpoint URL with gender appended as a parameter
    let api_endpoint_url = "http://krazywoman.com/krazymatch/api/profile/random.php?g=" + gender
    console.log(api_endpoint_url)

    // 2) Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // a) Inspect the response.data
        //console.log(response.data.records[0]) // getting the first item in the array
        // look at the JSON Structure 

        // b) Populate today-pick-box with new info
        // Feel FREE to create another function to do this work!
        // You don't have to stuff ALL logics here in this function :D
        // DOM manipulation 

        populate_today_pick_box(response.data.records[0])
    })
    .catch(error => {
        console.log(error.message) // capturing the error if there is a problem
    }) 


    console.log("**** [END] call_krazymatch_api() *****")
}



//=======================================================================================
// This function re-populates <div id="today-pick-box">
//
// The information comes from Axios response.data
//=======================================================================================
function populate_today_pick_box(record) {

    console.log("**** [START] populate_today_pick_box() *****")

    console.log(record)

    // What to do here?
    // What down pseudocode (steps) before you code
    let name = record.name
    let age = record.age
    let gender = record.gender
    let occupation = record.occupation
    let city = record.city
    let photo_url = record.photo_url

    if(gender == "F"){
        gender = "Female"
    } else{
        gender = "Male"
    }
     
    document.getElementById("today-pick-name").innerText = name
    document.getElementById("today-pick-age").innerText = age
    document.getElementById("today-pick-gender").innerText = gender
    document.getElementById("today-pick-occupation").innerText = occupation
    document.getElementById("today-pick-city").innerText = city
    document.getElementById("today-pick-photo").src = photo_url 

    //console.log(photo_url)

    // Method 2 

/*     let new_html_str = 

    ` 
    <div class="col-lg-2" style="text-align: center; padding: 20px;">
        <img id="today-pick-photo" class="rounded" src="${photo_url}" style="width: 100%;">
    </div>

    <div class="col-lg">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <span class="badge rounded-pill bg-primary">Name</span>
                <span id="today-pick-name">${name}</span>
            </li>
            <li class="list-group-item">
                <span class="badge rounded-pill bg-danger">Age</span>
                <span id="today-pick-age">${age}</span>
            </li>
            <li class="list-group-item">
                <span class="badge rounded-pill bg-warning text-dark">Gender</span>
                <span id="today-pick-gender">${gender}</span>
            </li>
            <li class="list-group-item">
                <span class="badge rounded-pill bg-success">Occupation</span>
                <span id="today-pick-occupation">${occupation}</span>
            </li>
            <li class="list-group-item">
                <span class="badge rounded-pill bg-dark">City</span>
                <span id="today-pick-city">${city}</span>
            </li>
        </ul>
    </div>
    
    `

    document.getElementById("today-pick-box").innerText = new_html_str */


    console.log("**** [END] populate_today_pick_box() *****")
}



//=======================================================================================
// This function calls display_default()
//
// As a result, a new Today's Pick is displayed
//=======================================================================================
function process_not_my_type() {

    console.log("**** [START] process_not_my_type() *****")

    // What to do here?
    // What down pseudocode (steps) before you code
    display_default()
    
    console.log("**** [END] process_not_my_type() *****")
}



//=======================================================================================
// Yes! The user wants to proceed with Today's Pick :D
//
// As a result, a new Today's Pick is displayed
//=======================================================================================
function process_totally_my_type() {

    console.log("**** [START] process_totally_my_type() *****")

    call_quotes_api()
    call_weather_api()
    // What to do here?
    // What down pseudocode (steps) before you code
    
    
    console.log("**** [END] process_totally_my_type() *****")
}



//=======================================================================================
// ===== Activity 1 =====
// This function calls GoQuotes API
// API endpoint
//    https://goquotes-api.herokuapp.com/api/v1/random?count=1
//=======================================================================================
function call_quotes_api() {

    console.log("**** [START] call_quotes_api() *****")


    // What to do here?
    // What down pseudocode (steps) before you code
    // Call GoQuotesAPI 

    // Call the above API end point
        // If you successfull get a response, retrieve the text and the auto 
            // use DOM manipulation to update the quote info 
        // Else console.log the error message 

    let api_endpoint_url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    console.log(api_endpoint_url)

    // 2) Use Axios to call API asynchronously
     axios.get(api_endpoint_url)
    .then(response => {

        // a) Inspect the response.data
        //console.log(response.data.records[0]) // getting the first item in the array
        // look at the JSON Structure 

        // b) Populate today-pick-box with new info
        // Feel FREE to create another function to do this work!
        // You don't have to stuff ALL logics here in this function :D
        // DOM manipulation 

/*         let text = (response.data.quotes[0].text)
        let author = (response.data.quotes[0].author)   
        console.log(text) */
        
        var quote_info = response.data.quotes[0]
        var text = quote_info.text
        var author = quote_info.author

        document.getElementById("random-quote-box").style = "inline"
        document.getElementById("today-pick-decision-box").style = "display: none;"
        document.getElementById("random-quote-text").innerText = text
        document.getElementById("random-quote-author").innerText = author


    })
    .catch(error => {
        console.log(error.message) // capturing the error if there is a problem
    }) 

        
    
    console.log("**** [END] call_quotes_api() *****")
}




//=======================================================================================
// ===== Activity 2 =====
// This function calls OpenWeatherMap API
// API endpoint
//    http://api.openweathermap.org/data/2.5/weather?q=cityname&appid=appid
//=======================================================================================
function call_weather_api() {

    console.log("**** [START] call_weather_api() *****")
    document.getElementById("weather-box").style = ""

    my_city = document.getElementById("user-city").innerText
    date_city = document.getElementById("today-pick-city").innerText

    console.log(my_city)
    console.log(date_city)

    let api_endpoint_url_my = "https://api.openweathermap.org/data/2.5/weather?q="+ my_city +"&appid=ea60d443c67fe9d5cee23eb79709f31b"
    let api_endpoint_url_date = "https://api.openweathermap.org/data/2.5/weather?q="+ date_city +"&appid=ea60d443c67fe9d5cee23eb79709f31b"
    let testing = "https://api.openweathermap.org/data/2.5/onecall?lat=1.321&lon=103.8198&exclude=hourly,daily&appid=ea60d443c67fe9d5cee23eb79709f31b"
    console.log(api_endpoint_url_my)

    axios.get(api_endpoint_url_my)
    .then(response => {

        // a) Inspect the response.data
        //console.log(response.data.records[0]) // getting the first item in the array
        // look at the JSON Structure 

        // b) Populate today-pick-box with new info
        // Feel FREE to create another function to do this work!
        // You don't have to stuff ALL logics here in this function :D
        // DOM manipulation 
        let temp = (response.data.main.temp)
        let humidity = response.data.main.humidity
        //populate_today_pick_box(response.data.records[0])
        document.getElementById("user-city-temperature").innerText = temp
        document.getElementById(" user-city-humidity").innerText = humidity
       

    })
    .catch(error => {
        console.log(error.message) // capturing the error if there is a problem
    }) 

    // Date's weather 

    axios.get(api_endpoint_url_date)
    .then(response => {

        // a) Inspect the response.data
        //console.log(response.data.records[0]) // getting the first item in the array
        // look at the JSON Structure 

        // b) Populate today-pick-box with new info
        // Feel FREE to create another function to do this work!
        // You don't have to stuff ALL logics here in this function :D
        // DOM manipulation 
        let temp = (response.data.main.temp)
        let humidity = response.data.main.humidity
        //populate_today_pick_box(response.data.records[0])
        document.getElementById("today-pick-city-temperature").innerText = temp
        document.getElementById("today-pick-city-humidity").innerText = humidity
       

    })
    .catch(error => {
        console.log(error.message) // capturing the error if there is a problem
    }) 


    
    console.log("**** [END] call_weather_api() *****")
}