// Create a new Vue instance
const root = Vue.createApp({

    // Data Properties
    data() {
        return {

            something: '',

            // Suppose this is a very large array
            fruits: [
                'apple',
                'orange',
                'pear',
                'watermelon'
            ]

        }
    },

    methods: {

        say_hello() {
            console.log("=== [START] say_hello() ===")
            console.log("=== [END] say_hello() ===")
            return Date.now()
        },

        make_fruit_string() {
            console.log("=== [START] make_fruit_string() ===")
            let str = ""

            for(let i = 1; i <= this.fruits.length; i++) {
                if( (i % 2) === 0 ) {
                    // even number
                    str += this.fruits[i-1].toUpperCase() + ", "
                }
                else {
                    str += this.fruits[i-1].toLowerCase() + ", "
                }
            }
            console.log("=== [END] make_fruit_string() ===")

            return str.slice(0, -2)
        }

    },

    computed: {

        say_bye() {
            console.log("=== [START] say_bye() ===")
            console.log("=== [END] say_bye() ===")
            return Date.now()
        },

        make_fruit_string_again() {
            console.log("=== [START] make_fruit_string_again() ===")
            let str = ""

            for(let i = 1; i <= this.fruits.length; i++) {
                if( (i % 2) === 0 ) {
                    // even number
                    str += this.fruits[i-1].toUpperCase() + ", "
                }
                else {
                    str += this.fruits[i-1].toLowerCase() + ", "
                }
            }
            console.log("=== [END] make_fruit_string_again() ===")

            return str.slice(0, -2)
        }
    }

})
root.mount("#root")
