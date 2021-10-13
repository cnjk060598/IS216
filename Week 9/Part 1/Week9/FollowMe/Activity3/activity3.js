var app = Vue.createApp({
            
    data() {
        return  {

            // DO NOT REMOVE THIS, DO NOT MODIFY THIS MANUALLY IN THIS FILE
            // YOU MUST USE THIS FOR YOUR SOLUTION
            gender_list: { 
                "Boy" : 'boy',
                "Girl" : 'girl'
            },

            // DO NOT REMOVE THIS, DO NOT MODIFY THIS MANUALLY IN THIS FILE
            // YOU MUST USE THIS FOR YOUR SOLUTION
            module_list: [
                'BPAS',
                'IDP',
                'WAD2',
                'CT'
            ],

            // DO NOT REMOVE THIS, DO NOT MODIFY THIS MANUALLY IN THIS FILE
            // YOU MUST USE THIS FOR YOUR SOLUTION
            emotion_list: [
                'Sad',
                'Devastated',
                'Hopeless',
                'Suffocated',
                'Numb',
                'Crushed'
            ],

            // DO NOT REMOVE THIS, DO NOT MODIFY THIS MANUALLY IN THIS FILE
            // YOU MUST USE THIS FOR YOUR SOLUTION
            country_list: [
                'Afghanistan',
                'Colombia',
                'Iraq',
                'Libya',
                'Mexico',
                'North Korea',
                'Syria',
                'Yemen'
            ]


            // YOU CAN ADD MORE DATA PROPERTIES
            // BELOW
            // AS MANY AS YOU NEED


        }
    },

    methods: {
                
        // YOU CAN ADD MORE METHODS HERE
        // AS MANY AS YOU NEED

    }

})

app.mount("#app")