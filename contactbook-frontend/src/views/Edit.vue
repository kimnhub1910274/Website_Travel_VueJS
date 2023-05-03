<template>
    <div v-if="town" class="page">
        <h4>Chỉnh sửa</h4>
        <TownForm
            :town="town"
            @submit:town="updateTown"
            @delete:town="deleteTown"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import FormTown from "@/components/FormTown.vue";
    import TownService from "@/services/town.service";
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
                message: "",
            };
        },
        methods: {
            async getTown(id) {
                try {
                    this.town = await TownService.get(id);
                } catch (error) {
                    console.log(error);
                    // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                    this.$router.push({
                        name: "notfound",
                        params: {
                            pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
            async updateTown(data) {
                try {
                    await TownService.update(this.town._id, data);

                    this.message = "Liên hệ được cập nhật thành công.";
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteTown() {
                if (confirm("Bạn muốn xóa Liên hệ này?")) {
                    try {
                        await TownService.delete(this.town._id);
                        this.$router.push({ name: "town" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
            this.getTown(this.id);
            this.message = "";
        },
    };
</script>