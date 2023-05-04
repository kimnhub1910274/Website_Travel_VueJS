<script>
    import townService from '../services/town.service';
    import VueEmbed from 'vue-pdf-embed';
    export default {
        components:{
            VueEmbed,
        },
        props:{
            id: { type: String, required: true },
            town:{type: Object, required:true},
            content: { type: Array,required:true, default:[{
                nameContent:'',
                content:''
            }] },
        },
        data() {
             return {
                content: [],
                town: [],
            };
        },
        methods:{
            async getContent() {
            try {
                var town = await townService.getContent(this.id);
                console.log(town);
                this.content = town.contents;
                console.log('id: ' + this.id);
                
            } catch (error) {
               console.log(error);
            }
        },
        },
        created() {
        this.getContent();
    },

    };
</script>

<template>
    <div class="container">
       <div v-for="town in content " :key="town._id">
        <div  class="p-1">
           <h4><b> {{ town.nameContent }}</b></h4>
        </div>
        <div class="img">
            <img :src="'http://localhost:3000/assets/images/'+ town.content" style="width: 700px;
                margin-left: 150px;" />
            <p class="p">{{ town.description }}</p>
        </div>
       </div>
    
    </div>
</template>
<style>

h4{
    margin-top: 20px ;
}
.p{
    margin: 20px;
    text-align: justify;
    margin-left: 30px;
    color: black;
}
</style>