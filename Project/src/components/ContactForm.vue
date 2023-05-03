<template>
    <div class="container">
        <Form
        @submit="submitContact"
        :validation-schema="contactFormSchema">
        <div class="form-group">
            <label for="name"><b>Họ tên</b></label>
            <Field
                placeholder="Nhập họ tên"
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"/>
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email"><b>E-mail</b></label>
                <Field
                    placeholder="Nhập email"
                    name="email"
                    type="email"
                    class="form-control"
                    v-model="contactLocal.email"/>
                <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password"><b>Mật khẩu</b></label>
                <Field
                    placeholder="Nhập mật khẩu"               
                    name="password"
                    type="password"
                    class="form-control"
                    v-model="contactLocal.password"/>
                <ErrorMessage name="password" class="error-feedback" />
        </div>
        
        <div class="form-group bt">
            <button type="submit" class="bt modal-login">Đăng ký</button>
                <router-link class="text-decoration-none white" :to="{name:'home'}">
                    <button  class="bt btn btn-danger">Thoát</button>
                </router-link> 
        </div>
    </Form>
    </div>
</template>
<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    export default {
        components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Bắt buộc")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .required("Bắt buộc")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
                password: yup.string()
                .required('Bắt buộc') 
                .min(6, 'Mật khẩu quá ngắn')
            
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            contactLocal: this.contact ? this.contact : '',
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
       

       
    },
};
</script>
    <style scoped>
    @import "@/assets/form.css";
    Form {
    border: solid;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    }
    .bt{
        width: 100%;
        font-size: 18px;
    }
</style>