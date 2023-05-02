<template>
    <div class="page">
        <h4>THÊM TỈNH THÀNH</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="addContact"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import ContactForm from "@/components/ContactForm.vue";
    import TownService from "@/services/test.service";
    export default {
        components: {
            ContactForm
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                contact: {},
                message: "",
            };
        },
        methods: {
            async addContact(data) {
                try {
                    await TownService.create(data);
                    this.message = "Thêm tỉnh thành công.";
                } catch (error) {
                    console.log(error);
                }
            },
            
        },
        
    };
</script>
<style>
.page{
    width: 50%;
    margin-top: 50px;
}
</style>