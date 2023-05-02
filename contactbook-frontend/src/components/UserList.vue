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
.user{
    margin-left: 100px;
}
</style>
<template>
    <div class="user">
        <h4><b>DANH SÁCH NGƯỜI DÙNG</b></h4>
        <table class="table">
            <thead class="thead">
                <tr>
                    <th>STT</th>
                    <th>Họ tên</th>
                    <th>Email</th>
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
                        {{ contact.email }}
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
</template>
