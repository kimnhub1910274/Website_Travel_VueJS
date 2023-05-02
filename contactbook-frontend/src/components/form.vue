<template>
    <Form
        @submit="submitContact"
        :validation-schema="contactFormSchema"
    >
        <div class="form-group">
            <label for="name"><b>Tên tỉnh</b></label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"

            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="row">
            <div class="form-group col-8">
            <label for="img1"><b>Hình ảnh 1</b></label>
                <Field
                    name="img1"
                    type="file"
                    class="form-control"
                    v-model="contactLocal.img1"
                    ref="file"
                    @change="selectImage"
                />
                <ErrorMessage name="img1" class="error-feedback" />
            </div>
            <div v-if="currentImage" class="progress">
                <div
                    class="progress-bar progress-bar-info"
                    role="progressbar"
                    :aria-valuenow="progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="{ width: progress + '%' }"
                >
                    {{ progress }}%
                </div>
            </div>

            <div v-if="previewImage">
                <div>
                    <img class="preview my-3" :src="previewImage" alt="" />
                </div>
            </div>

            <div v-if="message" class="alert alert-secondary" role="alert">
                {{ message }}
            </div>
            
            </div>
        
        <div class="form-group">
            <label for="description1"><b>Mô tả 1</b></label>
                <Field
                    name="description1"
                    type="text"
                    class="form-control"
                    v-model="contactLocal.description1"
                />
                <ErrorMessage name="description1" class="error-feedback" />
        </div>
        <div class="row">
            <div class="form-group col-8">
            <label for="img1"><b>Hình ảnh 2</b></label>
                <Field
                    name="img2"
                    type="file"
                    class="form-control"
                    v-model="contactLocal.img2"
                    ref="file"
                    @change="selectImage"
                />
                <ErrorMessage name="img2" class="error-feedback" />
            </div>
            
        </div>
        <div class="form-group">
            <label for="description2"><b>Mô tả 2</b></label>
                <Field
                    name="description2"
                    type="text"
                    class="form-control"
                    v-model="contactLocal.description2"
                />
                <ErrorMessage name="description2" class="error-feedback" />
        </div>
        <div v-if="currentImage" class="progress">
            <div
                class="progress-bar progress-bar-info"
                role="progressbar"
                :aria-valuenow="progress"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: progress + '%' }"
            >
                {{ progress }}%
            </div>
        </div>

        <div v-if="previewImage">
            <div>
                <img class="preview my-3" :src="previewImage" alt="" />
            </div>
        </div>

        <div v-if="message" class="alert alert-secondary" role="alert">
            {{ message }}
        </div>

        
        
        <div class="form-group">
            <button type="submit" class="btn btn-primary"><b>THÊM</b></button>
            <button
                v-if="contactLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteContact"
            >
            Xóa
            </button>
        </div>
    </Form>
</template>
<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import TownService from "../services/test.service";

    export default {
        components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Bắt buộc")
                ,
            description1: yup
                .string()
                .required("Bắt buộc"),
            description2: yup
                .string()
                .required("Bắt buộc"),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            currentImage: undefined,
            previewImage: undefined,

            progress: 0,
            message: "",

            imageInfos: [],
            contactLocal: this.contact ? this.contact : '',
            contactFormSchema,
           
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
        selectImage() {
        this.currentImage = this.$refs.file.files.item(0);
        this.previewImage = URL.createObjectURL(this.currentImage);
        this.progress = 0;
        this.message = "";
        },
        upload() {
        this.progress = 0;

        UploadService.upload(this.currentImage, (event) => {
            this.progress = Math.round((100 * event.loaded) / event.total);
        })
            .then((response) => {
            this.message = response.data.message;
            return UploadService.getFiles();
            })
            .then((images) => {
            this.imageInfos = images.data;
            })
            .catch((err) => {
            this.progress = 0;
            this.message = "Could not upload the image! " + err;
            this.currentImage = undefined;
            });
        },
        mounted() {
        UploadService.getFiles().then(response => {
        this.imageInfos= response.data;
        });
  }

       
    },
};
</script>
    <style scoped>
    @import "@/assets/form.css";
</style>