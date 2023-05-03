<script>
    export default {
        props:{
            towns: { type: Array, default: []},
            activeIndex: { type: Number, default: -1},
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index){
                this.$emit('update:activeIndex', index);
            }
        }
    };
</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-4"
                v-for="(town, index) in towns"
                :key ="town._id"
                :class="{active: index === activeIndex}"
                @click="updateActiveIndex(index)"
             >
                <p><b class="name">{{ town.name }}</b></p>
                <img :src="'http://localhost:3000/assets/images/' + town.photo" onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid">
            </div>

        </div>
    </div>
    
</template>
<style>
.row{
    color: black;
    width: 100%;
}
</style>