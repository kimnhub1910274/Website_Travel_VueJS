<style>
.col-md-7{

}
   
</style>
<template>
    <div class=" row">
        <div class=" mt-3 col-md-3 " >
            <InputSearch v-model="searchText" />
        </div>  
        <div class="mt-3 col-md-11">
            <div class="mt-3 col-md-7 row  align-items-center">
                <button class="btn btn-sm btn-success" @click="goToAddTown">
                   <b>THÊM</b>
                </button>
            </div>
            <TownList
                v-if="filteredTownsCount > 0"
                :towns="filteredTowns"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có liên hệ nào.</p>
            
        </div>
        <div class="col">
            <div v-if="activeTown">
                <TownCard :town="activeTown" />
                <router-link
                    :to="{
                        name: 'town.edit',
                        params: { id: activeTown._id },
                    }"
                >
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i>&nbsp;<b>CHỈNH SỬA</b></span
                    >
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
    import TownCard from "@/components/TownCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import TownList from "@/components/TownList.vue";
    import TownService from "@/services/town.services";

    export default {
        components: {
            TownCard,
            InputSearch,
            TownList,
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
                    var data = await TownService.getAll();
                    if(data.errCode == 0){
                        this.towns = data.towns;
                    }
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
                this.$router.push({ name: "town.create" });
            },
        },
        mounted() {
            this.refreshList();
        },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    };
</script>

