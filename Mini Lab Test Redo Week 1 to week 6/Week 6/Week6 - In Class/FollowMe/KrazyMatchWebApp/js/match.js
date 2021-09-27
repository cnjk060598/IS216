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
    let user_gender = "DUMMY DATA"
    console.log("User gender: " + user_gender)


    /*
        2) Determine the gender of Today's Pick
                
        If the current user's gender is 'Female'
           Today's Pick User's gender will be 'm' (male)
        Else (if the current user's gender is 'Male')
            Today's Pick User's gender will be 'f' (female)
    */
    let today_pick_gender = 'DUMMY DATA'


    
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


    // 2) Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // a) Inspect the response.data
        console.log(response.data)

        // b) Populate today-pick-box with new info
        // Feel FREE to create another function to do this work!
        // You don't have to stuff ALL logics here in this function :D
    })
    .catch(error => {
        console.log(error.message)
    })


    console.log("**** [END] call_krazymatch_api() *****")
}



//=======================================================================================
// This function re-populates <div id="today-pick-box">
//
// The information comes from Axios response.data
//=======================================================================================
function populate_today_pick_box(data) {

    console.log("**** [START] populate_today_pick_box() *****")


    // What to do here?
    // What down pseudocode (steps) before you code
    

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
    
    console.log("**** [END] process_not_my_type() *****")
}



//=======================================================================================
// Yes! The user wants to proceed with Today's Pick :D
//
// As a result, a new Today's Pick is displayed
//=======================================================================================
function process_totally_my_type() {

    console.log("**** [START] process_totally_my_type() *****")


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

    
    // What to do here?
    // What down pseudocode (steps) before you code
    
    
    console.log("**** [END] call_weather_api() *****")
}