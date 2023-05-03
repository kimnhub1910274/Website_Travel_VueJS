<template>
    <div class="page">
        <h3 class="text-center"><b>ĐĂNG NHẬP</b></h3>
        <FormLogin
            :contact="contact"
            @submit:contact="login" 
        />
       
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import FormLogin from "@/components/FormLogin.vue";
    import ContactService from "@/services/contact.service";
    export default {
        components: {
            FormLogin
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                contact: {},
                route: this.$route.query.page,
                name:'',
                message: "",
            };
        },
        methods: {
            
            async login(data) {
                try {
                    var login = await ContactService.login(data);
                    this.message = "Đăng nhập thành công.";
                    console.log(login);
                    if(login.errCode == 0){
                        localStorage.setItem('contact', JSON.stringify(login.contact));
                        console.log(login.message);
                        this.contact = {};
                       
                    }else{
                        console.log(login.message);
                    }
                } catch (error) {
                    console.log("ERROR",error)
                }
            },
            getName (){
            
                const contact = JSON.parse(localStorage.getItem('contact'));
                if(contact){
                    this.name = contact.name;
                }
                console.log(this.name);
            },
            logout(){
                localStorage.removeItem('contact');
                this.$router.go(0);
            }
                
            },
        
    };
</script>
