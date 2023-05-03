<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <List
                v-if="filteredTownsCount > 0"
                :towns="filteredTowns"
                v-model:activeIndex="activeIndex"
            />
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeTown">
               
                <TownCard :town="activeTown" />
                <router-link
                    :to="{
                        name: 'town.edit',
                        params: { id: activeTown._id },
                    }"
                >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import TownCard from "@/components/TownCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import List from "@/components/List.vue";
    import TownService from "../services/town.service";

    export default {
        components: {
            TownCard,
            InputSearch,
            List,
        },
        data() {
            return {
                towns: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
            // Chuyển các đối tượng town thành chuỗi để tiện cho tìm kiếm.
            townStrings() {
                return this.towns.map((town) => {
                    const { name } = town;
                    return [name].join("");
                });
            },
            // Trả về các town có chứa thông tin cần tìm kiếm.
            filteredTowns() {
                if (!this.searchText) return this.towns;
                return this.towns.filter((_town, index) =>
                this.townStrings[index].includes(this.searchText)
                );
            },
            activeTown() {
                if (this.activeIndex < 0) return null;
                    return this.filteredTowns[this.activeIndex];
                },
            filteredTownsCount() {
                return this.filteredTowns.length;
            },
        },
        methods: {
            async retrieveTowns() {
                try {
                    this.towns = await TownService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveTowns();
                this.activeIndex = -1;
            },

            async removeAllTowns() {
                if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                    try {
                        await TownService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            async goToAddTown() {
                this.$router.push({ name: "user.signup" });
            },
        },
        mounted() {
            this.refreshList();
        },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    };
</script>


 <style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }
</style> 