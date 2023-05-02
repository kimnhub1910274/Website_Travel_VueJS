<template>
    <div class="page">
        <Header
            :user="user"
            @submit:user="login"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import ContactService from "@/services/contact.service";
    import Header from "@/components/Header.vue";
    export default {
        components: {
            Header,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                user: {},
                message: "",
            };
        },
        methods: {
            async login(data) {
                try {
                    await ContactService.login(data);
                    this.message = "Đăng nhập thành công.";
                } catch (error) {
                    console.log(error);
                }
            },
            
        },
        
    };
</script>
