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
<style>
.town{
    margin-left: 100px;
}
img{
    width: 150px;
    height: 100px;
}
</style>
<template>
    <div class="town">
         <h4><b>DANH SÁCH TỈNH THÀNH</b></h4>
        <table class="table">
                <thead class="thead">
                    <tr>
                        <th>STT</th>
                        <th>Tên tỉnh</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                       
                    </tr>
                </thead>
                <tbody  class=""
                v-for="(town, index) in towns"
                        :key ="town._id"
                        :class="{active: index === activeIndex}"
                        @click="updateActiveIndex(index)">
                    <tr>
                        <th>{{ index+1 }}</th>
                        <td>{{ town.name }}</td>
                        <td>
                            <img :src="'http://localhost:3000/assets/images/' + town.photo">
                        </td>
                        <td>{{ town.description }}</td>
                       
                    </tr>
                </tbody>
            </table>
    </div>
            
</template>
