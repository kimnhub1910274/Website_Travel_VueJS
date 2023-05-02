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
<style>
.town{
    margin-left: 100px;
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
                        <th>Hình ảnh 1</th>
                        <th>Mô tả 1</th>
                        <th>Hình ảnh 2</th>
                        <th>Mô tả 3</th>
                        <th>Mô tả 3</th>
                        <th>Hình ảnh 4</th>
                        <th>Mô tả 4</th>
                    </tr>
                </thead>
                <tbody  class=""
                v-for="(contact, index) in contacts"
                        :key ="contact._id"
                        :class="{active: index === activeIndex}"
                        @click="updateActiveIndex(index)">
                    <tr>
                        <th>{{ index+1 }}</th>
                        <td>{{ contact.name }}</td>
                        <td>
                            <img :src="'http://localhost:3001/assets/images' + contact.img1">
                        </td>
                        <td>{{ contact.description1 }}</td>
                        <td>
                            <img :src="contact.img2">
                        </td>
                        <td>{{ contact.description2 }}</td>
                        <td>
                            <img :src="contact.img3">
                        </td>
                        <td>{{ contact.description3 }}</td>
                        <td>
                            <img :src="contact.img4">
                        </td>
                        <td>{{ contact.description4 }}</td>
                    </tr>
                </tbody>
            </table>
    </div>
            
</template>
