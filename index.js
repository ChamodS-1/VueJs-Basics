
    let app=Vue.createApp({

        data: function(){
            return{
                greeting: null,
                greeting1: null,
                isShow:true,
                para:null,
                answer:null
            }
        },
        methods:{

            clickOne(){
                this.answer=+this.greeting + +this.greeting1
                
            },
            enter(){
                this.para=this.greeting
            },
            input(){
                this.answer=+this.greeting + +this.greeting1
                
            },
        }
    })

app.mount('#app')
