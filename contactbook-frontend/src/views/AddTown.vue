<template>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <div class="container-fluid">
                <!-- Add -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">THÊM TỈNH THÀNH</h6>
                    </div>
                    <div class="card-body">
                        <FormTown
                            :town="town"
                            @submit:town="addTown"
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import FormTown from '../components/FormTown.vue';
import townService from "@/services/town.services";
export default {
    components: {
        FormTown
    },
    data() {
        return {
            town: {},
        };
    },
    methods: {
        async addTown(data,input) {
            try {
              
                var formDataTown = new FormData();
                formDataTown.append('name',data.name);
                formDataTown.append('photo',data.photo);
                formDataTown.append('description',data.description);
                var town = await townService.create(formDataTown);
                if(town && town.errCode ==0){
                   var formData = new FormData();
                   formData.append('name',data.name);
                   for(var i=0;i<input.length;i++){
                    formData.append('nameContent',input[i].nameContent);
                    formData.append('content',input[i].content);
                   }
                    var content = await townService.createContent(formData);
                    if(content && content.errCode == 0){
                        console.log(content.message);
                    }else{
                        console.log(content.message);
                    }
                    
                }else{
                    console.log(town.message);
                }

            } catch (error) {
                console.log(error);
            }
        },
        
    },
};
</script>