
<template>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <div class="container-fluid">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary"><b>CHỈNH SỬA</b></h6>
                    </div>
                <div class="card-body">
                     <FormTown
                        :town="town"
                        :content="content"
                        @submit:town="updateTown"
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
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            town: null,
            content: null,
        };
    },
    methods: {
        async getTown(id) {
            try {
                var town = await townService.get(id);
                this.town = town;
                
            } catch (error) {
                console.log(error);

            }
        },
        async getContent(id) {
            try {
                var content = await townService.getContent(id);
                this.content = content.contents;
                console.log(this.content);
            } catch (error) {
                console.log(error);

            }
        },
        async updateTown(data,input) {
            try {
                var formDataTown = new FormData();
                formDataTown.append('name',data.name);
                formDataTown.append('photo',data.photo);
                formDataTown.append('description',data.description);

                var update = await townService.update(this.town._id, formDataTown);
                console.log(update);
                if(update && update.errCode == 0){
                    var formData = new FormData();
                    formData.append('name',data.name);
                    for(var i=0;i<input.length;i++){
                        formData.append('nameContent',input[i].nameContent);
                        formData.append('content',input[i].content);
                    }
                    var contentUpdate = await townService.updateContent(this.town._id,formData);
                    if(contentUpdate && contentUpdate.errCode == 0){
                        toast.success(contentUpdate.message);
                        this.$router.push({ name: "list-town" });
                    }else{
                       console.log(contentUpdate.message);
                    }
                    
                }else{
                    console.log(update.message);
                }
                
            } catch (error) {
                console.log(error);
            }
        },
        
        // async deleteContact() {
        //     if (confirm("Bạn muốn xóa Liên hệ này?")) {
        //         try {
        //             await comicService.delete(this.comic._id);
        //             this.$router.push({ name: "contactbook" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getTown(this.id);
        this.getContent(this.id);
    },
};
</script>
