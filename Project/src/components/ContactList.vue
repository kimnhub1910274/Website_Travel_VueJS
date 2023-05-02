<script>
    export default {
        props:{
            contacts: { type: Array, default: []},
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
                v-for="(contact, index) in contacts"
                :key ="contact._id"
                :class="{active: index === activeIndex}"
                @click="updateActiveIndex(index)"
             >
                <p><b class="name">{{ contact.name }}</b></p>
                <img src="../assets/images/cantho.jpg"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid">
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