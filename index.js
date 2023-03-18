
    let app=Vue.createApp({

        data: function(){
            return{
                greeting: 'Hello js!!',
                isShow:true,
                para:null
            }
        },
        methods:{

            clickOne(){

                this.isShow=!this.isShow
            },
            enter(){
                this.para=this.greeting
            }
        }
    })

app.mount('#app')
