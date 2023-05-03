<template>
  <div class="">
      <Form 
        @submit="submitUser"
        :validation-schema="userFormSchema"
      >
        <div class="container">
          <label for="email"><b>Email</b></label>
          <Field 
            class="form-control"
            type="email" 
            placeholder="Nhập email" 
            name="email" 
            v-model="userLocal.email"
            required/>
            <ErrorMessage name="email" class="text-danger mx-2 my-1 " />
          <br>
          <label for="password"><b>Mật khẩu</b></label>
          <Field 
            class="form-control"
            type="password" 
            placeholder="Nhập mật khẩu" 
            name="password" 
            v-model="userLocal.password"
            required/>
            <ErrorMessage name="password" class="text-danger mx-2 my-1" />
            <div class="form-group bt">
            <button type="submit" class="bt modal-login">Đăng nhập</button>
                <router-link class="text-decoration-none white" :to="{name:'home'}">
                    <button  class="bt btn btn-danger">Thoát</button>
                </router-link> 
        </div>
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
        contact: { type: Object, required: true },
        },
        data() {
            const userFormSchema = yup.object().shape({
                
                email: yup
                    .string()
                    .required("Bắt buộc")
                    .email("Email không rỗng"),
                password: yup
                    .string()
                    .required("Bắt buộc")
                    .min(6, "Tối thiểu 6 ký tự")                    
               
            });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // user để liên kết với các input trên form
            userLocal: this.contact ? this.contact : '',
            userFormSchema,
            };
        },
        methods: {
            submitUser() {
                console.log(this.userLocal);
                this.$emit("submit:contact", this.userLocal);
            },
        },
    };
</script>
<style>
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