<template>
    <Form
        @submit="submitTown"
        :validation-schema="townFormSchema"
        class="row"
    >
        <div class="mb-3 col-12">
            <label class="form-label" for="name">Tên:</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="townLocal.name"
            />
            <ErrorMessage name="name" class="text-danger mt-1" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="photo">Hình ảnh:</label>
            <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="photo">
            <div class="border p-2 mt-3">
                <div v-if="preview">
                    <p class="mb-0">file name: {{ townLocal.photo.name }}</p>
                    <img :src="preview" class="img-fluid"/>
                </div>
                <div v-else-if="townLocal.photo">
                    <p class="mb-0">File name: {{ townLocal.photo }}</p>
                    <img :src="'http://localhost:3000/assets/images/'+townLocal.photo" class="img-fluid"/>
                </div>
            </div>

            <ErrorMessage name="photo" class="text-danger" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="description">Mô tả:</label>
            <Field
                name="description"
                as="textarea"
                class="form-control"
                v-model="townLocal.description"
            />
            <ErrorMessage name="description" class="text-danger mt-1" />
        </div>
      
         <div class="col-12 mb-3 form-group">
            <label class="form-label" for="content">Địa điểm:</label>
            <div
                v-for="(input,k) in inputs" 
                :key="k"
                class="row mb-2"
            >
                <div class="col-8">
                    <input name="nameContent"
                        type="text"
                        class="form-control mb-3"
                        v-model="input.nameContent" />
                    <input
                        name="content"
                        type="file"
                        class="form-control-file"
                        accept="pdf/*"
                        @change="onFileChange($event,input)"
                    />
                    
                    <div class="border p-2 mt-3">
                        <p>Xem trước:</p>
                        
                        <div v-if="input.embedSrc">
                            <p >{{ input.content.name }}</p>
                            <embed
                                type="video/webm"
                                :src="input.embedSrc"
                                width="100%"
                                style="max-height: 50rem; min-height: 20rem"
                            />
                        </div>
                        <div v-else>
                            <p>{{ input.content }}</p>
                            <embed
                                v-if="input.content"
                                type="video/webm"
                                :src="'http://localhost:3000/assets/images/'+input.content"
                                width="100%"
                                style="max-height: 70rem; min-height: 20rem"
                            />
                        </div>
                    </div>
                </div>
                <span>
                    <i class="fas fa-minus-circle" @click="remove(k,input._id)" v-show="k || ( !k && inputs.length > 1)" style="font-size: 20px;cursor: pointer;padding-right: 5px;"></i>
                    <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1" style="font-size: 20px;cursor: pointer;padding-right: 5px;"></i>
                </span>
                
            </div>
        </div>
        <div class="mb-3 col-12">
            <button class="btn btn-success"><b>THÊM</b></button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import townService from "@/services/town.services";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        name: "",
        emits: ["submit:town"],
        props: {
            town: { type: Object, required: true },
            content: { type: Array,required:true, default:[{
                nameContent:'',
                content:''
            }] },
        },
        data() {
            const townFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Bắt buộc"),
               
                description: yup
                    .string()
                    .required("Bắt buộc"),
                
               
                
            });
            return {
                    townLocal: this.town,
                    inputs: [...this.content],
                    townFormSchema,
                    preview: null,
                                        
            };
        },
       
        methods: {
            onFileChange($event,input) {
                const file = $event.target.files[0];    
                if(file){
                    input.content = file;
                    input.embedSrc = URL.createObjectURL($event.target.files[0]);
                }
            },
            previewImage($event) {
                var input = $event.target;
                if (input.files) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.preview = e.target.result;
                    }
                    
                    this.townLocal={
                        photo:input.files[0]
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            },
            submitTown() {
                console.log(this.townLocal, this.inputs)
                 this.$emit("submit:town", this.townLocal,this.inputs);

            },        
            add(index) {
                this.inputs.push({
                            nameContent:'',
                            content: '',
                            embedSrc:''
                        });
                
            },
            async remove(index,id) {
                if(id){
                    if (confirm("Are you sure remove chapter ?")) {
                        try {
                            // console.log(id)
                            var remove = await townService.deleteContent(id);
                            console.log(remove);
                            if(remove && remove.errCode==0){
                                toast.success(remove.message);
                            }else{
                                toast.error(remove.message);
                            }
                        } catch (error) {
                            toast.error(error);
                        }
                    }
                    this.inputs.splice(index, 1);
                }else{
                    this.inputs.splice(index, 1);
                }
            }
        },
      
    };
</script>